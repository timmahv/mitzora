import { Link } from "react-router-dom";
import { Eyebrow } from "../components/Eyebrow";

const VALUES = [
  {
    icon: "verified_user",
    title: "Human Authority",
    body: "Agents propose and execute, but people hold the kill switch. Every consequential action — a merge, a deploy, a compliance sign-off — waits on human approval.",
    accent: "border-primary-container",
  },
  {
    icon: "visibility",
    title: "Radical Transparency",
    body: "No black boxes. Every decision an agent makes is traceable back to the prompt, the artifact, and the person who approved it.",
    accent: "border-secondary-fixed",
  },
  {
    icon: "precision_manufacturing",
    title: "Engineering Rigor",
    body: "\"Vibe Coding\" just doesn't cut it in Production. We hold AI-generated work to the same bar as human-written work: reviewed, tested, and accountable — not \"good enough for a demo.\"",
    accent: "border-tertiary-fixed",
  },
];

export function About() {
  return (
    <>
      <section className="container-max mx-auto mb-12 px-gutter">
        <div className="max-w-3xl py-12 md:py-24">
          <Eyebrow>Our Vision</Eyebrow>
          <h1 className="font-headline text-display-lg font-extrabold leading-tight text-on-surface">
            Software delivery, orchestrated — not replaced.
          </h1>
          <p className="mt-6 text-body-lg text-on-surface-variant">
            Mitzora builds a human-led, AI-assisted platform for the software development lifecycle.
            We believe the future of engineering isn't AI working alone — it's AI agents handling the
            grunt work of delivery while engineers drive the direction on everything that matters.
          </p>
        </div>
      </section>

      <section className="container-max mx-auto mb-12 px-gutter">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="glass-card flex flex-col justify-between rounded-xl p-8 md:col-span-7">
            <div>
              <h2 className="font-headline text-headline-lg font-semibold text-on-surface">
                Why we're building Mitzora
              </h2>
              <p className="mt-4 text-body-md text-on-surface-variant">
                Engineering teams are drowning in fragmented tooling and poorly documented code and processes 
                — vague product ideas, unmaintained documents, non-existent requirements, tribal knowledge in one developer's head, 
                no standards, an ever changing landscape of LLM models, and no connective tissue 
                between them. Mitzora unifies planning, engineering, QA, security, and delivery into
                one governed workflow, so teams get the leverage of AI without losing oversight of
                their own codebase.
              </p>
            </div>
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-surface-variant">
              <div className="shimmer-bar h-full w-2/3 bg-primary-container" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high p-8 md:col-span-5">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">history_edu</span>
            </div>
            <h3 className="font-headline text-headline-md font-medium text-on-surface">
              Founded on a simple frustration
            </h3>
            <p className="relative z-10 mt-4 text-body-sm text-on-surface-variant">
              Mitzora started from a straightforward observation: People are notoriously bad at writing specs, 
              comprehending large documents fully, and correlating multiple data points consistently. "AI-assisted" tools 
              were automating tasks, not outcomes, and leaving engineers to stitch the results together by hand. We
              set out to build the orchestration layer that was missing — one where agents and humans
              share a single, auditable workflow from spec to shipped code.
            </p>
          </div>

          {VALUES.map((value) => (
            <div key={value.title} className={`glass-card rounded-xl border-l-4 p-6 md:col-span-4 ${value.accent}`}>
              <span className="material-symbols-outlined mb-4 text-primary-fixed">{value.icon}</span>
              <h4 className="font-mono text-label-md uppercase text-on-surface">{value.title}</h4>
              <p className="mt-2 text-body-sm text-on-surface-variant">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max mx-auto mb-12 px-gutter">
        <div className="mb-12 max-w-xl">
          <h2 className="font-headline text-headline-lg font-semibold text-on-surface">Leadership</h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            The team steering Mitzora's product and engineering direction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group">
            <div className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high">
              <img
                src="/team/tim-vries.jpg"
                alt="Tim Vries"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block rounded bg-primary-container px-2 py-0.5 text-[10px] font-bold text-on-primary">
                  FOUNDER AND CTO
                </span>
              </div>
            </div>
            <h5 className="font-headline text-headline-md font-medium text-on-surface">Tim Vries</h5>
            <p className="text-body-sm text-on-surface-variant">With over 30 years of experience leading software engineering teams, Tim 
              has helped many companies transform their processes allowing them to scale and grow efficiently and cost effectively.  
              After seeing Agent AI projects fail because they were just automating tasks not outcomes, Tim decided to bring his 
              extensive experience in software engineering and product strategy to design an Agentic system that augments human's 
              inherent strengths to deliver world class software with speed and quality.</p>
          </div>
        </div>
      </section>

      <section className="container-max mx-auto px-gutter">
        <div className="flex flex-col items-center rounded-xl bg-primary-fixed p-12 text-center text-on-primary-fixed">
          <h2 className="font-headline text-headline-lg font-semibold">Join the orchestration core</h2>
          <p className="mt-4 max-w-2xl text-body-lg opacity-90">
            Ready to see how Mitzora can transform your engineering workflow? Get in touch with our
            team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-on-primary-fixed px-8 py-3 font-bold text-primary-fixed transition-transform hover:scale-105"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              Contact Us
            </Link>
            <Link
              to="/solutions"
              className="rounded-lg border border-on-primary-fixed/30 px-8 py-3 font-bold transition-colors hover:bg-on-primary-fixed/10"
            >
              Explore the Solution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
