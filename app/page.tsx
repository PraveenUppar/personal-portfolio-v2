"use client";

import Greeting from "@/components/sections/greeting";
import Landing from "@/components/sections/landing";
import Social from "@/components/sections/social";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <main>
      <Landing />
      <Greeting />
      <Work />
      <Social />
    </main>
  );
}
