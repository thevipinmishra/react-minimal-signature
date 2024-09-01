# react-minimal-signature

[![npm version](https://img.shields.io/npm/v/react-minimal-signature.svg?style=flat-square)](https://www.npmjs.com/package/react-awesome-library)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A minimal and easy to use Signature Pad component for React applications, requires React version 18 or above.

> Under the hood it utilizes [Ark UI](https://ark-ui.com/react/docs/components/signature-pad), a headless UI component library.

## Features

- 🚀 Easy to use and integrate
- 🎨 Fully customizable
- 🔧 TypeScript support

## Demo

[Live Demo](https://react-minimal-signature.vercel.app/)

## Installation

To install the library, you can use npm, yarn or any other package manager:

```bash
# npm
npm install react-minimal-signature

# yarn
yarn add react-minimal-signature
```

## Usage

### Simple

```tsx
import { ReactMinimalSignature } from "react-minimal-signature";
// Import required styles
import "react-minimal-signature/rmc.css";

function App() {
  return <ReactMinimalSignature label="Sign here" />;
}

export default App;
```

### Render image preview

```tsx
import { useState } from "react";
import { ReactMinimalSignature } from "react-minimal-signature";
import "react-minimal-signature/rmc.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [drawing, setDrawing] = useState<Boolean>(false);
  return (
    <>
      <ReactMinimalSignature
        onDraw={() => setDrawing(true)}
        onDrawEnd={(details) => {
          setDrawing(false);
          details.getDataUrl("image/png").then((url) => setImageUrl(url));
        }}
      />

      {drawing && <span>Drawing...</span>}
      {imageUrl && <img src={imageUrl} alt="Signature" />}
    </>
  );
}

export default App;
```

## API Reference

| Prop               | Type                                                                                        | Default                               | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| `label`            | `string`                                                                                    |                                       | Visible label for the Signature Pad                                                        |
| `withClearTrigger` | `boolean`                                                                                   | `true`                                | Boolean to handle the visibility of Clear trigger/button                                   |
| `withGuide`        | `boolean`                                                                                   | `true`                                | Boolean to handle the visibility of guide line                                             |
| `onDraw`           | `(details: DrawDetails) => void`                                                            |                                       | Callback when the signature pad is drawing.                                                |
| `onDrawEnd`        | `(details: DrawEndDetails) => void`                                                         |                                       | Callback when the signature pad is done drawing.                                           |
| `getRootNode`      | `() => ShadowRoot \| Node \| Document`                                                      |                                       | A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron. |
| `drawing`          | `DrawingOptions`                                                                            | `{ size: 2, simulatePressure: true }` | The drawing options.                                                                       |
| `disabled`         | `boolean`                                                                                   |                                       | Whether the signature pad is disabled.                                                     |
| `classNames`       | `{root?: string; label?: string; control?: string; clearTrigger?: string; guide?: string;}` | `{}`                                  | Add custom classnames to respective DOM nodes.                                             |

## Contributing

Any improvements or suggestions are welcome. Feel free to open an issue or submit a pull request.

## License

[ISC](https://opensource.org/licenses/ISC)
