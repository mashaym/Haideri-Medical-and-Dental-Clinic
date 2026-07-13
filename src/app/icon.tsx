import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#128a82",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c-2.5 0-4.5 1.7-6 1.7-1.2 0-2 .8-2 2.3 0 4.5 1.4 9.5 2.8 12.6.6 1.3 1.3 2.4 2.5 2.4 1.5 0 1.6-2.6 1.8-4.4.1-1.1.3-2.2.9-2.2s.8 1.1.9 2.2c.2 1.8.3 4.4 1.8 4.4 1.2 0 1.9-1.1 2.5-2.4C18.6 15.5 20 10.5 20 6c0-1.5-.8-2.3-2-2.3-1.5 0-3.5-1.7-6-1.7Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
