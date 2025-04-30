import { useEffect } from "react";
import "../styles/models.css";
function Chicken() {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div>
      <model-viewer className="card"
        src="/models/Hen.glb"
        camera-controls touch-action="pan-y"
        interaction-prompt="none"
        scale="1 1 1"
      ></model-viewer>
    </div>
  );
}
export default Chicken;
