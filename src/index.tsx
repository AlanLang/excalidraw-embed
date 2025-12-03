import { Excalidraw } from "@excalidraw/excalidraw";
import { createRoot } from "react-dom/client";
import "@excalidraw/excalidraw/index.css";
import { ExcalidrawImperativeAPI, ExcalidrawProps } from "@excalidraw/excalidraw/types";

export function renderExcalidraw(el: HTMLElement, initialData: ExcalidrawProps["initialData"]) {
  const root = createRoot(el);
  return new Promise<ExcalidrawImperativeAPI>((resolve) => {
    root.render(<Excalidraw initialData={initialData} excalidrawAPI={(api) => {
      resolve(api);
    }} />);
  });
}