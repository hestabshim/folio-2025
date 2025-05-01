import { useEffect } from "react";
import "../styles/models.css"
function Cone() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div className="container">
      <model-viewer
        className="cone"
        src="/models/Cone.glb"
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
        orientation="50deg 20deg 30deg"
      >
      </model-viewer>
    </div>
  );
}
export default Cone;
