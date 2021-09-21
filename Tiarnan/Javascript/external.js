//var isBatteryInserted = false; - took this out and replaced with session storage

var score = 0;
function loadScore(){
    //Written By Nathan
    if(sessionStorage.getItem("globalScore") != null){
        score = parseInt(sessionStorage.getItem("globalScore"));
    }
    document.getElementById("theScore").innerHTML = "Score<br>" + score;
}

function addPoints(points){
    //Written By Nathan
    score += points;
    sessionStorage.setItem("globalScore", score);
    loadScore();
    
}


function displayBattery () {
 
    if(sessionStorage.Battery ==1) {
       document.getElementById("batteryImage").style.visibility="hidden";
    }
}


function goToSupplies() {
    window.location = "Level4SupplyTent.html";
}

function goToTelecommunications() {
    window.location = "Level4TransmitterTent.html";
}

function goToBase() {
    window.location = "Level4AbandonedBase.html";
}

function makeSuitVisible() {
    if(sessionStorage.Hazmat) {
       document.getElementById("hazmatSuit").style.visibility="hidden";
    } else {
        document.getElementById("hazmatSuit").style.visibility="visible";
    }
}

function collectHazmat() {
    document.getElementById("hazmatSuit").style.visibility="hidden";
    sessionStorage.Hazmat = 1;
    addPoints(50);
    document.getElementById("theText").innerHTML = "Hazmat Suit collected";
}

function collectBattery() {
    document.getElementById("batteryImage").style.visibility="hidden";
    sessionStorage.Battery = 1;
    pickUpItem("Battery");
    document.getElementById("theText").innerHTML = "Battery collected";
}

function insertBattery() {
    //Rewritten By Nathan
    if(actualItem == "Battery"){
        removeItem();
        document.getElementById("insertedBattery").style.visibility="visible";
        document.getElementById("theText").innerHTML = "Battery inserted";
        sessionStorage.isBatteryLoadedSession = 1;

    }
    else{
        if(sessionStorage.isBatteryLoadedSession != 1){
           document.getElementById("theText").innerHTML = "A battery is needed to use this transmitter";
        }
        
        actualItem = ""; // reset actual item
    }
}

function secretMessage() {
    if(sessionStorage.isBatteryLoadedSession) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("messagePlayer");
        
        modal.style.display = "block";
        
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
    } else {
        document.getElementById("theText").innerHTML = "A battery is needed to use this transmitter";
    }
}

function doorPasswordRequired() {
    var passwordEntry = window.prompt("You need the secret password to enter the bunker");
    document.getElementById("theText").innerHTML = "I need to find out the password to get to safety";
    var password = passwordEntry.toLowerCase();
    if(password == "safety") {
        stopTimer();
        moveToNextPage();
    } else {
        window.alert("Incorrect password")
    }
}

function displayBatteryAfterInsert(){
    // written by Nathan
    if(sessionStorage.isBatteryLoadedSession){
        document.getElementById("insertedBattery").style.visibility="visible";
    }
}


function moveToNextPage(){
    document.body.className = "fadeOut";
    setTimeout(moveWindows, 3000);
}


function moveWindows(){
    window.open("../Nathan/winScreen.html", "_self");
}