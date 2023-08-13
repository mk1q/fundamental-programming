let nhietDo = prompt("Nhập nhiệt độ hiện tại:");

while (nhietDo > 100 || nhietDo < 20) {
  if (nhietDo > 100) {
    alert("Hãy giảm nhiệt độ!");
  } else if (nhietDo < 20) {
    alert("Hãy tăng nhiệt độ!");
  }
  else if ( 20 <nhietDo< 1000){
    alert("Nhiệt độ hiện tại trong khoảng bình thường.");
  }
}

