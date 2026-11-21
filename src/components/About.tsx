import Reveal from './Reveal'
import LinkedInIcon from './LinkedInIcon'
import GitHubIcon from './GitHubIcon'
import { LINKEDIN_URL, GITHUB_URL } from '../data/social'
import { useT, useTL } from '../data/runtime'

const PROCESS_PILLARS = [
  {
    role: 'Direction & Reference Lock',
    org: 'Phase 01 · Pre-Production',
    location: 'Isolation & Layout',
    dates: '01 / Brief → Reference Pack',
    note: 'Product geometry, proportions, label specs, and camera/light direction locked before a single frame generates.',
    bullets: [
      'Source product extraction and multi-angle reference packs.',
      '3D environment blocking and camera blocking in Blender via MCP when a shot requires exact perspective.',
      'Lighting mood boards, palette targets, and format aspect specs mapped upfront.',
    ],
  },
  {
    role: 'ComfyUI & LoRA Engineering',
    org: 'Phase 02 · Generation',
    location: 'Control & Consistency',
    dates: '02 / Open-Source First → Custom Controls',
    note: 'Modular node graphs, in-house character and style LoRAs, and deterministic seed/sampler sweeps built for zero drift.',
    bullets: [
      'Multi-reference conditioning and instruction-guided editing inside ComfyUI.',
      'Custom character, product, and style LoRA training with strict dataset curation.',
      'Agent-driven batch queuing and parameter sweeps across local GPU pipelines.',
    ],
  },
  {
    role: 'Commercial Polish & Delivery',
    org: 'Phase 03 · Finishing',
    location: 'Upscale & Multi-Format',
    dates: '03 / Composite → Grade → Ship',
    note: 'Physical product compositing, shadow grounding, high-res upscaling, and native aspect adaptation for every placement.',
    bullets: [
      'Relighting, contact shadow integration, and texture-preserving upscales.',
      'Unified color grading across full still sets and AI video cuts.',
      'Native 16:9 hero, 4:5 mobile, 1:1 catalogue, and 9:16 social deliverables.',
    ],
  },
]

// Skills grouped the way recruiters scan them: generative AI first, then the
// production and automation layers around it.
const SKILL_GROUPS = [
  {
    label: 'generative ai',
    items: [
      'ComfyUI',
      'Ideogram 4',
      'Krea 2',
      'Flux · Klein',
      'Z-Image Turbo',
      'Midjourney',
      'LoRA training',
      'DiffSynth',
    ],
  },
  {
    label: 'video',
    items: ['MiniMax H3', 'Seedance 2.5', 'LTX / Wan', 'Wan Animate motion transfer'],
  },
  {
    label: 'production',
    items: ['Blender', 'Rokoko mocap', 'Topaz upscale'],
  },
  {
    label: 'automation & agents',
    items: ['API automation', 'Hermes agent', 'Codex CLI', 'Claude Code', 'MCP / agent workflows'],
  },
]

export default function About() {
  const t = useT()
  const tl = useTL()
  const linkedinUrl = t('social.linkedin', LINKEDIN_URL)
  const githubUrl = t('social.github', GITHUB_URL)

  return (
    <section id="about" className="scroll-mt-16 py-10 sm:py-12">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
          <p className="eyebrow-green">{t('about.tag')}</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {t('about.title1')}
            <br />
            {t('about.title2')}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{t('about.p1')}</p>
          <p className="mt-3 leading-relaxed text-muted">{t('about.p2')}</p>
          <p className="mt-3 leading-relaxed text-muted">{t('about.p3')}</p>
          <p className="mt-3 leading-relaxed text-muted">{t('about.p4')}</p>

          <div className="mt-6 space-y-4">
            {SKILL_GROUPS.map((g, i) => (
              <div key={g.label}>
                <p className="eyebrow">{t(`about.sg${i + 1}.label`, g.label)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tl(`about.sg${i + 1}.items`, g.items).map((s) => (
                    <span
                      key={s}
                      className="border border-ink-600 px-3 py-1 font-mono text-[11px] text-paper/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        <Reveal delay={140}>
        <div>
          <h3 className="eyebrow">{t('about.exp')}</h3>
          <ol className="mt-5 space-y-0">
            {PROCESS_PILLARS.map((item, i) => (
              <li key={item.role} className="relative border-l border-ink-600 pb-6 pl-6 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-green" />
                <p className="font-mono text-[11px] uppercase tracking-wideish text-slateAccent">
                  {t(`about.t${i + 1}.dates`, item.dates)}
                </p>
                <h4 className="mt-1 font-display text-lg font-bold text-paper">
                  {t(`about.t${i + 1}.role`, item.role)}
                </h4>
                <p className="font-mono text-xs font-semibold text-greenReadable">
                  {t(`about.t${i + 1}.org`, item.org)}
                  {item.location ? (
                    <span className="font-normal text-muted"> · {t(`about.t${i + 1}.location`, item.location)}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`about.t${i + 1}.note`, item.note)}
                </p>
                <ul className="mt-2.5 space-y-1">
                  {tl(`about.t${i + 1}.bullets`, item.bullets).map((b) => (
                    <li key={b} className="flex gap-2.5 text-[13px] leading-snug text-paper/80">
                      <span className="shrink-0 text-greenReadable">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="panel-dark mt-8 p-5">
            <p className="font-mono text-[11px] uppercase tracking-wideish text-snow/60">
              {t('about.cur.label')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-snow/90">
              {t('about.cur.text')}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-snow/40 px-4 py-2 font-mono text-xs uppercase tracking-wideish text-snow transition-colors hover:border-skyBlue hover:text-skyBlue"
              >
                <LinkedInIcon className="h-4 w-4" />
                {t('about.cur.linkedin')}
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-snow/40 px-4 py-2 font-mono text-xs uppercase tracking-wideish text-snow transition-colors hover:border-skyBlue hover:text-skyBlue"
              >
                <GitHubIcon className="h-4 w-4" />
                {t('about.cur.github')}
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
