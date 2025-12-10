import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import PixelBlast from "./components/PixelBlast";

export default function App() {
  const scrollRef = useRef(null);

  return (
    <div className="relative h-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#dbeafe"
          patternScale={3}
          patternDensity={1.2} // Reduced density as requested
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={true}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.0}
          transparent={false} // Keeping false to ensure black background visibility
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <Header scrollRef={scrollRef} />
        <Navbar scrollRef={scrollRef} />

        <main
          ref={scrollRef}
          className="
            flex-1
            h-full
            pt-0
            overflow-y-scroll
            snap-y
            snap-mandatory
            scroll-smooth
            no-scrollbar
            "
        >
          {/* Sections need to be transparent to see the background */}
          <div className="w-full">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
