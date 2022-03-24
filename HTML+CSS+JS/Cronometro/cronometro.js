window.onload = function() {
    var h = 0;
    var m = 0;
    var s = 0;
    var ms = 0;

    var empieza_timepo = 0;

    var cronometro = document.getElementById("cronometro");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset"); 

    function event(){
        btnStart.addEventListener("click", start); 
        btnStop.addEventListener("click", stop);
        btnReset.addEventListener("click", reset);   
     }
     event()



}


 function write(){
    let ht, mt, st, mlst;
    ms++;
 
    if (ms > 99){ s++ ; ms= 0; }
    if (s > 59){ m++; s= 0;}
    if (m > 59){ h++; m= 0;}
    if (h > 24) h= 0;
 
    mlst = ('0' + ms).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    empieza_timepo.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
 }
 function start(){
    write();
    timeStarted = setInterval(write, 10);
    btnStart.removeEventListener("click", start);
 }
 function stop(){
       clearInterval(timeStarted);
       btnStart.addEventListener("click", start);
 }
 function reset(){   
       clearInterval(timeStarted);
       empieza_timepo.innerHTML = "00:00:00.00"
       h= 0; m= 0 ; s= 0; ms= 0;
       btnStart.addEventListener("click", start);      
 }