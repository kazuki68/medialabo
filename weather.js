let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075,
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

let resultDiv = document.getElementById('result');

let weatherInfo = `
    <ul>
        <img class="sign" src="https://illustk.com/wp-content/img/illust/simple_cloud.png" alt="Cloud Image">
        <img class="sign" src="https://illust8.com/wp-content/uploads/2018/08/weather_sun_solar_illust_1080.png" alt="Sun Image">
        <li>緯度：${data.coord.lat}</li>
        <li>経度：${data.coord.lon}</li>
        <li>天気：${data.weather[0].description}</li>
        <li>気温：${data.main.temp}°</li>
        <li>湿度：${data.main.humidity}%</li>
        <li>風速：${data.wind.speed} m/s</li>
        <li>風向：${data.wind.deg}°</li>
        <li>都市名：${data.name}</li>
    </ul>
`;

// HTML要素に天気情報を追加
resultDiv.innerHTML = weatherInfo;

let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
  let i = document.querySelector('input[name="tosimei"]');
  let tosimei = i.value;       
  console.log(tosimei);
}