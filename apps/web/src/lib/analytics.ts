declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function track(event: string, data?: Record<string, unknown>) {
  window.umami?.track(event, data);
}

function describeElement(el: Element): string {
  const ariaLabel = el.getAttribute("aria-label")?.trim();
  const text = el.textContent?.trim().replace(/\s+/g, " ").slice(0, 80);
  if (ariaLabel) return ariaLabel;
  if (el instanceof HTMLAnchorElement) return text || el.href;
  return text || el.tagName.toLowerCase();
}

function trackClicks() {
  document.addEventListener(
    "click",
    (e) => {
      if (window.location.pathname.startsWith("/admin")) return;
      const target = (e.target as Element | null)?.closest(
        "a, button, [role='button'], [data-umami-event]",
      );
      if (!target) return;
      track("click", {
        element: target.tagName.toLowerCase(),
        label: describeElement(target),
        href: target instanceof HTMLAnchorElement ? target.href : undefined,
        path: window.location.pathname,
      });
    },
    { capture: true },
  );
}

const SCROLL_THRESHOLDS = [25, 50, 75, 90, 100];

function trackScrollDepth() {
  let currentPath = window.location.pathname;
  let reached = new Set<number>();
  let ticking = false;

  function checkScroll() {
    ticking = false;
    if (window.location.pathname.startsWith("/admin")) return;
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      reached = new Set();
    }
    const viewport = window.innerHeight;
    const full = document.documentElement.scrollHeight;
    if (full <= viewport) return;
    const pct = Math.round(((window.scrollY + viewport) / full) * 100);
    for (const threshold of SCROLL_THRESHOLDS) {
      if (pct >= threshold && !reached.has(threshold)) {
        reached.add(threshold);
        track("scroll_depth", { percent: threshold, path: currentPath });
      }
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScroll);
      }
    },
    { passive: true },
  );
}

export function initAnalyticsTracking() {
  trackClicks();
  trackScrollDepth();
}
