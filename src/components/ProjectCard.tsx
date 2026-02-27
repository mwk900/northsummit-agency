import Image from 'next/image';

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
  hook,
  image,
  category,
  link,
}: ProjectCardProps) {
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
      <div className="relative aspect-video overflow-hidden bg-border-color">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-95"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-30"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
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
        {hook && <p className="text-sm text-text-secondary italic mb-2">{hook}</p>}
        <p className="text-sm text-text-secondary line-clamp-3">{description}</p>
      </div>
    </a>
  );
}