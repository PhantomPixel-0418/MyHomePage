import { AppSettings, Project, UserProfile } from './types';

// =================================================================
// 个人配置 (JSON 格式)
// 请在此处修改你的个人信息、项目列表等。
// 这里的修改会直接反映到页面上，无需通过设置面板更改。
// =================================================================

export const USER_CONFIG = {
  profile: {
    name: 'Linkium-suki',
    bio: 'Grade 7 Student | Full-Stack Developer | HAM Operator. 13 y-o👨‍💻. Coding with Love❤, Compiling with Magic✨.',
    avatar: 'https://avatars.githubusercontent.com/u/101039439?v=4',
    email: 'linkium.workspace@gmail.com',
    github: 'https://github.com/Linkium-suki',
    customLinks: [
        { label: 'Bilibili', url: 'https://space.bilibili.com/504202744' },
        { label: '小学之泪', url: 'https://c2g.nullsoft.fun' }
    ]
  },
  projects: [
    {
      id: '1',
      name: 'Personal Dashboard Refactor',
      description: '基于 React, TypeScript 和 Tailwind 的现代化个人主页重构项目，支持动态主题色与 iOS 风格交互。',
      url: 'https://github.com/Linkium-suki/MyHomePage-Refactor',
      tags: ['React', 'TypeScript', 'UI/UX']
    },
    // 其余以此类推
  ]
};

// =================================================================
// 系统常量
// =================================================================

export const DEFAULT_SETTINGS: AppSettings = {
  quoteSource: 'chinese',
  useBingDaily: true,
  themeColor: '#39c5bb', // 默认颜色，会被动态覆盖
};

export const API_ENDPOINTS = {
  BING: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
  HITOKOTO: 'https://v1.hitokoto.cn/?c=i',
  TIMELESSQ: 'https://api.timelessq.com/english-sentence/random',
};
