import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getRevealRecipe = (index, seed) => {
  const key = (index + seed) % 12;
  const variance = ((index * 17 + seed * 7) % 9) - 4;
  const leftOrigin = 14 + ((index * 13 + seed) % 28);
  const rightOrigin = 58 + ((index * 11 + seed) % 28);
  const common = { transformPerspective: 1100 };

  switch (key) {
    case 0:
      return { from: { ...common, clipPath: 'inset(0 97% 0 0)', rotateY: -8 - variance, scale: 0.96, transformOrigin: 'left center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 1:
      return { from: { ...common, clipPath: 'inset(0 0 0 97%)', rotateY: 8 + variance, scale: 0.95, transformOrigin: 'right center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 2:
      return { from: { ...common, clipPath: 'inset(97% 0 0 0)', rotateX: -14 - variance, skewX: -2, transformOrigin: 'top center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 3:
      return { from: { ...common, clipPath: 'inset(0 0 97% 0)', rotateX: 14 + variance, skewX: 2, transformOrigin: 'bottom center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 4:
      return { from: { ...common, clipPath: 'inset(0 49% 0 49%)', scaleX: 0.88, rotateZ: variance * 0.35, transformOrigin: 'center center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 5:
      return { from: { ...common, clipPath: 'inset(49% 0 49% 0)', scaleY: 0.86, rotateX: -8, transformOrigin: 'center center' }, toClip: 'inset(0% 0% 0% 0%)' };
    case 6:
      return { from: { ...common, clipPath: 'circle(0% at ' + leftOrigin + '% 48%)', scale: 0.91, rotateZ: -2 - variance * 0.2, filter: 'blur(7px)' }, toClip: 'circle(150% at ' + leftOrigin + '% 48%)' };
    case 7:
      return { from: { ...common, clipPath: 'circle(0% at ' + rightOrigin + '% 58%)', scale: 0.9, rotateZ: 2 + variance * 0.2, filter: 'blur(6px)' }, toClip: 'circle(150% at ' + rightOrigin + '% 58%)' };
    case 8:
      return { from: { ...common, clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)', rotateY: -7, rotateX: 5, scale: 0.94, transformOrigin: 'top left' }, toClip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
    case 9:
      return { from: { ...common, clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)', rotateY: 7, rotateX: -5, scale: 0.94, transformOrigin: 'bottom right' }, toClip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
    case 10:
      return { from: { ...common, clipPath: 'polygon(50% 47%, 53% 50%, 50% 53%, 47% 50%)', scale: 0.86, rotateZ: 3 + variance * 0.25 }, toClip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
    default:
      return { from: { ...common, clipPath: 'polygon(0 0, 0 0, 100% 100%, 100% 100%)', skewY: variance > 0 ? 4 : -4, scale: 0.93 }, toClip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
  }
};

const revealDestination = (recipe) => ({
  clipPath: recipe.toClip,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  skewX: 0,
  skewY: 0,
  filter: 'blur(0px)',
});

const animateUniqueIntro = (selector, seed) => {
  gsap.utils.toArray(selector).forEach((element, index) => {
    const recipe = getRevealRecipe(index, seed);
    gsap.fromTo(element, recipe.from, {
      ...revealDestination(recipe),
      duration: 0.52 + ((index + seed) % 4) * 0.07,
      delay: 0.16 + index * 0.065,
      ease: index % 3 === 0 ? 'power4.out' : index % 3 === 1 ? 'back.out(1.35)' : 'expo.out',
    });
  });
};

const getClampedRange = (element, startPercent, endPercent) => {
  const maximum = ScrollTrigger.maxScroll(window);
  const top = element.getBoundingClientRect().top + window.scrollY;
  let start = top - window.innerHeight * (startPercent / 100);
  let end = top - window.innerHeight * (endPercent / 100);

  if (end <= 0) {
    return { start: -1, end: 0 };
  }

  if (end > maximum) {
    const shift = end - maximum;
    start -= shift;
    end = maximum;
  }

  start = Math.max(0, start);
  end = Math.max(start + 1, end);
  return { start, end };
};
const animateUniqueScroll = (selector, seed, entryTargets) => {
  gsap.utils.toArray(selector).forEach((element, index) => {
    const recipe = getRevealRecipe(index, seed);
    if (entryTargets.has(element)) {
      gsap.fromTo(element, recipe.from, {
        ...revealDestination(recipe),
        duration: 0.62 + ((index + seed) % 4) * 0.08,
        delay: 0.34 + (index % 3) * 0.07,
        ease: index % 2 ? 'expo.out' : 'power4.out',
      });
      return;
    }

    const startValue = 96 - ((index + seed) % 4) * 2;
    const endValue = 76 - ((index * 3 + seed) % 6) * 3;
    const scrollRange = () => getClampedRange(element, startValue, endValue);
    gsap.fromTo(element, recipe.from, {
      ...revealDestination(recipe),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: () => scrollRange().start,
        end: () => scrollRange().end,
        scrub: 0.42 + ((index + seed) % 5) * 0.11,
        invalidateOnRefresh: true,
      },
    });
  });
};

export default function SiteMotion() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches && window.innerWidth > 900;
    const listeners = [];

    const addListener = (element, type, handler) => {
      element.addEventListener(type, handler);
      listeners.push(() => element.removeEventListener(type, handler));
    };

    const context = gsap.context(() => {
      if (reduced) {
        gsap.set('.route-wipe', { clipPath: 'circle(0% at 86% 8%)' });
        gsap.set('.motion-progress span', { scaleX: 0 });
        return;
      }

      const pathSeed = Array.from(pathname).reduce((total, character) => total + character.charCodeAt(0), 0);
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo('.route-wipe', {
          clipPath: 'circle(150% at 86% 8%)',
        }, {
          clipPath: 'circle(0% at 86% 8%)',
          duration: 0.78,
          ease: 'power4.inOut',
        })
        .fromTo('.announcement-ribbon span', {
          clipPath: 'inset(0 50% 0 50%)',
          letterSpacing: '0.18em',
        }, {
          clipPath: 'inset(0 0% 0 0%)',
          letterSpacing: '0.065em',
          duration: 0.46,
        }, 0.22)
        .fromTo('.brand-link', {
          clipPath: 'inset(0 100% 0 0)',
          rotateY: -12,
          transformPerspective: 800,
        }, {
          clipPath: 'inset(0 0% 0 0)',
          rotateY: 0,
          duration: 0.58,
        }, 0.28)
        .fromTo('.nav-contact, .nav-toggle', {
          scale: 0.72,
          rotate: -3,
        }, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'back.out(1.8)',
        }, 0.42);

      animateUniqueIntro('.nav-link', pathSeed + 7);

      const heroTargets = [
        '.hero-v2-copy .kicker',
        '.hero-v2-copy h1',
        '.hero-v2-lede',
        '.hero-actions',
        '.hero-proof',
        '.compact-page-hero h1',
        '.compact-page-hero p',
        '.page-hero .kicker',
        '.page-hero .page-title',
        '.page-hero .lede',
        '.legal h1',
        '.site-main > .section:first-child .container--narrow > *',
      ].join(',');
      animateUniqueIntro(heroTargets, pathSeed + 19);

      gsap.fromTo('.stage-window--main', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        rotateY: -12,
        scale: 0.94,
        transformPerspective: 1000,
      }, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        rotateY: 0,
        scale: 1,
        duration: 0.95,
        delay: 0.28,
        ease: 'power4.out',
      });
      gsap.fromTo('.stage-window--side', {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        rotateY: 14,
        scale: 0.9,
        transformPerspective: 1000,
      }, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        rotateY: 0,
        scale: 1,
        duration: 0.88,
        delay: 0.46,
        ease: 'power4.out',
      });

      const progress = gsap.to('.motion-progress span', { scaleX: 1, ease: 'none', paused: true });
      ScrollTrigger.create({ animation: progress, trigger: document.documentElement, start: 'top top', end: 'max', scrub: 0.12 });
      const scrollTargets = [
        '.showcase-heading > *',
        '.services-heading > *',
        '.delivery-grid > div',
        '.contact-band > *',
        '.home-intro > *',
        '.story-grid > *',
        '.service-cta .container > *',
        '.footer-top > *',
        '.project-feature',
        '.venture-project',
        '.service-module',
        '.case-story',
        '.service-panel-head',
        '.service-panel h3',
        '.service-panel p',
        '.service-tags',
        '.service-go',
        '.delivery-visual > div',
        '.principle',
        '.team-member',
        '.contact-detail',
        '.field',
        '.timeline-item',
        '.legal h2',
        '.legal p',
        '.legal li',
      ].join(',');
      const entrySelectors = {
        '/partners': ['.venture-project:first-child'],
        '/services': ['.service-module:first-child'],
        '/case-studies': ['.case-story:first-child'],
        '/about': ['.story-grid > *', '.timeline-item:first-child'],
      };
      const entryTargets = new Set(
        (entrySelectors[pathname] || []).flatMap((selector) => gsap.utils.toArray(selector)),
      );
      animateUniqueScroll(scrollTargets, pathSeed + 37, entryTargets);

      gsap.utils.toArray('.project-art img, .venture-art img, .stage-window img').forEach((image, index) => {
        gsap.fromTo(image, {
          scale: 0.72 + (index % 4) * 0.045,
          rotate: ((index * 13) % 11) - 5,
          filter: 'saturate(' + (0.48 + (index % 5) * 0.1) + ') blur(' + (index % 3) + 'px)',
        }, {
          scale: 1,
          rotate: 0,
          filter: 'saturate(1)',
          ease: 'none',
          scrollTrigger: {
            trigger: image.closest('.project-feature, .venture-project, .product-stage') || image,
            start: 'top 96%',
            end: 'top 56%',
            scrub: 0.65,
          },
        });
      });

      gsap.utils.toArray('.service-panel-head svg, .service-module-label svg').forEach((icon, iconIndex) => {
        gsap.fromTo(icon, {
          rotate: -45 - (iconIndex % 6) * 19,
          scale: 0.35 + (iconIndex % 3) * 0.08,
        }, {
          rotate: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: icon.closest('.service-panel, .service-module') || icon,
            start: 'top 92%',
            end: 'top 64%',
            scrub: 0.55,
          },
        });
      });

      gsap.utils.toArray('.system-visual').forEach((visual, visualIndex) => {
        const lines = visual.querySelectorAll('.system-lines b');
        const nodes = visual.querySelectorAll('.system-node');
        const canvasIcon = visual.querySelector('.system-canvas > svg');
        gsap.fromTo(lines, {
          scale: 0,
          transformOrigin: visualIndex % 2 ? 'left center' : 'right center',
        }, {
          scale: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: { trigger: visual, start: 'top 92%', end: 'top 55%', scrub: 0.6 },
        });
        gsap.fromTo(nodes, {
          scale: 0.2,
          rotate: -55 - visualIndex * 17,
        }, {
          scale: 1,
          rotate: 0,
          stagger: 0.12,
          ease: 'none',
          scrollTrigger: { trigger: visual, start: 'top 86%', end: 'top 50%', scrub: 0.55 },
        });
        if (canvasIcon) {
          gsap.fromTo(canvasIcon, {
            scale: 0.48 + (visualIndex % 4) * 0.08,
            rotate: -8 - visualIndex * 4,
          }, {
            scale: 1,
            rotate: 0,
            ease: 'none',
            scrollTrigger: { trigger: visual, start: 'top 88%', end: 'top 56%', scrub: 0.55 },
          });
        }
      });

      if (document.querySelector('.product-stage')) {
        gsap.to('.stage-window--main', {
          rotate: 1.2,
          scale: 0.965,
          ease: 'none',
          scrollTrigger: { trigger: '.hero-v2', start: 'top top', end: 'bottom top', scrub: 0.7 },
        });
        gsap.to('.stage-window--side', {
          rotate: -1.8,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: { trigger: '.hero-v2', start: 'top top', end: 'bottom top', scrub: 0.7 },
        });
      }

      gsap.utils.toArray('.work-showcase, .section--ink').forEach((section) => {
        gsap.fromTo(section, {
          backgroundColor: '#201331',
        }, {
          backgroundColor: '#2b1742',
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      if (finePointer) {
        document.documentElement.classList.add('motion-cursor-enabled');
        const core = document.querySelector('.motion-cursor-core');
        const ring = document.querySelector('.motion-cursor-ring');
        const coreX = gsap.quickTo(core, 'x', { duration: 0.1, ease: 'power3.out' });
        const coreY = gsap.quickTo(core, 'y', { duration: 0.1, ease: 'power3.out' });
        const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3.out' });
        const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3.out' });
        let cursorVisible = false;

        const moveCursor = (event) => {
          coreX(event.clientX);
          coreY(event.clientY);
          ringX(event.clientX);
          ringY(event.clientY);
          if (!cursorVisible) {
            cursorVisible = true;
            gsap.to([core, ring], { autoAlpha: 1, scale: 1, duration: 0.2 });
          }
        };
        const hideCursor = () => {
          cursorVisible = false;
          gsap.to([core, ring], { autoAlpha: 0, scale: 0.5, duration: 0.2 });
        };
        addListener(window, 'pointermove', moveCursor);
        addListener(document.documentElement, 'mouseleave', hideCursor);

        gsap.utils.toArray('a, button, .project-feature, .venture-project, .service-panel, .team-member').forEach((element) => {
          const enter = () => {
            gsap.to(ring, { scale: 1.85, borderColor: '#f2c94c', duration: 0.25 });
            gsap.to(core, { scale: 0.55, backgroundColor: '#f2c94c', duration: 0.25 });
          };
          const leave = () => {
            gsap.to(ring, { scale: 1, borderColor: '#4b2c7f', duration: 0.3 });
            gsap.to(core, { scale: 1, backgroundColor: '#4b2c7f', duration: 0.3 });
          };
          addListener(element, 'pointerenter', enter);
          addListener(element, 'pointerleave', leave);
        });

        gsap.utils.toArray('input, textarea').forEach((element) => {
          const enter = () => gsap.to([core, ring], { autoAlpha: 0, duration: 0.15 });
          const leave = () => gsap.to([core, ring], { autoAlpha: 1, duration: 0.15 });
          addListener(element, 'pointerenter', enter);
          addListener(element, 'pointerleave', leave);
        });

        gsap.utils.toArray('.button, .text-link, .service-panel').forEach((element) => {
          const icon = element.querySelector('svg');
          if (!icon) return;
          const enter = () => gsap.to(icon, { rotate: 45, scale: 1.12, duration: 0.28, ease: 'back.out(2)' });
          const leave = () => gsap.to(icon, { rotate: 0, scale: 1, duration: 0.32, ease: 'power2.out' });
          addListener(element, 'pointerenter', enter);
          addListener(element, 'pointerleave', leave);
        });

        gsap.utils.toArray('.project-feature, .venture-project, .team-member').forEach((element) => {
          const media = element.querySelector('img, .initials');
          if (!media) return;
          const enter = () => gsap.to(media, { scale: 1.06, rotate: 1.2, duration: 0.38, ease: 'power2.out' });
          const leave = () => gsap.to(media, { scale: 1, rotate: 0, duration: 0.38, ease: 'power2.out' });
          addListener(element, 'pointerenter', enter);
          addListener(element, 'pointerleave', leave);
        });

        gsap.utils.toArray('.brand-link, .footer-brand-lockup').forEach((element) => {
          const logo = element.querySelector('img');
          if (!logo) return;
          const enter = () => gsap.to(logo, { scale: 1.1, rotate: -5, duration: 0.32, ease: 'back.out(2)' });
          const leave = () => gsap.to(logo, { scale: 1, rotate: 0, duration: 0.34, ease: 'power2.out' });
          addListener(element, 'pointerenter', enter);
          addListener(element, 'pointerleave', leave);
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, document.body);

    return () => {
      listeners.forEach((remove) => remove());
      document.documentElement.classList.remove('motion-cursor-enabled');
      context.revert();
    };
  }, [pathname]);

  return <>
    <div className="route-wipe" aria-hidden="true"/>
    <div className="motion-progress" aria-hidden="true"><span/></div>
    <span className="motion-cursor-core" aria-hidden="true"/>
    <span className="motion-cursor-ring" aria-hidden="true"/>
  </>;
}










