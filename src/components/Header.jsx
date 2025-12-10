import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PillNav from './PillNav';

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function MobileMenu({ items, active, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 text-white backdrop-blur-xl border border-white/10 shadow-lg z-50 transition-transform active:scale-95"
      >
        <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
          <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20, originY: 0, originX: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute top-16 right-0 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2 flex flex-col"
          >
            {items.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => {
                    setIsOpen(false);
                    onNavigate(e, link.id);
                  }}
                  className={`
                    w-full text-right px-6 py-3 text-sm font-medium transition-colors
                    ${isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ scrollRef }) {
  const [active, setActive] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observers = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = links.map(link => ({
    label: link.label,
    href: `#${link.id}`,
    id: link.id,
    onClick: (e) => {
      e.preventDefault();
      handleScroll(link.id);
    }
  }));

  const handleMobileNavigate = (e, id) => {
    handleScroll(id);
  }

  // Mobile View
  if (isMobile) {
    return <MobileMenu items={navItems} active={active} onNavigate={handleMobileNavigate} />;
  }

  // Desktop View
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          items={navItems}
          activeHref={`#${active}`}
          className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] px-2 py-2"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#ffffff"
          hoveredPillTextColor="#000000"
          pillTextColor="#000000"
        />
      </div>
    </header>
  );
}
