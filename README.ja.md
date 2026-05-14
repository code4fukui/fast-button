# fast-button

タッチイベントとマウスイベントをシンプルな `down` および `up` イベントに正規化し、レスポンシブなボタンを提供する、軽量で依存関係のないWebコンポーネントです。

## デモ

https://code4fukui.github.io/fast-button/

## 特徴

- **レスポンシブ:** タッチ（`touchstart`）およびマウス（`mousedown`）イベントに即座に反応します。
- **シンプルなAPI:** `ondown` および `onup` イベントハンドラを提供し、簡単に組み込むことができます。
- **軽量:** 依存関係がゼロで、フットプリントも最小限です。
- **幅広い互換性:** すべてのモダンブラウザで動作し、IE11などの古い環境向けにES5互換ビルドも利用可能です。

## 使い方

### モダンブラウザ

スクリプトをESモジュールとして読み込み、HTML内で `<fast-button>` 要素を使用します。

```html
<script type="module" src="https://code4fukui.github.io/fast-button/fast-button.js"></script>

<fast-button id="my-button">Click Me</fast-button>
```

`ondown` および `onup` プロパティに関数を割り当てて、ボタンの押下および離上イベントを処理します。

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

### レガシーブラウザ (IE11)

モダンなJavaScriptやWebコンポーネントをネイティブにサポートしていない古いブラウザ向けには、WebコンポーネントのポリフィルとES5互換バンドルを読み込むことができます。

```html
<!-- レガシーブラウザ用のポリフィル -->
<script src="https://code4fukui.github.io/fast-button/lib/custom-elements-es5-adapter.js"></script>
<script src="https://code4fukui.github.io/fast-button/lib/webcomponents-loader.js"></script>

<!-- コンポーネントのES5バージョン -->
<script src="https://code4fukui.github.io/fast-button/bundle-es5.js"></script>

<fast-button id="my-button">Click Me</fast-button>

<script>
  // APIは同じです
  var button = document.getElementById('my-button');
  button.ondown = function() {
    console.log('Button pressed down');
  };
  button.onup = function() {
    console.log('Button released');
  };
</script>
```

## ライセンス

ISC License — 詳細は [LICENSE](LICENSE) を参照してください。
