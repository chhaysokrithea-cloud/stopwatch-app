const display = document.getElementById("display"); //call display you make number on html
let timer = null; //time
let startTime = 0; //call start time
let escapleTime = 0; //past about time running
let running = false; //time running


function start(){ //call function
if(!running){ // false running 
    startTime = Date.now() - escapleTime;//Subtracting the accumulated elapsed time = resume correctly.
    timer = setInterval(update,10);//10 ms = 0.01 s,call reapeatly update function(update every 0.01)
    running = true; // when click running  progressing.
}
    
}

function stop(){ // call stop
    clearInterval(timer); //clear updated = timer = setInterval(update,10)
    escapleTime = Date.now() - startTime; // es = date and - time that start, (1000ms) - (12301928normal number)
    running = false;
}

function reset(){// make it reset
    startTime = 0;
    escapleTime = 0;
    running = false;
    display.textContent = "00:00:00:00"; // make text or number tranform to 00:00..
}

function update(){ //updated mean when we stop and start again
    const currentTime = Date.now();// time now  = date(ms)
    escapleTime = currentTime - startTime; // es = timenow - normal time
    let hour = Math.floor(escapleTime /(1000 *60 * 60));
        let minute = Math.floor(escapleTime /(1000 *60)%60);
            let second = Math.floor(escapleTime /1000  % 60);
                let milisecond = Math.floor(escapleTime %1000 /10);

    hour = String(hour).padStart(2,"0"); // used hour string padStart(Length,"number what we add")
    minute = String(minute).padStart(2,"0");
    second = String(second).padStart(2,"0");
    milisecond = String(milisecond).padStart(2,"0");

 display.textContent = `${hour}:${minute}:${second}:${milisecond}`;// add dipslay-show ${..}:${}  
}
