import React, { useEffect, useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { Draggable } from "../components/Draggable";
import { Droppable } from "../components/Droppable";
import "../styles/home.scss";
import pageData from "../content/home.json";

const Home = () => {
  const [pages, setPages] = useState(pageData);

  function handleDragEnd(ev) {
    const page = pages.find((x) => x.id === ev.active.id);
    page.position.x += ev.delta.x;
    page.position.y += ev.delta.y;
    const _pages = pages.map((x) => {
      if (x.id === page.id) return page;
      return x;
    });
    setPages(_pages);
  }

  return (
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          {pages &&
            pages.map((page) => (
              <Draggable
                styles={{
                  position: "absolute",
                  left: `${page.position.x}px`,
                  top: `${page.position.y}px`,
                }}
                isOpen={page.visible}
                key={page.id}
                id={page.id}
                content={page.content}
                title={page.title}
              />
            ))}
        </Droppable>
      </DndContext>
  );
}

export default Home;