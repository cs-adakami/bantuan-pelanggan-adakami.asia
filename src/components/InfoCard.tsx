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
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>
          Informasi Kontak
        </h3>

        <div className="contact-info">

          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', alignItems: 'flex-start' }}>
            <Phone size={20} color="#059669" />

            <div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                Nomor WhatsApp
              </p>

              <button
                onClick={copyNumber}
                style={{
                  display: 'block',
                  marginTop: '4px',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  color: '#047857',
                  fontWeight: 600,
                  fontSize: '15px',
                  textAlign: 'left'
                }}
              >
                Salin Nomor
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <MapPin size={20} color="#059669" />

            <div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                Lokasi
              </p>

              <p style={{ marginTop: '4px', fontSize: '15px' }}>
                {contactConfig.address}
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="info-block">
        <p style={{ fontSize: '13px', color: '#6b7280', fontStyle: 'italic', margin: 0 }}>
          Hubungi kami melalui WhatsApp untuk respons cepat dan konsultasi gratis tentang layanan kami.
        </p>
      </div>

    </div>
  );
}