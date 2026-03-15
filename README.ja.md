# fast-button

1〜2文で説明。

## デモ
https://code4fukui.github.io/fast-button/

## 機能
- タッチやマウスダウンで即座にイベントが発火する高速なボタン
- `ondown`と`onup`イベントを登録できる

## 必要環境
特に必要条件はありません。

## 使い方
```html
<script type="module" src="./fast-button.js"></script>
<fast-button id=btn>test</fast-button>

<script type="module">
onload = () => {
  btn.ondown = () => {
    console.log("down");
    btn.textContent = "down!";
  };
  btn.onup = () => {
    console.log("up");
    btn.textContent = "test";
  };
};
</script>
```

## ライセンス
MIT License