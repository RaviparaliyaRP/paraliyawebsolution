'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const LiveChatStatus = () => {
  const [status, setStatus] = useState({
    isOnline: false,
    message: "We're Currently Offline",
    subtext: "Back on Monday at 10:00 AM"
  });

  const checkOnlineStatus = () => {
    // Get current time in IST
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    const day = istTime.getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
    const hours = istTime.getHours();
    
    // Sunday (0) = Closed
    if (day === 0) {
      return {
        isOnline: false,
        message: "We're Currently Offline",
        subtext: "Back on Monday at 10:00 AM"
      };
    }
    
    // Monday-Saturday (1-6)
    // Business hours: 10 AM - 7 PM (10-19 in 24hr format)
    if (day >= 1 && day <= 6) {
      if (hours >= 10 && hours < 19) {
        return {
          isOnline: true,
          message: "We're Online Now",
          subtext: "Usually replies within 2 hours"
        };
      }
      
      // Outside business hours
      if (hours < 10) {
        return {
          isOnline: false,
          message: "We're Currently Offline",
          subtext: "Back at 10:00 AM"
        };
      } else {
        // After 7 PM
        const tomorrow = day === 6 ? 'Monday' : 'tomorrow';
        return {
          isOnline: false,
          message: "We're Currently Offline",
          subtext: `Back ${tomorrow} at 10:00 AM`
        };
      }
    }
    
    // Default fallback
    return {
      isOnline: false,
      message: "We're Currently Offline",
      subtext: "Back on Monday at 10:00 AM"
    };
  };

  useEffect(() => {
    // Check status immediately
    setStatus(checkOnlineStatus());
    
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(checkOnlineStatus());
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`rounded-lg border p-4 mb-8 transition-colors duration-300 ${
      status.isOnline 
        ? 'bg-blue-50 border-blue-200' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <span className={`w-3 h-3 rounded-full flex-shrink-0 ${
            status.isOnline 
              ? 'bg-green-500 animate-pulse' 
              : 'bg-red-500'
          }`} />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-base sm:text-lg text-gray-900">
              {status.message}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              {status.subtext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatStatus;
