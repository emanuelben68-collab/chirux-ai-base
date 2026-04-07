export type ContentStyle = 'Misterioso' | 'Impactante' | 'Oscuro' | 'Curioso' | 'Terror';
export type DurationOption = '30 segundos' | '60 segundos' | '90 segundos';
export type PlatformOption = 'TikTok' | 'Facebook' | 'YouTube Shorts';
export type TabKey = 'home' | 'create' | 'result' | 'history' | 'pro';

export interface GenerationInput {
  topic: string;
  duration: DurationOption;
  style: ContentStyle;
  platform: PlatformOption;
}

export interface GenerationResult {
  id: string;
  topic: string;
  duration: DurationOption;
  style: ContentStyle;
  platform: PlatformOption;
  title: string;
  hook: string;
  script: string;
  description: string;
  hashtags: string;
  visualIdea: string;
  createdAt: string;
}
