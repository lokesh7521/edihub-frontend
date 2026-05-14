/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // 1. Only use local backend if we are literally on localhost
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:5001/api";
  }

  // 2. For EVERYTHING else (Phone, Mobile Data, Production Vercel link, etc.)
  // We use your public Railway URL
  return "https://edihub-api-new-v1.up.railway.app/api";
};



