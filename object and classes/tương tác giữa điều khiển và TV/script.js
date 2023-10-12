class Television{
    constructor(tvProgram,remoteCode,volume,isOn) {

        this.tvProgram = tvProgram;
        this.remoteCode = remoteCode;
        this.volume = volume;
        this.isOn =isOn;
    this.checkIsOn= function() {
    if (this.isOn) {
        console.log("tv is on");
    } else {
        console.log("tv is off")
    } 
};
    };
    setTelevision(tvProgram,volume,isOn) {
        this.tvProgram = 1;
        this.volume = 30;
        this.isOn = false;
    };
}
    this.turn = function () {
        if (this.isOn) {
            this.isOn = false;
            console.log("turn off the tv");
        } else {
            this.isOn = true;
            console.log("turn on the tv");
        }
    };
    this.adjustVol = function (number) {
        if (this.isOn) {
            number = Number(number);
            this.volume += number;
            console.log("âm lượng: " + this.volume);
        }
        else {
            console.log("tv đang tắt !");
        }
    };
    this.adjustTVProgram = function (number) {
        if (this.isOn) {
            number = Number(number);
            this.tvProgram = number;
            console.log("tv chuyển sang kênh " + this.tvProgram);
        }
        else {
            console.log("tv đang tắt !");
        }
    };



















