import React, { useEffect, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { fetchChineseQuote, fetchEnglishQuote } from '../services/api';
import { QuoteData } from '../types';
import { RefreshCw } from 'lucide-react';

const Quote: React.FC = () => {
  const { settings } = useSettings();
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);

  const loadQuote = async () => {
    setLoading(true);
    try {
      const data = settings.quoteSource === 'chinese' 
        ? await fetchChineseQuote() 
        : await fetchEnglishQuote();
      setQuote(data);
    } catch (error) {
      console.error(error);
      setQuote({ content: "生活不止眼前的苟且，还有诗和远方的田野。", author: "高晓松" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.quoteSource]);

  if (!quote) return null;

  return (
    <div className="group relative max-w-2xl mx-auto text-center px-6 py-8 transition-all duration-300">
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
        <p className="text-xl md:text-2xl font-serif font-medium leading-relaxed drop-shadow-lg text-white/90 tracking-wide">
          “{quote.content}”
        </p>
        <div className="mt-5 flex items-center justify-center gap-3 text-white/70 font-sans text-sm tracking-widest uppercase">
          <span className="font-semibold">— {quote.author}</span>
          {quote.source && <span className="opacity-60 px-2 py-0.5 rounded-full bg-white/10 text-[10px]">《{quote.source}》</span>}
        </div>
      </div>
      
      <button 
        onClick={loadQuote}
        disabled={loading}
        className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 hover:scale-110 active:scale-90 backdrop-blur-md"
        aria-label="刷新"
      >
        <RefreshCw className={`w-4 h-4 text-white ${loading ? 'animate-spin' : ''}`} />
      </button>
    </div>
  );
};

export default Quote;