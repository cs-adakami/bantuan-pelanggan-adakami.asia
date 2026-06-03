import { contactConfig } from '../config/contact';
import { Phone, MapPin } from 'lucide-react';

export default function InfoCard() {
  return (
    <div className="info-section">
      <div className="info-block">
        <h2>{contactConfig.aboutTitle}</h2>
        <p>{contactConfig.aboutText}</p>
      </div>

      <div className="info-block">
        <h3 className="text-gray-800 font-semibold mb-3">Informasi Kontak</h3>
        <div className="contact-info">
          <div className="flex items-start gap-2 mb-3">
            <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Nomor WhatsApp</p>
              <p className="text-base">{contactConfig.displayPhone}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Lokasi</p>
              <p className="text-base">{contactConfig.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info-block">
        <p className="text-sm text-gray-600 italic">
          Hubungi kami melalui WhatsApp untuk respons cepat dan konsultasi gratis tentang layanan kami.
        </p>
      </div>
    </div>
  );
}
