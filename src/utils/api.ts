/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  // 1. If we are running locally (localhost), use the local backend
  if (
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:5001/api";
  }

  // 2. Otherwise, use the production URL (Railway)
  // We fall back to the environment variable set in Vercel
  return import.meta.env.VITE_API_URL || "https://edihub-backend-production.up.railway.app/api";
};
