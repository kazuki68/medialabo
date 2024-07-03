//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p'); 
p.style.textEmphasis = 'sesame green';
p.textContent = '写真表と都市の緯度経度のページです' ;
h2.insertAdjacentElement('afterend', p);

// 練習4-3 写真表作成プログラム
let x = document.querySelector('div#phototable');
let x1 = document.createElement('p');
let x2 = document.createElement('img');
x2.setAttribute('src','taro.png');
x1.insertAdjacentElement('beforeend', x2);
x.insertAdjacentElement('beforeend', x1); 

let y = document.querySelector('div#phototable');
let y1 = document.createElement('p');
let y2 = document.createElement('img');
y2.setAttribute('src','jiro.png');
y1.insertAdjacentElement('beforeend', y2);
y.insertAdjacentElement('beforeend', y1); 

let z = document.querySelector('div#phototable');
let z1 = document.createElement('p');
let z2 = document.createElement('img');
z2.setAttribute('src','hanako.png');
z1.insertAdjacentElement('beforeend', z2);
z.insertAdjacentElement('beforeend', z1); 

// 練習4-4 箇条書き削除プログラム
let w = document.querySelector('li');
w.remove();
let w1 = document.querySelector('li');
w1.remove();
let w2 = document.querySelector('li');
w2.remove();

// 練習4-5 箇条書き追加プログラム
const ul = document.querySelector('ul');
for(const obj of data){
	const li = document.createElement('li');
	li.textContent = `${obj.name}...経度:${obj.lat},経度:${obj.lng}`;
	ul.appendChild(li);
}
