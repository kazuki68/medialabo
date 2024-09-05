

////////// 課題3-2 ここからプログラムを書こう


//print(data);

function print(data){
    
    let resultDiv = document.getElementById('result');

let weatherInfo = 
'<ul>' +
    '<li>緯度：' + data.coord.lat + '</li>' +
    '<li>経度：' + data.coord.lon + '</li>' +
    '<li>天気：' + data.weather[0].description + '</li>' +
    '<li>気温：' + data.main.temp + '°</li>' +
    '<li>湿度：' + data.main.humidity + '%</li>' +
    '<li>風速：' + data.wind.speed + 'm/s</li>' +
    '<li>風向：' + data.wind.deg + '°</li>' +
    '<li>都市名：' + data.name + '</li>' +
    '</ul>'
;
// HTML要素に天気情報を追加
resultDiv.innerHTML = weatherInfo;
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
    let resultDiv = document.getElementById('result');

    let weatherInfo = ``;
    // HTML要素に天気情報を追加
    resultDiv.innerHTML = weatherInfo;
    let ID = document.querySelector('input[name="tosimei"]').value; 
    if(ID=='北京'){
      ID = 1816670;
    }else if(ID=='エジプト'){
      ID = 360630;
    }else if(ID=='ロシア'){
    ID = 524901;
    }else if(ID=='南アメリカ'){
      ID = 993800;
    }else if(ID=='日本'){
      ID = 1850147;
    }else if(ID=='シンガポール'){
      ID = 1880252;
    }else if(ID=='オーストラリア'){
      ID = 2147714;
    }else if(ID=='イギリス'){
      ID = 2643743;
    }else if(ID=='フランス'){
      ID = 2968815;
    }else if(ID=='ブラジル'){
      ID = 3451189;
    }else if(ID=='ニューヨーク'){
      ID =5128581;
    }else if(ID=='ロサンゼルス'){
      ID = 5368361;
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
    print(data);

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

