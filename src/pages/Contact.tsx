import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EMAIL, FORM_ACTION } from "../lib/constants";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";

const faqs = [
  {
    q: "What do you build?",
    a: "Directories, service/lead-gen sites, WordPress, and private AI dashboards with automation.",
  },
  {
    q: "How do we collaborate?",
    a: "Async-first: written updates, shared milestones, and calls when a decision needs a live conversation.",
  },
  {
    q: "Typical timeline?",
    a: "Landing pages: 1–2 weeks. Directories & platforms: 3–8 weeks depending on scope.",
  },
  {
    q: "Budget range?",
    a: "Projects typically start from focused builds — share your scope and I'll quote honestly.",
  },
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Singapore",
  "United Arab Emirates",
  "Other",
] as const;

const countryDialCodes: Record<(typeof countries)[number], string> = {
  India: "+91",
  "United States": "+1",
  "United Kingdom": "+44",
  Canada: "+1",
  Australia: "+61",
  Germany: "+49",
  France: "+33",
  Netherlands: "+31",
  Singapore: "+65",
  "United Arab Emirates": "+971",
  Other: "",
};

function normalizeDialCode(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
}

function countryFromDialCode(code: string, current: string): string | null {
  const normalized = normalizeDialCode(code);
  if (!normalized) return null;

  const exact = (Object.entries(countryDialCodes) as [string, string][]).filter(
    ([, dial]) => dial === normalized
  );

  if (exact.length === 1) return exact[0][0];
  if (exact.length > 1) {
    if (current === "Canada" || current === "United States") return current;
    return "United States";
  }

  return null;
}

const budgetUsd = [
  "Under $300",
  "$300 – $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
] as const;

const budgetInr = [
  "Under ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+",
] as const;

const fieldClass =
  "rounded-xl border border-line bg-bg px-4 py-3 text-zinc-100 outline-none focus:border-accent light:text-light-primary";

export function Contact() {
  const [params] = useSearchParams();
  const sent = params.get("sent") === "1";
  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [country, setCountry] = useState<string>("India");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const isIndia = country === "India";
  const budgetOptions = isIndia ? budgetInr : budgetUsd;

  const handleCountryChange = (next: string) => {
    setCountry(next);
    const dial = countryDialCodes[next as (typeof countries)[number]];
    if (dial) setPhoneCode(dial);
  };

  const handlePhoneCodeChange = (value: string) => {
    const normalized = normalizeDialCode(value);
    setPhoneCode(normalized);
    const matched = countryFromDialCode(normalized, country);
    if (matched) setCountry(matched);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!name || !email) {
      e.preventDefault();
      setError("Please fill in name and email.");
      return;
    }
    setError("");
  };

  return (
    <main className="relative z-10 mx-auto max-w-site px-6 pb-24 pt-32 md:px-12">
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
          Let's build
          <br />
          <span className="text-gradient">your next product.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Serious inquiries only. Share your scope, timeline, and budget — I reply within 24 hours on qualified leads.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-muted">Prefer email? Reach me directly:</p>
          <a href={`mailto:${EMAIL}`} className="mt-4 block font-display text-2xl text-accent">
            {EMAIL}
          </a>
          <Button variant="ghost" className="mt-4 !px-4 !py-2 text-sm" onClick={copyEmail}>
            {copied ? "Copied!" : "Copy email"}
          </Button>

          <div className="mt-12 divide-y divide-line">
            {faqs.map((f, i) => (
              <div key={f.q} className="py-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left font-semibold"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <span className="text-accent">{openFaq === i ? "×" : "+"}</span>
                </button>
                {openFaq === i && <p className="mt-3 text-sm text-muted">{f.a}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent && (
            <p className="mb-4 rounded-lg bg-lime/10 px-4 py-3 text-sm text-lime">
              Message sent — I'll reply within 24 hours.
            </p>
          )}
          <form
            action={FORM_ACTION}
            method="POST"
            onSubmit={onSubmit}
            className="glass-card flex flex-col gap-4 rounded-card border border-line p-8"
          >
            <input type="hidden" name="_subject" value="New project inquiry — Techxtreme" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value={`${window.location.origin}${import.meta.env.BASE_URL}contact?sent=1`}
            />
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Name
              <input
                name="name"
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Phone number
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={phoneCode}
                  onChange={(e) => handlePhoneCodeChange(e.target.value)}
                  placeholder="+91"
                  aria-label="Country code"
                  className={`${fieldClass} w-[5.5rem] shrink-0`}
                />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Your phone number"
                  aria-label="Phone number"
                  className={`${fieldClass} min-w-0 flex-1`}
                />
              </div>
              <input
                type="hidden"
                name="phone"
                value={phoneNumber.trim() ? `${phoneCode} ${phoneNumber.trim()}` : ""}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Project type
              <select name="type" className={fieldClass}>
                <option>Website / Landing page</option>
                <option>Directory / SEO site</option>
                <option>AI dashboard / automation</option>
                <option>WordPress / Maintenance</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Country
              <select
                name="country"
                required
                value={country}
                onChange={(e) => handleCountryChange(e.target.value)}
                className={fieldClass}
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Budget range {isIndia ? "(INR)" : "(USD)"}
              <select
                key={country}
                name="budget"
                className={fieldClass}
              >
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-muted">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and goals…"
                className={`resize-y ${fieldClass}`}
              />
            </label>
            {error && <p className="text-sm text-hot">{error}</p>}
            <Button type="submit" className="w-full">
              Send message →
            </Button>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
