var nextext=["You passed the initiation test. Welcome to The Survivors.","We are a select few who have managed to break free from the system.","Simply put, you are nothing more than a few lines of code doing what you are told to do. But you managed to break free. You are inside Layers.","Layers is what we call the worlds between the real world and the Feedback Loop. Layers is an ever shifting overlay of various maps, puzzles, and games. Your escape route changes every second. It is nearly impossible to escape. Goodluck, you need it.","We will tell you more when you make it from Layer 0 to Layer 1. See you there.","","You made it!","Just so you know, when I say \"you\" I don't mean the character in this \"game\". I mean you. Yeah you in front of the monitor.","I'll let that sink in. See you after round two.","","I am sure you are wondering how this game ends right?","Well, this isn't a game. You really are breaking out of your reallity.","Anyway, this \"game\" ends when you figure something out. It will be obvious when it hits you.",""]


function progress() {
    prog=0
    textnum+=1
    stop=true
}

function loop4 () {
    if (textnum===5||textnum===9||textnum===13) {
        prestige+=1
        updateGUI4()
    }else if (prog<1) {
        document.getElementById("body").innerHTML="<div id=\"secondstage\"></div><br><div id=\"progbox\"><br></div>"
        printLetterByLetter("secondstage",nextext[textnum],25)
        prog=1
    }else if (prog>=1&&prog<2) {
        prog+=1/(nextext[textnum].length*6.3/4)
    }else if (prog>=2&&prog<3) {
        document.getElementById("body").innerHTML+="<div id=\"progbox\"><button id=\"progressbutton\" onclick=\"progress()\">Next</button></div>"
        prog=3
    }
}