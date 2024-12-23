"use client";
import Banner from "@/pages/home/Banner";
import HotelInMakkah from "@/pages/home/HotelInMakkah";
import HotelInMedina from "@/pages/home/HotelInMedina";
import KaabaVideo from "@/pages/home/KaabaVideo";
import OurOffer from "@/pages/home/OurOffer";
import SpiritualJourney from "@/pages/home/SpiritualJourney";
import WhatToDo from "@/pages/home/WhatToDo";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <KaabaVideo />
      <Banner />
      <OurOffer />
      <WhatToDo />
      <SpiritualJourney />
      <HotelInMakkah />
      <HotelInMedina />
    </main>
  );
}
