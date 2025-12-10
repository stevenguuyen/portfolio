import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function PillNav({
    logo,
    logoAlt,
    items = [],
    activeHref,
    className = "",
    ease = "power2.easeOut",
    baseColor = "#000",
    pillColor = "#fff",
    hoveredPillTextColor = "#fff",
    pillTextColor = "#000"
}) {
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const [activeItem, setActiveItem] = useState(activeHref || (items[0]?.href));

    useEffect(() => {
        if (activeHref) {
            setActiveItem(activeHref);
        }
    }, [activeHref]);

    useEffect(() => {
        const activeEl = navRef.current?.querySelector(`a[data-href='${activeItem}']`);
        if (activeEl && pillRef.current) {
            gsap.to(pillRef.current, {
                width: activeEl.offsetWidth,
                x: activeEl.offsetLeft,
                duration: 0,
            });
        }
    }, [activeItem, items]);

    const handleMouseEnter = (e) => {
        const target = e.target;
        if (target.tagName !== 'A') return;

        if (pillRef.current) {
            gsap.to(pillRef.current, {
                width: target.offsetWidth,
                x: target.offsetLeft,
                duration: 0.4,
                ease: ease
            });
        }
    };

    const handleMouseLeave = () => {
        const activeEl = navRef.current?.querySelector(`a[data-href='${activeItem}']`);
        if (activeEl && pillRef.current) {
            gsap.to(pillRef.current, {
                width: activeEl.offsetWidth,
                x: activeEl.offsetLeft,
                duration: 0.4,
                ease: ease
            });
        } else if (pillRef.current) {
            gsap.to(pillRef.current, { opacity: 0, duration: 0.2 });
        }
    };

    return (
        <div className={`flex items-center justify-between px-6 py-3 ${className}`}>
            {logo && (
                <div className="mr-8">
                    <img src={logo} alt={logoAlt || "Logo"} className="h-8" />
                </div>
            )}

            <div
                ref={navRef}
                className="relative flex items-center bg-transparent"
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={pillRef}
                    className="absolute top-0 bottom-0 rounded-full pointer-events-none"
                    style={{
                        backgroundColor: pillColor,
                        height: '100%',
                        opacity: 1,
                    }}
                />

                {items.map((item, index) => {
                    const isActive = activeItem === item.href;

                    return (
                        <a
                            key={index}
                            href={item.href}
                            data-href={item.href}
                            onClick={(e) => {
                                setActiveItem(item.href);
                                if (item.onClick) {
                                    item.onClick(e);
                                }
                            }}
                            onMouseEnter={handleMouseEnter}
                            className="relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full select-none cursor-pointer block"
                            style={{
                                color: isActive ? pillTextColor : baseColor,
                                textDecoration: 'none'
                            }}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
