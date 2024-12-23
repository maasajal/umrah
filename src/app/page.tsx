"use client";
import Banner from "@/pages/home/Banner";
import KaabaVideo from "@/pages/home/KaabaVideo";
import OurOffer from "@/pages/home/OurOffer";
import WhatToDo from "@/pages/home/WhatToDo";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <KaabaVideo />
      <Banner />
      <OurOffer />
      <WhatToDo />
    </main>
  );
}
