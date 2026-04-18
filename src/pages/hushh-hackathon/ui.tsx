/**
 * Hushh Open Source Hiring Challenge 2026 — Page UI
 * Follows the same design system as onboarding steps 1–6:
 *   • White background, Playfair Display serif headings
 *   • HushhTechBackHeader sticky header
 *   • Material Symbols Outlined icons in circular gray containers
 *   • Pill tags, clean dividers, HushhTechCta buttons
 *   • Mobile-first, max-w-md centered layout
 */
import { useHackathonLogic, SECTION_IDS } from "./logic";
import {
  HERO_TITLE,
  HERO_YEAR,
  HERO_SUBTITLE,
  HERO_DESCRIPTION,
  UNSTOP_EVENT_URL,
  CONTRIBUTION_START,
  CONTRIBUTION_END,
  PROJECT_TRACKS,
  PARTICIPANT_EXPECTATIONS,
  PARTICIPATION_STEPS,
  SUBMISSION_REQUIREMENTS,
  WHAT_WE_LOOK_FOR,
  RULES,
  EVALUATION_CRITERIA,
  EVALUATION_INTRO,
  EVALUATION_NOTES,
  WHY_JOIN,
  PRIZES,
  HIRING_OPPORTUNITIES,
  ELIGIBILITY,
  FORMAT_DETAILS,
  SUBMISSION_NOTES,
  CONTACT_EMAIL,
  COMPANY_WEBSITE,
} from "./content";
import HushhTechBackHeader from "../../components/hushh-tech-back-header/HushhTechBackHeader";
import HushhTechCta, {
  HushhTechCtaVariant,
} from "../../components/hushh-tech-cta/HushhTechCta";

/* ── Shared Styles ── */
const playfair = { fontFamily: "'Playfair Display', serif" };

/** Small section label — uppercase tracking */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-[11px]">
    {children}
  </h3>
);

/** Section heading — Playfair Display */
const SectionHeading = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => (
  <h2
    id={id}
    className="mb-6 text-[1.65rem] font-normal leading-[1.12] tracking-tight text-black font-serif sm:text-[1.95rem] lg:text-[2.2rem]"
    style={playfair}
  >
    {children}
  </h2>
);

/** Icon in a circular gray container — matches onboarding step rows */
const CircleIcon = ({
  icon,
  size = "w-10 h-10",
}: {
  icon: string;
  size?: string;
}) => (
  <div
    className={`${size} rounded-full bg-gray-100 flex items-center justify-center shrink-0`}
  >
    <span
      className="material-symbols-outlined text-gray-700 text-lg"
      style={{ fontVariationSettings: "'wght' 400" }}
    >
      {icon}
    </span>
  </div>
);

const DetailCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
    <div className="flex items-start gap-3 sm:gap-4">
      <CircleIcon icon={icon} />
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500 sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function HushhHackathonPage() {
  const { handleBack, openExternal } = useHackathonLogic();

  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
      {/* ═══ Sticky Header ═══ */}
      <HushhTechBackHeader
        onBackClick={handleBack}
        rightType="hamburger"
        className="px-4 sm:px-6 lg:px-8 max-w-6xl"
      />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  HERO                                                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id={SECTION_IDS.hero} className="max-w-2xl py-8 sm:py-10">
          <SectionLabel>Open Source · Hiring · {HERO_YEAR}</SectionLabel>

          <h1
            className="text-[2.15rem] leading-[1.04] font-normal tracking-tight text-black font-serif sm:text-[2.75rem] lg:text-[3.35rem]"
            style={playfair}
          >
            {HERO_TITLE} <br />
            <span className="text-gray-400 italic font-light">{HERO_YEAR}</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-gray-600 sm:mt-6 sm:text-[0.95rem]">
            {HERO_SUBTITLE}
          </p>

          <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-500 sm:text-sm">
            {HERO_DESCRIPTION}
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  CONTRIBUTION WINDOW                                          */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.window}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>Contribution Window</SectionLabel>

          {/* Date cards */}
          <div className="space-y-3">
            {/* Open window */}
            <div className="flex items-start gap-3 py-4 border-b border-gray-100 sm:gap-4">
              <CircleIcon icon="calendar_today" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  {CONTRIBUTION_START} – {CONTRIBUTION_END}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Open contribution window. Contribute at any time.
                </p>
              </div>
            </div>

            {/* Post window */}
            <div className="flex items-start gap-3 py-4 sm:gap-4">
              <CircleIcon icon="event_available" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Post {CONTRIBUTION_END}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Review, evaluation, results, prize distribution, internship
                  shortlisting, and full-time hiring consideration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  PROJECT TRACKS                                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.tracks}
          className="py-6 border-t border-gray-200"
        >
          <div className="max-w-2xl">
            <SectionLabel>Project Tracks</SectionLabel>
            <SectionHeading>
              Choose Your <br />
              <span className="text-gray-400 italic font-light">Track</span>
            </SectionHeading>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {PROJECT_TRACKS.map((track) => (
              <div
                key={track.id}
                className="rounded-xl border border-gray-200 p-4 sm:p-5"
              >
                {/* Track header */}
                <div className="mb-4 flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-gray-700 text-xl"
                      style={{ fontVariationSettings: "'wght' 400" }}
                    >
                      {track.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-900">
                      {track.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mt-0.5">
                      {track.description}
                    </p>
                  </div>
                </div>

                {/* Ideal for */}
                <p className="text-[11px] text-gray-400 mb-3 font-medium">
                  Ideal for: {track.idealFor}
                </p>

                {/* Link pills */}
                <div className="flex flex-wrap gap-2">
                  {track.links.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => openExternal(link.url)}
                      className="inline-flex max-w-full items-center gap-1.5 rounded-2xl border border-gray-200 px-3 py-2 text-left text-[11px] font-medium leading-relaxed text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 whitespace-normal"
                      aria-label={`Open ${link.label}`}
                      tabIndex={0}
                    >
                      <span className="break-words">{link.label}</span>
                      <span className="material-symbols-outlined shrink-0 text-[11px]">
                        open_in_new
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  WHAT PARTICIPANTS HAVE TO DO                                 */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-6 border-t border-gray-200">
          <div className="max-w-2xl">
            <SectionLabel>What Participants Have To Do</SectionLabel>
            <SectionHeading>
              Contribute With <br />
              <span className="text-gray-400 italic font-light">Intent</span>
            </SectionHeading>

            <p className="mb-6 text-xs leading-relaxed text-gray-500 sm:text-sm">
              This is an open-source contribution event. Participants are
              expected to understand the codebase, solve a real problem, and
              communicate their work clearly through a pull request and final
              platform submission.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {PARTICIPANT_EXPECTATIONS.map((item) => (
              <DetailCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  HOW TO PARTICIPATE — Steps 1-8                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.steps}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>How To Participate</SectionLabel>
          <SectionHeading>
            Step by Step <br />
            <span className="text-gray-400 italic font-light">Guide</span>
          </SectionHeading>

          <div className="space-y-1">
            {PARTICIPATION_STEPS.map((ps) => (
              <div
                key={ps.step}
                className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Step number in circle */}
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  {ps.step}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-start gap-2 sm:items-center">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {ps.title}
                    </h3>
                    <span
                      className="material-symbols-outlined text-gray-400 text-base"
                      style={{ fontVariationSettings: "'wght' 300" }}
                    >
                      {ps.icon}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {ps.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  SUBMISSION NOTES                                             */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-2xl py-6 border-t border-gray-200">
          <SectionLabel>Submission Checklist</SectionLabel>
          <SectionHeading>
            What To Submit <br />
            <span className="text-gray-400 italic font-light">
              On The Platform
            </span>
          </SectionHeading>

          <p className="mb-6 text-xs leading-relaxed text-gray-500 sm:text-sm">
            Your final entry should help the reviewers understand what you
            worked on, why it matters, and how they can evaluate it quickly.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {SUBMISSION_REQUIREMENTS.map((item) => (
              <DetailCard
                key={item.label}
                icon={item.icon}
                title={item.label}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 p-4 sm:p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
              Important Notes
            </p>

            <div className="space-y-3">
              {SUBMISSION_NOTES.map((note, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-hushh-blue text-sm mt-0.5 shrink-0">
                    info
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  WHAT WE LOOK FOR                                            */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.lookFor}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>What We Look For</SectionLabel>
          <SectionHeading>
            Strong <br />
            <span className="text-gray-400 italic font-light">Builders</span>
          </SectionHeading>

          <div className="space-y-1">
            {WHAT_WE_LOOK_FOR.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 py-4 border-b border-gray-100 last:border-b-0 sm:items-center sm:gap-4"
              >
                <CircleIcon icon={item.icon} />
                <p className="min-w-0 text-sm font-medium text-gray-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  RULES & GUIDELINES                                          */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.rules}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>Rules & Guidelines</SectionLabel>
          <SectionHeading>
            Contribution <br />
            <span className="text-gray-400 italic font-light">Protocol</span>
          </SectionHeading>

          <div className="space-y-3">
            {RULES.map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-sm mt-0.5 shrink-0">
                  check_circle
                </span>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  EVALUATION CRITERIA                                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.evaluation}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>Evaluation</SectionLabel>
          <SectionHeading>
            How We <br />
            <span className="text-gray-400 italic font-light">Evaluate</span>
          </SectionHeading>

          <p className="mb-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
            {EVALUATION_INTRO}
          </p>

          <div className="flex flex-wrap gap-2">
            {EVALUATION_CRITERIA.map((criterion) => (
              <span
                key={criterion.label}
                className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium leading-relaxed text-gray-700 sm:px-4"
              >
                <span
                  className="material-symbols-outlined text-sm text-gray-500"
                  style={{ fontVariationSettings: "'wght' 300" }}
                >
                  {criterion.icon}
                </span>
                {criterion.label}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {EVALUATION_NOTES.map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-hushh-blue text-sm mt-0.5 shrink-0">
                  analytics
                </span>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  WHY JOIN                                                     */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-6 border-t border-gray-200">
          <div className="max-w-2xl">
            <SectionLabel>Why Join</SectionLabel>
            <SectionHeading>
              Build Real Work, <br />
              <span className="text-gray-400 italic font-light">
                Earn Real Visibility
              </span>
            </SectionHeading>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {WHY_JOIN.map((item) => (
              <DetailCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  PRIZES                                                       */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.prizes}
          className="py-6 border-t border-gray-200"
        >
          <div className="max-w-2xl">
            <SectionLabel>Prizes & Recognition</SectionLabel>
            <SectionHeading>
              Win Big, <br />
              <span className="text-gray-400 italic font-light">
                Build Bigger
              </span>
            </SectionHeading>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {PRIZES.map((prize) => (
              <div
                key={prize.position}
                className={`flex flex-col items-start gap-3 rounded-xl border px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
                  prize.highlight
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-xl ${
                      prize.highlight ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    emoji_events
                  </span>
                  <span className="text-sm font-semibold">{prize.position}</span>
                </div>
                <span
                  className="text-lg font-bold font-mono sm:text-right"
                  style={playfair}
                >
                  {prize.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Extra recognition note */}
          <div className="mt-4 flex max-w-2xl items-start gap-3 py-3">
            <span className="material-symbols-outlined text-hushh-blue text-sm mt-0.5 shrink-0">
              redeem
            </span>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Standout contributors may also receive Hushh goodies and
              recognition. Top performers may be shortlisted directly for
              internship and full-time opportunities.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  HIRING OPPORTUNITIES                                        */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.hiring}
          className="py-6 border-t border-gray-200"
        >
          <div className="max-w-2xl">
            <SectionLabel>Career Opportunities</SectionLabel>
            <SectionHeading>
              From PR to <br />
              <span className="text-gray-400 italic font-light">Career</span>
            </SectionHeading>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {HIRING_OPPORTUNITIES.map((opp) => (
              <div
                key={opp.type}
                className="rounded-xl border border-gray-200 p-4 sm:p-5"
              >
                {/* Header row */}
                <div className="mb-4 flex items-start gap-3 sm:items-center sm:gap-4">
                  <CircleIcon
                    icon={opp.type === "internship" ? "school" : "work"}
                    size="w-12 h-12"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-900">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-hushh-blue font-bold mt-0.5">
                      {opp.stipend}
                    </p>
                  </div>
                </div>

                {/* Perks */}
                <div className="space-y-2.5 pl-1">
                  {opp.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-gray-400 text-sm mt-0.5 shrink-0">
                        check
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">
                        {perk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  ELIGIBILITY                                                  */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.eligibility}
          className="max-w-2xl py-6 border-t border-gray-200"
        >
          <SectionLabel>Who Can Participate</SectionLabel>
          <SectionHeading>
            Open To <br />
            <span className="text-gray-400 italic font-light">Everyone</span>
          </SectionHeading>

          <div className="flex flex-wrap gap-2">
            {ELIGIBILITY.map((role) => (
              <span
                key={role}
                className="max-w-full rounded-full border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium leading-relaxed text-gray-700 sm:px-4"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Format badges */}
          <div className="mt-6">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
              Format
            </p>
            <div className="space-y-2">
              {FORMAT_DETAILS.map((detail, index) => (
                <div
                  key={detail.title}
                  className={`flex items-start gap-3 py-3 sm:items-center ${
                    index < FORMAT_DETAILS.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <CircleIcon icon={detail.icon} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {detail.title}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  CONTACT                                                      */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section
          id={SECTION_IDS.contact}
          className="py-6 border-t border-gray-200"
        >
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 py-4 border-b border-gray-100 md:border md:rounded-xl md:border-gray-200 md:px-4 md:py-5">
              <CircleIcon icon="mail" />
              <div className="min-w-0">
                <p className="break-words text-sm font-semibold text-gray-900">
                  {CONTACT_EMAIL}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  For queries and contribution-related questions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 py-4 md:border md:rounded-xl md:border-gray-200 md:px-4 md:py-5">
              <CircleIcon icon="public" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">hushh.ai</p>
                <p className="text-xs text-gray-500 font-medium">
                  Company website
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  CTAs                                                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-2xl py-8 space-y-3">
          <HushhTechCta
            variant={HushhTechCtaVariant.BLACK}
            onClick={() =>
              openExternal(
                "https://github.com/hushh-labs/hushh_Tech_website/issues"
              )
            }
          >
            Start Contributing
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </HushhTechCta>

          <HushhTechCta
            variant={HushhTechCtaVariant.WHITE}
            onClick={() => openExternal(UNSTOP_EVENT_URL)}
          >
            Register on Unstop
            <span className="material-symbols-outlined text-base">
              open_in_new
            </span>
          </HushhTechCta>

          <HushhTechCta
            variant={HushhTechCtaVariant.WHITE}
            onClick={() => openExternal(COMPANY_WEBSITE)}
          >
            Visit hushh.ai
          </HushhTechCta>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  TRUST BADGES                                                 */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="flex flex-col items-center justify-center text-center gap-2 pb-8">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] text-hushh-blue">
                lock
              </span>
              <span className="text-[10px] text-gray-500 tracking-wide uppercase font-medium">
                Authentication Required
              </span>
            </div>
            <span className="hidden text-gray-300 sm:block">·</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] text-hushh-blue">
                verified
              </span>
              <span className="text-[10px] text-gray-500 tracking-wide uppercase font-medium">
                Official Hushh Challenge
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
