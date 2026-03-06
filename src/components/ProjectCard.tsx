import { useCallback } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  hook?: string;
  image: string;
  category?: string | string[];
  link: string;
  // Allow extra props from siteConfig without TS errors
  [key: string]: unknown;
}

export default function ProjectCard({
  title,
  description,
  category,
  link,
}: ProjectCardProps) {
  // Measure container width on mount and set the CSS scale variable.
  // iframe is 1440×900px (16/10); scale = containerWidth / 1440 fills the container exactly.
  const containerRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    const update = () => {
      const scale = el.offsetWidth / 1440;
      const iframeHeight = Math.ceil(el.offsetHeight / scale);
      el.style.setProperty('--iframe-scale', String(scale));
      el.style.setProperty('--iframe-height', `${iframeHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
  }, []);

  const categories = category
    ? Array.isArray(category)
      ? category
      : [category]
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
        <iframe
          src={link}
          title={`Preview of ${title}`}
          loading="lazy"
          tabIndex={-1}
          style={{
            pointerEvents: 'none',
            border: 'none',
            width: '1440px',
            height: 'var(--iframe-height, 900px)',
            transform: 'scale(var(--iframe-scale))',
            transformOrigin: 'top left',
          }}
        />
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
        {categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
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
        <p className="text-sm text-text-secondary line-clamp-3">{description}</p>
      </div>
    </a>
  );
}
