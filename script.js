document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    // Scroll Suave com Gsap!
    ScrollSmoother.create ({
        smooth: 1,
        effects: true
    });

    
 });