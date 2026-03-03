document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollSmoother,SplitText)
    // Scroll Suave + Efeito Parallax com Gsap!
    ScrollSmoother.create ({
        smooth: 1.5,
        effects: true
    });

    /* EFEITOS DA HERO */
    
    // Efeito de fade
    gsap.from(".hero", {
        opacity: 0,
        duration: 1.7
    });

    // Efeito do Monstro vindo de cima
    gsap.from("picture:nth-child(1)",{
        y: -70,
        duration: 1.7
    });

    // Efeito dos personagens vindo de baixo
    gsap.from("picture:nth-child(2)",{
        y: 70,
        duration: 1.7
    });

    /* EFEITO DOS CARDS */
    
    gsap.from(".card", {
        opacity: 0,
        duration: 1,
        y: 30,
        filter: "blur(10px)",
        stagger: .3,
    });

    
 });

/* 
* effects: true => serve para adicionar efeito em um determinado atributo escolhido que será adicionado em um elemento do HTML 
* ele quem faz o efeito paralax ocorrer.
* stagger ==> faz a animações em sequencia
*/