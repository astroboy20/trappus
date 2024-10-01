import { Hero } from "@/components/home/hero";
import { Options } from "@/components/home/options";
import { Header } from "@/container/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header/>
     <Hero/>
     <Options/>
    </main>
  );
}
