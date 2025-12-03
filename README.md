# excalidraw-embed

Embed [Excalidraw](https://excalidraw.com/) whiteboard into any web page with a single function call.

## Installation

### Via CDN (UMD)

```html
<link rel="stylesheet" href="https://unpkg.com/excalidraw-embed/dist/excalidraw-embed.css">
<script src="https://unpkg.com/excalidraw-embed"></script>
```

Or use jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/excalidraw-embed/dist/excalidraw-embed.css">
<script src="https://cdn.jsdelivr.net/npm/excalidraw-embed"></script>
```

### Via npm (ESM)

```bash
npm install excalidraw-embed
```

## Usage

### CDN / UMD

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/excalidraw-embed/dist/excalidraw-embed.css">
</head>
<body>
  <div id="excalidraw" style="width: 100%; height: 600px;"></div>
  
  <script src="https://unpkg.com/excalidraw-embed"></script>
  <script>
    ExcalidrawEmbed.renderExcalidraw(
      document.getElementById('excalidraw'),
      {initialData: { elements: [], appState: { viewBackgroundColor: '#ffffff' } }}
    ).then(api => {
      console.log('Excalidraw loaded!', api);
    });
  </script>
</body>
</html>
```

### ESM

```js
import { renderExcalidraw } from 'excalidraw-embed';
import 'excalidraw-embed/style.css';

const api = await renderExcalidraw(
  document.getElementById('excalidraw'),
  {initialData: { elements: [], appState: { viewBackgroundColor: '#ffffff' } }}
);
```

## API

### `renderExcalidraw(element, initialData)`

Renders an Excalidraw instance into the specified DOM element.

**Parameters:**
- `element` - The DOM element to render Excalidraw into
- `initialData` - Initial data for Excalidraw (elements, appState, etc.)

**Returns:** `Promise<ExcalidrawImperativeAPI>` - The Excalidraw API instance

## License

MIT
