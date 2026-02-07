import { DraggableWindow } from "./DraggableWindow";

export function MediaPlayer({}) {
  return (
    <DraggableWindow
      style={{
        position: "absolute",
        bottom: "0px",
        right: "30px",
        zIndex: "0",
      }}
      title={"Some Tunes"}
      isOpen={true}
      key={"music"}
      id={"music"}>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6MAQN3OnFEl?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </DraggableWindow>
  );
}
