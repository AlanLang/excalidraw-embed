import { renderExcalidraw } from "./index";

const el = document.getElementById("root");
if(el) {
  renderExcalidraw(el, {
    initialData: {
      appState: {
        gridModeEnabled: true,
      },
    }
  });
}
