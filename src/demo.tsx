import { renderExcalidraw } from "./index";

const el = document.getElementById("root");
if(el) {
  renderExcalidraw(el, {
    appState: {
      gridModeEnabled: true,
    },
  }).then((api) => {
    api.onChange((elements, appState, files) => {
      console.log(elements, appState, files);
    });
  });
}
