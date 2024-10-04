import { Hero } from "@/container/home/hero";
import { Options } from "@/container/home/options";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Options />
      <Footer />
    </main>
  );
}
