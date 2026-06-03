export default function LogoMark() {
  return (
    <div className="logo-mark flex items-center justify-center mb-6 lg:mb-8">
      <div className="relative">
        {/* Logo Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-20 -z-10"></div>
        
        {/* Logo Container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
          {/* SVG Logo - Professional Gradient */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="h-20 lg:h-28 w-auto drop-shadow-lg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Define Gradients */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="accentGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {/* Background Circle */}
            <circle cx="60" cy="60" r="58" fill="url(#logoGradient)" opacity="0.15" />
            <circle cx="60" cy="60" r="55" fill="none" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.3" />

            {/* Main Shape - Stylized 'A' */}
            <g>
              {/* Left stroke */}
              <path
                d="M 30 90 L 60 25 L 90 90"
                stroke="url(#logoGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Horizontal bar */}
              <path
                d="M 42 65 L 78 65"
                stroke="url(#accentGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </g>

            {/* Accent dots */}
            <circle cx="25" cy="30" r="3" fill="url(#accentGradient)" opacity="0.8" />
            <circle cx="95" cy="45" r="2.5" fill="url(#accentGradient)" opacity="0.6" />

            {/* Animated ring effect */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="1.5"
              opacity="0.2"
              strokeDasharray="314"
              strokeDashoffset="0"
              style={{
                animation: "spin 8s linear infinite"
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
