import React from 'react';

const Options = () => {
  return (
    <div className="relative w-full h-[50dvh] overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/images/Enter.mp4" type="video/mp4" />
        {/* Fallback content */}
        Your browser does not support the video tag.
      </video>
      
      {/* Content on top of video */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Options</h1>
      </div>
      
      {/* Optional: Overlay for styling the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}

export { Options };
