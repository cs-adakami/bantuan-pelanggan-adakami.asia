import { contactConfig } from '../config/contact';

export default function LogoMark() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    const fallback = document.getElementById('logo-fallback');
    if (fallback) {
      fallback.style.display = 'block';
    }
  };

  return (
    <div className="logo-mark flex items-center justify-center mb-6 lg:mb-8">
      <div className="relative">
        {/* Logo Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-20 -z-10"></div>
        
        {/* Logo Container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
          <img
            src={contactConfig.logoImage}
            alt={contactConfig.serviceName}
            className="h-20 lg:h-28 w-auto max-w-sm object-contain drop-shadow-lg"
            onError={handleImageError}
          />
        </div>
      </div>
      
      {/* Fallback Text */}
      <span
        id="logo-fallback"
        className="hidden text-3xl lg:text-5xl font-bold text-white font-sans tracking-tight"
        style={{ display: 'none' }}
      >
        Adakami
      </span>
    </div>
  );
}
