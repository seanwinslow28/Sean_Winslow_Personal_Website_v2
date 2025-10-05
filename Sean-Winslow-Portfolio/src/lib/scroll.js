/**
 * Smooth scroll utility based on Locomotive Scroll and GSAP.
 *
 * Lenis migration notes:
 * 1. Replace LocomotiveScroll import with Lenis and instantiate with the same scroller element.
 * 2. Update ScrollTrigger.scrollerProxy to use Lenis' scroll methods (scrollTo, scroll, velocity).
 * 3. Replace locomotive.on('scroll', ...) with lenis.on('scroll', ...).
 * 4. Remove locomotive.update() calls and use lenis.resize() or lenis.update() as documented.
 * 5. Confirm that pinType resolves correctly and adjust smooth inertia settings for Lenis.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let locomotive = null;
let isNativeScroll = false;

function handleAnchorClick(event) {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  const id = anchor.getAttribute('href').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  if (isNativeScroll || !locomotive) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    locomotive.scrollTo(target, { offset: 0, duration: 0.6, disableLerp: true });
  }
  // Focus management
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

export function initSmoothScroll({ scrollerSelector = '[data-scroll-container]' } = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  const scroller = document.querySelector(scrollerSelector);

  // Clean up any previous listeners
  document.removeEventListener('click', handleAnchorClick);

  if (!scroller || prefersReducedMotion || isMobile) {
    isNativeScroll = true;
    document.addEventListener('click', handleAnchorClick);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
    locomotive = new LocomotiveScroll({
      el: scroller,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal'
    });

    locomotive.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        return arguments.length
          ? locomotive.scrollTo(value, { duration: 0, disableLerp: true })
          : locomotive.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scroller.style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => locomotive.update());
    ScrollTrigger.refresh();
  }).catch(err => {
    console.error('Locomotive scroll failed, falling back to native:', err);
    isNativeScroll = true;
  });

  document.addEventListener('click', handleAnchorClick);
}

export function refreshSmoothScroll() {
  if (locomotive) {
    locomotive.update();
  }
  ScrollTrigger.refresh();
}

export function destroySmoothScroll() {
  if (locomotive) {
    locomotive.destroy();
    locomotive = null;
  }
  ScrollTrigger.getAll().forEach(t => t.kill());
  document.removeEventListener('click', handleAnchorClick);
}

export function isUsingNativeScroll() {
  return isNativeScroll;
}
