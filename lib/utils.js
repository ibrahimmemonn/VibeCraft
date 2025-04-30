/**
 * Combine multiple class names into a single string
 * @param {...string} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Delay execution for a specified amount of time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after the delay
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a random color hex code
 * @returns {string} - Hex color code
 */
export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

/**
 * Check if a color is light or dark
 * @param {string} color - Hex color code
 * @returns {boolean} - True if the color is light
 */
export function isLightColor(color) {
  // Convert hex to RGB
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return true if light, false if dark
  return luminance > 0.5;
}

/**
 * Generate a contrasting text color (black or white) based on background color
 * @param {string} backgroundColor - Hex color code of the background
 * @returns {string} - Black or white hex color code
 */
export function getContrastTextColor(backgroundColor) {
  return isLightColor(backgroundColor) ? "#000000" : "#ffffff";
}

/**
 * Format a date to a readable string
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
