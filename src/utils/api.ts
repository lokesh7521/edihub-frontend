/**
 * Utility to get the correct API URL based on the environment.
 * Automatically switches between Localhost and Production.
 */
export const getApiUrl = () => {
  return import.meta.env.VITE_API_URL;
};



