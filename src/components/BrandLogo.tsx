// S-WAYS Ai solutions brand lockup component.
// Renders the official studio logo cleanly on any surface without a clunky box:
// - dark / night / force-dark footer & brand headers -> white + champagne gold on transparent
// - light / sepia paper -> obsidian + burnished bronze + 3D golden S-ribbon on transparent
export default function BrandLogo({
  size = 'md',
  tone = 'auto',
  markOnly = false,
  className = '',
}: {
  size?: 'header' | 'sm' | 'md' | 'lg' | 'hero'
  tone?: 'auto' | 'dark'
  markOnly?: boolean
  className?: string
}) {
  if (markOnly) {
    const dim =
      size === 'sm' || size === 'header'
        ? 'h-8 w-8'
        : size === 'lg' || size === 'hero'
          ? 'h-16 w-16'
          : 'h-10 w-10'
    return (
      <span className={`inline-flex shrink-0 items-center justify-center ${dim} ${className}`}>
        <img
          src="media/brand/s-ways-mark.png"
          alt="S-WAYS Ai solutions"
          width={256}
          height={256}
          className="h-full w-full object-contain select-none"
        />
      </span>
    )
  }

  const sizeCls =
    size === 'header'
      ? 'h-9 w-auto'
      : size === 'sm'
        ? 'h-8 w-auto'
        : size === 'hero'
          ? 'h-auto w-[min(86vw,380px)] sm:w-[390px]'
          : size === 'lg'
            ? 'h-16 w-auto'
            : 'h-12 w-auto'

  const forceDarkCls = tone === 'dark' ? 'logo-force-dark' : ''

  return (
    <span className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src="media/brand/s-ways-logo.png"
        alt="S-WAYS Ai solutions"
        width={670}
        height={212}
        className={`logo-for-dark ${forceDarkCls} ${sizeCls} object-contain select-none`}
      />
      {tone !== 'dark' && (
        <img
          src="media/brand/s-ways-logo-light.png"
          alt="S-WAYS Ai solutions"
          width={670}
          height={212}
          className={`logo-for-light ${sizeCls} object-contain select-none`}
        />
      )}
    </span>
  )
}
