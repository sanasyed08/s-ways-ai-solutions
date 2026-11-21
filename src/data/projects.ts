// ---------------------------------------------------------------------------
// Portfolio data model, one entry per project.
//
// HOW TO ADD A PROJECT:
//   1. Drop your media into  public/media/<slug>/  (see README.md):
//        cover.jpg           , card thumbnail (landscape, ~1280x800)
//        video/*.mp4|.webm   , hero / result videos
//        stills/*.jpg|.png   , result images
//        workflow/*.jpg|.png , ComfyUI workflow screenshots
//   2. Add an entry below. For media you haven't added yet, leave `src`
//      empty, the site renders an intentional node-graph placeholder with
//      the label you write in `label`, so the layout stays complete.
// ---------------------------------------------------------------------------

export type Company = 'Concept'

export interface MediaItem {
  src?: string // e.g. '/media/<slug>/workflow/ref2v.png'
  poster?: string
  kind?: 'image' | 'video'
  label?: string // shown as caption / placeholder label
  href?: string // optional external link for this item, the live post / campaign page
  hrefLabel?: string // link text; defaults to 'open original ↗'
}

export interface Project {
  slug: string
  title: string
  company: Company
  role: string
  year: string
  /** ISO date the work was done, drives newest-first case-study order. */
  date?: string
  /** "My contribution" chips, what I did on the project, not ownership. */
  contribution?: string[]
  /** Public release link (campaign/ad on YouTube, Instagram or the client site). */
  campaign?: { label: string; url: string }
  status?: string
  excerpt: string
  cover?: string
  spec: { label: string; value: string }[]
  overview: string
  challenge: string
  approach: string[]
  stack: string[]
  workflow: MediaItem[]
  results: MediaItem[]
  /** One-line production framing shown under the title on the case-study page. */
  subtitle?: string
  /** Large image-forward card at the top of its lane + case-study numbering. */
  featured?: boolean
  /** Explicit hero frame for the case-study page (falls back to first video). */
  heroSrc?: string
  /** Process chain chip row, e.g. "product → mask → environment → lighting → final". */
  chain?: string
  /** Production notes, the case-study structure: objective → output. */
  production?: {
    objective: string
    input: string
    process: string
    control: string
    refinement: string
    output: string
  }
  /** Labeled production stages (product, mask, environment, light, final…). */
  stages?: MediaItem[]
  /** Before / after pair with fidelity annotations. */
  beforeAfter?: { before: MediaItem; after: MediaItem; annotations?: string[] }
  /** Format grid (same master across 16:9 / 4:5 / 1:1 / 9:16). */
  formats?: { label: string; ratio: string; src: string; note?: string; box: string }[]
  /** Where the assets ship: website hero, product page, social, paid, mobile. */
  placements?: { label: string; src: string; frame: 'browser' | 'square' | 'phone'; note?: string }[]
  /** Renders the concept e-commerce page mock (e-commerce case study). */
  ecom?: boolean
}

// Studio case studies
export const COMPANIES: Company[] = ['Concept']

// "Futuristic Neon Chase", self-directed concept: environment and camera
// built in Blender with the agent driving it over MCP, clay render pass as
// the motion guide, then a Seedance 2.5 motion-to-video render on top.
const conceptNeonChase: Project = {
  slug: 'futuristic-neon-chase',
  title: 'Futuristic Neon Chase · MCP Blender env → Seedance 2.5',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-09',
  status: 'concept',
  contribution: [
    'environment + camera built in Blender via MCP',
    'clay render pass as the motion guide',
    'seedance 2.5 motion-to-video render',
    'side-by-side comparison master',
    'timing + framing checks across both passes',
  ],
  excerpt:
    'A neon chase built in two passes: the environment, rider and camera path were made in Blender with the agent driving it over MCP and baked to a clean clay render, then Seedance 2.5 turned that pass into the final cinematic motion picture. The two videos sit side by side so the geometry work and the generated film can be judged against each other.',
  cover: 'media/futuristic-neon-chase/cover.jpg',
  spec: [
    { label: 'environment', value: 'blender · built via MCP' },
    { label: 'guide', value: 'clay render pass · 1280×720' },
    { label: 'engine', value: 'seedance 2.5 · motion to video' },
    { label: 'output', value: '1280×720 · 30s' },
    { label: 'comparison', value: 'side-by-side master · 30s' },
    { label: 'year', value: '2026' },
  ],
  overview:
    'A self-directed experiment in the open-source-first, closed-source-when-it-fits lane: build the whole chase in Blender (city street, rider, bike, camera path) with the agent driving Blender over MCP, render a clean clay geometry pass, then let Seedance 2.5 re-imagine that pass as the final film: neon-lit night city, wet asphalt, bloom, depth of field. Since the clay pass has no materials or atmosphere, the generated video has to invent the entire look while keeping the camera motion and composition of the render.',
  challenge:
    'The clay pass is flat and untextured: no lights, no reflections, no atmosphere. Seedance 2.5 has to hallucinate all of it from a gray geometry reference, and the result has to stay true to the chase: same direction, same speed, same framing. Both passes run 30 seconds, so the side-by-side comparison had to be synced start to end and checked for timing and framing drift.',
  approach: [
    'Built the environment (street, buildings, rider and bike) and the camera path in Blender with the agent driving it over MCP, iterating until the composition read as a chase.',
    'Rendered a clean clay geometry pass as the motion guide, so the generated film had a stable reference for speed, direction and framing.',
    'Pushed the clay pass into Seedance 2.5 motion-to-video and steered the look to a neon night city: wet asphalt, bloom, shallow depth of field.',
    'Rendered the side-by-side comparison master so the input pass and the generated film can be watched against each other.',
  ],
  stack: [
    'Blender (driven over MCP)',
    'Clay render pass',
    'Seedance 2.5 (motion-to-video, closed-source)',
    'Side-by-side comparison master',
  ],
  workflow: [
    { label: 'blender env + camera path · MCP' },
    { label: 'clay render pass' },
    { label: 'seedance 2.5 motion to video' },
    { label: 'comparison master + timing checks' },
  ],
  results: [
    { kind: 'video', label: 'side-by-side comparison · clay vs seedance 2.5', src: 'media/futuristic-neon-chase/video/side-by-side-comparison.mp4', poster: 'media/futuristic-neon-chase/video/side-by-side-comparison-poster.jpg' },
    { kind: 'video', label: 'blender clay pass · mcp environment', src: 'media/futuristic-neon-chase/video/blender-clay-motion.mp4' },
    { kind: 'video', label: 'seedance 2.5 · final neon chase', src: 'media/futuristic-neon-chase/video/seedance-25-neon-chase.mp4' },
    { kind: 'image', label: 'neon chase · key frame', src: 'media/futuristic-neon-chase/stills/neon-chase-frame.jpg' },
    { kind: 'image', label: 'blender clay · key frame', src: 'media/futuristic-neon-chase/stills/blender-clay-frame.jpg' },
  ],
}

// Happydent White gum concept ad: my own concept + ad idea, generated with
// Seedance 2.5, directed and edited by me. Ends on the lights-out line and
// the packshot.
const conceptHappydentWhiteGum: Project = {
  slug: 'concept-happydent-white-gum',
  title: 'Happydent White gum · concept ad (Seedance 2.5)',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-08-16',
  status: 'concept',
  contribution: [
    'original concept + ad idea',
    'direction',
    'seedance 2.5 generation',
    'edit + 32s cut',
    'packshots + taglines',
  ],
  excerpt:
    'My own concept and ad idea for Happydent White: a school annual-day performance where the lights go out and the smiles stay on. The imagery is generated with Seedance 2.5, and the film is directed and edited by me, down to the final packshot and its line: bright white. bright moments.',
  cover: 'media/concept-happydent-white-gum/cover.jpg',
  spec: [
    { label: 'brand', value: 'happydent white · mint flavour' },
    { label: 'idea', value: 'own concept + ad idea' },
    { label: 'engine', value: 'seedance 2.5' },
    { label: 'craft', value: 'directed + edited by me' },
    { label: 'output', value: '1920×1080 · 32s' },
    { label: 'year', value: '2026' },
  ],
  overview:
    'A concept ad for Happydent White built on the simplest promise of a white gum: brightness, made literal. The film runs through one evening at a school annual-day show: a forest-set stage play, the audience watching, a young man and his packet of Happydent White, and the moment the lights go out. The film does not go dark with them: a smile turns into a blinding white light and carries the show to its close, then the pack lands twice. "When the lights go out, keep your smile on." "Bright white. Bright moments."',
  challenge:
    'Two things make or break a 32 second film like this. Continuity: the stage, the audience and the hero all have to feel like one venue on one evening, even though every shot is generated separately. And the signature: a smile becoming an actual light source. That single frame is the whole ad, and it has to read instantly, in the dark, before the pack arrives to explain it.',
  approach: [
    'Wrote the concept and the ad idea: an annual-day show where the lights go out and the gum keeps the smiles bright.',
    'Directed the film as one continuous evening: the stage play, the audience, the young man and his gum, and the dark passage where the lights drop.',
    'Generated all the imagery with Seedance 2.5, steering the look somewhere between real venue footage and stage light.',
    'Landed the signature shot: the smile that goes blinding white, turning the product promise into the light source of the film.',
    'Edited the 32 second cut to finish on the two packshots: the lights-out line, then bright white. bright moments.',
  ],
  stack: [
    'Own concept + ad idea',
    'Seedance 2.5 (text-to-video, closed-source)',
    'Edit + 32s cut (own work)',
    '1920×1080 master',
  ],
  workflow: [
    { label: 'own concept + ad idea' },
    { label: 'seedance 2.5 generation' },
    { label: 'direction · one venue, one evening' },
    { label: 'edit + 32s cut' },
    { label: 'packshots + taglines' },
  ],
  results: [
    { kind: 'video', label: 'happydent white gum · concept film (32s)', src: 'media/showcase/ads/happydent-white-gum-concept.mp4', poster: 'media/showcase/ads/happydent-white-gum-concept-poster.jpg' },
    { kind: 'image', label: 'the signature · a smile that lights the dark', src: 'media/concept-happydent-white-gum/stills/the-glow.jpg' },
    { kind: 'image', label: 'the unwrap · happydent white packet', src: 'media/concept-happydent-white-gum/stills/the-gum-moment.jpg' },
    { kind: 'image', label: 'the audience · one evening at the show', src: 'media/concept-happydent-white-gum/stills/audience-reaction.jpg' },
    { kind: 'image', label: 'the dark passage · mid-film', src: 'media/concept-happydent-white-gum/stills/the-dark-beat.jpg' },
    { kind: 'image', label: 'the stage · annual-day performance', src: 'media/concept-happydent-white-gum/stills/the-stage-show.jpg' },
    { kind: 'image', label: 'end card · when the lights go out... keep your smile on', src: 'media/concept-happydent-white-gum/stills/end-card.jpg' },
    { kind: 'image', label: 'final packshot · bright white. bright moments.', src: 'media/concept-happydent-white-gum/stills/final-packshot.jpg' },
  ],
}

// 7up concept ad: my own original idea, generated with Seedance 2.5. A
// colour-drained wasteland flips to a bright future city after one sip.
const concept7up: Project = {
  slug: 'concept-7up',
  title: '7up · concept ad (Seedance 2.5)',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-13',
  status: 'concept',
  contribution: [
    'original concept + ad idea',
    'seedance 2.5 generation',
    'dull-world → bright-city turn',
  ],
  excerpt:
    'My own original idea for a 7up concept ad: a colour-drained wasteland under a weathered 7up billboard that promises no more dull moments, one bottle, one first sip, and the whole world snaps into colour. Generated with Seedance 2.5.',
  cover: 'media/concept-7up/cover.jpg',
  spec: [
    { label: 'brand', value: '7up' },
    { label: 'idea', value: 'own original concept' },
    { label: 'engine', value: 'seedance 2.5' },
    { label: 'output', value: '1280×720 · 30s' },
    { label: 'year', value: '2026' },
  ],
  overview:
    'A concept ad for 7up built on the brand promise of brightness. The film opens in a colour-drained wasteland: dust, ruins, a world of dull moments. A weathered 7up billboard stands over it, promising "no more dull moments", and the story is the simplest possible arc from there: a bottle of 7up, one first sip, and the world snapping into colour. By the close, the ruins have become a bright, optimistic future city, and the 7up mascot is waiting at the end of the street.',
  challenge:
    'The whole film hangs on one turn: sepia to colour. The wasteland has to feel genuinely dead, drained and lived-in, and the transformation has to land as pure refreshment in a single beat, or the ad does not work. Every frame was generated, so the wasteland, the billboard, the drink and the future city all had to read as one world on either side of that turn: same places, same faces, one sip apart.',
  approach: [
    'Wrote the concept around the billboard line: a world of dull moments that 7up turns bright.',
    'Built the wasteland look first: desaturated sepia, dust, ruins, a figure walking through it, so the billboard reads as a promise.',
    'Generated the film with Seedance 2.5: the discovery of the billboard, the bottle in the dust, the first sip, and the world switching to colour.',
    'Staged the new world as an optimistic future city: glass towers, greenery, and the 7up mascot waiting at the end.',
  ],
  stack: [
    'Own original concept + ad idea',
    'Seedance 2.5 (text-to-video, closed-source)',
    '1280×720 · 30s master',
  ],
  workflow: [
    { label: 'own original idea' },
    { label: 'seedance 2.5 generation' },
    { label: 'wasteland → bright future city' },
    { label: 'billboard + tagline · no more dull moments' },
    { label: '30s concept film' },
  ],
  results: [
    { kind: 'video', label: '7up · concept film (30s)', src: 'media/showcase/ads/7up-concept.mp4', poster: 'media/showcase/ads/7up-concept-poster.jpg' },
    { kind: 'image', label: 'the dull world · opening', src: 'media/concept-7up/stills/the-dull-world.jpg' },
    { kind: 'image', label: 'the discovery · under the billboard', src: 'media/concept-7up/stills/the-discovery.jpg' },
    { kind: 'image', label: 'the bottle · in the dust', src: 'media/concept-7up/stills/the-bottle.jpg' },
    { kind: 'image', label: 'the first sip', src: 'media/concept-7up/stills/the-first-sip.jpg' },
    { kind: 'image', label: 'the turn · the world goes bright', src: 'media/concept-7up/stills/the-turn.jpg' },
    { kind: 'image', label: 'the city · 7up-bright future', src: 'media/concept-7up/stills/the-city.jpg' },
    { kind: 'image', label: 'sign-off · with the 7up mascot', src: 'media/concept-7up/stills/the-sign-off.jpg' },
  ],
}

// --- The commercial imaging system: five production studies, one product
// system. Hero studio, bedroom compositing, reference-controlled variations,
// the campaign format system, and the e-commerce page. All self-initiated
// concept work, run on the same pipelines as client jobs.

const csMattressHeroStudio: Project = {
  slug: 'mattress-hero-studio',
  title: 'Mattress Hero Studio',
  subtitle: 'Product accuracy + studio compositing',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-17',
  status: 'concept',
  featured: true,
  chain: 'product → mask / extraction → environment → lighting → final hero',
  heroSrc: 'media/mattress-hero-studio/stills/05-final-hero.jpg',
  contribution: [
    'product concept + studio art direction',
    'product isolation + mask extraction',
    'environment generation, framed for the final',
    'light direction + contact shadow integration',
    'composite + grade + format crops',
  ],
  excerpt:
    'A controlled commercial hero image: the product is isolated and locked first, the studio is generated around the final framing, and the two are composited into one photograph that holds shape, proportions, material appearance and visual fidelity.',
  cover: 'media/mattress-hero-studio/cover.jpg',
  spec: [
    { label: 'discipline', value: 'commercial product imagery' },
    { label: 'product', value: 'mattress (concept)' },
    { label: 'route', value: 'product → mask → environment → light' },
    { label: 'finish', value: 'hero + supporting angles' },
    { label: 'year', value: '2026' },
  ],
  production: {
    objective:
      'Create one controlled studio hero for a real product, advertising-grade, with the product shape, proportions and material appearance preserved exactly, not approximated.',
    input:
      'The product itself: an isolated reference pass on clean white, plus the studio art direction, seamless backdrop, low platform, softbox key from camera-left, fill from camera-right.',
    process:
      'The product was isolated and locked as the source of truth. The studio (backdrop, platform and lighting rig) was generated around the final framing, empty. The two were composited into one photograph: placement, scale and vanishing point first, then light and shadow.',
    control:
      'Fidelity comes from the route: the product pass never regenerates inside the scene, so stitching, piping and proportions cannot drift. The mask extraction is refined by hand before compositing.',
    refinement:
      'Key light direction, colour temperature and falloff tuned until product shading agreed with the set; contact shadows cut in to ground the platform; edges cleaned; the frame graded for advertising.',
    output:
      'A finished studio hero plus supporting angles on one locked product, then cropped for the formats a campaign actually runs.',
  },
  stages: [
    { label: 'product, isolated', src: 'media/mattress-hero-studio/stills/01-product.jpg' },
    { label: 'mask / extraction', src: 'media/mattress-hero-studio/stills/02-extraction.jpg' },
    { label: 'studio environment', src: 'media/mattress-hero-studio/stills/03-environment.jpg' },
    { label: 'lighting setup', src: 'media/mattress-hero-studio/stills/04-lighting.jpg' },
    { label: 'final hero', src: 'media/mattress-hero-studio/stills/05-final-hero.jpg' },
  ],
  beforeAfter: {
    before: { label: 'original product, isolated on white', src: 'media/mattress-hero-studio/stills/01-product.jpg' },
    after: { label: 'final hero, studio composited', src: 'media/mattress-hero-studio/stills/05-final-hero.jpg' },
    annotations: ['product fidelity', 'light match', 'perspective', 'material detail', 'environment integration'],
  },
  overview:
    'Commercial heroes are judged on the hundredth frame, not the first, so this study was built as a route. The product is locked in a clean isolated pass and becomes the source of truth: design, proportions and surface stay fixed no matter what happens later. The studio is generated around the final framing (empty) and the two are composited into one photograph, placement and light solved in that order. Because the product never regenerates inside the scene pass, nothing drifts.',
  challenge:
    'The failure mode of AI product imagery is drift: generate the product inside the scene and it quietly redesigns itself (different proportions, different quilting, different side detailing) and the frame is useless to a brand that needs its actual product. The second failure is physics: a product dropped into an environment with the wrong scale, the wrong vanishing point or a light direction that disagrees with the set reads as fake instantly.',
  approach: [
    'Locked the product first: an isolated pass where the design (proportions, quilting, piping) is approved once and becomes the source of truth.',
    'Generated the studio around the final framing: backdrop, platform and lighting rig, empty, so the product pass keeps full control of the object.',
    'Composited in passes: placement first, then scale and vanishing point pulled until the product footprint sits correctly on the platform.',
    'Matched the light: direction, colour temperature and falloff tuned until the product shading agreed with the set, then contact shadows cut in to ground it.',
    'Finished the frame: edge cleanup, reflection check and a final grade so the image holds at advertising quality.',
  ],
  stack: [
    'Own product concept + art direction',
    'Product isolation + mask extraction',
    'Environment generation, Midjourney v7',
    'Compositing, placement, perspective, scale',
    'Light direction + contact shadow integration',
    'Retouch + grade + format crops',
  ],
  workflow: [
    { label: 'brief, real product into a controlled studio hero' },
    { label: 'product lock, isolation pass, design approved once' },
    { label: 'mask / extraction, refined by hand' },
    { label: 'environment generation, studio built around the frame' },
    { label: 'placement + perspective, scale, vanishing point' },
    { label: 'lighting match, direction, temperature, falloff' },
    { label: 'shadows, contact grounding' },
    { label: 'cleanup + grade, advertising finish' },
  ],
  results: [
    { kind: 'image', label: 'final hero, studio composited', src: 'media/mattress-hero-studio/stills/05-final-hero.jpg' },
    { kind: 'image', label: 'product, isolated on white', src: 'media/mattress-hero-studio/stills/01-product.jpg' },
    { kind: 'image', label: 'mask / extraction, cleaned edge', src: 'media/mattress-hero-studio/stills/02-extraction.jpg' },
    { kind: 'image', label: 'studio environment, generated, before placement', src: 'media/mattress-hero-studio/stills/03-environment.jpg' },
    { kind: 'image', label: 'lighting setup, the rig the light matches', src: 'media/mattress-hero-studio/stills/04-lighting.jpg' },
    { kind: 'image', label: 'alternate angle, same lock, second camera', src: 'media/mattress-hero-studio/stills/06-angle.jpg' },
  ],
}

const csBedroomLifestyle: Project = {
  slug: 'bedroom-lifestyle-comp',
  title: 'Bedroom Lifestyle Comp',
  subtitle: 'Product/environment integration + perspective & light matching',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-17',
  status: 'concept',
  featured: true,
  chain: 'product → environment → perspective → light → final',
  heroSrc: 'media/bedroom-lifestyle-comp/stills/05-final.jpg',
  contribution: [
    'bedroom art direction + light plan',
    'environment generation, lens and framing matched',
    'product placement + perspective match',
    'light direction, temperature + contact shadows',
    'final composite + grade',
  ],
  excerpt:
    'Integrating a real product into an AI-generated bedroom while holding realistic scale, camera perspective, contact shadows, reflections and lighting direction, the environment changed, the product did not.',
  cover: 'media/bedroom-lifestyle-comp/cover.jpg',
  spec: [
    { label: 'discipline', value: 'lifestyle + product integration' },
    { label: 'product', value: 'mattress + bedroom set (concept)' },
    { label: 'route', value: 'product → environment → perspective → light' },
    { label: 'lighting', value: 'morning window, camera-left' },
    { label: 'year', value: '2026' },
  ],
  production: {
    objective:
      'Place the product into a believable bedroom: real scale, real camera height, contact shadows, reflections and a light direction that agrees with the window.',
    input:
      'The product lock from the studio study, a bedroom art direction set (low oak platform, plaster walls, wide-plank floor) and the light plan fixed in the brief: warm morning window, camera-left.',
    process:
      'The environment was generated first, an empty room, framed for the final camera and lens. The product was generated against the same reference at every angle and checked for drift, then perspective, scale and light were refined until the bed line agreed with the room.',
    control:
      'The product lock travels from the studio study: same design, same proportions, same piping. Every environment pass starts from the same reference, so the mattress reads as one physical object across the whole set.',
    refinement:
      'Light match: direction, softness and colour temperature; contact shadows under the platform; a soft bounce of light across the bedding; the grade held identical to the studio set.',
    output:
      'A bedroom hero plus wide and three-quarter angles, the frame a sleep brand actually runs above the fold, at 16:9 and 4:5.',
  },
  stages: [
    { label: 'product reference', src: 'media/bedroom-lifestyle-comp/stills/01-product-ref.jpg' },
    { label: 'environment, generated', src: 'media/bedroom-lifestyle-comp/stills/02-environment.jpg' },
    { label: 'perspective, placed', src: 'media/bedroom-lifestyle-comp/stills/03-perspective.jpg' },
    { label: 'light, matched', src: 'media/bedroom-lifestyle-comp/stills/04-light.jpg' },
    { label: 'final composite', src: 'media/bedroom-lifestyle-comp/stills/05-final.jpg' },
  ],
  beforeAfter: {
    before: { label: 'product reference, studio isolation', src: 'media/bedroom-lifestyle-comp/stills/01-product-ref.jpg' },
    after: { label: 'final, product in the bedroom environment', src: 'media/bedroom-lifestyle-comp/stills/05-final.jpg' },
    annotations: ['scale', 'perspective', 'contact shadows', 'light direction', 'material fidelity', 'colour temperature'],
  },
  overview:
    'The brief was integration, not generation: one real product, put into a bedroom that photographs like a room. The environment is generated first (empty, framed for the camera the final will use) and the product is placed through a reference-controlled pass so the object never drifts. Perspective, scale and light are solved in that order, and contact shadows finish the grounding.',
  challenge:
    'A product in the wrong room is a composite the eye rejects in under a second: wrong camera height, wrong scale, a light direction that disagrees with the window, missing contact shadows, bedding that floats. Each of those is a physics problem, not an art problem, and all of them have to be solved at once for the frame to read as a photograph.',
  approach: [
    'Generated the environment first: an empty bedroom, composed for the final framing and lens.',
    'Placed the product through a reference-controlled pass so the lock from the studio study carries over untouched.',
    'Matched perspective: camera height, scale and vanishing point pulled until the bed line agreed with the room.',
    'Matched the light: direction, softness and colour temperature, with a soft bounce across the bedding.',
    'Grounded the composite: contact shadows under the platform, reflections checked, then a held grade across the set.',
  ],
  stack: [
    'Own art direction + light plan',
    'Environment generation, Midjourney v7',
    'Reference-controlled placement',
    'Perspective + scale match',
    'Light direction, temperature + contact shadows',
    'Grade + format crops',
  ],
  workflow: [
    { label: 'brief, product into a believable bedroom' },
    { label: 'environment, empty room, lens matched' },
    { label: 'placement, reference-controlled, product lock' },
    { label: 'perspective, camera height, scale, vanishing point' },
    { label: 'light, direction, temperature, bounce' },
    { label: 'shadows, contact grounding' },
    { label: 'grade, held across the set' },
    { label: 'delivery, 16:9 + 4:5 crops' },
  ],
  results: [
    { kind: 'image', label: 'final, bedroom hero, morning light', src: 'media/bedroom-lifestyle-comp/stills/05-final.jpg' },
    { kind: 'image', label: 'wide, alternate framing', src: 'media/bedroom-lifestyle-comp/stills/06-wide.jpg' },
    { kind: 'image', label: 'three-quarter, mattress height', src: 'media/bedroom-lifestyle-comp/stills/07-three-quarter.jpg' },
    { kind: 'image', label: 'dusk, same room, second light state', src: 'media/bedroom-lifestyle-comp/stills/08-dusk.jpg' },
    { kind: 'image', label: 'environment, generated room, before placement', src: 'media/bedroom-lifestyle-comp/stills/02-environment.jpg' },
    { kind: 'image', label: 'light, contact shadow detail', src: 'media/bedroom-lifestyle-comp/stills/04-light.jpg' },
  ],
}

const csReferenceControlled: Project = {
  slug: 'reference-controlled-imaging',
  title: 'Reference-Controlled AI Imaging',
  subtitle: 'Reference images → controlled generation → production variations',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-17',
  status: 'concept',
  featured: true,
  chain: 'reference → prompt / control → generation → editing → variations',
  heroSrc: 'media/reference-controlled-imaging/stills/var-premium.jpg',
  contribution: [
    'reference pack + prompt system',
    'controlled generation across environments',
    'identity-edit passes against the reference',
    'per-frame clean-up + unified grade',
    'variation set delivery',
  ],
  excerpt:
    'Using reference imagery, structured prompting and AI image-editing workflows to maintain visual consistency while generating controlled variations, same product, six environments, zero drift.',
  cover: 'media/reference-controlled-imaging/cover.jpg',
  spec: [
    { label: 'discipline', value: 'controlled generation + variations' },
    { label: 'product', value: 'one product, six environments' },
    { label: 'route', value: 'reference → control → generation → edit' },
    { label: 'engine', value: 'midjourney v7 + chatgpt edit pass' },
    { label: 'year', value: '2026' },
  ],
  production: {
    objective:
      'Generate controlled variations around one product (different environments and light states) without the product drifting between frames.',
    input:
      'One approved product reference; a structured prompt set (environment, camera, light direction per variation); the pipeline reference and edit controls.',
    process:
      'Each environment is generated around the product reference with composition and light specified per variation. Where a frame needs correction, an AI edit pass runs against the original reference to restore the product exactly, a re-edit, not a re-roll.',
    control:
      'Reference conditioning plus edit passes: the same reference travels through every output. Proportions, piping and stitching stay fixed; only environment, camera and light change.',
    refinement:
      'Per-frame cleanup of edges and bedding; one grade applied across the whole set so the variations read as one shoot.',
    output:
      'A variation set from one source: bedroom, studio, premium, daylight, warm and wide, same product in every frame, each cropped to its target ratio.',
  },
  stages: [
    { label: 'reference', src: 'media/reference-controlled-imaging/stills/01-reference.jpg' },
    { label: 'prompt / control', src: 'media/reference-controlled-imaging/stills/02-prompt-control.jpg' },
    { label: 'generation', src: 'media/reference-controlled-imaging/stills/03-generation.jpg' },
    { label: 'editing pass', src: 'media/reference-controlled-imaging/stills/04-editing.jpg' },
    { label: 'variations', src: 'media/reference-controlled-imaging/stills/05-variations.jpg' },
  ],
  beforeAfter: {
    before: { label: 'reference, one product, studio pass', src: 'media/reference-controlled-imaging/stills/01-reference.jpg' },
    after: { label: 'variation, same product, daylight interior', src: 'media/reference-controlled-imaging/stills/var-daylight.jpg' },
    annotations: ['proportions held', 'stitching + piping held', 'grade held', 'environment-only change'],
  },
  overview:
    'Consistency is not a prompt trick, it is a pipeline property. One approved reference travels through every generation, and when a frame drifts, an edit pass against the original restores the product exactly instead of another roll of the dice. The result is a variation set that reads as one product photographed six ways, not six products.',
  challenge:
    'Every fresh generation is a fresh roll: proportions breathe, piping wanders, quilting changes while nobody is looking. A brand cannot ship a set where the product redesigns itself between frames, so the drift has to be engineered out at the reference level, not patched frame by frame.',
  approach: [
    'Locked one product reference as the anchor for the whole set.',
    'Wrote structured prompts per variation: environment, camera, light direction, the only variables allowed to change.',
    'Generated each environment around the reference, keeping the product pass under control.',
    'Ran edit passes against the original reference wherever a frame drifted, restoring the product instead of re-rolling.',
    'Graded the set as one delivery so the variations read as one shoot.',
  ],
  stack: [
    'Structured prompt system (environment / camera / light)',
    'Reference conditioning, Midjourney v7',
    'Edit passes, chatgpt relight + cleanup',
    'Per-frame cleanup + unified grade',
    'Variation set, six environments, one product',
  ],
  workflow: [
    { label: 'reference, one approved product pass' },
    { label: 'prompt / control, per-variation spec' },
    { label: 'generation, environment changes, product locked' },
    { label: 'editing, drift restored against the reference' },
    { label: 'grade, one look across the set' },
    { label: 'variations, six environments delivered' },
  ],
  results: [
    { kind: 'image', label: 'premium bedroom, variation 01', src: 'media/reference-controlled-imaging/stills/var-premium.jpg' },
    { kind: 'image', label: 'minimal studio, variation 02', src: 'media/reference-controlled-imaging/stills/var-minimal.jpg' },
    { kind: 'image', label: 'warm luxury, variation 03', src: 'media/reference-controlled-imaging/stills/var-warm.jpg' },
    { kind: 'image', label: 'daylight interior, variation 04', src: 'media/reference-controlled-imaging/stills/var-daylight.jpg' },
    { kind: 'image', label: 'wide, variation 05', src: 'media/reference-controlled-imaging/stills/var-wide.jpg' },
    { kind: 'image', label: 'detail, knit + piping, same product', src: 'media/reference-controlled-imaging/stills/var-detail.jpg' },
  ],
}

const csCommercialSystem: Project = {
  slug: 'commercial-creative-system',
  title: 'Commercial Creative System',
  subtitle: 'One visual concept → multiple campaign assets',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-17',
  status: 'concept',
  featured: true,
  chain: 'master frame → 16:9 · 4:5 · 1:1 · 9:16 → placements → delivery',
  heroSrc: 'media/commercial-creative-system/stills/master-16x9.jpg',
  contribution: [
    'master-frame selection + grade',
    'format reframing, 16:9 / 4:5 / 1:1 / 9:16',
    'placement set, hero, page, social, paid, mobile',
    'copy-space + focal-point control',
    'delivery naming + documentation',
  ],
  excerpt:
    'One visual concept, adapted into the full set of assets a campaign needs (website hero, product page, social, paid and mobile) without re-shooting anything and without the product moving.',
  cover: 'media/commercial-creative-system/cover.jpg',
  spec: [
    { label: 'discipline', value: 'campaign adaptation' },
    { label: 'source', value: 'one graded master frame' },
    { label: 'formats', value: '16:9 · 4:5 · 1:1 · 9:16' },
    { label: 'placements', value: 'hero · page · social · paid · mobile' },
    { label: 'year', value: '2026' },
  ],
  production: {
    objective:
      'Take one visual concept and adapt it into every asset a campaign actually runs (each format, each placement) so nothing needs a second shoot.',
    input:
      'One master frame from the bedroom study, plus the campaign output list: web hero, product page, social, paid ad and mobile.',
    process:
      'The master was graded once, then adapted per format: reframed for 16:9, 4:5, 1:1 and 9:16 with focal point and copy space held, then placed into the layout each asset ships in.',
    control:
      'One grade and one product lock across every format, the set reads as one shoot, not four crops. The mattress line, its proportions and its colour are identical in every frame.',
    refinement:
      'Each frame re-composed rather than sliced: vertical crops hold the mattress line fully, headlines keep clean space, thumbnails stay legible at small sizes.',
    output:
      'A campaign surface from one image: hero, product page, social, paid and mobile, every file named, croppable again, rerunnable for the next collection.',
  },
  formats: [
    { label: 'web hero', ratio: '16:9', box: 'aspect-video', src: 'media/commercial-creative-system/stills/format-16x9.jpg', note: 'negative space held for headline + CTA' },
    { label: 'social feed', ratio: '4:5', box: 'aspect-[4/5]', src: 'media/commercial-creative-system/stills/format-4x5.jpg', note: 'product fully in frame at feed size' },
    { label: 'product tile', ratio: '1:1', box: 'aspect-square', src: 'media/commercial-creative-system/stills/format-1x1.jpg', note: 'centered for grid listings' },
    { label: 'story / reel', ratio: '9:16', box: 'aspect-[9/16]', src: 'media/commercial-creative-system/stills/format-9x16.jpg', note: 'copy space above the product line' },
  ],
  placements: [
    { label: 'website hero', src: 'media/commercial-creative-system/stills/format-16x9.jpg', frame: 'browser', note: '16:9 · negative space left' },
    { label: 'product page', src: 'media/commercial-creative-system/stills/format-1x1.jpg', frame: 'browser', note: '1:1 · gallery tile' },
    { label: 'social post', src: 'media/commercial-creative-system/stills/format-4x5.jpg', frame: 'square', note: '4:5 · feed' },
    { label: 'paid ad', src: 'media/commercial-creative-system/stills/format-4x5b.jpg', frame: 'square', note: '4:5 · sponsored unit' },
    { label: 'mobile', src: 'media/commercial-creative-system/stills/format-9x16.jpg', frame: 'phone', note: '9:16 · story slot' },
  ],
  beforeAfter: {
    before: { label: 'master frame, 16:9', src: 'media/commercial-creative-system/stills/master-16x9.jpg' },
    after: { label: 'adapted, 9:16 story', src: 'media/commercial-creative-system/stills/format-9x16.jpg' },
    annotations: ['reframed, not cropped', 'focal point held', 'copy space preserved'],
  },
  overview:
    'One master frame is the cheapest possible source of a full campaign surface, if the system can adapt it without the product moving or the grade breaking. That is the whole study: grade once, reframe per ratio, place per channel, deliver a set that reads as one shoot.',
  challenge:
    'Adaptation is where cheapness shows: crops slice off the product, verticals lose the mattress line, social units become unreadable at feed size, every channel drifts to a different grade. The assets have to be re-composed for their slot, not derived by slicing one picture into four.',
  approach: [
    'Graded one master frame from the bedroom study and froze it as the source.',
    'Reframed per ratio (16:9, 4:5, 1:1, 9:16) composing for the focal point and the copy space each slot needs.',
    'Placed the frames into the channel layouts: website hero, product page, social, paid and mobile.',
    'Checked every output at its real display size, thumbnail legibility, feed presence, banner readability.',
    'Documented the set so files map to placements and the system reruns for the next product.',
  ],
  stack: [
    'One graded master frame, held source',
    'Format reframing, 16:9 / 4:5 / 1:1 / 9:16',
    'Copy-space + focal-point control per slot',
    'Channel placements, hero, page, social, paid, mobile',
    'Named delivery set',
  ],
  workflow: [
    { label: 'master, one graded frame' },
    { label: 'ratios, reframed, not sliced' },
    { label: 'copy space, held per slot' },
    { label: 'placements, hero, page, social, paid, mobile' },
    { label: 'checks, feed + thumbnail legibility' },
    { label: 'delivery, the full surface' },
  ],
  results: [
    { kind: 'image', label: 'master, 16:9 web hero', src: 'media/commercial-creative-system/stills/format-16x9.jpg' },
    { kind: 'image', label: 'social, 4:5 feed frame', src: 'media/commercial-creative-system/stills/format-4x5.jpg' },
    { kind: 'image', label: 'product tile, 1:1', src: 'media/commercial-creative-system/stills/format-1x1.jpg' },
    { kind: 'image', label: 'story, 9:16', src: 'media/commercial-creative-system/stills/format-9x16.jpg' },
    { kind: 'image', label: 'wide, alternate master framing', src: 'media/commercial-creative-system/stills/master-wide.jpg' },
  ],
}

const csEcommerceSystem: Project = {
  slug: 'ecommerce-image-system',
  title: 'E-commerce Image System',
  subtitle: 'AI imagery designed for product pages, ads and mobile experiences',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-17',
  status: 'concept',
  featured: true,
  chain: 'brief → image set → crops → page slots → desktop + mobile',
  heroSrc: 'media/ecommerce-image-system/desktop-hero.jpg',
  ecom: true,
  contribution: [
    'storefront image set, hero, lifestyle, detail',
    'slot planning, banner, gallery, thumbs',
    'crops tuned for focal point + legibility',
    'mobile recomposition',
    'concept page build, desktop + phone',
  ],
  excerpt:
    'What happens to AI imagery after generation: an image set built for a product page (hero, lifestyle, detail, thumbnails) cropped and recomposed per slot so the page holds one product across desktop and mobile.',
  cover: 'media/ecommerce-image-system/cover.jpg',
  spec: [
    { label: 'discipline', value: 'e-commerce imagery + storefront design' },
    { label: 'slots', value: 'banner · gallery · detail · mobile' },
    { label: 'ratios', value: '16:9 · 4:5 · 1:1' },
    { label: 'deliverable', value: 'set + concept page (design study)' },
    { label: 'year', value: '2026' },
  ],
  production: {
    objective:
      'Show what happens to the imagery after generation: how it behaves in a product page and on a phone, focal points, crops, hierarchy and thumbnails.',
    input:
      'The system output from the other studies (hero, lifestyle, detail and macro frames) plus the page slots a storefront needs: banner, gallery, detail band, mobile hero.',
    process:
      'Images were cropped and recomposed per slot: banner with copy space, gallery tiles for thumbnails, a detail band for material proof, and a vertical frame recomposed for mobile. A concept product-page layout demonstrates the hierarchy they create.',
    control:
      'Every crop comes from the same graded master set, so the page holds one product, one light and one look across all slots, no orphan frames.',
    refinement:
      'Crops tuned for focal point, product visibility and thumbnail readability: the mattress line stays readable down to 64 pixels.',
    output:
      'A complete storefront image set: desktop hero, gallery, detail, lifestyle band, mobile hero and thumbnails, plus the concept page desktop and phone.',
  },
  beforeAfter: {
    before: { label: 'isolated product, studio pass', src: 'media/ecommerce-image-system/stills/product.jpg' },
    after: { label: 'in-page hero, 16:9 with copy space', src: 'media/ecommerce-image-system/desktop-hero.jpg' },
    annotations: ['copy space', 'product visibility', 'hierarchy', 'crop', 'mobile recomposition'],
  },
  overview:
    'Most AI imagery portfolios stop at the generation. This study starts after it: the same product set, pushed through the crops, ratios and hierarchy a storefront actually needs, and then placed into a labelled concept page to prove the pixels hold up in context.',
  challenge:
    'A storefront breaks images that a portfolio never tests: banner crops eat the copy space, thumbnails turn products into mud, mobile frames lose the focal point, and a page of mismatched crops reads as a patchwork instead of one brand. The set has to be composed for its slots from the beginning.',
  approach: [
    'Planned the slots first: banner, gallery, detail band, mobile hero and thumbnails, with the ratio each one needs.',
    'Cropped and recomposed per slot from the same graded masters, holding the focal point in every frame.',
    'Tuned thumbnail legibility: the product line still reads at 64 pixels.',
    'Recomposed the mobile frame vertically instead of slicing the desktop composition.',
    'Built the concept product page (desktop and phone) and checked every slot at its real size.',
  ],
  stack: [
    'Storefront slot plan, banner, gallery, detail, mobile',
    'Crops from one graded master set',
    'Focal-point + legibility tuning',
    'Mobile recomposition',
    'Concept page, desktop + phone (design study)',
  ],
  workflow: [
    { label: 'brief, imagery for a product page, not a gallery' },
    { label: 'slots, ratios and hierarchy planned' },
    { label: 'crops, per slot from one master set' },
    { label: 'mobile, recomposed, not cropped' },
    { label: 'page, desktop + phone concept build' },
    { label: 'checks, legibility at real sizes' },
  ],
  results: [
    { kind: 'image', label: 'desktop hero, banner with copy space', src: 'media/ecommerce-image-system/desktop-hero.jpg' },
    { kind: 'image', label: 'lifestyle band, for the page body', src: 'media/ecommerce-image-system/desktop-lifestyle.jpg' },
    { kind: 'image', label: 'detail band, material proof', src: 'media/ecommerce-image-system/desktop-detail.jpg' },
    { kind: 'image', label: 'mobile hero, recomposed 4:5', src: 'media/ecommerce-image-system/mobile-hero.jpg' },
    { kind: 'image', label: 'product pass, isolated master', src: 'media/ecommerce-image-system/stills/product.jpg' },
  ],
}

// One product, the whole ad surface: hero, bedroom lifestyle, night, macro
// comfort detail, unboxing, flatlay and a dark-studio banner with copy space.
// Twelve frames, one mattress, one pipeline, versatility without drift.
const conceptSleepBrandSystem: Project = {
  slug: 'sleep-brand-image-system',
  title: 'Sleep brand image system · hero → lifestyle → macro → e-commerce',
  company: 'Concept',
  role: 'S-WAYS Ai solutions',
  year: '2026',
  date: '2026-09-15',
  status: 'concept',
  contribution: [
    'system design, one product, twelve frames',
    'photoreal lifestyle set, morning, night, couple',
    'studio + macro detail set',
    'e-commerce frames, unboxing, flatlay, banner',
    'edit passes + grade, one shoot, one look',
  ],
  excerpt:
    'A complete advertising surface for a sleep brand, built as one system: hero, bedroom lifestyle, night scene, macro comfort detail, unboxing, flatlay and a dark-studio banner with copy space. Twelve frames, one mattress, the same product in every image, extended from a repeatable core pipeline.',
  cover: 'media/sleep-brand-image-system/cover.jpg',
  spec: [
    { label: 'brand', value: 'sleep brand (concept)' },
    { label: 'product', value: 'mattress + bedding' },
    { label: 'deliverable', value: '12-frame image system' },
    { label: 'formats', value: '16:9 · 4:5 · 1:1' },
    { label: 'engine', value: 'krea 2 turbo (fp8) · comfyui' },
  ],
  overview:
    'A sleep brand does not need one beautiful mattress picture, it needs the whole surface. The hero, the lifestyle moment, the night shot, the macro that sells comfort, the unboxing, the flatlay, the banner a headline can sit on. This brief was run as a system, not a one-off: one mattress concept, one bedroom language, one warm photographic grade, twelve frames across the full ad surface. Every frame came out of the same ComfyUI pipeline on a local GPU, with edit passes where the model shows its seams (hands, packaging) and a single grade holding the set together as if it was one shoot. Consistency here is a pipeline property: the same product, the same light vocabulary, the same route, rerun for the next collection, variant or season.',
  challenge:
    'Twelve frames is where inconsistency gets caught. Skin and hands fail first in generated imagery; fabric and bedding need believable folds at every scale; and packaging has to survive close inspection without a brand mark to hide behind. On top of that the set had to read as one shoot (same mattress, same room language, same grade) while spanning everything from a sunlit morning hero to a dark-studio banner. Every frame had to hold up as a standalone ad and still belong to the set.',
  approach: [
    'Designed the surface first: the frames a sleep brand actually runs (hero, lifestyle, night, macro, unboxing, flatlay, banner) and the formats each ships in.',
    'Locked the product and the grade so all twelve frames belong to one shoot: same mattress design, same warm photographic look, same bedding language.',
    'Ran the set through one ComfyUI pipeline on the local GPU, photographic prompts, batch queue, no per-frame hand tuning.',
    'Generated the scene sets (morning, night, couple) around the room language the hero established.',
    'Added the commerce frames: comfort press, macro knit / layers / airflow, unboxing, flatlay, and a dark-studio banner with copy space for headline type.',
    'Ran targeted edit passes where the model shows its seams (hands, packaging) then graded the full set as one delivery.',
  ],
  stack: [
    'Krea 2 turbo (fp8) · ComfyUI graph',
    'Reference-image workflows, scene + product lock',
    'Own GPU batch queue, full set from one pipeline',
    'Edit passes, hands / packaging cleanup',
    'Final grade + 16:9 / 4:5 / 1:1 crops',
  ],
  workflow: [
    { label: 'brief, one product across the whole ad surface' },
    { label: 'system design, formats, scenes, grade' },
    { label: 'product lock, studio + macro set' },
    { label: 'scene set, bedroom morning / night / couple' },
    { label: 'e-commerce set, unboxing, flatlay, banner' },
    { label: 'edit passes, hands, packaging, cleanup' },
    { label: 'grade, one photographic look across the set' },
    { label: 'delivery, hero, lifestyle, macro, e-comm crops' },
  ],
  results: [
    { kind: 'image', label: 'hero, morning bedroom', src: 'media/sleep-brand-image-system/stills/hero-wakeup.jpg' },
    { kind: 'image', label: 'studio, product profile', src: 'media/sleep-brand-image-system/stills/studio-profile.jpg' },
    { kind: 'image', label: 'lifestyle, morning light', src: 'media/sleep-brand-image-system/stills/morning-light.jpg' },
    { kind: 'image', label: 'lifestyle, night', src: 'media/sleep-brand-image-system/stills/night-rest.jpg' },
    { kind: 'image', label: 'lifestyle, two sleepers', src: 'media/sleep-brand-image-system/stills/couple-sleep.jpg' },
    { kind: 'image', label: 'e-commerce, unboxing moment', src: 'media/sleep-brand-image-system/stills/unboxing.jpg' },
    { kind: 'image', label: 'detail, comfort press test', src: 'media/sleep-brand-image-system/stills/comfort-press.jpg' },
    { kind: 'image', label: 'macro, knit weave', src: 'media/sleep-brand-image-system/stills/macro-knit.jpg' },
    { kind: 'image', label: 'macro, comfort layers', src: 'media/sleep-brand-image-system/stills/macro-layers.jpg' },
    { kind: 'image', label: 'macro, airflow structure', src: 'media/sleep-brand-image-system/stills/macro-airflow.jpg' },
    { kind: 'image', label: 'e-commerce, styled flatlay', src: 'media/sleep-brand-image-system/stills/flatlay.jpg' },
    { kind: 'image', label: 'e-commerce banner, dark studio, copy space', src: 'media/sleep-brand-image-system/stills/ecommerce-callout.jpg' },
  ],
}

// Grid order = array order.
export const projects: Project[] = [concept7up, conceptNeonChase, conceptHappydentWhiteGum, csMattressHeroStudio, csBedroomLifestyle, csReferenceControlled, csCommercialSystem, csEcommerceSystem, conceptSleepBrandSystem]

// Case-study display order: NEWEST FIRST by `date` (exact when known, else
// the year). Ties keep the original array order, so same-date entries slot
// in without jumps. Any new project added with a `date` sorts itself in.
export const projectsByDate: Project[] = [...projects].sort(
  (a, b) => {
    const ka = a.date ?? `${a.year}-01-01`
    const kb = b.date ?? `${b.year}-01-01`
    if (ka === kb) return projects.indexOf(a) - projects.indexOf(b)
    return ka < kb ? 1 : -1
  }
)

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug)

export const byCompany = (company: Company) =>
  projects.filter((p) => p.company === company)
