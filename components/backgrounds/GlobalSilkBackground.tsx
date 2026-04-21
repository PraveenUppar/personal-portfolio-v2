"use client";

import Silk from "./Silk";

export default function GlobalSilkBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}