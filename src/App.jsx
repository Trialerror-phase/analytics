import { useState } from "react";


// Khatasia Consulting — Simple React Single-Page Site
// Tech: React + Tailwind utility classes (no extra libs)
// Notes:
// - Replace all TODO placeholders with your actual content.
// - Drop image files into /public/images and update src attributes below.
// - This component is designed to be used as src/App.jsx in a Vite React project.

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* TODO: Replace with your logo image */}
            <div className="h-10 w-10 rounded-2xl bg-slate-200 flex items-center justify-center text-sm font-semibold">LOGO</div>
            <div className="leading-tight">
              <p className="font-bold text-lg">Rada Analytics</p>
              <p className="text-xs text-slate-500">Bookkeeping · Analytics · Grants</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm hover:text-slate-900">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium shadow">
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <span className="i-lucide-menu" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium shadow inline-block"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          {/* TODO: Replace with a wide hero background image */}
          <div className="w-full h-full bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Smarter Books. Clearer Decisions.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We provide hassle-free bookkeeping and turn your business data into
              actionable dashboards. Grant writing & administration coming soon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium shadow">
                Request a Free Consult
              </a>
              <a href="#services" className="px-6 py-3 rounded-xl border font-medium">
                Explore Services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
              <div className="p-4 rounded-2xl bg-white border shadow-sm">
                <p className="font-semibold text-slate-900">Bookkeeping</p>
                <p>Clean, compliant, on time.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border shadow-sm">
                <p className="font-semibold text-slate-900">Analytics</p>
                <p>KPIs that matter.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border shadow-sm">
                <p className="font-semibold text-slate-900">Dashboards</p>
                <p>See trends at a glance.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border shadow-sm">
                <p className="font-semibold text-slate-900">Grants*</p>
                <p className="italic">*Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Social Proof (Optional) */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center opacity-70">
            {/* TODO: Replace with client logos */}
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="h-10 w-28 rounded-xl bg-slate-200" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white border-y">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Choose a starting point. We can tailor any package to your stage and budget.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Card 1: Bookkeeping */}
            <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
              {/* Image placeholder */}
              <div className="h-40 w-full rounded-xl bg-[url('/images/bookkeeping.webp')] bg-cover bg-center mb-4" />
              <h3 className="text-xl font-semibold">Monthly Bookkeeping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Categorization, bank recs, AR/AP, and monthly financial statements.
              </p>
              <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                <li>Accurate, compliant books</li>
                <li>Quarterly reviews</li>
                <li>Tax-ready packages</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium">Get Pricing</a>
            </div>

            {/* Card 2: Analytics */}
            <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
              {/* Image placeholder */}
              <div className="h-40 w-full rounded-xl bg-[url('/images/analytics.jpg')] bg-cover bg-center mb-4" />
              <h3 className="text-xl font-semibold">Data Analytics & Visualization</h3>
              <p className="mt-2 text-sm text-slate-600">
                KPI selection, data cleanup, and dashboards to guide decisions.
              </p>
              <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                <li>Revenue & cost trends</li>
                <li>Cohorts & retention</li>
                <li>Executive dashboards</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium">See Demo</a>
            </div>

            {/* Card 3: Grants */}
            <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm opacity-95">
              {/* Image placeholder */}
              <div className="h-40 w-full rounded-xl bg-[url('/images/grants.png')] bg-cover bg-center mb-4" />
              <h3 className="text-xl font-semibold">Grant Writing & Administration</h3>
              <p className="mt-2 text-sm text-slate-600">
                Prospecting, proposal drafting, budgets, and reporting.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                Coming soon
              </div>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-xl border text-sm font-medium">Join Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our 3-Step Process</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{n:1,t:"Discover",d:"Free consult to understand goals and current tools."},{n:2,t:"Set Up",d:"Connect accounts, clean data, and configure reports."},{n:3,t:"Optimize",d:"Monthly check-ins and continuous improvements."}].map(s => (
              <div key={s.n} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-semibold">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white border-y">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Founder Image Placeholder */}
          <div className="h-72 md:h-96 rounded-3xl bg-[url('/images/founder.webp')] bg-cover bg-center" />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About Rada Analytics</h2>
            <p className="mt-4 text-slate-600">
              {/* TODO: Replace this paragraph with your story */}
              We help small and growing businesses stay on top of their finances
              and make data-backed decisions. Our approach is practical, lean,
              and focused on outcomes.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border bg-slate-50 p-4"><p className="font-semibold text-slate-900">5+ yrs</p><p>Combined experience</p></div>
              <div className="rounded-2xl border bg-slate-50 p-4"><p className="font-semibold text-slate-900">24h</p><p>Avg. response time</p></div>
              <div className="rounded-2xl border bg-slate-50 p-4"><p className="font-semibold text-slate-900">100%</p><p>Remote-ready</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Tell us about your bookkeeping or analytics needs and we'll follow up within one business day.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Contact Form (no backend; uses mailto as a quick start) */}
            <form
              className="rounded-2xl border bg-white p-6 shadow-sm grid gap-4"
              action="mailto:nyangayiotuya@gmail.com" // TODO: replace with your email
              method="post"
              encType="text/plain"
            >
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" placeholder="Your full name" required />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium">Service</label>
                <select className="mt-1 w-full rounded-xl border px-3 py-2" name="service">
                  <option>Monthly Bookkeeping</option>
                  <option>Data Analytics & Visualization</option>
                  <option>Grant Writing & Administration (waitlist)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[120px]" name="message" placeholder="Briefly describe your needs"></textarea>
              </div>
              <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium">Send</button>
              <p className="text-xs text-slate-500">Prefer email? Write us at <span className="font-medium">info@your-domain.com</span> {/* TODO: replace */}</p>
            </form>

            {/* Contact Details + Map/Image placeholder */}
            <div className="grid gap-6">
              <div className="rounded-3xl h-64 bg-[url('/images/office.jpg')] bg-cover bg-center border" />
              <div className="grid gap-2 text-sm">
                <p><span className="font-semibold">Email:</span> info@your-domain.com {/* TODO: replace */}</p>
                <p><span className="font-semibold">Phone/WhatsApp:</span> +1 (555) 555-5555 {/* TODO: replace */}</p>
                <p><span className="font-semibold">Location:</span> Remote / By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to get your books in order?</h3>
            <p className="text-slate-300">Start with a free 20‑minute consult.</p>
          </div>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">Book Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-semibold">Rada Analytics</p>
            <p className="mt-2 text-slate-600">Bookkeeping · Analytics · Grants</p>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#services">Bookkeeping</a></li>
              <li><a href="#services">Analytics & Visualization</a></li>
              <li><a href="#services">Grants (soon)</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#about">About</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Rada Analytics. All rights reserved.</div>
      </footer>
    </div>
  );
}
