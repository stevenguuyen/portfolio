import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "01" },
  { id: "about", label: "02" },
  { id: "projects", label: "03" },
  { id: "contact", label: "04" },
];

export default function Navbar({ scrollRef }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleClick = (id) => {
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

  const activeIndex = sections.findIndex(s => s.id === active);

  const progressPercent = (activeIndex / (sections.length - 1)) * 100;

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">

      <div className="relative flex flex-col items-center gap-14 py-4 px-2">


        <div className="absolute top-8 bottom-8 w-0.5 bg-white/10 rounded-full -z-10" />


        <div
          className="absolute top-8 w-0.5 bg-white rounded-full -z-10 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{ height: `calc((100% - 64px) * ${progressPercent / 100})` }}
        />

        {sections.map(({ id, label }, index) => {
          const isActive = active === id;
          const isPassed = index <= activeIndex;

          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="group relative flex items-center justify-center focus:outline-none"
            >

              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border-2 transition-all duration-500
                  ${isActive
                    ? "bg-white border-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    : isPassed
                      ? "bg-black border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "bg-black border-white/20 text-gray-500 hover:border-white/50"
                  }
                `}
              >
                {label}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
