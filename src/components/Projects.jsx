import { useRef } from "react";
import { motion } from "framer-motion";
import portImg from "../assets/port.jpg";
import commerceImg from "../assets/522538662-73f54f53-5f51-416a-b963-681d0c58f0e1.png";
import taskImg from "../assets/3014609.jpg";
import { ParticleCard, GlobalSpotlight } from "./MagicBento";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, interactive developer portfolio built with React, Tailwind CSS, and Framer Motion. Features glassmorphism UI and Magic Bento grids.",
    image: portImg,
    link: "https://github.com/stevenguuyen/portfolio"
  },
  {
    title: "F-Flaboratory",
    description: "BE developer for Test order Service which contains test order, result management, and live comment with Web Socket.",
    image: commerceImg,
    link: "https://github.com/HungPoris/F_Laboratory"
  },
  {
    title: "F-Restaurant",
    description: "Full stack restaurant management system build with C#",
    image: taskImg,
    link: "https://github.com/BaoThanh22042004/RestaurantManagementSystem"
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bento-section min-h-screen snap-start flex items-center justify-center relative z-10 py-20 px-4 overflow-x-hidden"
    >
      <GlobalSpotlight gridRef={containerRef} />

      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-[450px]"
            >
              <ParticleCard
                className="group bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl flex flex-col h-full magic-bento-card magic-bento-card--border-glow"
                enableTilt={true}
                enableMagnetism={true}
              >
                {/* Image Area */}
                <div
                  className="h-48 w-full bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col text-left">
                  <h3 className="text-2xl font-bold text-white mb-3 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8b949e] text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Bottom Link - White Button with Arrow */}
                  <div className="mt-auto pointer-events-auto z-20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center font-bold hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ParticleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
