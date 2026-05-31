import React, { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();

      const scale = 0.1; // Adjust the effect scale here
      const x = (clientX - (left + width / 2)) * scale;
      const y = (clientY - (top + height / 2)) * scale;

      gsap.to(element, { x, y, duration: 1, ease: "elastic.out(1, 0.3)" });

      // Apply the same effect to all child text elements
      const textElements = element.querySelectorAll(
        "p, span, h1, h2, h3, h4, h5, h6"
      );
      textElements.forEach((textElement) => {
        gsap.to(textElement, {
          x,
          y,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    const mouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      // Reset the position of all child text elements
      const textElements = element.querySelectorAll(
        "p, span, h1, h2, h3, h4, h5, h6, img"
      );
      textElements.forEach((textElement) => {
        gsap.to(textElement, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
