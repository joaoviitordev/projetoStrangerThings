document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // Scroll Suave + Efeito Parallax com Gsap!
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  });

  function animarPagina() {
    /* EFEITOS DA HERO - Efeito de fade */
    gsap.from(".hero", {
      opacity: 0,
      duration: 1.3
    });

    // Efeito do Monstro vindo de cima
    gsap.from("picture:nth-child(1)", {
      y: -70,
      duration: 1.3
    });

    // Efeito dos personagens vindo de baixo
    gsap.from("picture:nth-child(2)", {
      y: 70,
      duration: 1.5
    });

    /* EFEITO DOS CARDS */
    gsap.from(".card", {
      opacity: 0,
      y: 10,
      filter: "blur(5px)",
      stagger: .5,
      scrollTrigger: {
        trigger: ".card",
        start: "0% 95%",
        end: "0% 70%",
        scrub: 2  // Serve para a animação depender somente do scroll
      }
    });

    // Efeito na lista de cidades
    gsap.from(".agradecimento ul li", {
      opacity: 0,
      x: 30,
      filter: "blur(5px)",
      stagger: .03,
      scrollTrigger: {
        trigger: ".agradecimento ul li",
        scrub: true,
        start: "0% 95%",
        end: "10% 65%"
      }
    });

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

    /* ANIMAÇÃO NAS PALAVRAS */
    const TextosSplits = document.querySelectorAll(".textSplit");

    TextosSplits.forEach((TextosIndividuaisSplit) => {
      const split = SplitText.create(TextosIndividuaisSplit, {
        type: "lines, words, chars", // Tipo ==> letras, palavras, linhas...
        mask: "lines"
      });

      gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        stagger: .03,
        duration: .3,
        scrollTrigger: {
          trigger: TextosIndividuaisSplit
        }
      });
    });
  }

  

  /* PRÉ-LOADER */
  const tl = gsap.timeline({
    onComplete() {
      animarPagina()
      gsap.to(".preLoader", {
        opacity: 0,
        duration: .5,
        display: "none"
      });
    }
  });

  tl.to(".preLoader path", {
    strokeDashoffset: 0,
    duration: 1.5
  });

  tl.to(".preLoader path", {
    fill: "rgb(200, 22, 22)",
    duration: 1
  });
});

// chars = caractéres