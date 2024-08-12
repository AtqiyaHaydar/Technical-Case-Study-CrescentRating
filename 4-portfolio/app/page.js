import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="wrapper flex flex-col gap-y-20">
      <Hero />
      <AboutMe />
    </main>
  );
}
