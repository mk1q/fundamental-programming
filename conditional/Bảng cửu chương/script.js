let str = "<table>";

for (let i = 1; i < 10; i++) {
  str += "<tr>";
  for (let j = 2; j < 10; j++) {
    str += `<td>${i} * ${j} = ${i * j}</td>`;
  }
  str += "</tr>";
}

str += "</table>";

document.write(str);