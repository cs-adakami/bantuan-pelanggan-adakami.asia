import { contactConfig } from '../config/contact';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Butuh Bantuan?</h2>
          <p className="hero-subtitle">Tim kami siap membantu Anda kapan saja melalui WhatsApp</p>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={contactConfig.bannerImage}
            alt="Banner Layanan"
            className="banner-img-responsive"
          />
        </div>
      </div>
    </div>
  );
}
