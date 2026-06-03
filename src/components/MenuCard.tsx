import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function MenuCard() {
  const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage
  )}`;

  const menuItems = [
    {
      title: 'Informasi Akun',
      description: 'Bantuan verifikasi status akun dan akses sistem.',
    },
    {
      title: 'Dukungan Teknis',
      description: 'Bantuan kendala aplikasi dan error sistem.',
    },
    {
      title: 'Panduan Penggunaan',
      description: 'Penjelasan cara penggunaan layanan dengan benar.',
    },
    {
      title: 'Laporan & Masukan',
      description: 'Kirim laporan atau saran untuk perbaikan layanan.',
    },
    {
      title: 'Keamanan',
      description: 'Informasi terkait keamanan data dan privasi.',
    },
    {
      title: 'Konsultasi',
      description: 'Hubungi tim untuk konsultasi langsung.',
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
            <MessageCircle size={22} />
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