import { contactConfig } from '../config/contact';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Butuh Bantuan?</h2>
          <p className="hero-subtitle">Tim kami siap membantu Anda kapan saja melalui WhatsApp</p>
        </div>
        <div className="hero-image-container">
          <img
            src={contactConfig.bannerImage}
            alt="Operator Layanan Pelanggan"
            className="hero-image"
          />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
      <div className="hero-accent"></div>
    </div>
  );
}
