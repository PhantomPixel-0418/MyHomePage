/**
 * Extracts the dominant color from an image URL by drawing it to a canvas.
 * Returns a hex string.
 */
export const extractDominantColor = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve('#3b82f6'); // Fallback
        return;
      }

      canvas.width = 1;
      canvas.height = 1;
      
      // Draw the image resized to 1x1 to get average color
      ctx.drawImage(img, 0, 0, 1, 1);
      
      const pixel = ctx.getImageData(0, 0, 1, 1).data;
      const r = pixel[0];
      const g = pixel[1];
      const b = pixel[2];
      
      // Convert to hex
      const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      resolve(hex);
    };

    img.onerror = () => {
      resolve('#3b82f6'); // Fallback on error
    };
  });
};

/**
 * Adjusts brightness of a hex color for text legibility if needed.
 */
export const getContrastColor = (hex: string) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#ffffff';
};