import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppSettings } from '../types';
import { DEFAULT_SETTINGS } from '../constants';

interface SettingsContextType {
  settings: AppSettings;
  setQuoteSource: (source: 'chinese' | 'english') => void;
  setThemeColor: (color: string) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('linkium_settings_v2');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('linkium_settings_v2', JSON.stringify(settings));
    // Set CSS variable for dynamic theme
    document.documentElement.style.setProperty('--dynamic-color', settings.themeColor);
  }, [settings]);

  const setQuoteSource = (source: 'chinese' | 'english') => {
    setSettings(prev => ({ ...prev, quoteSource: source }));
  };

  const setThemeColor = (color: string) => {
    setSettings(prev => ({ ...prev, themeColor: color }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <SettingsContext.Provider value={{ 
      settings, 
      setQuoteSource,
      setThemeColor,
      resetSettings 
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};