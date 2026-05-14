# fast-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, zero-dependency web component that provides a responsive button, normalizing touch and mouse events into simple `down` and `up` events.

## Demo

https://code4fukui.github.io/fast-button/

## Features

-   **Responsive:** Immediately reacts to both touch (`touchstart`) and mouse (`mousedown`) events.
-   **Simple API:** Provides `ondown` and `onup` event handlers for easy integration.
-   **Lightweight:** Zero dependencies and a minimal footprint.
-   **Broad Compatibility:** Works in all modern browsers, with an ES5-compatible build available for older environments like IE11.

## Usage

### Modern Browsers

Include the script as an ES module, then use the `<fast-button>` element in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/fast-button/fast-button.js"></script>

<fast-button id="my-button">Click Me</fast-button>
```

Assign functions to the `ondown` and `onup` properties to handle button press and release events.

```javascript
const button = document.getElementById('my-button');

button.ondown = () => {
  console.log('Button pressed down');
  button.textContent = 'Pressed!';
};

button.onup = () => {
  console.log('Button released');
  button.textContent = 'Click Me';
};
```

### Legacy Browsers (IE11)

For older browsers that do not support modern JavaScript or Web Components natively, you can include the web components polyfills and the ES5-compatible bundle.

```html
<!-- Polyfills for legacy browsers -->
<script src="https://code4fukui.github.io/fast-button/lib/custom-elements-es5-adapter.js"></script>
<script src="https://code4fukui.github.io/fast-button/lib/webcomponents-loader.js"></script>

<!-- ES5 version of the component -->
<script src="https://code4fukui.github.io/fast-button/bundle-es5.js"></script>

<fast-button id="my-button">Click Me</fast-button>

<script>
  // The API is the same
  var button = document.getElementById('my-button');
  button.ondown = function() {
    console.log('Button pressed down');
  };
  button.onup = function() {
    console.log('Button released');
  };
</script>
```

## License

ISC License — see [LICENSE](LICENSE).