import { Palette } from './palette.alias';

export interface ThemeOptions {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralVariant: string;
  error: string;
  mode: 'light' | 'dark';
}

export default interface Theme {
  primary: Palette;
  secondary: Palette;
  tertiary: Palette;
  neutral: Palette;
  neutralVariant: Palette;
  error: Palette;
  bg: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentActive: string;
}
