'use strict';

const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

//画像をプリロード（待ち時間を短くするため、画像を先に読み込んでおく）
images.forEach(function(item, index){
  preloadImage(item);
});

let current = 0;

function changeImage(num){
  if(current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
    //クリック時にもpageNum()ファンクションを発火させる。
  }
};

//何枚目の画像かを表示する。
function pageNum(){
  document.getElementById('page').textContent = `${current + 1} / ${images.length}`;
}

//画像をプリロード
function preloadImage(path){
//（）内のタグ名を持つ要素を生成して、メモリを保存するメソッド。
//HTMLには表示されないが、メモリ内には、まだダウンロードしていない画像を指定する<img>要素を変数imgTagにあらかじめ入れておける。
//これにより、実際に表示するときにダウンロード時間が発生しなくなる。
  let imgTag = document.createElement('img');
  imgTag.src = path;
}

//ページ読み込み時にpageNum()を発火させる。
pageNum();

document.getElementById('prev').onclick = function(){
  changeImage(-1);
};
document.getElementById('next').onclick = function(){
  changeImage(1);
}
