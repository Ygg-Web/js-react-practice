import React from "react";
import ContentLoader from "react-content-loader";

export default function Placeholder() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={0}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="250" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="394" rx="3" ry="3" width="90" height="30" />
      <rect x="0" y="290" rx="6" ry="6" width="280" height="84" />
      <circle cx="143" cy="116" r="115" />
      <rect x="138" y="385" rx="20" ry="20" width="139" height="44" />
    </ContentLoader>
  );
}
