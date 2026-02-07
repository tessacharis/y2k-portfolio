import { isMobile } from "react-device-detect";
import "../styles/draggable.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, SplitText } from "gsap/all";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(SplitText);

const CustomStyle = {};

export function DraggableWindow({ id, content, title, isOpen, children }) {
  useGSAP(() => {
    if (!isMobile) {
      Draggable.create(".window-content", {
        inertia: true,
        bounds: ".container",
      });
    }

    SplitText.create(".headline", {
      type: "chars, word",
      charsClass: "letter",
    });
    const tl = gsap.timeline();

    tl.from(".letter", {
      y: 10,
      ease: "circ.out",
      stagger: 0.07,
      repeat: -1,
      yoyo: true,
      border: "1px solid #AAEA01",
      borderRadius: "8px",
      boxShadow: "0px 0px 5px #AAEA01",
      delay: 0.5,
    });
  });

  console.log(id);

  return (
    <div class={isOpen ? "window-content" : "window-content window-hidden"}>
      <div className="window-content-container">
        {title && <h2 class="headline">{title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {children}
      </div>
    </div>
  );
}
