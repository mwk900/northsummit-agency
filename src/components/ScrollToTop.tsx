import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setVisible(window.scrollY > window.innerHeight);
      setHasBanner(document.body.hasAttribute('data-banner'));
    };

    updateState();

    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);

    const observer = new MutationObserver(() => {
      setHasBanner(document.body.hasAttribute('data-banner'));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-banner'],
    });

    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bottomOffset = hasBanner
    ? 'calc(4rem + env(safe-area-inset-bottom, 0px))'
    : 'calc(24px + env(safe-area-inset-bottom, 0px))';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed left-6 z-40"
          style={{ bottom: bottomOffset }}
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
