/* Techxtreme Portfolio */
(function () {
  "use strict";

  const EMAIL = "techxtremebuisness@gmail.com";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Preloader */
  const preloader = document.getElementById("preloader");
  const progressBar = document.getElementById("preloaderProgress");
  const countEl = document.getElementById("preloaderCount");

  function finishPreloader() {
    if (preloader) preloader.classList.add("done");
    document.body.style.overflow = "";
    initApp();
  }

  function runPreloader() {
    if (!preloader || prefersReduced) {
      finishPreloader();
      return;
    }
    let progress = 0;
    const images = Array.from(document.querySelectorAll("img"));
    let loaded = 0;
    const total = Math.max(images.length, 1);

    const tick = () => {
      const target = Math.min(100, Math.round((loaded / total) * 100));
      if (progress < target) {
        progress = Math.min(progress + 3, target);
        if (progressBar) progressBar.style.width = progress + "%";
        if (countEl) countEl.textContent = String(progress);
      }
    };

    images.forEach((img) => {
      if (img.complete) { loaded++; tick(); }
      else {
        img.addEventListener("load", () => { loaded++; tick(); });
        img.addEventListener("error", () => { loaded++; tick(); });
      }
    });

    const interval = setInterval(tick, 25);
    window.addEventListener("load", () => {
      clearInterval(interval);
      if (progressBar) progressBar.style.width = "100%";
      if (countEl) countEl.textContent = "100";
      setTimeout(finishPreloader, 500);
    });
    setTimeout(finishPreloader, 4000);
  }

  document.body.style.overflow = "hidden";
  runPreloader();

  function initApp() {
    initMenu();
    initCopyEmail();
    if (!isTouch && !prefersReduced) initCursor();
    initHeroAnimation();
    initGSAP();
    initSwipers();
    initLightbox();
    initTilt();
    initMagnetic();
    initHeaderScroll();
  }

  function initMenu() {
    const btn = document.getElementById("menuBtn");
    const overlay = document.getElementById("navOverlay");
    if (!btn || !overlay) return;
    const toggle = () => {
      const open = overlay.classList.toggle("open");
      btn.classList.toggle("active", open);
      document.body.classList.toggle("menu-open", open);
    };
    btn.addEventListener("click", toggle);
    overlay.querySelectorAll("[data-nav]").forEach((link) => {
      link.addEventListener("click", () => {
        overlay.classList.remove("open");
        btn.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  function initCopyEmail() {
    const toast = document.getElementById("copyToast");
    const copy = async (btn) => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        if (toast) {
          toast.textContent = "Email copied to clipboard";
          toast.classList.remove("show");
          void toast.offsetWidth;
          toast.classList.add("show");
        } else if (btn) btn.textContent = "Copied!";
      } catch {
        window.location.href = "mailto:" + EMAIL;
      }
    };
    document.getElementById("copyEmailHero")?.addEventListener("click", () => copy());
    document.getElementById("copyEmailContact")?.addEventListener("click", () => copy());
  }

  function initCursor() {
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursorDot");
    if (!cursor || !dot) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    });
    const hoverables = "a, button, .showcase-media, .service-card, [data-magnetic]";
    document.addEventListener("mouseover", (e) => {
      cursor.classList.toggle("hover", !!e.target.closest(hoverables));
    });
    (function loop() {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
      requestAnimationFrame(loop);
    })();
  }

  function initHeroAnimation() {
    const words = document.querySelectorAll(".hero-title .word");
    const desc = document.querySelector(".hero-desc");
    const cta = document.querySelector(".hero-cta");
    if (prefersReduced) {
      words.forEach((w) => w.classList.add("revealed"));
      desc?.classList.add("revealed");
      cta?.classList.add("revealed");
      return;
    }
    words.forEach((w, i) => {
      setTimeout(() => {
        w.style.transition = "transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
        w.classList.add("revealed");
      }, 180 + i * 70);
    });
    setTimeout(() => {
      desc?.classList.add("revealed");
      if (desc) desc.style.transition = "opacity 0.8s, transform 0.8s";
    }, 750);
    setTimeout(() => {
      cta?.classList.add("revealed");
      if (cta) cta.style.transition = "opacity 0.8s, transform 0.8s";
    }, 950);
  }

  function initGSAP() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReduced) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      return;
    }
    const heroImg = document.querySelector(".hero-bg-img");
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });
    }
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
    gsap.utils.toArray(".showcase").forEach((el) => {
      gsap.from(el.querySelector(".showcase-media"), {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    });
  }

  function initSwipers() {
    if (typeof Swiper === "undefined") return;
    document.querySelectorAll(".project-swiper").forEach((el) => {
      new Swiper(el, {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
      });
    });
  }

  function initLightbox() {
    if (typeof GLightbox !== "undefined") {
      GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        closeButton: true,
      });
    }
  }

  function initTilt() {
    if (isTouch || prefersReduced) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  function initMagnetic() {
    if (isTouch || prefersReduced) return;
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById("header");
    if (!header) return;
    let lastY = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      header.classList.toggle("hidden", y > 100 && y > lastY);
      lastY = y;
    }, { passive: true });
  }
})();
