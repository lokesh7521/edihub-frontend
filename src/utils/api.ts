/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  let url = "";

  // 1. If we are running locally (localhost), use the local backend
  if (
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1"
  ) {
    url = "http://localhost:5001/api";
  } else {
    // 2. Otherwise, use the production URL (Railway)
    // We fall back to the environment variable set in Vercel
    url = import.meta.env.VITE_API_URL || "https://edihub-backend.up.railway.app/api";
  }

  // Ensure the URL doesn't have a trailing slash before /api if the user added it in Vercel
  url = url.replace(/\/$/, "");

  console.log("🔗 Using API URL:", url);
  return url;
};

