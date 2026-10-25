import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.site.name} — ${portfolio.profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { profile } = portfolio;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          background: "#0a0c10",
          color: "#f4f4f1",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-220px",
            right: "-120px",
            width: "620px",
            height: "620px",
            display: "flex",
            borderRadius: "50%",
            border: "1px solid rgba(127,154,255,0.28)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(31,75,255,0.28), rgba(10,12,16,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-280px",
            left: "-160px",
            width: "560px",
            height: "560px",
            display: "flex",
            borderRadius: "50%",
            border: "1px solid rgba(244,244,241,0.08)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "54px",
                height: "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "14px",
                background: "#f4f4f1",
                color: "#0a0c10",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {profile.initials}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#a0a6b1",
              }}
            >
              Portfolio
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#7f9aff",
            }}
          >
            {profile.title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "92px",
              lineHeight: 1,
              letterSpacing: "-3px",
              fontWeight: 600,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "22px",
              fontSize: "34px",
              lineHeight: 1.25,
              color: "#a0a6b1",
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,244,241,0.12)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#7c8494",
          }}
        >
          <div style={{ display: "flex" }}>{profile.location}</div>
          <div style={{ display: "flex" }}>Next.js · TypeScript</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
