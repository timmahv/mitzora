import { useState } from "react";
import type { FormEvent } from "react";
import { Eyebrow } from "../components/Eyebrow";

// TODO(config): replace with the team's real inbox once decided.
const CONTACT_EMAIL = "hello@mitzora.ai";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const EMPTY_FORM: FormState = { name: "", email: "", company: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Mitzora inquiry from ${form.name || "website visitor"}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      form.message,
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  return (
    <>
      <section className="container-max mx-auto mb-12 grid items-center gap-12 px-gutter py-12 lg:grid-cols-2">
        <div className="space-y-6">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="font-headline text-display-lg font-extrabold text-on-surface">
            Let's talk about your <span className="text-primary-container">SDLC</span>.
          </h1>
          <p className="max-w-xl text-body-lg text-on-surface-variant">
            Whether you want a walkthrough of Mitzora or have questions about how it fits your
            engineering org, we'd like to hear from you.
          </p>
        </div>
        <div className="glass-card relative h-64 w-full overflow-hidden rounded-xl lg:h-80">
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border-l-4 border-primary-container bg-surface-container-high/80 p-4">
            <p className="mb-1 font-mono text-label-md text-primary-fixed">RESPONSE TIME</p>
            <div className="flex items-center justify-between">
              <span className="text-body-md">We typically reply within</span>
              <span className="font-mono text-label-sm text-primary-container">1 business day</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-max mx-auto grid grid-cols-1 gap-gutter px-gutter lg:grid-cols-12">
        <div className="glass-card rounded-xl p-8 lg:col-span-7">
          <h2 className="font-headline text-headline-lg font-semibold text-on-surface">Send us a message</h2>
          <p className="mb-12 mt-2 text-body-md text-on-surface-variant">
            Fill this in and we'll open your email client with everything ready to send.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-lg border border-primary-fixed/30 bg-primary-fixed/10 p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary-fixed">check_circle</span>
              <p className="text-body-md text-on-surface">
                Your email client should now be open with your message ready to send. If it didn't
                open, email us directly at{" "}
                <a className="text-primary-fixed underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <button
                type="button"
                className="rounded-lg border border-outline-variant px-6 py-2 text-body-sm hover:bg-surface-container-high"
                onClick={() => {
                  setForm(EMPTY_FORM);
                  setSubmitted(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="px-1 font-mono text-label-md text-on-surface-variant" htmlFor="name">
                    FULL NAME
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={updateField("name")}
                    className="rounded-lg border border-outline-variant bg-surface-container-high p-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="px-1 font-mono text-label-md text-on-surface-variant" htmlFor="email">
                    WORK EMAIL
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={updateField("email")}
                    className="rounded-lg border border-outline-variant bg-surface-container-high p-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="px-1 font-mono text-label-md text-on-surface-variant" htmlFor="company">
                  COMPANY
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={updateField("company")}
                  className="rounded-lg border border-outline-variant bg-surface-container-high p-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="px-1 font-mono text-label-md text-on-surface-variant" htmlFor="message">
                  HOW CAN WE HELP?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your engineering org and what you're looking for..."
                  value={form.message}
                  onChange={updateField("message")}
                  className="rounded-lg border border-outline-variant bg-surface-container-high p-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container py-4 font-bold text-on-primary transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-gutter lg:col-span-5">
          <div className="flex items-start gap-4 rounded-xl border border-secondary-container bg-secondary-container/20 p-8">
            <span className="material-symbols-outlined text-3xl text-secondary">mail</span>
            <div>
              <h3 className="font-headline text-headline-md font-medium text-secondary">Email Us</h3>
              <p className="mt-1 text-body-sm text-on-secondary-container">
                For sales, partnerships, or general questions.
              </p>
              <p className="mt-4 font-mono text-label-md text-on-surface">
                <a className="text-secondary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="glass-card flex-grow rounded-xl p-8">
            <h3 className="mb-4 font-headline text-headline-md font-medium text-on-surface">What to expect</h3>
            <ul className="space-y-4 text-body-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-primary-fixed">forum</span>
                A short discovery call to understand your SDLC and where Mitzora fits.
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-primary-fixed">visibility</span>
                A walkthrough of the agent workflows relevant to your team.
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-primary-fixed">schedule</span>
                A response within one business day.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
