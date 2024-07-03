// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let x = document.querySelector('span#kaisu');
let y = document.querySelector('span#answer');
let z = document.querySelector('p#result');
// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu = kaisu + 1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  z.textContent = kaisu + '回目の予想:'+yoso;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if(4 <= kaisu){
    z.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています。';
  }
  if(kaisu < 4 && kotae === yoso){
    z.textContent = '正解です。おめでとう';
    kaisu = kaisu + 3;
  }
  if(kaisu < 4 && kotae < yoso){
    z.textContent = '間違い、もう少し小さいですよ';
  }
  if(kaisu < 4 && kotae > yoso){
    z.textContent = '間違い、もう少し大きいですよ';
 }
}