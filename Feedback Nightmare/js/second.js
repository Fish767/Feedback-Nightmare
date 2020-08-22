var prog=0
var question=["You did not pass the first test.","You were being tested to see if you could survive in the world. What you saw was only a simulation.","You will learn more later.",0,"Now wake from your slumber! You are the only one who can save the real world."]
var answer=["What test?","Simulation?","Okay.",0,"Wha- -o y-o m----!? AHHHHHHHH"]


function progress() {
    prog=0
    textnum+=1
    stop=true
}

var inuptt;
var fixitnow;

function fixname() {
    if (fixitnow!=="") {
        playername=fixitnow;
    }
    lifesavingvariable=false;
}

function loop2 () {
    if (lifesavingvariable===false) {
        if (textnum===5) {
            prestige+=1
        }else if (textnum===3) {
            if (playername===0) {
                inputt=document.createElement("INPUT");
                inputt.setAttribute("type","text");
                inputt.autofocus=true;
                inputt.id="input"
                inputt.placeholder="Player 1"
                playername="Player 1"
                document.getElementById("body").innerHTML="<div id=\"secondstage\">What is your name?</div><br><div id=\"inputfieldarea\"></div><br><div id=\"progbox\"><br><button id=\"progressbutton\" onclick=\"fixitnow=document.getElementById('input').value;fixname();\">Continue</button><br></div>"
                document.getElementById("inputfieldarea").appendChild(inputt)
                lifesavingvariable=true;
            }else {
                textnum+=1;
            }
        }else if (prog<1) {
            document.getElementById("body").innerHTML="<div id=\"secondstage\"></div><br><div id=\"progbox\"><br></div>"
            printLetterByLetter("secondstage",question[textnum], 25)
            prog=1
        }else if (prog>=1&&prog<2) {
            prog+=1/(question[textnum].length*6.3/4)
        }else if (prog>=2&&prog<3) {
            document.getElementById("body").innerHTML="<div id=\"secondstage\">"+question[textnum]+"</div><br><div id=\"progbox\"><br><button id=\"progressbutton\" onclick=\"progress()\"></button><br></div>"
            printLetterByLetter("progressbutton",answer[textnum], 25)
            prog=3
        }
    }
}