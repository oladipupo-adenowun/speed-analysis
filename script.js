let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value = testText;

    //reset result and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    //update endtest button functionality
    var button = document.getElementById("btn");
    button.innerHTML = 'End Test';
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();

    //disable user input
    document.getElementById("userInput").readOnly = true;

    //work out time it took to deliver the WPM
    var timeElapsed = (endTime - startTime) / 1000 // in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split the words with regex to count correctly
    var typedWordsCount = userTypedText.split(/\s+/).filter((word)=> word !== "").length;

    var wpm = 0;

    if(timeElapsed != 0 && !isNaN(typedWordsCount)){
        wpm = Math.round((typedWordsCount / timeElapsed) * 60) // in minutes;
    }

    //output result
    document.getElementById("output").innerHTML = `
    <h2>Typing Test Result</h2>
    <p>Words Typed: ${typedWordsCount}</p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words per minute (WPM): ${wpm}</p>
    `;

    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}