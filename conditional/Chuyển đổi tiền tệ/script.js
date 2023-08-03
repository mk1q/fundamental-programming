function add() {
  let giatrivao = document.getElementById("dauvao").value;
  let form = document.getElementById("form").value;
  let to = document.getElementById("to").value;
  let giatien;
  if (form == to) {
    giatien = document.getElementById("dauvao").value;
  }
  if (form == "viet" && to == "my") {
    giatien = giatrivao / 24000;
  } else if (form == "my" && to == "viet") {
    giatien = 24000 * giatrivao;
  } else if (form == "viet" && to == "nhat") {
    giatien = giatrivao / 165;
  } else if (form == "nhat" && to == "viet") {
    giatien = 165 / giatrivao;
  }

  document.getElementById("result").innerHTML = giatien;
}
