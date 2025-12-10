import { motion } from "framer-motion";
import MagicBento from "./MagicBento";

const aboutData = [
  {
    title: 'Nguyen Tan Phat',
    description: 'An IT student who is passionate about programming and problem-solving.',
    label: 'Who I Am',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1'
  },
  {
    title: 'Experience',
    description: 'Completed training and internship at FPT Software Ho Chi Minh City.',
    label: 'Timeline',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1'
  },
  {
    title: 'Tech Stack',
    description: (
      <div className="flex flex-col gap-2 text-sm mt-2">
        <div>
          <span className="text-white font-semibold block mb-1">BackEnd:</span>
          <span className="text-[#8b949e]">Java (Spring Boot, Core Java), C#</span>
        </div>
        <div>
          <span className="text-white font-semibold block mb-1">Frontend:</span>
          <span className="text-[#8b949e]">React.js, Vite, Tailwind CSS</span>
        </div>
        <div>
          <span className="text-white font-semibold block mb-1">Database:</span>
          <span className="text-[#8b949e]">PostgreSQL, MySQL, MongoDB</span>
        </div>
        <div>
          <span className="text-white font-semibold block mb-1">Project Management:</span>
          <span className="text-[#8b949e]">Git, GitHub, GitLab</span>
        </div>
      </div>
    ),
    label: 'Skills',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1 md:row-span-2 h-full !justify-start'
  },
  {
    title: 'FPT University Can Tho',
    description: 'A 4th-year Software Engineering student at FPT University Can Tho.',
    label: 'Academic',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Goals',
    description: 'Aiming to become a Full-stack Developer and hack secure systems.',
    label: 'Ambition',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1'
  },
  {
    title: 'Interests',
    description: 'Coding, Gaming, Walking, Learning Japanese, German, English',
    label: 'Personal',
    color: 'rgba(13, 17, 23, 0.6)',
    className: 'col-span-1 md:col-span-2'
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen snap-start flex flex-col items-center justify-center py-4 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="w-full max-w-[1100px] px-4 flex items-center justify-center"
      >
        <MagicBento
          cards={aboutData}
          spotlightRadius={300}
          glowColor="255, 255, 255"
        />
      </motion.div>
    </section>
  );
}
