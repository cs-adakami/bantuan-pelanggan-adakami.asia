import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from './config/contact';
import LogoMark from './components/LogoMark';
import HeroBanner from './components/HeroBanner';
import MenuCard from './components/MenuCard';
import InfoCard from './components/InfoCard';
import './styles.css';
import './no-copy.css';

export default function App() {
  useEffect(() => {
    // Inject SEO meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.querySelector(`meta[property="${name}"]`);
      }
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(name.includes(':') ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update title
    document.title = contactConfig.pageTitle;

    // Standard SEO Meta Tags
    setMetaTag('description', contactConfig.pageSubtitle);
    setMetaTag('canonical', contactConfig.siteUrl);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('keywords', 'bantuan pelanggan, layanan, konsultasi, support');

    // Open Graph Tags
    setMetaTag('og:title', contactConfig.pageTitle);
    setMetaTag('og:description', contactConfig.pageSubtitle);
    setMetaTag('og:url', contactConfig.siteUrl);
    setMetaTag('og:type', 'website');
    setMetaTag('og:image', contactConfig.logoImage);
    setMetaTag('og:site_name', contactConfig.serviceName);

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', contactConfig.pageTitle);
    setMetaTag('twitter:description', contactConfig.pageSubtitle);
    setMetaTag('twitter:image', contactConfig.logoImage);

    // Additional Meta Tags
    setMetaTag('author', contactConfig.serviceName);
    setMetaTag('theme-color', '#10b981');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Set favicon and apple touch icon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', contactConfig.logoImage);

    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.setAttribute('href', contactConfig.logoImage);

    // Set fallback logo text if image doesn't load
    const handleImageError = () => {
      const fallback = document.getElementById('logo-fallback');
      if (fallback) {
        fallback.style.display = 'block';
      }
    };

    const img = document.querySelector('img[alt*="Layanan"]') as HTMLImageElement;
    if (img) {
      img.addEventListener('error', handleImageError);
      return () => img.removeEventListener('error', handleImageError);
    }
  }, []);

  const handleFloatingWhatsApp = () => {
    const encodedMessage = encodeURIComponent(contactConfig.whatsappMessage);
    const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header>
        <LogoMark />
        <h1>{contactConfig.pageTitle}</h1>
        <p>{contactConfig.pageSubtitle}</p>
      </header>

      <HeroBanner />

      <main>
        <div className="glass-card">
          <div className="card-content">
            <MenuCard />
            <InfoCard />
          </div>
        </div>
      </main>

      <div className="floating-whatsapp">
        <button
          onClick={handleFloatingWhatsApp}
          className="btn btn-whatsapp"
          title={`Hubungi kami di WhatsApp: ${contactConfig.displayPhone}`}
          aria-label="Hubungi kami di WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      <footer>
        <p>{contactConfig.footerText}</p>
      </footer>
    </>
  );
}
