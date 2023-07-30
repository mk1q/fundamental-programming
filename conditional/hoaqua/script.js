function add() {    
 let write =document.getElementById('write').value;
 let giatien ;
 switch(write) {
    case 'Táo':
    case 'Xoài':       
        giatien=('30000 VNĐ/kg');
        break;
    case 'Ổi':
    case 'Dưa Hấu':
        giatien=('20000 VNĐ/kg');
        break;
    case 'Cam':
    case 'Chôm Chôm':
        giatien=('40000 VNĐ/kg');
        break;
    case 'Măng Cụt':
        giatien=(' 50000 VNĐ/kg');   
        } 
  document.getElementById("tien").innerHTML = giatien ;

}              