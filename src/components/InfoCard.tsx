import { contactConfig } from '../config/contact';
import { Phone, MapPin } from 'lucide-react';

export default function InfoCard() {

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.displayPhone);
      alert('Nomor berhasil disalin');
    } catch {
      alert('Gagal menyalin nomor');
    }
  };

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

              <button
                onClick={copyNumber}
                className="text-base text-left text-green-700 font-medium"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                Salin Nomor
              </button>
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