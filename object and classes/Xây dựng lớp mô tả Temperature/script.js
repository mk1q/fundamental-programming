

class Temperature{
    constructor(celsius) {
        this.celsius = celsius;
       
    };

    getToCelsius= () => { return ( (this.celsius*1.8000) + 32.00); }
    getToKenvin= () => { return (this.celsius + 273.15 );     }
}
function main(){
       var   rec1 = new Temperature(25);
       var   main2  = rec1.getToCelsius();
       var   main3 = rec1.getToKenvin();
       alert(" DO F LA " + main2 + " DO KENVIN LA " + main3);
    }