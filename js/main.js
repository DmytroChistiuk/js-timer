const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const sec = document.querySelector("#sec");
let counter = 0;
let timerId;
let started;

start.onclick = startFunc;
stop.onclick = stopFunc;
reset.onclick = resetFunc;

function resetFunc(){
    counter=0;
    clearInterval(timerId);
    sec.innerText=counter;
};

function stopFunc(){
clearInterval(timerId);
}

function startFunc(){
  if(started===true){
    stopFunc()
  }
  timerId = setInterval(function(){
    counter++;
    sec.innerText=counter;
    started = true;
  },1000);
}