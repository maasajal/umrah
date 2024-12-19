"use client";
import Banner from "@/pages/home/Banner";
import KaabaVideo from "@/pages/home/KaabaVideo";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <KaabaVideo />
      <Banner />
    </main>
  );
}
