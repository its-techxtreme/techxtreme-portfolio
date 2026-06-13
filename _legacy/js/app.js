/* Techxtreme — App */
(function () {
  "use strict";
  const EMAIL = "techxtremebuisness@gmail.com";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Preloader */
  const pre = document.getElementById("preloader");
  const bar = document.querySelector(".preloader-bar span");
  if (pre && !reduced) {
    let p = 0;
    const tick = () => {
      p = Math.min(p + Math.random() * 12, 100);
      if (bar) bar.style.width = p + "%";
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(() => pre.classList.add("done"), 300);
    };
    window.addEventListener("load", () => setTimeout(tick, 200));
    setTimeout(() => pre.classList.add("done"), 3500);
  } else if (pre) pre.classList.add("done");

  /* Lenis smooth scroll */
  if (!reduced && typeof Lenis !== "undefined") {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* Active nav */
  const page = document.body.dataset.page;
  document.querySelectorAll(".dock-links a").forEach((a) => {
    if (a.dataset.nav === page) a.classList.add("active");
  });

  /* Dock hide on scroll */
  const dock = document.getElementById("dock");
  if (dock) {
    let y = 0;
    window.addEventListener("scroll", () => {
      const ny = window.scrollY;
      dock.classList.toggle("hide", ny > 120 && ny > y);
      y = ny;
    }, { passive: true });
  }

  /* Hero words */
  document.querySelectorAll(".hero-home .word").forEach((w, i) => {
    setTimeout(() => w.classList.add("show"), reduced ? 0 : 120 + i * 60);
  });
  document.querySelectorAll(".hero-sub, .hero-actions").forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), reduced ? 0 : 500 + i * 100);
  });

  /* GSAP reveals */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && !reduced) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const end = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
      });
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("show"));
  }

  /* Tabs */
  document.querySelectorAll(".tabs").forEach((wrap) => {
    const btns = wrap.querySelectorAll(".tab-btn");
    const panels = wrap.querySelectorAll(".tab-panel");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.tab;
        btns.forEach((b) => b.classList.toggle("active", b === btn));
        panels.forEach((p) => p.classList.toggle("active", p.id === id));
      });
    });
  });

  /* Work filters */
  const filterBtns = document.querySelectorAll("[data-filter]");
  const tiles = document.querySelectorAll(".project-tile");
  if (filterBtns.length && tiles.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
        tiles.forEach((t) => {
          const cats = (t.dataset.category || "").split(/\s+/);
          const show = f === "all" || cats.includes(f);
          t.dataset.hidden = show ? "false" : "true";
        });
      });
    });
  }

  /* FAQ */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  /* Copy email */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = btn.dataset.label || "Copy email"; }, 2000);
      } catch {
        location.href = "mailto:" + EMAIL;
      }
    });
  });

  /* Contact form validation */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      const msg = document.getElementById("formMsg");
      const name = form.querySelector("[name=name]");
      const email = form.querySelector("[name=email]");
      if (!name.value.trim() || !email.value.trim()) {
        e.preventDefault();
        if (msg) {
          msg.textContent = "Please fill in name and email.";
          msg.className = "form-msg show err";
        }
      }
    });
  }

  /* Swiper */
  if (typeof Swiper !== "undefined") {
    document.querySelectorAll(".swiper-project").forEach((el) => {
      new Swiper(el, {
        loop: true,
        speed: 700,
        autoplay: { delay: 4500 },
        pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
      });
    });
  }

  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
