
var matHang = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi note 4",
  "Apple Iphone 6S",
  "Xiaomi Redmi note",
  "Apple Iphone 8 Plus",
  "Oppo A71",
  "Fujitsu F-04E",
];
function hienThi(matHang) {
  var s = "";
  for (var i = 0; i < matHang.length; i++) {
    s = s + (i + 1) + ". " + matHang[i] + "<br>";
  }
  return s;
}

function add(matHang) {
  var newMatHang = prompt("Nhập mặt hàng muốn thêm: ");
  matHang.push(newMatHang);
  document.getElementById("ds").innerHTML = hienThi(matHang);
}

function edit(matHang) {
  var sua = prompt("Nhập số thứ tự muốn sửa: ");
  var newMatHang = prompt("Nhập tên mặt hàng thay thế: ");
  matHang[sua - 1 ] = newMatHang;//duyệt mảng bắt đầu từ 0 nên lấy giá trị sua-1
  document.getElementById("ds").innerHTML = hienThi(matHang);
}

function xoa(matHang) {
  var xoa = prompt("Nhập số thứ tự muốn xóa: ");
  matHang.splice( xoa - 1, 1); //xóa 1 phần tử ở vị trí xóa -1 
  document.getElementById("ds").innerHTML = hienThi(matHang);
}
document.getElementById("ds").innerHTML = hienThi(matHang);


