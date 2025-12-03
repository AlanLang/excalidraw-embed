import { Excalidraw } from "@excalidraw/excalidraw";
import { createRoot } from "react-dom/client";
import "@excalidraw/excalidraw/index.css";
import { ExcalidrawImperativeAPI, ExcalidrawProps } from "@excalidraw/excalidraw/types";

export function renderExcalidraw(el: HTMLElement, props: ExcalidrawProps) {
  const root = createRoot(el);
  return new Promise<ExcalidrawImperativeAPI>((resolve) => {
    root.render(<Excalidraw {...props} excalidrawAPI={(api) => {
      resolve(api);
    }} />);
  });
}
export { serializeAsJSON } from "@excalidraw/excalidraw";