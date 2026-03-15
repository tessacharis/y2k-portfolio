import { useCursorify } from "@cursorify/react";
import DefaultCursor from "../assets/DefaultCursor.svg";
import ClickedCursor from "../assets/ClickedCursor.svg";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import "../styles/customcursor.scss";

const CustomCursor = () => {
  const { mouseState, style } = useCursorify();
  const shadowRef = useRef(null);

  const [reduceMotion, setReduceMotion] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Determine user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);

    const handleMotionChange = (e) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    // Initial theme check
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    // Observer for theme changes to dynamically switch shadow color
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme") || "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, early return without trailing animations
    if (reduceMotion || !shadowRef.current) return;

    // Use GSAP quickTo for 60fps hardware accelerated tracking
    const xTo = gsap.quickTo(shadowRef.current, "x", { duration: 0.6, ease: "power3", delay: 0 });
    const yTo = gsap.quickTo(shadowRef.current, "y", { duration: 0.6, ease: "power3", delay: 0 });

    const handleMouseMove = (e) => {
      // Offset by 20 to center the 40x40 shadow box exactly behind the cursor tip
      xTo(e.clientX - 20);
      yTo(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reduceMotion]);

  // Use the CSS class toggle for theme specific background color instead
  const themeClass = theme === "dark" ? "dark-theme" : "";

  return (
    <>
      <div
        className="custom-cursor"
        aria-hidden="true" // Decorative element, hide from screen readers
      >
        {(() => {
          if (style === "pointer" || mouseState === "mouseDown" || mouseState === "drag" || mouseState === "dragging") {
            return <img src={ClickedCursor} alt="" />;
          }
          return <img src={DefaultCursor} alt="" />;
        })()}
      </div>

      {/* Trailing drop shadow Portal (to escape container transforms) */}
      {!reduceMotion && typeof document !== "undefined" && createPortal(
        <div
          ref={shadowRef}
          aria-hidden="true"
          className={`custom-cursor-shadow ${themeClass}`.trim()}
        />,
        document.body
      )}
    </>
  );
};

export default CustomCursor;
