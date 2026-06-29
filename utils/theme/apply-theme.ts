import Theme from '@/types/theme.interface';

export default function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--surface', theme.surface);
  root.style.setProperty('--surface-alt', theme.surfaceAlt);

  root.style.setProperty('--text', theme.text);
  root.style.setProperty('--text-muted', theme.textMuted);

  root.style.setProperty('--border', theme.border);

  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-hover', theme.accentHover);
  root.style.setProperty('--accent-active', theme.accentActive);
}
