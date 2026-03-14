import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import img1 from "../assets/glitch-background/Untitled_Artwork-1.png";
import img2 from "../assets/glitch-background/Untitled_Artwork-2.png";
import img3 from "../assets/glitch-background/Untitled_Artwork-3.png";
import img4 from "../assets/glitch-background/Untitled_Artwork-4.png";
import img5 from "../assets/glitch-background/Untitled_Artwork-5.png";
import img6 from "../assets/glitch-background/Untitled_Artwork-6.png";
import img7 from "../assets/glitch-background/Untitled_Artwork-7.png";
import img8 from "../assets/glitch-background/Untitled_Artwork-8.png";
import img9 from "../assets/glitch-background/Untitled_Artwork-9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const GlitchBackground = () => {
  const container = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Check for prefers-reduced-motion to comply with WCAG 2.2 AA
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionChange = (e) => {
      setReduceMotion(e.matches);
    };

    // Modern API
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  useGSAP(
    () => {
      if (reduceMotion) {
        // If reduced motion is preferred, pause timeline and ensure first image is visible
        gsap.set(".glitch-image", { opacity: 0 });
        gsap.set(".glitch-image:first-child", { opacity: 1 });
        return;
      }

      // We have 9 images. Target all elements with class .glitch-image within container
      const imageElements = gsap.utils.toArray(".glitch-image", container.current);

      // Set initial state
      gsap.set(imageElements, { opacity: 0, zIndex: 0 });
      gsap.set(imageElements[0], { opacity: 1, zIndex: 1 });

      const tl = gsap.timeline({ repeat: -1 });

      // Each image visible for 0.5s, then fade into the next
      imageElements.forEach((el, index) => {
        const nextIndex = (index + 1) % imageElements.length;
        const nextEl = imageElements[nextIndex];

        // 0.5s delay before crossfading
        tl.to(
          {},
          { duration: 0.5 }
        )
          // Set next element to immediately sit on top and be transparent
          .set(nextEl, { zIndex: 2, opacity: 0 })
          // Fade in next element over 0.1s
          .to(nextEl, { opacity: 1, duration: 0.1 })
          // Then hide the current element and reset z-indexes
          .set(el, { opacity: 0, zIndex: 0 })
          .set(nextEl, { zIndex: 1 });
      });
    },
    { scope: container, dependencies: [reduceMotion] }
  );

  return (
    <div
      ref={container}
      className="glitch-background-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none"
      }}
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <img
          key={index}
          className="glitch-image"
          src={src}
          alt="" /* decorative background images, empty alt for accessibility */
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: index === 0 && reduceMotion ? 1 : 0 // Ensure static image if reduced motion
          }}
        />
      ))}
    </div>
  );
};

export default GlitchBackground;
