import { useDraggable } from "@dnd-kit/core";
import { isMobile } from 'react-device-detect';
import "../styles/draggable.scss";

const CustomStyle = {};

export function Draggable({ id, content, title, isOpen, styles, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

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
