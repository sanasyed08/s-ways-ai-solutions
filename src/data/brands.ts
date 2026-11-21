// ---------------------------------------------------------------------------
// Brand data, one entry per client brand.
//
// HOW TO ADD BRAND MEDIA:
//   1. Drop files into  public/media/brands/<slug>/  (see README.md):
//        logo.png|svg|webp       , brand logo (on transparent/white bg)
//        stills/*.jpg|png        , campaign images
//        animatic/*.mp4|webm     , animatic videos
//        film/*.mp4|webm         , final films
//   2. Fill `src` on the matching MediaItem below. Leave `src` empty while
//      media is pending, the site renders an intentional placeholder.
// ---------------------------------------------------------------------------

import type { MediaItem } from './projects'
import type { RunContent } from './runtime'

export interface Brand {
  slug: string
  name: string
  note: string
  accent: string
  logo?: string
  images: MediaItem[]
  animatics: MediaItem[]
  films: MediaItem[]
  story?: string
  // case study slugs under this brand, rendered as Project 1, 2, 3...
  // (grows automatically as more project entries are added below)
  projects?: string[]
}

export const BRANDS: Brand[] = []

// Display order: newest-added first. BRANDS grows by appending new brands;
// every public surface (grid, carousel, next-brand link) uses this reversed
// view so a newly added brand always shows FIRST in line.
export const displayBrands: Brand[] = [...BRANDS].reverse()

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug)

// Media combined in display order: stills → animatics → films
export const brandMedia = (b: Brand): MediaItem[] => [
  ...b.images,
  ...b.animatics,
  ...b.films,
]

// ---------------------------------------------------------------------------
// Content awareness (static data + admin uploads).
// A brand "has content" when at least one media item resolves to a file,
// compiled in above, or uploaded through the admin layer (content.json
// `uploads`). Brands without content are shown as static logos: never linked
// (no dead detail pages) and sorted behind the ones that open.
// ---------------------------------------------------------------------------
export const brandHasContent = (b: Brand, content?: RunContent | null): boolean => {
  if (brandMedia(b).some((m) => m.src)) return true
  const up = content?.uploads?.[b.slug]
  return Boolean(up && Object.values(up).some((list) => (list?.length ?? 0) > 0))
}

// Public display order: brands with content lead the line (newest-first
// inside each group); the rest keep their relative order behind them.
export const orderedBrands = (content?: RunContent | null): Brand[] => [
  ...displayBrands.filter((b) => brandHasContent(b, content)),
  ...displayBrands.filter((b) => !brandHasContent(b, content)),
]

// Only the brands that actually open, used for "next brand" navigation so it
// never lands on an empty page.
export const contentBrands = (content?: RunContent | null): Brand[] =>
  displayBrands.filter((b) => brandHasContent(b, content))
