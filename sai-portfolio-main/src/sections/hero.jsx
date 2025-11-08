import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Transforming Data into Insights",
    "Building Interactive Dashboards",
    "Analyzing Business Metrics",
    "Creating Data-Driven Solutions",
    "Visualizing Complex Patterns"
  ];

  useEffect(() => {
    // Generate random data points for animation
    const points = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setDataPoints(points);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentPhrase.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIndex]);

  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
      {/* Left Section - Light Gray Background with Animation */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        {/* Animated Data Points Background */}
        <div className="absolute inset-0 opacity-20">
          {dataPoints.map((point) => (
            <div
              key={point.id}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                animationDelay: `${point.delay}s`,
                animationDuration: `${point.duration}s`
              }}
            />
          ))}
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {dataPoints.slice(0, 15).map((point, i) => {
              const nextPoint = dataPoints[(i + 1) % 15];
              return (
                <line
                  key={`line-${i}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: `${point.delay}s` }}
                />
              );
            })}
          </svg>
        </div>

        {/* Animated Bar Chart */}
        <div className="absolute bottom-10 right-10 flex items-end gap-2 opacity-30">
          {[40, 65, 50, 80, 45, 70].map((height, i) => (
            <div
              key={i}
              className="w-8 bg-blue-600 rounded-t transition-all duration-1000 ease-in-out"
              style={{
                height: `${height}px`,
                animation: `growBar 2s ease-in-out ${i * 0.2}s infinite alternate`
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes growBar {
            from { transform: scaleY(0.7); }
            to { transform: scaleY(1); }
          }
        `}</style>

        <div className="max-w-2xl w-full space-y-6 relative z-10">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-light animate-fade-in">
            Hi, I am
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-black leading-tight animate-slide-up">
            Saimohan S
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Data Analyst & Business Intelligence Specialist
          </p>
          {/* Typing Animation */}
          <div className="h-12 flex items-center">
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <div className="pt-4 flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-up {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
            animation-fill-mode: both;
          }
        `}</style>
      </div>

      {/* Right Section - Light Background with Image */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center relative p-8 lg:p-16 overflow-hidden">
        <div className="relative w-full max-w-md z-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <img 
            src="/profilepic 2.JPG" 
            alt="Saimohan S" 
            className="w-full h-auto rounded-lg object-cover shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 text-center italic relative z-10">
          My job is to find the data that proves the 'HiPPO' wrong
          </p>
        </div>
        
        {/* Decorative overlay shape */}
        <div 
          className="absolute top-0 left-0 w-2/5 h-full bg-gray-100 dark:bg-gray-800" 
          style={{ 
            clipPath: 'polygon(0 0, 85% 0, 65% 100%, 0 100%)',
            zIndex: 1
          }}
        />
        
        {/* Floating numbers animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {['0.95', '87%', '2.4K', '99.7', '4.2M'].map((num, i) => (
            <div
              key={i}
              className="absolute text-blue-500 font-mono text-lg opacity-20 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              {num}
            </div>
          ))}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSection;