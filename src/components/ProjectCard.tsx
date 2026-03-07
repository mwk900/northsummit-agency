import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const DESKTOP_PREVIEW_WIDTH = 1280;
const DESKTOP_PREVIEW_HEIGHT = 800;
const IFRAME_ZOOM = 1.02;
const IFRAME_BOTTOM_BLEED = 16;

interface ProjectCardProps {
  title: string;
  description: string;
  hook?: string;
  image: string;
  trade?: string | string[];
  link: string;
  // Allow extra props from siteConfig without TS errors
  [key: string]: unknown;
}

export default function ProjectCard({
  title,
  description,
  image,
  trade,
  link,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !loaded) return;

    const update = () => {
      const cardWidth = el.clientWidth;
      const cardHeight = el.clientHeight;
      if (!cardWidth || !cardHeight) return;
      const scale = cardWidth / DESKTOP_PREVIEW_WIDTH;
      const iframeHeight = Math.ceil((cardHeight + IFRAME_BOTTOM_BLEED) / scale);
      el.style.setProperty('--iframe-width', `${DESKTOP_PREVIEW_WIDTH}px`);
      el.style.setProperty('--iframe-scale', String(scale * IFRAME_ZOOM));
      el.style.setProperty('--iframe-height', `${iframeHeight}px`);
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [loaded]);

  const trades = trade
    ? Array.isArray(trade)
      ? trade
      : [trade]
    : [];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border-color overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
      style={{ backgroundColor: 'var(--secondary-bg)' }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/10', backgroundColor: 'var(--secondary-bg)' }}
      >
        {loaded ? (
          <iframe
            src={link}
            title={`Preview of ${title}`}
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
            className="absolute top-0 left-1/2"
            style={{
              pointerEvents: 'none',
              border: 'none',
              display: 'block',
              width: 'var(--iframe-width, 1280px)',
              height: `var(--iframe-height, ${DESKTOP_PREVIEW_HEIGHT}px)`,
              transform: 'translateX(-50%) scale(var(--iframe-scale))',
              transformOrigin: 'top center',
            }}
          />
        ) : imgError ? (
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <span className="text-sm font-medium text-text-secondary px-4 text-center">{title}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-lg bg-accent text-sm font-semibold"
            style={{ color: 'var(--primary-bg)' }}
          >
            View live site
          </span>
        </div>
      </div>

      <div className="p-5">
        {trades.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {trades.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="max-h-[3.5rem] group-hover:max-h-[12rem] transition-[max-height] duration-300 ease-in-out overflow-hidden">
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>
    </a>
  );
}
