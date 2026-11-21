// Reader modes: dark (Obsidian Noir, default), light (Alabaster), sepia (Parchment), night (Midnight Bronze).
// The single source of truth for the palette itself is src/index.css
// (:root + [data-theme='...'] channel blocks); these entries drive the
// header switcher swatches and the <meta name="theme-color"> sync.

export const THEME_MODES = [
  { id: 'dark', label: 'Obsidian', hint: 'signature studio mode', canvas: '#070709', accent: '#DFC49C', meta: '#070709' },
  { id: 'light', label: 'Alabaster', hint: 'daylight editorial', canvas: '#F6F3EC', accent: '#855E29', meta: '#F6F3EC' },
  { id: 'sepia', label: 'Parchment', hint: 'warm archival', canvas: '#ECE2CF', accent: '#78521F', meta: '#ECE2CF' },
  { id: 'night', label: 'Bronze', hint: 'low-glare night', canvas: '#13110F', accent: '#CCA566', meta: '#13110F' },
] as const

export type ThemeId = (typeof THEME_MODES)[number]['id']

const KEY = 'sways-theme'

export function getStoredTheme(): ThemeId {
  try {
    const m = localStorage.getItem(KEY)
    if (m === 'light' || m === 'sepia' || m === 'night' || m === 'dark') return m
  } catch {
    /* storage blocked, fall through to default */
  }
  return 'dark'
}

export function applyTheme(id: ThemeId) {
  const root = document.documentElement
  root.setAttribute('data-theme', id)
  try {
    localStorage.setItem(KEY, id)
  } catch {
    /* ignore */
  }
  const t = THEME_MODES.find((m) => m.id === id)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (t && meta) meta.setAttribute('content', t.meta)
}
