function choi() {
  let dapan = 3;
  let i = 0;
  do {
    let choi = +prompt(
      "Hãy đoán số bất kì trong khoảng từ 1 đến 5",
      "bạn chỉ có thể đoán 3 lần"
    );
    if (choi > dapan) {
      alert("Số to quá");
    } else if (choi < dapan) {
      alert("Số bé quá");
    } else if ((choi = 2)) {
      alert("gan dung");
    } else if (choi === dapan) {
      alert("Đúng rồi");
      break;
    }
    i++;
  } while (i < 3);
}
