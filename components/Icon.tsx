import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { name: "arrow" | "github" | "linkedin" | "x" | "instagram" | "mail" | "external" | "check" | "copy" | "code" | "layout" | "server" | "database" | "cloud" | "tools" };

export function Icon({ name, ...props }: Props) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (name === "arrow") return <svg {...common} {...props}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
  if (name === "external") return <svg {...common} {...props}><path d="M14 5h5v5" /><path d="m13 11 6-6" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>;
  if (name === "github") return <svg {...common} {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 4 5.1 5.1 0 0 0 19.1.8S17.8.4 15 2.2a13.4 13.4 0 0 0-6 0C6.2.4 4.9.8 4.9.8A5.1 5.1 0 0 0 4.8 4 5.5 5.5 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></svg>;
  if (name === "linkedin") return <svg {...common} {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect width="4" height="12" x="2" y="9" rx="1" /><path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
  if (name === "x") return <svg {...common} {...props} strokeWidth={2.8}><path d="M5 4 19 20M19 4 5 20" /></svg>;
  if (name === "instagram") return <svg {...common} {...props}><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
  if (name === "mail") return <svg {...common} {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
  if (name === "code") return <svg {...common} {...props}><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>;
  if (name === "layout") return <svg {...common} {...props}><rect width="18" height="16" x="3" y="4" rx="2" /><path d="M3 9h18M9 9v11" /></svg>;
  if (name === "server") return <svg {...common} {...props}><rect width="18" height="6" x="3" y="4" rx="1" /><rect width="18" height="6" x="3" y="14" rx="1" /><path d="M7 7h.01M7 17h.01" /></svg>;
  if (name === "database") return <svg {...common} {...props}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></svg>;
  if (name === "cloud") return <svg {...common} {...props}><path d="M17.5 19H9a7 7 0 1 1 6.7-9H17a4 4 0 0 1 .5 9Z" /></svg>;
  if (name === "tools") return <svg {...common} {...props}><path d="m14.7 6.3 3-3a4 4 0 0 0-5 5l-8 8a2.1 2.1 0 1 0 3 3l8-8a4 4 0 0 0 5-5l-3 3-3-3Z" /></svg>;
  if (name === "check") return <svg {...common} {...props}><path d="m5 12 4 4L19 6" /></svg>;
  return <svg {...common} {...props}><rect width="12" height="12" x="9" y="9" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" /></svg>;
}
