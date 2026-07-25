import { Link } from "react-router-dom";
import { Eyebrow } from "../components/Eyebrow";

const CONTROLS = [
  {
    icon: "admin_panel_settings",
    title: "Granular RBAC",
    body: "Define precise permissions for human and agent roles. Control who can approve code, promote artifacts, or sign off on a release.",
  },
  {
    icon: "pan_tool",
    title: "Human-in-the-Loop Gates",
    body: "Every workflow stage that matters — a merge, a promotion, a compliance sign-off — pauses for an explicit human decision before it proceeds.",
  },
  {
    icon: "history_edu",
    title: "Full Audit Trail",
    body: "Specs, code changes, review findings, and approvals are all versioned artifacts, so any decision can be traced back to its source.",
  },
];

export function Solutions() {
  return (
    <>
      <section className="container-max mx-auto mb-12 grid items-center gap-12 px-gutter py-12 md:grid-cols-2 md:py-24">
        <div>
          <Eyebrow>Multi-Agent Orchestration</Eyebrow>
          <h1 className="font-headline text-display-lg font-extrabold leading-tight text-on-surface">
            The agentic ecosystem for your SDLC.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
            Mitzora coordinates a fleet of specialized AI agents from ideation to delivery 
            — as one connected, governed, auditted workflow instead of disconnected
            point tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-lg bg-primary-container px-8 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              Talk to Us
            </Link>
          </div>
        </div>
        <div className="relative flex h-72 items-center justify-center md:h-96">
          <img src="/artifact.png" alt="Mitzora artifact view" className="h-full w-full rounded-lg object-contain" />
        </div>
      </section>

      <section className="container-max mx-auto mb-12 grid grid-cols-1 gap-6 px-gutter md:grid-cols-12">
        <div className="glass-card rounded-xl border border-outline-variant p-8 md:col-span-8">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-2 font-mono text-label-md uppercase text-primary-fixed-dim">
                Product &amp; Planning
              </div>
              <h2 className="font-headline text-headline-lg font-semibold text-on-surface">
                Spec Drafting &amp; Requirements
              </h2>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary-fixed">description</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-body-md text-primary-fixed">check_circle</span>
                <span>PRD and user-story generation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-body-md text-primary-fixed">check_circle</span>
                <span>Architecture research and design options</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-body-md text-primary-fixed">check_circle</span>
                <span>Gap analysis across linked artifacts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-body-md text-primary-fixed">check_circle</span>
                <span>Ticket sync with your existing tracker</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-high p-8 md:col-span-4">
          <div>
            <span className="material-symbols-outlined mb-4 text-4xl text-primary-fixed">code</span>
            <h2 className="font-headline text-headline-md font-medium text-on-surface">
              Autonomous Engineering
            </h2>
            <p className="mt-4 text-body-sm text-on-surface-variant">
              Coding agents work directly in your IDE and repository — implementing changes, opening
              pull requests, and keeping your architecture consistent.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high p-8 md:col-span-4">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-8xl">biotech</span>
          </div>
          <h2 className="font-headline text-headline-md font-medium text-on-surface">QA &amp; Validation</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-1 text-primary-fixed">lab_research</span>
              <span className="text-body-sm">Automated test loops before human review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-1 text-primary-fixed">verified</span>
              <span className="text-body-sm">Self-review remediation of common issues</span>
            </li>
          </ul>
        </div>

        <div className="glass-card rounded-xl border border-outline-variant p-8 md:col-span-8">
          <div className="mb-8 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-error/30 bg-error-container/20">
              <span className="material-symbols-outlined text-3xl text-error">security</span>
            </div>
            <div>
              <h2 className="font-headline text-headline-lg font-semibold text-on-surface">
                Security &amp; Compliance Review
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Dedicated review workflows check changes against your security and compliance
                controls before they ship.
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
              <span className="text-body-sm">Automated security review with actionable findings</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
              <span className="text-body-sm">Compliance review mapped to frameworks like SOC 2</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface to-surface-container-high p-8 md:col-span-12">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded bg-secondary-container px-3 py-1 font-mono text-label-sm text-on-secondary-container">
                Governed by design
              </div>
              <h2 className="font-headline text-headline-lg font-semibold text-on-surface">
                Human-in-the-Loop Delivery
              </h2>
              <p className="mt-4 text-body-lg text-on-surface-variant">
                Agents propose and draft; people approve. Every consequential step — merging code,
                promoting an artifact, signing off on a review — waits on an explicit human decision,
                with notifications and reminders keeping approvers in the loop.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-outline-variant bg-surface/50 p-6 backdrop-blur">
                <span className="material-symbols-outlined mb-3 text-3xl text-primary-fixed">notifications_active</span>
                <div className="font-headline text-headline-md font-semibold text-on-surface">Reminders</div>
                <div className="text-body-sm text-on-surface-variant">Approvers never miss a pending decision</div>
              </div>
              <div className="rounded-lg border border-outline-variant bg-surface/50 p-6 backdrop-blur">
                <span className="material-symbols-outlined mb-3 text-3xl text-primary-fixed">settings_input_component</span>
                <div className="font-headline text-headline-md font-semibold text-on-surface">Durable Workflows</div>
                <div className="text-body-sm text-on-surface-variant">State survives restarts, retries, and long waits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max mx-auto mb-12 border-t border-outline-variant px-gutter pt-24">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-headline text-display-lg font-extrabold text-on-surface">Enterprise Controls</h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            Scale AI adoption with the safety and rigor your engineering org already expects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CONTROLS.map((control) => (
            <div key={control.title} className="group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-outline-variant bg-surface-container-high transition-colors group-hover:border-primary-fixed">
                <span className="material-symbols-outlined text-primary-fixed">{control.icon}</span>
              </div>
              <h3 className="font-headline text-headline-md font-medium text-on-surface">{control.title}</h3>
              <p className="mt-3 text-body-md text-on-surface-variant">{control.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max mx-auto px-gutter">
        <div className="rounded-3xl bg-primary-fixed p-12 text-center text-on-primary-fixed">
          <h2 className="font-headline text-display-lg font-extrabold">Ready to orchestrate?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg opacity-90">
            Tell us about your SDLC and we'll show you where Mitzora fits.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-xl bg-on-primary-fixed px-10 py-4 font-bold text-primary-fixed transition-transform hover:scale-105"
            >
              Contact Sales
            </Link>
            <Link
              to="/about"
              className="rounded-xl border-2 border-on-primary-fixed px-10 py-4 font-bold transition-colors hover:bg-on-primary-fixed/10"
            >
              About Mitzora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
