// BIBLIOTECA GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina(){
    // ANIMAÇÃO HERO
gsap.from(".hero", {
  opacity: 0,
  duration: 0.7,
});

gsap.from("picture:nth-child(2)", {
  y: 60,
  duration: 1,
});

gsap.from("picture:nth-child(1)", {
  y: -60,
  duration: 1,
});

// ANIMAÇÃO CARDS
gsap.from(".card", {
  opacity: 0,
  y: 30,
  filter: "blur(10px)",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".cards",
    start: "0% 80%",
    end: "100% 80%",
    scrub: true,
    //markers: true ---> para facilitar ajustes
  },
});

gsap.from(".secaoObrigado ul li", {
  opacity: 0,
  x: 40,
  filter: "blur(10px)",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".secaoObrigado ul",
    start: "0% 80%",
    end: "100% 50%",
    scrub: true,
  },
});

// ANIMAÇÕES FOOTER
gsap.from("footer", {
  y: "-30%",
  immediateRender: false,
  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    invalidateOnRefresh: true,
    end: "100% 100%",
  },
});

const grupoTextoSplit = document.querySelectorAll(".textoSplit");

grupoTextoSplit.forEach((textoUnicoSplit) => {
  const split = SplitText.create(textoUnicoSplit, {
    type: "words, chars",
    mask: "lines",
  });

  gsap.from(split.chars, {
    y: 40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.03,
    scrollTrigger: {
      trigger: textoUnicoSplit,
    },
  });
});

}

// PRE LOADER -> CRIA TIMELINE
const tl = gsap.timeline({
    onComplete(){
        animarPagina()
        gsap.to("#preloader", {
            opacity: 0,
            display: "none"
        })
    }
});

 tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
 })

  tl.to("#preloader path", {
    fill: "rgba(1669, 19, 19)",
    duration: .5,
    strokeDashoffset: 0,
 })
