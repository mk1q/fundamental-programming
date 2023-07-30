function add() {
let thang= document.getElementById("1").value;
let ngay ;
switch (thang) {
case "1":
case "3":
case "5":
case "7":
case "8":
case "10":
case "12": 
    ngay = "31 ngày" ;
    break ;
case "2":
    ngay = "28 hoặc 29 ngày" ;
    break ;
case "6":
case "9":
case "11":
    ngay = "30 ngày" ;
}

document.getElementById("so").innerHTML = ngay;

}