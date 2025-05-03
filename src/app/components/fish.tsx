import { useEffect } from "react";
import "../styles/models.css"
function Fish() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div className="container">
      <model-viewer
      loading="lazy"
        poster="/lazyloading/Mug With Office Tool.webp"
        className="fish"
        src="/models/Fish.glb"
        camera-controls
        touch-action="pan-y"
        scale="1 1 1"
        disable-tap
        disable-zoom
        orientation="0deg 0deg 270deg"
      >
      </model-viewer>
    </div>
  );
}
export default Fish;
