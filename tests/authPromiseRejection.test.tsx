// @vitest-environment jsdom

/**
 * Regression tests for unhandled Promise rejections in auth paths.
 *
 * Each component calls supabaseClient.auth.getSession() (or a service
 * equivalent) in a useEffect and previously had no .catch() handler.
 * These tests verify that when the call rejects, console.error is invoked
 * and the component does NOT produce an unhandled rejection.
 */

import React from 'react';
import { act } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot, type Root } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import theme from '../src/theme';

// ─── Shared mock: supabase client ─────────────────────────────────────────────
const getSessionMock = vi.fn();
const onAuthStateChangeMock = vi.fn(() => ({
  data: { subscription: { unsubscribe: vi.fn() } },
}));

vi.mock('../src/resources/config/config', () => ({
  default: {
    SUPABASE_URL: 'https://test.supabase.co',
    SUPABASE_ANON_KEY: 'test-anon-key',
    redirect_url: 'http://localhost:5173/auth/callback',
    supabaseClient: {
      auth: {
        getSession: () => getSessionMock(),
        onAuthStateChange: () => onAuthStateChangeMock(),
      },
      from: () => ({
        select: () => ({
          eq: () => ({ maybeSingle: () => Promise.resolve({ data: null, error: null }) }),
        }),
      }),
    },
  },
}));

vi.mock('../src/components/images/Hushhogo.png', () => ({ default: 'logo.png' }));
vi.mock('../src/components/hushh-tech-header/HushhTechHeader', () => ({
  default: () => React.createElement('div', null, 'header'),
}));
vi.mock('../src/components/hushh-tech-footer/HushhTechFooter', () => ({
  default: () => React.createElement('div', null, 'footer'),
}));

// ─── Helper ───────────────────────────────────────────────────────────────────
const wrap = (component: React.ReactElement) =>
  React.createElement(
    ChakraProvider,
    { theme },
    React.createElement(MemoryRouter, null, component)
  );

const flush = async () => {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
};

// ─── Tests ────────────────────────────────────────────────────────────────────
describe('auth path promise rejection handling', () => {
  let container: HTMLDivElement;
  let root: Root;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let consoleErrorSpy: any;

  beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(async () => {
    await act(async () => { root.unmount(); });
    container.remove();
    consoleErrorSpy.mockRestore();
  });

  describe('Hero component', () => {
    it('logs the error when getSession rejects', async () => {
      const networkError = new Error('network offline');
      getSessionMock.mockRejectedValue(networkError);

      const Hero = (await import('../src/components/Hero')).default;

      await act(async () => {
        root.render(wrap(React.createElement(Hero)));
      });
      await flush();

      expect(consoleErrorSpy).toHaveBeenCalledWith(networkError);
    });

    it('renders the page even when getSession rejects', async () => {
      getSessionMock.mockRejectedValue(new Error('timeout'));

      const Hero = (await import('../src/components/Hero')).default;

      await act(async () => {
        root.render(wrap(React.createElement(Hero)));
      });
      await flush();

      expect(container.textContent).toContain('Fund A');
    });
  });

  describe('Hushh AI LoginPage', () => {
    it('logs the error when getSession rejects', async () => {
      const networkError = new Error('auth service unavailable');
      getSessionMock.mockRejectedValue(networkError);

      const LoginPage = (
        await import('../src/hushh-ai/presentation/pages/LoginPage')
      ).default;

      await act(async () => {
        root.render(wrap(React.createElement(LoginPage)));
      });
      await flush();

      expect(consoleErrorSpy).toHaveBeenCalledWith(networkError);
    });
  });

  describe('Hushh AI SignupPage', () => {
    it('logs the error when getSession rejects', async () => {
      const networkError = new Error('auth service unavailable');
      getSessionMock.mockRejectedValue(networkError);

      const SignupPage = (
        await import('../src/hushh-ai/presentation/pages/SignupPage')
      ).default;

      await act(async () => {
        root.render(wrap(React.createElement(SignupPage)));
      });
      await flush();

      expect(consoleErrorSpy).toHaveBeenCalledWith(networkError);
    });
  });
});
