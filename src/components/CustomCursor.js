import { useCursorify } from "@cursorify/react";
import DefaultCursor from "../assets/DefaultCursor.svg";
import ClickedCursor from "../assets/ClickedCursor.svg";

const CustomCursor = () => {
  const { mouseState, style } = useCursorify();

  return (
    <div
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}>
      {(() => {
        // if (disabled) return <img src={DefaultCursor} />;
        if (style === "pointer" || mouseState === "mouseDown"  || mouseState === "drag" || mouseState === "dragging") return  <img src={ClickedCursor} />;
        return <img src={DefaultCursor} alt="Custom Cursor" />;
      })()}
    </div>
  );
};

export default CustomCursor;
