const dat = '1 Jan 2023';
function getDate(){
    const dt = new Date(dat);
    const dt1 = new Date();
    const second = ((dt - dt1)/1000);
    const day = Math.floor(second/3600/24);
    const hour = Math.floor(second/3600)%24;
    const mint = Math.floor(second/60)%60;
    const sec = Math.floor(second)%60;
                   
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = getFormat(hour);
    document.getElementById("mints").innerHTML = getFormat(mint);
    document.getElementById("seconds").innerHTML = getFormat(sec);


}
function getFormat(time){
    if (time<10){
        return "0"+time;
    }
    else{
        return time;
    }

}
getDate();
setInterval(getDate, 1000);
