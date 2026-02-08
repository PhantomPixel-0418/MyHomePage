import { AppSettings, Project, UserProfile } from './types';

// =================================================================
// 个人配置 (JSON 格式)
// 请在此处修改你的个人信息、项目列表等。
// 这里的修改会直接反映到页面上，无需通过设置面板更改。
// =================================================================

export const USER_CONFIG = {
  profile: {
    name: 'PhantomPixel-0418',
    bio: 'Hi, I\'m a middle school student in eighth grade, and I\'m 13 years old.',
    avatar: 'https://avatars.githubusercontent.com/u/158539001',
    email: 'PhantomPixel-0418@outlook.com',
    github: 'https://github.com/PhantomPixel-0418',
    // customLinks: [
    //   { label: '', url: '' }
    // ]
  },
  projects: [
    {
      id: '1',
      name: 'MyHomePage',
      description: '这是一个用于展示个人主页的项目，旨在提供简单而美观的网页布局。通过整合 Bing 每日壁纸、经典诗词、时钟以及一些自定义功能，本网页旨在提供每日一图、一言，提升用户体验。',
      url: 'https://github.com/PhantomPixel-0418/MyHomePage',
      tags: ['React', 'TypeScript', 'UI/UX', 'bing-image', 'quote-api']
    },
    {
      id: '2',
      name: 'ybtCode',
      description: '用于存放我在“信息学奥赛一本通”上的代码',
      url: 'https://github.com/PhantomPixel-0418/ybtCode',
      tags: ['cpp', 'ssoier', 'ybt']
    },
    {
      id: '3',
      name: 'ybt-copy-helper',
      description: '一个专为信息学奥赛一本通在线评测系统（ybt.ssoier.cn:8088）开发的浏览器扩展，用于快速复制题目的输入/输出样例。',
      url: 'https://github.com/PhantomPixel-0418/ybt-copy-helper',
      tags: ['copy', 'tool', 'ssoier', 'fast-copy-tool']
    },
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
