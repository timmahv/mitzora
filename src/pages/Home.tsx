import { Link } from "react-router-dom";
import { Eyebrow } from "../components/Eyebrow";

const PILLARS = [
  {
    icon: "pan_tool",
    title: "Human-in-the-loop, always",
    body: "Agents propose, draft, and execute — but every consequential step routes through an approval gate before it touches production or ships to customers.",
  },
  {
    icon: "visibility",
    title: "Full traceability",
    body: "Every artifact an agent produces — specs, code, review findings, compliance sign-offs — is versioned, attributable, and auditable end to end.",
  },
  {
    icon: "hub",
    title: "The whole SDLC, not a demo",
    body: "Mitzora orchestrates planning, engineering, QA, security, and delivery as one connected workflow, not a collection of disconnected point tools.",
  },
];

const STAGES = [
  { icon: "description", label: "Plan", body: "Specs, architecture, and user experience drafted from product intent." },
  { icon: "code", label: "Build", body: "Agents implement and test changes against project standards and controls." },
  { icon: "fact_check", label: "Review", body: "Automated code, security, and compliance review with findings you can act on." },
  { icon: "rocket_launch", label: "Ship", body: "Human-approved changes flow to a pull request, ready to merge." },
];

export function Home() {
  return (
    <>
      <section className="container-max mx-auto px-gutter">
        <div className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>Human-led, AI-assisted SDLC Orchestration</Eyebrow>
            <h1 className="font-headline text-display-lg font-extrabold leading-tight text-on-surface">
              The Human-led, AI-assisted engine for modern software delivery.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
              Mitzora orchestrates a fleet of specialized AI agents, templates, and standards across your entire development
              lifecycle <strong>to improve the speed and quality of software development</strong> — while keeping Humans firmly in control of every decision that matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="flex items-center gap-2 rounded-lg bg-primary-container px-8 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
              >
                <span className="material-symbols-outlined">hub</span>
                See the Solution
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-outline-variant px-8 py-3 font-medium text-on-surface transition-colors hover:bg-surface-container-high"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="relative flex h-72 items-center justify-center md:h-96">
            <img src="/dashboard.png" alt="Mitzora dashboard" className="h-full w-full rounded-lg object-contain" />
          </div>
        </div>
      </section>

      <section className="container-max mx-auto mb-12 px-gutter">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="glass-card rounded-xl p-8">
              <span className="material-symbols-outlined mb-4 text-primary-fixed">{pillar.icon}</span>
              <h3 className="font-headline text-headline-md font-semibold text-on-surface">{pillar.title}</h3>
              <p className="mt-3 text-body-sm text-on-surface-variant">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max mx-auto mb-12 px-gutter">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-headline text-headline-lg font-semibold text-on-surface">How it works</h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            One connected pipeline, from intent to shipped code — with an approval gate at every
            consequential handoff.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, index) => (
            <div key={stage.label} className="rounded-xl border border-outline-variant bg-surface-container-high p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-label-sm text-on-surface-variant">0{index + 1}</span>
                <span className="material-symbols-outlined text-primary-fixed">{stage.icon}</span>
              </div>
              <h4 className="font-headline text-headline-md font-medium text-on-surface">{stage.label}</h4>
              <p className="mt-2 text-body-sm text-on-surface-variant">{stage.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max mx-auto px-gutter">
        <div className="flex flex-col items-center rounded-xl bg-primary-fixed p-12 text-center text-on-primary-fixed">
          <h2 className="font-headline text-headline-lg font-semibold">Ready to see it in your workflow?</h2>
          <p className="mt-4 max-w-2xl text-body-lg opacity-90">
            Tell us about your engineering org and we'll walk you through how Mitzora fits into it.
          </p>
          <Link
            to="/contact"
            className="mt-8 rounded-lg bg-on-primary-fixed px-8 py-3 font-bold text-primary-fixed transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
