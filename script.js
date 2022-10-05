// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
    
  }

  var val = document.getElementById("display").value
  var i = 0,ulist,date
  const arr = [] , arr2 = []
  var his = document.getElementById("history")
  var box2 = document.getElementById("box2")
  var dt = new Date()
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds()
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    
    if(box2.style.display == "block"){
        box2.style.display="none"   
    }

    arr2.push(timeToString(elapsedTime))
        val=0
        ulist = document.createElement("li")
        ulist.innerHTML = arr2[i]
        var dt = new Date();
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let time = hours + ':' + minutes  + ':' + seconds + " " + ampm;
        date = document.createElement("p")
        date.innerHTML ="(" + time + ")" + "<br>"
        his.prepend(date)
        his.prepend("\n")
        his.prepend(ulist)
    i++;


    
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");

    
  }
    
  function saved() {
    if(box2.style.display == "block"){
        box2.style.display="none"
        
    }
    else{
        box2.style.display="block"
    }
    showButton("PLAY");
  }
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  let savedButton = document.getElementById("savedButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
  savedButton.addEventListener("click", saved);

