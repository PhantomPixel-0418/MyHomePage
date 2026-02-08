export interface BingImage {
  url: string;
  copyright: string;
  title: string;
  startdate: string;
}

export interface QuoteData {
  content: string;
  author: string;
  source?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  email: string;
  github: string;
  customLinks: Array<{ label: string; url: string }>;
}

export interface AppSettings {
  quoteSource: 'chinese' | 'english';
  useBingDaily: boolean;
  themeColor: string;
}

export interface TimelessQResponse {
  errno: number;
  data: {
    content: string;
    note: string; // Translation
    caption: string; // Source/Caption
  }
}

export interface HitokotoResponse {
  hitokoto: string;
  from: string;
  from_who: string;
}