// 1, Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// function sum(a, b) {
//     if (a > b) {
//       alert("Giá trị của tham số thứ nhất phải nhỏ hơn hoặc bằng tham số thứ hai.");
//     } else {
//       return a + b;
//     }
//   }
//   let c= +prompt();
//   let d= +prompt();
//   const result = sum(c, d);
// console.log(result);

// Bài 2: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.
// let stars = [
//   "Polaris",
//   "Aldebaran",
//   "Deneb",
//   "Vega",
//   "Altair",
//   "Dubhe",
//   "Regulus",
// ];
// let chomsao = [
//   "Ursa Minor",
//   "Tarurus",
//   "Cygnus",
//   "Lyra",
//   "Aquila",
//   "Ursa Major",
//   "Leo",];
// function findConstellation(star) {
//   for (let i = 0; i < stars.length; i++) {
//     if (stars[i] === star) {
//       return chomsao[i];
//     }
//   }
//   return "Không tìm thấy ngôi sao.";
// }
// const starName = prompt("Nhập vào tên của ngôi sao: ");
// const constellation = findConstellation(starName);
// console.log("Chòm sao của " + starName + " là " + constellation);

// Bài 3: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function square(number) {
//   var result = number * number;
//   return result;
// }
// function calculate() {
//   var input = document.getElementById("input").value;
//   var result = square(input);
//   document.getElementById("result").innerHTML = result;
// }

// Bài 4: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng đượclet pi = Math.PI;
// function dienTichHinhTron(r) {
//   return r * r * pi;
// }
// function chuViHinhTron(r) {
//   return 2 * pi * r;
// }
// let radius = +prompt("Nhập bán kính hình tròn: ");
// let area = dienTichHinhTron(radius);
// let duongtron = chuViHinhTron(radius);
// console.log("Diện tích hình tròn là:  " + area);
// console.log("Chu vi hình tròn là " + duongtron);

// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function giaiThua(n) {
//   if (n === 0) {
//     return 1*;
//   } else {
//     return n * giaiThua(n - 1);
//   }
// }
// var n = +prompt("Nhập số nguyên: ");
// var giaiThua = giaiThua(n);
// console.log("Giai thừa của " + n + " là: " + giaiThua);

// Bài 6: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function check(){






  
}
