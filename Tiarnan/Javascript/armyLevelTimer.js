var globalTime = 0;
var levelTimer;
var levelTime = 0;



if(sessionStorage.getItem("globalTimeSession") != null){
    globalTime = sessionStorage.getItem("globalTimeSession");
}


if(sessionStorage.getItem("levelTimeSession") != null){
    levelTime = sessionStorage.getItem("levelTimeSession");
}



function stopTimer(){
    clearInterval(levelTimer);
    sessionStorage.setItem("armyTime", levelTime);
    sessionStorage.removeItem("levelTimeSession");
    
            // global time code
    sessionStorage.setItem("globalTimeSession", globalTime);
}

function startTimer(){
    levelTimer = setInterval(incrementLevelTimer, 1000);
}

function incrementLevelTimer(){
    if(sessionStorage.getItem("levelTimeSession") != null){
        levelTime = parseInt(sessionStorage.getItem("levelTimeSession"));
    }
    levelTime += 1;
    sessionStorage.setItem("levelTimeSession", levelTime);
    
        // global time code
    if(sessionStorage.getItem("globalTimeSession") != null){
        globalTime = parseInt(sessionStorage.getItem("globalTimeSession"));
    }
    
    globalTime += 1;
    sessionStorage.setItem("globalTimeSession", globalTime);
    console.log(globalTime);
    
    adjustCounter(globalTime);

    

}


function adjustCounter(theTime){
    if(theTime >= 300){
        stopTimer();
        setTimeout(killScreen, 100);
                    
    }
                
    if(theTime >= 180 && theTime <240){
        var timerBar = document.getElementById("counterBar");
        timerBar.style.background = "orange";
                      
    }
    else if(theTime >= 240){
        var timerBar = document.getElementById("counterBar");
        timerBar.style.background = "red";
    }
                
                
    var timerBar = document.getElementById("counterBar");
//    timerBar.style.display = "inline";
                
    timerBar.style.height = (theTime/3) + "%";
}

function killScreen(){
    document.body.className = "fadeOut";
    setTimeout(moveToKillPage, 2000);   
               
}
            
function moveToKillPage(){
     window.open("../Rokas/Losing_Screen.html", "_self");

}