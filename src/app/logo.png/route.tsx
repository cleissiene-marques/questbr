import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Logo usado no schema Organization (layout.tsx) — mesmo desenho do .logo-mark do header.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06B6D4",
          borderRadius: 112,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="284" height="284" viewBox="0 0 24 24" fill="#000">
          <path d="M4 6.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm9.5 5.5-4-2.5v5l4-2.5Z" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
