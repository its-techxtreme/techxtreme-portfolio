import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export function LightModeLayout() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#1a1c1b]">
      {/* Inject the Stitch design system styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Studio Aesthetic Design System */
          .glass-surface {
            background: rgba(249, 249, 247, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(78, 96, 88, 0.1);
          }
          
          .glass-inner-stroke {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .sage-glow-shadow {
            box-shadow: 0 8px 32px rgba(78, 96, 88, 0.08), 0 2px 8px rgba(78, 96, 88, 0.05);
          }
          
          .rose-underline {
            position: relative;
          }
          
          .rose-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background: #D4A5A5;
            transition: height 0.3s ease;
          }
          
          .rose-underline:hover::after {
            height: 2px;
          }
          
          /* Color palette */
          :root {
            --primary: #4e6058;
            --secondary: #7b5455;
            --surface: #f9f9f7;
            --surface-container-low: #f4f4f1;
            --on-primary: #ffffff;
            --on-surface: #1a1c1b;
            --on-surface-variant: #424845;
            --primary-fixed: #d3e7dd;
            --secondary-fixed: #ffdad9;
            --secondary-fixed-dim: #ecbbba;
            --outline-variant: #c2c8c3;
          }
        `
      }} />

      {/* Floating Navigation */}
      <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 items-center gap-1 rounded-full glass-surface glass-inner-stroke px-2 py-1.5 md:w-auto sage-glow-shadow">
        <Link
          to="/"
          className="rounded-full bg-[#4e6058] px-3.5 py-2 font-bold text-sm text-white"
        >
          TX
        </Link>
        
        <nav className="hidden items-center gap-0.5 md:flex">
          <Link
            to="/work"
            className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition hover:bg-black/[0.06] text-[#424845] hover:text-[#1a1c1b]"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition hover:bg-black/[0.06] text-[#424845] hover:text-[#1a1c1b]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-4 py-2 text-[0.82rem] font-semibold transition hover:bg-black/[0.06] text-[#424845] hover:text-[#1a1c1b]"
          >
            Contact
          </Link>
        </nav>

        <div className="ml-1 hidden items-center gap-2 md:flex">
          {/* Theme Toggle for Light Mode */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative flex h-9 w-16 items-center rounded-full border border-[#c2c8c3] bg-[#f4f4f1]/50 p-1 transition-colors hover:bg-[#eeeeec]"
            aria-label="Switch to dark mode"
          >
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7b5455] to-[#D4A5A5] text-sm shadow-[0_2px_8px_rgba(123,84,85,0.25)]"
              style={{ transform: 'translateX(28px)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  fill="currentColor"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162z"
                />
              </svg>
            </div>
          </button>
          
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-gradient-to-br from-[#4e6058] to-[#7b5455] px-6 py-2.5 text-[0.82rem] font-bold text-white transition-all hover:shadow-lg"
          >
            Start project
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24">
        <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
          <div className="mb-12">
            <span className="text-xs font-semibold text-[#7b5455] uppercase tracking-widest mb-4 block">
              Premium Digital Studio
            </span>
            <h1 className="font-black text-5xl md:text-7xl text-[#4e6058] mb-6 leading-none tracking-tight">
              Remote Digital Studio
            </h1>
            <p className="text-xl text-[#424845] max-w-2xl mx-auto leading-relaxed mb-8">
              We build high-converting websites, AI platforms, and digital directories for founders worldwide. 
              Precision meets artistry in every pixel.
            </p>
            <button className="inline-flex items-center gap-3 rounded-full bg-[#4e6058] px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl hover:scale-105">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4e6058] mb-4">Expertise</h2>
            <div className="h-1 w-24 bg-[#ecbbba]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group glass-surface glass-inner-stroke p-8 rounded-xl sage-glow-shadow hover:translate-y-[-8px] transition-all duration-500">
              <div className="w-12 h-12 bg-[#d3e7dd]/40 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#4e6058] group-hover:text-white transition-colors">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-[#4e6058] mb-4">Websites</h3>
              <p className="text-[#424845] leading-relaxed">
                High-performance marketing sites engineered for narrative and conversion. Built with precision and aesthetic mastery.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="group glass-surface glass-inner-stroke p-8 rounded-xl sage-glow-shadow hover:translate-y-[-8px] transition-all duration-500">
              <div className="w-12 h-12 bg-[#ffdad9]/40 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#7b5455] group-hover:text-white transition-colors">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-[#4e6058] mb-4">AI Platforms</h3>
              <p className="text-[#424845] leading-relaxed">
                Seamlessly integrating machine learning into intuitive interfaces that feel human, purposeful, and powerful.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="group glass-surface glass-inner-stroke p-8 rounded-xl sage-glow-shadow hover:translate-y-[-8px] transition-all duration-500">
              <div className="w-12 h-12 bg-[#d3e7dd]/40 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#4e6058] group-hover:text-white transition-colors">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-[#4e6058] mb-4">Directories</h3>
              <p className="text-[#424845] leading-relaxed">
                Complex information architectures simplified into elegant, searchable, and highly usable digital repositories.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4e6058] mb-12">How We Build</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Decorative Connector Line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-[#c2c8c3]/30 -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex-1 text-center group">
              <div className="w-24 h-24 mx-auto bg-[#f9f9f7] glass-surface glass-inner-stroke rounded-full flex items-center justify-center mb-6 sage-glow-shadow group-hover:border-[#4e6058] transition-all duration-300">
                <span className="text-2xl font-bold text-[#4e6058]">01</span>
              </div>
              <h4 className="text-2xl font-bold text-[#4e6058] mb-2">Discovery</h4>
              <p className="text-[#424845] px-4">Deep dive into your business logic, goals, and user personas.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex-1 text-center group">
              <div className="w-24 h-24 mx-auto bg-[#f9f9f7] glass-surface glass-inner-stroke rounded-full flex items-center justify-center mb-6 sage-glow-shadow group-hover:border-[#7b5455] transition-all duration-300">
                <span className="text-2xl font-bold text-[#7b5455]">02</span>
              </div>
              <h4 className="text-2xl font-bold text-[#4e6058] mb-2">Design</h4>
              <p className="text-[#424845] px-4">Iterative prototyping with a focus on high-craft visual storytelling.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex-1 text-center group">
              <div className="w-24 h-24 mx-auto bg-[#f9f9f7] glass-surface glass-inner-stroke rounded-full flex items-center justify-center mb-6 sage-glow-shadow group-hover:border-[#4e6058] transition-all duration-300">
                <span className="text-2xl font-bold text-[#4e6058]">03</span>
              </div>
              <h4 className="text-2xl font-bold text-[#4e6058] mb-2">Development</h4>
              <p className="text-[#424845] px-4">Code built for performance, accessibility, and long-term maintainability.</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex-1 text-center group">
              <div className="w-24 h-24 mx-auto bg-[#f9f9f7] glass-surface glass-inner-stroke rounded-full flex items-center justify-center mb-6 sage-glow-shadow group-hover:border-[#7b5455] transition-all duration-300">
                <span className="text-2xl font-bold text-[#7b5455]">04</span>
              </div>
              <h4 className="text-2xl font-bold text-[#4e6058] mb-2">Launch</h4>
              <p className="text-[#424845] px-4">Seamless deployment with ongoing optimization and growth strategy.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
          <div className="glass-surface glass-inner-stroke rounded-2xl p-12 sage-glow-shadow">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4e6058] mb-6">Ready to Build?</h2>
            <p className="text-xl text-[#424845] mb-8 max-w-2xl mx-auto">
              Let's transform your vision into a high-performing digital experience that converts visitors into customers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#4e6058] to-[#7b5455] px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-5 md:px-16 border-t border-[#c2c8c3]/30">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-[#424845] mb-4">© 2026 Techxtreme. Premium digital experiences, delivered remotely.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-[#7b5455] hover:text-[#4e6058] transition-colors">Twitter</a>
            <a href="#" className="text-[#7b5455] hover:text-[#4e6058] transition-colors">LinkedIn</a>
            <a href="#" className="text-[#7b5455] hover:text-[#4e6058] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}