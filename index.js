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


//flag option is used to know the flow of operations
var flag = 0;

function startCount(){
    /*
    1. Set startCount function to start only when the flag is 0 to prevent the mislead of stopwatch process.
    2. If we dont use the flag, we can run the stopwatch only once as expected. then, the stopwatch wont work as required.
    3. By using flag, we can use the stopwatch any number of times without reloading the page.
    */
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

//stopcount function to pause the timer
function stopCount(){
    //flag should be set zero to make the start button work again. else the start button wont trigger the startCount() function
    flag = 0;
    document.getElementById("icon").style.color = "red";//timer icon color will change to red
    clearInterval(sec_interval);
    clearInterval(min_interval);
}

function resetTimer(){
    flag = 0;
    stopCount();
    document.getElementById("icon").style.color = "black";// timer icon color will change to black
    //all the values of variables set to zero again
    milli_sec_count=0;
    sec_count = 0;
    min_count = 0;
    //all the number text on the page will be changed to "00"
    document.getElementsByClassName("min")[0].innerText = "00";
    document.getElementsByClassName("sec")[0].innerText = "00";
    document.getElementsByClassName("milli-sec")[0].innerText = "00";
}

