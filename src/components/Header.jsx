import { useState, useEffect } from 'react';
import PillNav from './PillNav';

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header({ scrollRef }) {
  const [active, setActive] = useState("hero");


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
    onClick: (e) => {
      e.preventDefault();
      handleScroll(link.id);
    }
  }));

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
