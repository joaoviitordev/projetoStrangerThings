// Registrar plugins com verificação para evitar erro se algum não foi carregado
const _plugins = [];
if (typeof ScrollTrigger !== 'undefined') _plugins.push(ScrollTrigger);
if (typeof ScrollSmoother !== 'undefined') _plugins.push(ScrollSmoother);
if (typeof SplitText !== 'undefined') _plugins.push(SplitText);

if (_plugins.length) gsap.registerPlugin(..._plugins);

// Scroll Suave => ScrollSmoother (cria somente se o plugin estiver disponível)
if (typeof ScrollSmoother !== 'undefined') {
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smoooth-content',
    smooth: 1.5,
    effects: true,
    normalizeScroll: true
  });
} else {
  console.warn('ScrollSmoother não está disponível. Verifique se o script foi carregado corretamente.');
}