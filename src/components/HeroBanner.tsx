import { contactConfig } from '../config/contact';

export default function HeroBanner() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Butuh Bantuan?</h2>
          <p className="text-lg text-white/90">Tim kami siap membantu Anda kapan saja melalui WhatsApp</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={contactConfig.bannerImage}
            alt="Operator Layanan Pelanggan"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
