var canvas = document.getElementById("DemoCanvas");
 let width = +prompt("nhap chieu rong")
 let height = +prompt("nhap chieu cao")
if (canvas.getContext) 
{
  var ctx = canvas.getContext('2d');
  ctx.fillStyle='#fa4b2a';    
  ctx.fillRect(10, 50,140, 80); 
}
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea = () =>  {
      return this.width * this.height;
    }
  
    getPerimeter = () => {
      return 2 * (this.width + this.height);
    }
    showInfor(rect){
        console.log("Chiều rộng là :"+ rect.width);
        console.log("Chiều cao : " + rect.height);
        console.log("Diện tích : " + rect.getArea());
        console.log("Chu vi : " + rect.getPerimeter()); 
    }}
    
    let rect1 = new Rectangle(width, height);

     function main() {

      Rectangle.showInfo(rect1);

     }
