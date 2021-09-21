function minimise() {
    var geigerCounter = document.getElementById("geigerCounter");
    var smallGeigerCounter = document.getElementById("minimisedCounter");
    
    if (geigerCounter.style.display == "none") {
        geigerCounter.style.display = "inline";
        smallGeigerCounter.style.display = "none";
        sessionStorage.setItem("geigerPosition", "maximised");
    } 
    else {
        geigerCounter.style.display = "none";
        smallGeigerCounter.style.display = "inline";
        
        sessionStorage.setItem("geigerPosition", "minimised");
    }
}


function initalGeigerPosition(){
    var geigerCounter = document.getElementById("geigerCounter");
    var smallGeigerCounter = document.getElementById("minimisedCounter");
    if(sessionStorage.getItem("geigerPosition") === "maximised"){
        geigerCounter.style.display = "inline";
        
    }
    else{
        geigerCounter.style.display = "none";
        
    }
    
    
    if(sessionStorage.getItem("globalTimeSession") != null){
        globalTime = parseInt(sessionStorage.getItem("globalTimeSession"));
        adjustCounter(globalTime);
    }
    
    
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
    setTimeout(movePages, 2000);   
               
}
            
function moveToKillPage(){
     window.open("Losing_Screen.html", "_self");

}