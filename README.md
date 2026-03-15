# fast-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A fast and responsive button web component.

## Demo
https://code4fukui.github.io/fast-button/

## Features
- Handles both touch and mouse events
- Fires `down` and `up` events
- Lightweight and performant

## Requirements
This project uses modern web technologies and requires a browser that supports Web Components.

## Usage
To use the `fast-button` component, include the script in your HTML:

```html
<script type="module" src="https://code4fukui.github.io/fast-button/fast-button.js"></script>
<fast-button>Click me</fast-button>
```

Then, you can listen for the `down` and `up` events:

```javascript
const button = document.querySelector('fast-button');
button.addEventListener('down', () => console.log('Button pressed down'));
button.addEventListener('up', () => console.log('Button released'));
```

## License
MIT