// Vincular Gsap e suas extensões com o Js

document.addEventListener("DOMContentLoaded"), (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)
}

// Scroll Suave => ScrollSmoother

ScrollSmoother.create({
	smooth: 1,
	effects: true
});