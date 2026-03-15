# fast-button

高速で反応的なWeb Componentボタンです。タッチイベントとマウスイベントを拾い、`down`と`up`イベントを発火させます。

## デモ
https://code4fukui.github.io/fast-button/

## 機能
- タッチとマウスのイベントに対応
- `down`と`up`イベントを発火させる
- 軽量で高パフォーマンス

## 必要環境
この Web Component は最新のWeb技術を使用しており、Web Components をサポートするブラウザが必要です。

## 使い方
`fast-button` コンポーネントを使用するには、HTMLにスクリプトを含めます:

```html
<script type="module" src="https://code4fukui.github.io/fast-button/fast-button.js"></script>
<fast-button>Click me</fast-button>
```

そして、`down`と`up`イベントを受け取ることができます:

```javascript
const button = document.querySelector('fast-button');
button.addEventListener('down', () => console.log('Button pressed down'));
button.addEventListener('up', () => console.log('Button released'));
```

## ライセンス
MIT License