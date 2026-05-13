/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  let url = "";

  // 1. Localhost Check
  if (
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1"
  ) {
    url = "http://localhost:5001/api";
  } else {
    // 2. Production (Railway)
    // We are FORCING the shorter URL because the "production" one has DNS issues
    url = "https://edihub-backend.up.railway.app/api";
  }


  // Ensure consistent formatting
  url = url.replace(/\/$/, "");
  if (url.endsWith("/api/api")) url = url.replace(/\/api\/api$/, "/api");
  if (!url.endsWith("/api")) url += "/api";

  console.log("🔗 Connecting to API at:", url);
  return url;
};


