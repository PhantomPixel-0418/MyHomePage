import { AppSettings, Project, UserProfile } from './types';

// =================================================================
// 个人配置 (JSON 格式)
// 请在此处修改你的个人信息、项目列表等。
// 这里的修改会直接反映到页面上，无需通过设置面板更改。
// =================================================================

export const USER_CONFIG = {
  profile: {
    name: 'Linkium-suki',
    bio: '前端工程师 | UI/UX 爱好者 | 开源贡献者。致力于打造像素级完美的数字体验，探索现代 Web 技术的无限可能。',
    avatar: 'https://avatars.githubusercontent.com/u/101039439?v=4',
    email: 'linkium.workspace@gmail.com',
    github: 'https://github.com/Linkium-suki',
    customLinks: [
        { label: '博客', url: '#' },
        { label: '推特', url: '#' }
    ]
  },
  projects: [
    {
      id: '1',
      name: 'Personal Dashboard Refactor',
      description: '基于 React, TypeScript 和 Tailwind 的现代化个人主页重构项目，支持动态主题色与 iOS 风格交互。',
      url: 'https://github.com/Linkium-suki',
      tags: ['React', 'TypeScript', 'UI/UX']
    },
    {
      id: '2',
      name: 'Project Nebula',
      description: '一个用于高性能数据渲染的实验性 WebGL 可视化库。',
      url: '#',
      tags: ['WebGL', 'Graphics']
    },
    {
      id: '3',
      name: 'Bing Wallpaper API',
      description: '封装了 Bing 每日壁纸的无服务器 API 服务。',
      url: '#',
      tags: ['API', 'Node.js']
    }
    // 其余以此类推
  ]
};

// =================================================================
// 系统常量
// =================================================================

export const DEFAULT_SETTINGS: AppSettings = {
  quoteSource: 'chinese',
  useBingDaily: true,
  themeColor: '#3b82f6', // 默认颜色，会被动态覆盖
};

export const API_ENDPOINTS = {
  BING: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
  HITOKOTO: 'https://v1.hitokoto.cn/?c=i',
  TIMELESSQ: 'https://api.timelessq.com/english-sentence/random',
};