export function StatusBar({ url, status }) {
  if (status) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="flex items-center transition md:justify-center md:hover:scale-90 opacity-70 scale-85"
      >
        <div className="flex items-center">
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" />
            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
              Disponible para trabajar
            </div>
          </span>
        </div>
      </a>
    );
  } else {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="flex items-center transition md:justify-center md:hover:scale-105 opacity-70"
      >
        <div className="flex items-center ">
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9251E4_0%,#3C2155_50%,#C551E4_100%)]" />
            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-purple-800 bg-purple-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
              Trabajando en este momento
            </div>
          </span>
        </div>
      </a>
    );
  }
}
