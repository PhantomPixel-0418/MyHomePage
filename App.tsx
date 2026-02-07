import React, { useState, useEffect } from 'react';
import { SettingsProvider, useSettings } from './context/SettingsContext';
import { fetchBingImage } from './services/api';
import { extractDominantColor } from './utils/color';
import Clock from './components/Clock';
import Quote from './components/Quote';
import Dashboard from './components/Dashboard';
import SettingsPanel from './components/SettingsPanel';
import { Settings, Info } from 'lucide-react';

const AppContent: React.FC = () => {
  const { settings, setThemeColor } = useSettings();
  const [bgUrl, setBgUrl] = useState<string>('');
  const [bgInfo, setBgInfo] = useState<{title: string, copyright: string} | null>(null);
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const initBackground = async () => {
      let url = 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=2000&q=80'; // Fallback
      
      if (settings.useBingDaily) {
        const bingData = await fetchBingImage();
        if (bingData) {
          url = bingData.url;
          setBgInfo({ title: bingData.title, copyright: bingData.copyright });
        }
      }

      setBgUrl(url);
      
      const color = await extractDominantColor(url);
      setThemeColor(color);
      setLoaded(true);
    };

    initBackground();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDashboard = () => setDashboardOpen(!isDashboardOpen);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out transform scale-105"
        style={{ backgroundImage: `url(${bgUrl})`, opacity: loaded ? 1 : 0 }}
      />
      
      {/* Lighter Gradient Overlay - Only dims the bottom significantly for text contrast if needed, keeps top fresh */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 dark:to-black/60 pointer-events-none" />

      {/* Backdrop when Dashboard is Open - Standard Dimming */}
      <div 
        className={`absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-500 ${isDashboardOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setDashboardOpen(false)}
      />

      {/* Main Content */}
      <main className={`relative z-10 flex flex-col items-center justify-center h-full pb-32 px-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isDashboardOpen ? '-translate-y-10 scale-95 opacity-50 blur-sm' : ''}`}>
        <Clock />
        <div className="mt-10 w-full max-w-4xl drop-shadow-lg">
           <Quote />
        </div>
      </main>

      {/* Top Right Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <button 
          onClick={() => setSettingsOpen(true)}
          className="p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/10 text-white hover:bg-white/30 dark:hover:bg-black/40 transition-all active:scale-95 shadow-lg"
        >
          <Settings size={20} />
        </button>
      </div>
      
      {/* Background Info (Bottom Right) */}
      {bgInfo && (
        <div className={`absolute bottom-[6rem] right-8 z-20 text-right max-w-[200px] md:max-w-xs transition-all duration-500 hidden md:block ${isDashboardOpen ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
           <div className="flex items-center justify-end gap-2 text-white/90 text-sm font-semibold tracking-wide drop-shadow-md">
             <Info size={14} />
             <span className="truncate">{bgInfo.title}</span>
           </div>
           <p className="text-white/80 text-xs mt-1.5 font-light truncate drop-shadow-md">{bgInfo.copyright}</p>
        </div>
      )}

      {/* Dashboard - Pull-out style */}
      <Dashboard isOpen={isDashboardOpen} onToggle={toggleDashboard} />
      
      {isSettingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
};

export default App;