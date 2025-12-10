import { useRef } from "react";
import { motion } from "framer-motion";
import avatarImg from "../assets/avatar.jpg";
import { ParticleCard, GlobalSpotlight } from "./MagicBento";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen snap-start flex items-center justify-center text-[#c9d1d9] px-4 py-20 relative z-10 font-sans overflow-hidden bento-section"
    >
      <GlobalSpotlight gridRef={containerRef} />

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">

        {/* Left Column: Big Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className="flex justify-center lg:justify-end order-1 lg:order-none"
        >
          <div className="relative group w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/50 bg-white/20 relative z-10 shadow-2xl backdrop-blur-sm">
              <img
                src={avatarImg}
                alt="Nguyen Tan Phat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Consolidated Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col items-center lg:items-start order-2 lg:order-none"
        >
          <ParticleCard
            enableTilt={true}
            enableMagnetism={true}
            className="w-full max-w-[550px] bg-black/40 backdrop-blur-xl border border-white/20 rounded-[20px] p-6 lg:p-8 shadow-2xl flex flex-col gap-6 magic-bento-card magic-bento-card--border-glow"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight text-[#c9d1d9] mb-2 drop-shadow-md">
                Nguyen Tan Phat
              </h1>
              <div className="text-[20px] font-medium text-[#8b949e]">
                Vladilena Milize · Shin_LilaS
              </div>
            </div>

            <hr className="border-white/10" />

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="https://www.facebook.com/nguyen.tan.phat.165298/" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white transition-all transform hover:scale-110 bg-white/5 p-3 rounded-full border border-white/10 hover:border-white/30 relative z-50 pointer-events-auto">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@daikanamky" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white transition-all transform hover:scale-110 bg-white/5 p-3 rounded-full border border-white/10 hover:border-white/30 relative z-50 pointer-events-auto">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a href="https://discord.gg/ygdKEThk" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white transition-all transform hover:scale-110 bg-white/5 p-3 rounded-full border border-white/10 hover:border-white/30 relative z-50 pointer-events-auto">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-7.6517 0 13.9113 13.9113 0 00-.616-1.1588.077.077 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/stevenguuyen" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white transition-all transform hover:scale-110 bg-white/5 p-3 rounded-full border border-white/10 hover:border-white/30 relative z-50 pointer-events-auto">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </ParticleCard>
        </motion.div>
      </div>
    </section>
  );
}
