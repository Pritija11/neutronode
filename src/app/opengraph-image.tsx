import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "NeutronNode — Cloud Servers Built to Stay Up";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 15% 20%, rgba(14,164,115,0.2), transparent 55%), radial-gradient(circle at 85% 10%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 50% 90%, rgba(236,72,153,0.14), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={150}
          height={150}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 24,
            fontSize: 60,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#17172a",
          }}
        >
          neutronnode
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 26,
            color: "#57566e",
          }}
        >
          Cloud servers built to stay up
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 10,
            background:
              "linear-gradient(90deg, #0ea473 0%, #2dd4bf 55%, #38bdf8 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
