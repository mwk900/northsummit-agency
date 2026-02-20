import { useEffect, useMemo, useState } from "react";

type NavSection = {
  id: string;
  label: string;
};

type Props = {
  sections: NavSection[];
  showAfterPx?: number;
  offsetTopPx?: number;
  position?: "right" | "left";
};

export default function ScrollSpyNav({
  sections,
  showAfterPx = 280,
  offsetTopPx = 96,
  position = "right",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  // Show / hide based on scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfterPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  // Intersection observer for active section
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${offsetTopPx + 12}px 0px -55% 0px`,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetTopPx]);

  if (!sections.length) return null;

  /**
   * Desktop gutter positioning
   * Assumes max-w-6xl container (72rem)
   */
  const GUTTER = "clamp(10px, calc((100vw - 72rem) / 2 - 10px), 56px)";

  /**
   * Mobile alignment near arrow button
   */
  const SMALL_EDGE = "calc(1.5rem + 5px)";

  /**
   * Use max() so it moves inward on small screens
   */
  const sideStyle =
    position === "left"
      ? { left: `max(${GUTTER}, ${SMALL_EDGE})` }
      : { right: `max(${GUTTER}, ${SMALL_EDGE})` };

  return (
    <nav
      aria-label="Page sections"
      className={[
        "fixed z-50 bottom-40 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 pointer-events-none translate-x-2",
      ].join(" ")}
      style={sideStyle}
    >
      <div
        className={[
          "rounded-2xl border border-white/20",
          "px-0.5 py-1 shadow-[0_6px_18px_rgba(0,0,0,0.12)]",
          "bg-white/55 backdrop-blur-md",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-0.5">
          {sections.map((s) => {
            const isActive = s.id === activeId;

            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={[
                    "block rounded-lg",
                    "px-3 py-1.5 lg:px-2 lg:py-1",
                    "text-[16px] lg:text-[14px] leading-5",
                    "transition-all",
                    isActive
                      ? "text-white dark:text-black font-semibold bg-white/15"
                      : "text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black hover:bg-white/10",
                  ].join(" ")}
                >
                  <span className="whitespace-nowrap">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}