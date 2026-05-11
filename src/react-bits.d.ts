declare module "*GradualBlur.jsx" {
  import type { CSSProperties } from "react";

  export interface GradualBlurProps {
    preset?: string;
    position?: "top" | "bottom" | "left" | "right";
    strength?: number;
    height?: string;
    width?: string;
    divCount?: number;
    exponential?: boolean;
    zIndex?: number;
    animated?: false | "scroll";
    duration?: string;
    easing?: string;
    opacity?: number;
    curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
    responsive?: boolean;
    target?: "parent" | "page";
    className?: string;
    style?: CSSProperties;
    hoverIntensity?: number;
    onAnimationComplete?: () => void;
  }

  const GradualBlur: (props: GradualBlurProps) => import("react").JSX.Element;
  export default GradualBlur;
}
