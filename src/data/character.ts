// ---------------------------------------------------------------------------
// Character consistency, home band 02 in the video-first build.
//
// One persona held across everything: character sheets built before a shot,
// character LoRAs trained in-house, de-age and 3D conversion workflows that
// keep the identity intact. Static list, not admin-managed: curated in the
// repo for the front page.
//
// HOW TO ADD MEDIA: drop files under public/media/ and fill `src` below.
// ---------------------------------------------------------------------------

export interface CharacterItem {
  id: string
  kind: 'image' | 'video'
  src: string
  poster?: string
  caption: string
}

// Grid order = array order: workflow artifacts.
export const CHARACTER: CharacterItem[] = [
  {
    id: 'ch1',
    kind: 'image',
    src: 'media/concept/workflow_character_sheet_hd.png',
    caption: 'Character sheet, one persona, every frame · qwen edit 2511',
  },
  {
    id: 'ch2',
    kind: 'image',
    src: 'media/concept/workflow_product_to_person_hd.png',
    caption: 'Product to person, same shoes onto the woman character · flux.2 klein edit',
  },
]
