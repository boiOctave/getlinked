import {

  Hero,
  Intro,
  Rules,
  Criteria,
  FAQ,
  Timeline,
  Prizes,
  Sponsors,
  Privacy,
  Footer,
  Navbar,
} from "@/sections";

export default function Home() {
  return (
    <main>
 <Navbar/>
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <FAQ />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </main>
  );
}
