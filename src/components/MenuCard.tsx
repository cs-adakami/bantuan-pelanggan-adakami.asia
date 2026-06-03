import { contactConfig } from '../config/contact';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export default function MenuCard() {
  const handleWhatsAppClick = (menuItem: typeof contactConfig.menuItems[0]) => {
    const message = `${contactConfig.whatsappMessage} (${menuItem.title})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const getIconComponent = (iconName: string) => {
    const Icon = Icons[iconName as IconName];
    return Icon ? <Icon className="menu-item-icon" /> : null;
  };

  return (
    <div className="menu-section">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bantuan Layanan</h2>
      <div className="menu-grid">
        {contactConfig.menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => handleWhatsAppClick(item)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleWhatsAppClick(item);
              }
            }}
          >
            <div className="flex items-start gap-2">
              {getIconComponent(item.icon)}
              <div className="flex-1">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
