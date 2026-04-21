"use client";

import Hero from "@/components/sections/hero";
import Greeting from "@/components/sections/greeting";
import Landing from "@/components/sections/landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <Greeting />
      <Hero />
    </main>
  );
}
