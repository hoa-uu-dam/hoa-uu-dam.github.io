type Props = { id: string };

export default function Flag({ id }: Props) {
  if (id === 'vi') {
    return (
      <svg
        width="16"
        height="12"
        viewBox="0 0 30 20"
        style={{ borderRadius: 1, flexShrink: 0 }}
      >
        <rect width="30" height="20" fill="#DA251D" />
        <polygon
          points="15,5 16.47,9.51 21.22,9.51 17.38,12.29 18.85,16.8 15,14.02 11.15,16.8 12.62,12.29 8.78,9.51 13.53,9.51"
          fill="#FF0"
        />
      </svg>
    );
  }
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 60 30"
      style={{ borderRadius: 1, flexShrink: 0, display: 'block' }}
    >
      <clipPath id="auU">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="auS">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#auU)">
        <path d="M0 0v30h60V0z" fill="#00247D" />
        <path
          d="M0 0l30 15M30 0L0 15"
          transform="scale(1,1)"
          stroke="#fff"
          strokeWidth="3"
        />
        <path
          d="M0 0l30 15M30 0L0 15"
          clipPath="url(#auS)"
          stroke="#CF142B"
          strokeWidth="2"
        />
        <path d="M15 0v15M0 7.5h30" stroke="#fff" strokeWidth="5" />
        <path d="M15 0v15M0 7.5h30" stroke="#CF142B" strokeWidth="3" />
      </g>
      <circle cx="15" cy="22.5" r="2.2" fill="#fff" />
      <circle cx="46" cy="6" r="1.2" fill="#fff" />
      <circle cx="52" cy="11" r="1.4" fill="#fff" />
      <circle cx="44" cy="15" r="1.1" fill="#fff" />
      <circle cx="50" cy="20" r="1.3" fill="#fff" />
      <circle cx="42" cy="22" r="0.8" fill="#fff" />
    </svg>
  );
}
