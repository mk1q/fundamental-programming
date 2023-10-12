/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 90;
    console.log('ok: ' + this.left);
};
this.moveDown = function () {
    this.top += 90;
    console.log('ok: ' + this.top);
};
this.moveLeft = function () {
    this.left -= 90;
    console.log('ok: ' + this.left);
}
this.moveUp = function () {
    this.top -= 90;
    console.log('ok: ' + this.top);
}
}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
      hero.moveRight();
  } else if (hero.left > window.innerWidth - hero.size ) {
      hero.moveDown();
  }
    else if (window.innerHeight + hero.size < hero.left ) {
        hero.moveLeft(); //đoạn này bị lỗi cái gì ý :V
    }
    if (hero.left === 0) {
        hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50) //tăng speed
}

start();