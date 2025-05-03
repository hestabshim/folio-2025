import { useEffect } from "react";
import "../styles/models.css"
function Mug() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div className="container">
      <model-viewer
        loading="lazy"
        poster="/lazyloading/Mug With Office Tool.webp"
        className="mug"
        src="/models/Mug.glb"
        camera-controls
        touch-action="pan-y"
        interaction-prompt="none"
        scale="1 1 1"
        disable-tap
        disable-zoom
        auto-rotate
        auto-rotate-delay={1}
        rotation-per-second="-10deg"
        camera-target="0 20 0"
        orientation="-20deg 0deg 20deg"
      >
      </model-viewer>
    </div>
  );
}
export default Mug;
