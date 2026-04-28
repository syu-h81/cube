import Image from "next/image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/_Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero 
          title="CUBE"
          description="アウトプットしていくサイト"
          imageSrc="/images/hero-img.png"
        />
      </main>
      <Footer />
    </>
  );
}
