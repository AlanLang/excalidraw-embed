import { Excalidraw } from "@excalidraw/excalidraw";
import { createRoot } from "react-dom/client";
import "@excalidraw/excalidraw/index.css";
import { ExcalidrawImperativeAPI, ExcalidrawProps } from "@excalidraw/excalidraw/types";

export function renderExcalidraw(el: HTMLElement, props: ExcalidrawProps) {
  const root = createRoot(el);
  root.render(<Excalidraw {...props}  />);
  return root;
}
export { serializeAsJSON } from "@excalidraw/excalidraw";