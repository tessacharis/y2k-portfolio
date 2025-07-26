import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });

  return (
    <div ref={setNodeRef} className={isOver ? "dropzone" : "dropzone" }>
      {children}
    </div>
  );
}
