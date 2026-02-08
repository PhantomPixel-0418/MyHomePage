import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    // Chinese date format: 2月6日 星期五
    return date.toLocaleDateString('zh-CN', { 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="flex flex-col items-center justify-center select-none drop-shadow-2xl text-white">
      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter font-sans text-white/90 mix-blend-overlay">
        {formatTime(time)}
      </h1>
      <p className="text-lg md:text-2xl font-medium opacity-80 mt-2 tracking-widest font-sans">
        {formatDate(time)}
      </p>
    </div>
  );
};

export default Clock;