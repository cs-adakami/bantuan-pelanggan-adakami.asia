import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function MenuCard() {
  const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage
  )}`;

  const menuItems = [
    {
      title: 'Informasi Akun',
      description: 'Bantuan verifikasi status akun dan akses layanan.',
    },
    {
      title: 'Dukungan Teknis',
      description: 'Bantuan masalah aplikasi atau sistem.',
    },
    {
      title: 'Panduan Penggunaan',
      description: 'Petunjuk penggunaan layanan.',
    },
    {
      title: 'Laporan & Masukan',
      description: 'Kirim laporan atau saran.',
    },
    {
      title: 'Keamanan',
      description: 'Informasi keamanan data.',
    },
    {
      title: 'Konsultasi',
      description: 'Hubungi tim layanan.',
    },
  ];

  return (
    <div className="menu-grid">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <div className="menu-item-icon">
            <MessageCircle size={20} />
          </div>

          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}