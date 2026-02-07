import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { X, RotateCcw, FileJson } from 'lucide-react';

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  const { settings, setQuoteSource, resetSettings } = useSettings();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-md p-6 animate-fade-in">
      <div className="w-full max-w-sm bg-white/90 dark:bg-[#1c1c1e]/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden transform transition-all scale-100 text-slate-900 dark:text-white">
        <div className="flex items-center justify-between p-5 border-b border-black/5 dark:border-white/10">
          <h2 className="text-lg font-semibold tracking-wide">设置</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Quote Source */}
          <div className="space-y-4">
            <label className="text-xs font-semibold text-slate-500 dark:text-white/50 uppercase tracking-wider">每日一言来源</label>
            <div className="flex bg-gray-100 dark:bg-black/30 p-1 rounded-xl">
              <button 
                onClick={() => setQuoteSource('chinese')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  settings.quoteSource === 'chinese' 
                    ? 'bg-white dark:bg-white/20 text-black dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/60'
                }`}
              >
                中文 (一言)
              </button>
              <button 
                onClick={() => setQuoteSource('english')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  settings.quoteSource === 'english' 
                    ? 'bg-white dark:bg-white/20 text-black dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/60'
                }`}
              >
                English (每日)
              </button>
            </div>
          </div>

          {/* Configuration Hint */}
          <div className="space-y-4">
             <label className="text-xs font-semibold text-slate-500 dark:text-white/50 uppercase tracking-wider">个人信息配置</label>
             <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-black/5 dark:border-white/5 flex items-start gap-3">
               <FileJson className="text-[color:var(--dynamic-color)] shrink-0 mt-0.5" size={18} />
               <div className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                 个人简介、社交链接及项目列表均通过代码中的 <code className="bg-black/5 dark:bg-white/10 px-1 rounded text-slate-900 dark:text-white font-mono">constants.ts</code> 文件进行静态配置。
               </div>
             </div>
          </div>
        </div>

        <div className="p-5 border-t border-black/5 dark:border-white/10">
          <button 
            onClick={() => {
                resetSettings();
                onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 active:scale-[0.98] transition-all text-sm font-medium"
          >
            <RotateCcw size={16} /> 重置所有偏好
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;