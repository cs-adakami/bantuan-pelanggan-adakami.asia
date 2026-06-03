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
        <h3>Informasi Kontak</h3>

        <div className="contact-box">

          <div className="contact-item">
            <Phone size={18} />
            <div>
              <p>Nomor WhatsApp</p>
              <button onClick={copyNumber}>Salin Nomor</button>
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={18} />
            <div>
              <p>Lokasi</p>
              <span>{contactConfig.address}</span>
            </div>
          </div>

        </div>
      </div>

      <div className="info-block">
        <p className="note">
          Hubungi kami melalui WhatsApp untuk respon cepat.
        </p>
      </div>

    </div>
  );
}