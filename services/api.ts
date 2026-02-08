import { API_ENDPOINTS } from '../constants';
import { BingImage, QuoteData, TimelessQResponse, HitokotoResponse } from '../types';

// Helper to handle CORS issues with a proxy if direct fail, 
// though we will try direct first or assume deployment env supports it.
// For this demo, we use a public CORS proxy for the Bing API if strictly needed,
// but let's try to construct the URL cleanly.

export const fetchBingImage = async (): Promise<BingImage | null> => {
  try {
    // Note: In a production static app, you might need a serverless function to proxy this 
    // to avoid CORS errors if the browser enforces it strictly.
    // We append a timestamp to prevent caching.
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const targetUrl = encodeURIComponent(API_ENDPOINTS.BING);
    
    const response = await fetch(`${corsProxy}${targetUrl}`);
    if (!response.ok) throw new Error('Bing API failed');
    
    const data = await response.json();
    const image = data.images[0];
    
    return {
      url: `https://www.bing.com${image.url}`,
      copyright: image.copyright,
      title: image.title,
      startdate: image.startdate
    };
  } catch (error) {
    console.warn('Failed to fetch Bing image, using fallback.', error);
    return null;
  }
};

export const fetchChineseQuote = async (): Promise<QuoteData> => {
  const response = await fetch(API_ENDPOINTS.HITOKOTO);
  const data: HitokotoResponse = await response.json();
  return {
    content: data.hitokoto,
    author: data.from_who || data.from,
    source: data.from
  };
};

export const fetchEnglishQuote = async (): Promise<QuoteData> => {
  const response = await fetch(API_ENDPOINTS.TIMELESSQ);
  const json: TimelessQResponse = await response.json();
  // Using the structure defined in the prompt's OpenAPI spec
  return {
    content: json.data.content,
    author: 'Daily English',
    source: json.data.note // Using the translation/note as secondary info
  };
};