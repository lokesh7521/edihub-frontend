/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // 1. Check if we are on localhost or a local network IP (for mobile testing)
  const isLocal = 
    hostname === "localhost" || 
    hostname === "127.0.0.1" || 
    hostname.startsWith("192.168.") || 
    hostname.startsWith("10.") || 
    hostname.endsWith(".local");

  if (isLocal) {
    // If you're testing on a mobile device on the same WiFi, 
    // you MUST use your computer's IP address here instead of 'localhost'.
    // However, for the browser running on the same PC, 'localhost' is fine.
    // To make it universal, we use the current hostname.
    return `http://${hostname}:5000/api`;
  }

  // 2. Production URL (Railway)
  return import.meta.env.VITE_API_URL || "https://edihub-backend-production.up.railway.app/api";
};



