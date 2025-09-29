import React from 'react';

const AppleLoader = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      {/* Background blur circles */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-20 right-20" />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 bottom-20 left-20" />
      </div>
      
      {/* Apple Logo Loader */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Apple Logo */}
        <div className="apple-loader mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-full blur-sm animate-pulse"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-white/80 text-lg font-light tracking-wider animate-pulse">
          Загрузка...
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse transform scale-x-0 origin-left animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default AppleLoader;