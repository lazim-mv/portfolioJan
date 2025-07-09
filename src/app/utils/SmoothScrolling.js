"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,             // slower smoothing for more natural inertia
        duration: .8,           // keep natural but quick transitions
        smoothTouch: true,
        smoothWheel: true,
        syncTouchLerp: 0.01,     // sync touch for smoother mobile feel
        wheelMultiplier: 1.2,  
        anchors: true  
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
