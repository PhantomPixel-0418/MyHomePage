import React, { useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { USER_CONFIG } from '../constants';
import { Github, Globe, ExternalLink, Code2, User, ChevronRight, ChevronUp } from 'lucide-react';

interface DashboardProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isOpen, onToggle }) => {
  const { settings } = useSettings();
  const { profile, projects } = USER_CONFIG;
  const [activeTab, setActiveTab] = useState<'profile' | 'projects'>('profile');

  // iOS Style Spring Animation & Pull-out Logic
  // Adapts to Light/Dark mode: Lighter glass in light mode, Darker in dark mode.
  const containerClass = `
    fixed inset-x-0 bottom-0 z-40 w-full h-[85vh] md:h-[70vh]
    bg-white/80 dark:bg-[#1c1c1e]/85 backdrop-blur-3xl saturate-150 border-t border-white/20 dark:border-white/10
    rounded-t-[2.5rem] shadow-[0_-10px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_-10px_60px_rgba(0,0,0,0.6)]
    transform transition-transform duration-700 cubic-bezier(0.32, 0.72, 0, 1) text-slate-900 dark:text-white
    ${isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-5rem)] hover:translate-y-[calc(100%-5.5rem)]'}
  `;

  const primaryColor = settings.themeColor;

  return (
    <div className={containerClass}>
      {/* Pull Handle / Header Area */}
      <div 
        className="w-full h-20 flex flex-col items-center pt-3 cursor-pointer group" 
        onClick={onToggle}
      >
        {/* Pill Handle */}
        <div className="w-12 h-1.5 bg-gray-300 dark:bg-white/30 rounded-full group-hover:bg-gray-400 dark:group-hover:bg-white/50 transition-colors mb-2" />
        
        {/* Text/Label on Drawer Handle */}
        <div className={`flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500 ${isOpen ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <span>探索</span>
          <ChevronUp size={12} className="animate-bounce-slow" />
        </div>
      </div>

      <div className="flex flex-col h-full px-6 pb-24 md:px-12 md:max-w-5xl md:mx-auto">
        {/* iOS Segmented Control Style Tabs */}
        <div className={`flex p-1 mb-8 bg-gray-100 dark:bg-white/10 rounded-xl md:w-fit self-center md:self-start transition-all duration-700 delay-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveTab('profile'); }}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === 'profile' 
                ? 'bg-white dark:bg-white/20 text-black dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <User size={16} /> 关于我
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveTab('projects'); }}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === 'projects' 
                ? 'bg-white dark:bg-white/20 text-black dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Code2 size={16} /> 项目展示
          </button>
        </div>

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar pb-24 transition-all duration-700 delay-150 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-[auto_1fr] gap-8">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{profile.name}</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-white/20 dark:border-white/5 backdrop-blur-md">
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-3">Bio</h3>
                    <p className="text-lg text-gray-800 dark:text-white/90 leading-relaxed font-light tracking-wide">
                    {profile.bio}
                    </p>
                </div>
                
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-3">Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a 
                            href={profile.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-95 transition-all border border-white/20 dark:border-white/5 text-gray-900 dark:text-white group"
                        >
                            <span className="flex items-center gap-3"><Github size={20} /> GitHub</span>
                            <ChevronRight size={16} className="text-gray-400 dark:text-white/30 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                        </a>
                        {profile.customLinks.map((link, idx) => (
                            <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-95 transition-all border border-white/20 dark:border-white/5 text-gray-900 dark:text-white group"
                            >
                            <span className="flex items-center gap-3"><Globe size={20} /> {link.label}</span>
                            <ChevronRight size={16} className="text-gray-400 dark:text-white/30 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a 
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col p-6 rounded-3xl bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 active:scale-[0.98] border border-white/20 dark:border-white/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: primaryColor }} />
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    <div className="p-2 rounded-full bg-white/50 dark:bg-white/5 group-hover:bg-white/80 dark:group-hover:bg-white/20 transition-colors">
                        <ExternalLink size={16} className="text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-white/70 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white/60 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;