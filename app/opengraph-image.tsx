import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.28), transparent 28%), linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8, textTransform: "uppercase", color: "#7dd3fc" }}>Rahul Kumar</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, lineHeight: 1, maxWidth: 900 }}>Java Backend Engineer</div>
          <div style={{ fontSize: 30, maxWidth: 860, color: "#cbd5e1" }}>
            Scalable APIs, Spring Boot, microservices thinking, and cloud-native backend systems.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#94a3b8" }}>rahul9332935@gmail.com · github.com/Rahul9332935</div>
      </div>
    ),
    size
  );
}
