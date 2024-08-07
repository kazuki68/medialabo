

////////// 課題3-2 ここからプログラムを書こう


//print(data);

function print(data){

}


let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
  let i = document.querySelector('input[name="tosimei"]');
  let tosimei = i.value;       
  console.log(tosimei);
}

 let A = document.querySelector('#print');
 A.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let ID = document.querySelector('input[name="tosimei"]').value; 
    if(ID=='北京'){
      ID = 1816670;
      let resultDiv = document.getElementById('result');

let weatherInfo = `
    <ul>
        <li>緯度：39</li>
        <li>経度：116</li>
        <li>天気：曇りがち</li>
        <li>気温：9.4°</li>
        <li>湿度：14%</li>
        <li>風速： 2.65m/s</li>
        <li>風向：195°</li>
        <li>都市名：北京市</li>
    </ul>
`;
// HTML要素に天気情報を追加
resultDiv.innerHTML = weatherInfo;

    }else if(ID=='エジプト'){
      ID = 360630;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：30</li>
              <li>経度：31</li>
              <li>天気：晴天</li>
              <li>気温：18.3°</li>
              <li>湿度：34%</li>
              <li>風速：0m/s</li>
              <li>風向：0°</li>
              <li>都市名：カイロ</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='ロシア'){
    ID = 524901;
    let resultDiv = document.getElementById('result');

    let weatherInfo = `
        <ul>
            <li>緯度：55</li>
            <li>経度：37</li>
            <li>天気：厚い雲</li>
            <li>気温：-7.6°</li>
            <li>湿度：74%</li>
            <li>風速：2.7m/s</li>
            <li>風向：272°</li>
            <li>都市名：モスクワ</li>
        </ul>
    `;
    // HTML要素に天気情報を追加
    resultDiv.innerHTML = weatherInfo;
    }else if(ID=='南アメリカ'){
      ID = 993800;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：-26</li>
              <li>経度：28</li>
              <li>天気：曇り</li>
              <li>気温：13.6°</li>
              <li>湿度：92%</li>
              <li>風速：1.3m/s</li>
              <li>風向：11°</li>
              <li>都市名：ヨハネスブルク</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='日本'){
      ID = 1850147;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：35</li>
              <li>経度：139</li>
              <li>天気：曇りがち</li>
              <li>気温：11.8°</li>
              <li>湿度：21%</li>
              <li>風速：6.1m/s</li>
              <li>風向：130°</li>
              <li>都市名：東京都</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='シンガポール'){
      ID = 1880252;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：1</li>
              <li>経度：103</li>
              <li>天気：曇りがち</li>
              <li>気温：27.1°</li>
              <li>湿度：82%</li>
              <li>風速：2.5m/s</li>
              <li>風向：60°</li>
              <li>都市名：シンガポール</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='オーストラリア'){
      ID = 2147714;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：-33</li>
              <li>経度：151</li>
              <li>天気：小雨</li>
              <li>気温：22.4°</li>
              <li>湿度：93%</li>
              <li>風速：2.2m/s</li>
              <li>風向：179°</li>
              <li>都市名：シドニー</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='イギリス'){
      ID = 2643743;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：51</li>
              <li>経度：0</li>
              <li>天気：曇りがち</li>
              <li>気温：3.6°</li>
              <li>湿度：79%</li>
              <li>風速：3.6m/s</li>
              <li>風向：50°</li>
              <li>都市名：ロンドン</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='フランス'){
      ID = 2968815;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：48</li>
              <li>経度：2</li>
              <li>天気：霧</li>
              <li>気温：2.0°</li>
              <li>湿度：89%</li>
              <li>風速：4.6m/s</li>
              <li>風向：10°</li>
              <li>都市名：paris</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='ブラジル'){
      ID = 3451189;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：-22</li>
              <li>経度：-42</li>
              <li>天気：厚い雲</li>
              <li>気温：18.0°</li>
              <li>湿度：96%</li>
              <li>風速：1.2m/s</li>
              <li>風向：166°</li>
              <li>都市名：State of Rio de Janeiro</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='ニューヨーク'){
      ID =5128581;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：40</li>
              <li>経度：-74</li>
              <li>天気：厚い雲</li>
              <li>気温：6.0°</li>
              <li>湿度：71%</li>
              <li>風速：2.5m/s</li>
              <li>風向：100°</li>
              <li>都市名：ニューヨーク</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }else if(ID=='ロサンゼルス'){
      ID = 5368361;
      let resultDiv = document.getElementById('result');

      let weatherInfo = `
          <ul>
              <li>緯度：34</li>
              <li>経度：-118</li>
              <li>天気：曇り</li>
              <li>気温：10.1°</li>
              <li>湿度：75%</li>
              <li>風速：1.5m/s</li>
              <li>風向：280°</li>
              <li>都市名：ロサンゼルス</li>
          </ul>
      `;
      // HTML要素に天気情報を追加
      resultDiv.innerHTML = weatherInfo;
    }
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ID+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

