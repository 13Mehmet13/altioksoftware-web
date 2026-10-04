function Logo({ className = 'h-8 w-auto' }) {
  return (
    <svg viewBox="0 0 40 36" className={className} role="img" aria-label="Altıok Software">
      <path d="M2 34 L15 2 H22 L24 8 L10.5 34 Z" fill="#e9eef6" />
      <path d="M12.5 24 H22 L24.5 18 H15 Z" fill="#06080c" />
      <g fill="#2ea3ff">
        <path d="M25 17 L37 4 L35 10 L38 9.5 L36 3 Z" opacity="0.55" />
        <path d="M25 18 L39 13 L35.5 18 L39 18 Z" opacity="0.8" />
        <path d="M25 19.5 L39 24 L35.5 20 L39 21 Z" />
        <path d="M25 20.5 L36 32 L34 27 L31 29 Z" opacity="0.6" />
      </g>
    </svg>
  )
}

export default Logo
