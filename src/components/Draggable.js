import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDraggable } from "@dnd-kit/core";
import { isMobile } from 'react-device-detect';
import "../styles/draggable.scss";

const CustomStyle = {};

export function Draggable({ id, content, title, isOpen, styles, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

//   const [isDragging, setIsDragging] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(isOpen);

//   const eventControl = (event) => {
//    if (event.type === "mousemove" || event.type === "touchmove") {
//      setIsDragging(true);
//    }

//    if (event.type === "mouseup" || event.type === "touchend") {
//      setTimeout(() => {
//        setIsDragging(false);
//      }, 100);
//    }
//  };
 
//   function closeModal(e) {
//     console.log("button click event");
//     e.preventDefault();
//     setIsModalOpen(!isModalOpen);

//     console.log(isModalOpen);
//   }() => !isDragging && closeModal()

console.log(isMobile)

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      class={isOpen ? "window-content" : "window-content window-hidden"}
      draggable="true"
      ref={setNodeRef}
      style={{ ...(!isMobile ? style : {}), ...(!isMobile ? CustomStyle : {}), ...(!isMobile ? styles : {}) }}
      {...listeners}
      {...attributes}>
      <button className="close-button" >
        <span aria-hidden="true">X</span>{" "}
        <span className="visually-hidden">Close</span>
      </button>
      <div className="window-content-container">
        {title && <h2>{title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {children}
      </div>
    </div>
  );
}
