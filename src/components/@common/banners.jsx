/**
 * React component for a simple banner with background image.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered inside the banner.
 * @param {string} props.background - The URL of the background image.
 * @returns {ReactNode} - The rendered BannerSimple component.
 */
export function BannerSimple({ children, background }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden mt-4 min-h-[450px] relative bg-cover bg-center"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="absolute w-full h-full bg-neutral-900/30">
        <div className="absolute bottom-0 left-0 p-9 flex flex-col gap-5">{children}</div>
      </div>
    </div>
  );
}

/**
 * React component for a banner with a shadow effect and background image.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered inside the banner.
 * @param {string} props.background - The URL of the background image.
 * @returns {ReactNode} - The rendered BannerShadow component.
 */
export function BannerShadow({ children, background }) {
  const classBlur = `w-full rounded-xl overflow-hidden mt-4 min-h-[450px] blur-lg opacity-50 bg-cover bg-center`;
  const classNormal = `w-full rounded-xl overflow-hidden mt-4 min-h-[450px] absolute left-0 top-0 bg-cover bg-center`;
  return (
    <div className="relative">
      <div className={classBlur} style={{ backgroundImage: `url("${background}")` }}></div>
      <div className={classNormal} style={{ backgroundImage: `url("${background}")` }}>
        <div className="absolute w-full h-full bg-neutral-900/30">
          <div className="absolute bottom-0 left-0 p-9 flex flex-col gap-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
