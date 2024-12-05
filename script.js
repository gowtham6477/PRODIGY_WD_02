const stopwatchDuration = document.getElementById("stopwatchduration"),
start = document.getElementById("start"),
stops = document.getElementById("stop"),
reset = document.getElementById("reset"),
lap = document.getElementById("lap"),
laps = document.getElementById("laps");

let ms=0,
sec=0,
mins=0,
hrs=0,
timeInterval;
start.onclick = () =>{
    timeInterval =setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            mins++;
            sec=0;
        }
        if(mins==60){
            hrs++;
            mins=0;
        }
        stopwatchDuration.innerHTML=`${zeropad(hrs)}:${zeropad(mins)}:${zeropad(sec)}:${zeropad(ms)}`;
    },10);

    start.setAttribute("style","display:none");
    stops.setAttribute("style","display:block");
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
}
const zeropad =(num) =>{
    return String(num).padStart(2,'0')
}
stops.onclick = () =>{
    clearInterval(timeInterval);
    lap.setAttribute("style","display:none");
    reset.setAttribute("style","display:block");
    start.setAttribute("style","display:block");
    start.innerHTML="Resume";
    stops.setAttribute("style","display:none");
}

let count =0
lap.onclick = () =>{
    count++;
    let li = document.createElement("li");
    li.innerHTML =` ${"*"+count} - ${zeropad(hrs)}:${zeropad(mins)}:${zeropad(sec)}:${zeropad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior:"smooth"});
}
reset.onclick = () =>{
    laps.innerHTML="";
    hrs=mins=sec=ms=count=0;
    clearInterval(timeInterval);
    stopwatchDuration.innerHTML="00:00:00:00";

    start.innerHTML="Start";
    start.setAttribute("style","display:block");
    stops.setAttribute("style","display:none");
    lap.setAttribute("style","display:block");
    lap.setAttribute("disabled",true);
    reset.setAttribute("style","display:none");
}