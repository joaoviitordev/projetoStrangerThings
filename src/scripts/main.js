document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // ─── SCROLL SUAVE + PARALLAX ───────────────────────────────────────────────
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  });

  // ─── PRELOADER ────────────────────────────────────────────────────────────
  function initPreloader(onCompleteCallback) {
    const tl = gsap.timeline({
      onComplete() {
        if (onCompleteCallback) onCompleteCallback();
        gsap.to(".pre-loader", {
          opacity: 0,
          duration: 0.5,
          display: "none"
        });
      }
    });

    tl.to(".pre-loader path", {
      strokeDashoffset: 0,
      duration: 1.5
    });

    tl.to(".pre-loader path", {
      fill: "rgb(200, 22, 22)",
      duration: 1
    });
  }

  // ─── HERO ─────────────────────────────────────────────────────────────────
  function initHeroAnimation() {
    gsap.from(".hero", {
      opacity: 0,
      duration: 1.3
    });

    // Monstro vindo de cima
    gsap.from(".hero picture:nth-child(1)", {
      y: -70,
      duration: 1.3
    });

    // Personagens vindo de baixo
    gsap.from(".hero picture:nth-child(2)", {
      y: 70,
      duration: 1.5
    });
  }

  // ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────
  function initScrollAnimations() {
    // Cards de cidades
    gsap.from(".card", {
      opacity: 0,
      y: 10,
      filter: "blur(5px)",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".card-cidades",
        start: "0% 95%",
        end: "0% 70%",
        scrub: 2
      }
    });

    // Lista de cidades
    gsap.from(".agradecimento ul li", {
      opacity: 0,
      x: 30,
      filter: "blur(5px)",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".agradecimento ul li",
        scrub: true,
        start: "0% 95%",
        end: "10% 65%"
      }
    });

    // Footer
    gsap.from("footer", {
      y: "-30%",
      immediateRender: false,
      scrollTrigger: {
        trigger: "footer",
        start: "0% 90%",
        end: "19% 30%",
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    // Animação de texto (SplitText)
    const textosSplit = document.querySelectorAll(".textSplit");

    textosSplit.forEach((el) => {
      const split = SplitText.create(el, {
        type: "lines, words, chars",
        mask: "lines"
      });

      gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.03,
        duration: 0.3,
        scrollTrigger: {
          trigger: el
        }
      });
    });
  }

  // ─── INICIALIZAÇÃO ────────────────────────────────────────────────────────
  const animarPagina = () => {
    initHeroAnimation();
    initScrollAnimations();
  };

  initPreloader(animarPagina);
});
