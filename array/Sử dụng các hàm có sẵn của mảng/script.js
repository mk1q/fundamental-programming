// // Sử dụng các hàm có sẵn của mảng
// let myColor = ['Red', 'Green', 'White', 'Black'];
// console.log(myColor.join());

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
// const str= prompt();
// let num = str.toString();
// let result = [num[0]];
// for (let i=0; i<str.length; i++){
// if ( (num[i] % 2 === 0)){ 
//     result.push('-', num[i]);
// }
// else
// {
//     result.push(num[i]);
//    }
// }
// console.log(result.join(''));



// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa. 
// Ví dụ: nếu bạn nhập vào chuỗi ‘The Quick Brown Fox’ kết quả của chương trình là ‘tHE qUICK bROWN fOX’.
// let text = prompt('nhap chu');
// let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let textlength =text.length;
// let result = [];

// for (let i=0; i<textlength ; i++){
// if (UPPER.indexOf(text[i]) !== -1){
//     result.push(text[i].toLowerCase());
// } else if (LOWER.indexOf(text[i]) !== -1) 
//   {  result.push(text[i].toUpperCase());}
//     else { result.push(text[i])};}
//     console.log(result.join(''));

