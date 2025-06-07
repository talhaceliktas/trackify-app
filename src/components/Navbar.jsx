import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const linksRef = useRef([]);

  useEffect(() => {
    linksRef.current.forEach((link) => {
      const span = link.querySelector("span");
      if (!span) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      link.addEventListener("mouseenter", () => tl.play(0));
      link.addEventListener("mouseleave", () => tl.pause(0));
    });

    return () => {
      linksRef.current.forEach((link) => {
        if (link) {
          link.removeEventListener("mouseenter", () => {});
          link.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-5 py-3 bg-gray-100">
      <div>
        <h2 className="text-xl font-bold">Trackify</h2>
      </div>
      <div className="flex items-center space-x-6">
        {["Home", "Reports", "Settings"].map((text, i) => (
          <a
            key={i}
            ref={(el) => (linksRef.current[i] = el)}
            className="text-sm cursor-pointer relative overflow-hidden inline-block"
          >
            <span style={{ display: "inline-block", position: "relative" }}>
              {text}
            </span>
          </a>
        ))}
        <a>
          <img
            src="https://picsum.photos/40/40"
            alt="photo"
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
