import type { Project } from '../data/projects'
import type { ReactNode } from 'react'
import { useProjectsOV } from '../data/overrides'
import { useT, useTL } from '../data/runtime'
import ProjectCard from './ProjectCard'
import FeaturedCard from './FeaturedCard'
import Reveal from './Reveal'
import NodeGraph from './NodeGraph'

function Lane({
  title,
  blurb,
  projects,
  footer,
  wide = false,
}: {
  title: string
  blurb: string
  projects: Project[]
  footer?: ReactNode
  wide?: boolean
}) {
  // No empty lanes, a section with nothing to show should not render.
  if (projects.length === 0) return null

  // Featured case studies render as large image-forward cards; the rest stay
  // compact so the lanes remain scannable.
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="min-w-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink-600 pb-2.5">
        <h3 className="font-display text-lg font-black uppercase tracking-tight sm:text-xl">
          {title}
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-wideish text-muted">
          {String(projects.length).padStart(2, '0')} projects
        </span>
      </div>
      <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{blurb}</p>
      {featured.length > 0 && (
        <div className={wide ? 'mt-4 grid gap-4 lg:grid-cols-2' : 'mt-2 grid gap-4'}>
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <FeaturedCard project={p} num={String(i + 1).padStart(2, '0')} />
            </Reveal>
          ))}
        </div>
      )}
      <div className={wide ? 'mt-4 grid gap-4 lg:grid-cols-2' : 'mt-4 grid gap-3.5'}>
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 90}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
        {wide ? footer : null}
      </div>
      {!wide && footer ? <div className="mt-3.5">{footer}</div> : null}
    </section>
  )
}

export default function WorkGrid() {
  const all = useProjectsOV()
  const t = useT()
  const tl = useTL()
  const conceptLane = all.filter((p) => p.company === 'Concept')
  const shippedLane = all.filter((p) => p.company !== 'Concept')
  const singleLane = shippedLane.length === 0 || conceptLane.length === 0

  const conceptCard = (
    <div className="flex h-full flex-col justify-between border border-dashed border-ink-600 p-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wideish text-greenReadable">
          {t('work.card.tag')}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
          {t('work.card.body')}{' '}
          <a href="#showcase" className="text-greenBright underline-offset-2 hover:underline">
            showcase
          </a>
          .
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wideish text-muted">
          {t('work.card.tooling')}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {tl('work.card.tools', ['comfyui', 'seedance 2.5', 'blender + mcp', 'krea 2']).map((chip) => (
            <span
              key={chip}
              className="border border-ink-600 px-2 py-0.5 font-mono text-[11px] text-paper/80"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section id="work" className="scroll-mt-16 py-10 sm:py-12">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow-green">{t('work.tag')}</p>
          <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {t('work.title')}
          </h2>
        </div>

        <div className={singleLane ? 'mt-7 space-y-6' : 'mt-7 grid gap-x-8 gap-y-10 lg:grid-cols-2'}>
          <Lane
            title={t('work.lane1.title')}
            blurb={t('work.lane1.blurb')}
            projects={conceptLane}
            wide={singleLane}
            footer={
              singleLane ? (
                conceptCard
              ) : (
                <div className="space-y-3.5">
                  {conceptCard}
                  <div className="panel p-4">
                    <NodeGraph className="mx-auto max-w-[240px] opacity-90" animated={false} />
                    <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-wideish text-muted">
                      {t('work.fig')}
                    </p>
                  </div>
                </div>
              )
            }
          />
          <Lane
            title={t('work.lane2.title')}
            blurb={t('work.lane2.blurb')}
            projects={shippedLane}
            wide={singleLane}
          />
          {singleLane && conceptLane.length > 0 && (
            <div className="panel flex flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:px-6">
              <div className="max-w-md">
                <p className="font-mono text-[11px] uppercase tracking-wideish text-greenReadable">
                  {t('work.fig')}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Every concept study runs through deterministic node routing: reference isolation, conditioning lock, sampler sweep, and grade pass.
                </p>
              </div>
              <NodeGraph className="w-full max-w-[260px] shrink-0 opacity-90" animated={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
