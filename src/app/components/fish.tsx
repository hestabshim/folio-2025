import { useEffect } from "react";
import "../styles/models.css"
function Fish() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div className="container">
      <model-viewer
        className="fish"
        src="/models/Fish.glb"
        camera-controls
        touch-action="pan-y"
        interaction-prompt="none"
        scale="1 1 1"
        disable-tap
        disable-zoom
        auto-rotate
        auto-rotate-delay={1}
        rotation-per-second="30deg"
        camera-target="auto auto auto"
        orientation="20deg 20deg 20deg"
      >
      </model-viewer>
    </div>
  );
}
export default Fish;
