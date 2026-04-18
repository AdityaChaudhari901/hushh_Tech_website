// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from '../src/components/ErrorBoundary';

const ThrowOnMount = ({ message = 'boom' }: { message?: string }) => {
  throw new Error(message);
};

const Stable = () => <div>All good</div>;

// Suppress expected console.error noise from React's error handling in tests
beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary moduleName="Test">
        <Stable />
      </ErrorBoundary>
    );
    expect(screen.getByText('All good')).toBeDefined();
  });

  it('shows the fallback UI when a child throws', () => {
    render(
      <ErrorBoundary moduleName="Kai">
        <ThrowOnMount />
      </ErrorBoundary>
    );
    expect(screen.getByText('Kai encountered an error')).toBeDefined();
    expect(screen.getByText('Try again')).toBeDefined();
    expect(screen.getByText('Go home')).toBeDefined();
  });

  it('uses a default module name when none is provided', () => {
    render(
      <ErrorBoundary>
        <ThrowOnMount />
      </ErrorBoundary>
    );
    expect(screen.getByText('This page encountered an error')).toBeDefined();
  });

  it('calls the onError callback with the error and info', () => {
    const onError = vi.fn();
    render(
      <ErrorBoundary moduleName="Hushh AI" onError={onError}>
        <ThrowOnMount message="network failed" />
      </ErrorBoundary>
    );
    expect(onError).toHaveBeenCalledOnce();
    const [error] = onError.mock.calls[0];
    expect(error.message).toBe('network failed');
  });

  it('recovers and re-renders children after Try again is clicked', () => {
    let shouldThrow = true;

    const MaybeThrow = () => {
      if (shouldThrow) throw new Error('transient error');
      return <div>Recovered</div>;
    };

    const { rerender } = render(
      <ErrorBoundary moduleName="Studio">
        <MaybeThrow />
      </ErrorBoundary>
    );

    expect(screen.getByText('Studio encountered an error')).toBeDefined();

    shouldThrow = false;
    fireEvent.click(screen.getByText('Try again'));

    rerender(
      <ErrorBoundary moduleName="Studio">
        <MaybeThrow />
      </ErrorBoundary>
    );

    expect(screen.getByText('Recovered')).toBeDefined();
  });
});
