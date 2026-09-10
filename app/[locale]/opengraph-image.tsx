import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090c",
          color: "#f1f2f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L12 13.5L20 4" stroke="#f1f2f5" strokeWidth="2.2" strokeLinecap="square" />
            <path d="M12 13.5V20.5" stroke="#f1f2f5" strokeWidth="2.2" strokeLinecap="square" />
            <circle cx="12" cy="13.5" r="1.6" fill="#4a5fee" />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 600, marginTop: 48, maxWidth: 900, lineHeight: 1.15 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#7a8290", marginTop: 28 }}>
          github.com/ermekov · {site.email}
        </div>
      </div>
    ),
    { ...size }
  );
}
