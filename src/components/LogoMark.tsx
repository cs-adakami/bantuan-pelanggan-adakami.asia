import { contactConfig } from '../config/contact';

export default function LogoMark() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="logo-mark flex items-center justify-center mb-4">
      <img
        src={contactConfig.logoImage}
        alt={contactConfig.serviceName}
        className="h-16 w-auto max-w-xs object-contain"
        onError={handleImageError}
      />
      <span
        id="logo-fallback"
        className="hidden text-4xl font-bold text-white"
        style={{ display: 'none' }}
      >
        Adakami
      </span>
    </div>
  );
}

// Show fallback text if image fails to load
if (typeof document !== 'undefined') {
  const observer = new MutationObserver(() => {
    const img = document.querySelector('img[alt*="Layanan"]');
    const fallback = document.getElementById('logo-fallback');
    if (img && fallback && img.style.display === 'none') {
      fallback.style.display = 'block';
    }
  });
  observer.observe(document.body, { subtree: true, attributes: true });
}
