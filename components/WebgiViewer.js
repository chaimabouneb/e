import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
  memo,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  GBufferPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
} from "webgi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation.js";
gsap.registerPlugin(ScrollTrigger);
function WebgiViewer() {
  const canvasRef = useRef(null);

  const memorizedScrollanimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  }, []);

  useEffect(() => {
    const setupViewer = async () => {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      const manager = await viewer.addPlugin(AssetManagerPlugin);
      const camera = viewer.scene.activeCamera;
      const position = camera.position;
      const target = camera.target;

      await viewer.addPlugin(GBufferPlugin);
      await viewer.addPlugin(new ProgressivePlugin(32));
      await viewer.addPlugin(new TonemapPlugin(true));
      await viewer.addPlugin(GammaCorrectionPlugin);

      await viewer.addPlugin(SSAOPlugin);

      await viewer.addPlugin(BloomPlugin);

      viewer.renderer.refreshPipeline();

      await manager.addFromPath("scene-black.glb");

      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

      window.scrollTo(0, 0);

      let needUpdate = true;
      const onUpdate = () => {
        needUpdate = true;
        viewer.setDirty();
      };
      viewer.addEventListener("preframe", () => {
        if (needUpdate) {
          camera.positionTargetUpdated(true);
          needUpdate = false;
        }
      });
      viewer.addEventListener("all-assets-loaded", () => {
        memorizedScrollanimation(position, target, onUpdate);
      });
    };

    setupViewer();
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default WebgiViewer;