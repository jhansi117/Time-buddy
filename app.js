//select the clock div
const clock = document.querySelector("#clock");

//the time has to be updates every second.
setInterval(function(){
    //creating a date object
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)