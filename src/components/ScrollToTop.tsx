import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hasLaunchBanner, setHasLaunchBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1023px)');

    const updateMobileState = () => {
      setIsMobile(mobileQuery.matches);
    };

    const updateState = () => {
      setVisible(window.scrollY > window.innerHeight);
      setHasLaunchBanner(Boolean(document.getElementById('launch-pricing-banner')));
    };

    updateMobileState();
    updateState();

    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', updateMobileState);
    } else {
      mobileQuery.addListener(updateMobileState);
    }

    const observer = new MutationObserver(updateState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener('change', updateMobileState);
      } else {
        mobileQuery.removeListener(updateMobileState);
      }
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mobileBottomOffsetPx = hasLaunchBanner ? 120 : 24;
  const bottomOffsetPx = isMobile ? mobileBottomOffsetPx : 24;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed left-6 z-40"
          style={{
            bottom: `calc(${bottomOffsetPx}px + env(safe-area-inset-bottom, 0px))`,
          }}
        >
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Scroll to top"
            style={{ color: 'var(--primary-bg)' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
