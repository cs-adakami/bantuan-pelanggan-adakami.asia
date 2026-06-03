import { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Headset,
  FileText,
  MessagesSquare,
} from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function MenuCard() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    const items = sectionRef.current?.querySelectorAll('.service-card');
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage
  )}`;

  const services = [
    {
      icon: ShieldCheck,
      title: 'Informasi Akun',
      description: 'Verifikasi akun dan pengecekan status layanan pengguna.',
    },
    {
      icon: Headset,
      title: 'Dukungan Teknis',
      description: 'Bantuan masalah aplikasi, sistem, atau akses layanan.',
    },
    {
      icon: FileText,
      title: 'Panduan Penggunaan',
      description: 'Penjelasan alur dan cara penggunaan layanan secara benar.',
    },
    {
      icon: MessagesSquare,
      title: 'Laporan & Masukan',
      description: 'Kirim laporan kendala atau saran perbaikan layanan.',
    },
  ];

  return (
    <div className="service-section" ref={sectionRef}>
      <div className="service-header">
        <h2>Layanan Dukungan</h2>
        <p>Pilih layanan yang sesuai kebutuhan Anda</p>
      </div>

      <div className="service-grid">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="service-icon">
                <Icon size={24} />
              </div>

              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}