/**
 * Centralized API base URL for the Website.
 * Reads from NEXT_PUBLIC_API_URL env var, falls back to Railway production backend.
 */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://ua-engineering-pte-ltd-backend-production.up.railway.app";

/**
 * Normalizes image paths so uploaded blog images load from the correct active backend API.
 */
export const getBlogImageUrl = (imagePath: string): string => {
  if (!imagePath) return "/images/logo.png";
  
  if (imagePath.startsWith("http") || imagePath.startsWith("data:")) {
    // If it points to localhost from a local database post, replace it with the live backend URL
    return imagePath.replace("http://localhost:5000", API_BASE);
  }
  
  if (imagePath.startsWith("/images/uploads/")) {
    return `${API_BASE}${imagePath}`;
  }
  
  return imagePath; // Falls back to local public assets (like logo, layout images)
};
