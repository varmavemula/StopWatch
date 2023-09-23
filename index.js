//created variables to get reference of the buttons in html code
var start = document.getElementsByClassName("start")[0];
var stop1 = document.getElementsByClassName("stop")[0];
var reset = document.getElementsByClassName("reset")[0];

//added event listeners for every button
start.addEventListener("click", startCount);
stop1.addEventListener("click", stopCount);
reset.addEventListener("click", resetTimer);

//created variables for refering the second interval function and minute interval function
var sec_interval;
var min_interval;


//created variables for storing the count of seconds, milliseconds and minutes
var milli_sec_count = 0;
var sec_count = 0;
var min_count = 0;


//flag option is 
var flag = 0;

function startCount(){
    if (flag == 0){
    
        sec_interval = setInterval(timer,10);
        document.getElementById("icon").style.color = "green";
        min_interval = setInterval(function(){
                            if(sec_count===0) min_count= (min_count+1)%60;
                            document.getElementsByClassName("min")[0].innerText = min_count<10? "0"+min_count:min_count;
                            document.getElementsByClassName("sec")[0].innerText = sec_count<10? `0${sec_count}`:sec_count;    
                        },1000);
        flag = 1;
    }
}

function timer(){
    document.getElementsByClassName("milli-sec")[0].innerText = milli_sec_count<10? `0${milli_sec_count}`: milli_sec_count;
    milli_sec_count=(milli_sec_count+1)%100;
    if(milli_sec_count===0) sec_count = (sec_count+1)%60;
}

function stopCount(){
    flag = 0;
    document.getElementById("icon").style.color = "red";
    clearInterval(sec_interval);
    clearInterval(min_interval);
}

function resetTimer(){
    flag = 0;
    stopCount();
    document.getElementById("icon").style.color = "black";
    milli_sec_count=0;
    sec_count = 0;
    min_count = 0;
    document.getElementsByClassName("min")[0].innerText = "00";
    document.getElementsByClassName("sec")[0].innerText = "00";
    document.getElementsByClassName("milli-sec")[0].innerText = "00";
}

