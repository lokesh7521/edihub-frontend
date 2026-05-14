/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // 1. Check if we are running locally on this machine
  const isLocal = 
    hostname === "localhost" || 
    hostname === "127.0.0.1";

  // 2. Check if we are on a local network IP (e.g., 192.168.x.x)
  const isLocalNetwork = /^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(hostname);

  if (isLocal) {
    return "http://localhost:5001/api";
  }

  if (isLocalNetwork) {
    // If testing on phone via local Wi-Fi, try to connect to the computer's IP
    return `http://${hostname}:5001/api`;
  }

  // 3. For ANY other network (Mobile Data, Production, etc.)
  // We use the public Railway URL
  return "https://edihub-backend-prod.up.railway.app/api";
};



