type IconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function WhatsAppIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={width} height={height} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CheckIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ArrowRightIcon({ className, width = 16, height = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CloseIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function LogoMarkIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={width} height={height}>
      <path d="M4 6.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm9.5 5.5-4-2.5v5l4-2.5Z" />
    </svg>
  );
}

export function EmailIcon({ className, width = 22, height = 22 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function HelpCircleIcon({ className, width = 22, height = 22 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

/* ---------- Content category icons ---------- */

export function BroadcastIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M8.5 5.5a5 5 0 0 1 7 0" />
      <path d="M5.5 2.5a9 9 0 0 1 13 0" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v7" />
    </svg>
  );
}

export function ClapperboardIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 5.4" />
      <path d="m12.4 3.4 3.1 5.4" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
    </svg>
  );
}

export function LayersIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="m12.8 2.2 8.6 5.9a1 1 0 0 1 0 1.7l-8.6 5.9a2 2 0 0 1-1.6 0L2.6 9.8a1 1 0 0 1 0-1.7l8.6-5.9a2 2 0 0 1 1.6 0Z" />
      <path d="m22 12.3-8.6 5.9a2 2 0 0 1-1.6 0L3.2 12.3" />
      <path d="m22 17.3-8.6 5.9a2 2 0 0 1-1.6 0L3.2 17.3" />
    </svg>
  );
}

export function TrophyIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h2a2 2 0 0 1 2 2 4 4 0 0 1-4 4" />
      <path d="M7 5H5a2 2 0 0 0-2 2 4 4 0 0 0 4 4" />
    </svg>
  );
}

export function SmileIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

export function MicIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

/* ---------- Device compatibility icons ---------- */

export function TvIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function BoxIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z" />
      <path d="M3.3 7 12 12l8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export function AndroidTvIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M10 8.5v4l3.5-2Z" fill="currentColor" stroke="none" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function FlameIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function CastIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="M2 12a9 9 0 0 1 8 8" />
      <path d="M2 16a5 5 0 0 1 4 4" />
      <line x1="2" y1="20" x2="2.01" y2="20" />
    </svg>
  );
}

export function RemoteIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="3" />
      <line x1="12" y1="6.5" x2="12" y2="6.51" />
      <line x1="9.5" y1="11" x2="9.51" y2="11" />
      <line x1="14.5" y1="11" x2="14.51" y2="11" />
      <line x1="12" y1="16" x2="12" y2="16.01" />
    </svg>
  );
}

export function SmartphoneIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function LaptopIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="4" y="4" width="16" height="10" rx="1.5" />
      <path d="M2 18h20l-1.5-3h-17Z" />
    </svg>
  );
}

export function ProjectorIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <circle cx="9" cy="12" r="2.2" />
      <path d="M15 10.5h4M15 13.5h2.5" />
    </svg>
  );
}

export function WifiIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

export function TabletIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function LinkIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </svg>
  );
}
