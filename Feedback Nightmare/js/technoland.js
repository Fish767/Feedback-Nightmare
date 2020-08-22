function shuffle(num) {
    switch(num) {
        case 1:
            mazenum+=1;
            break;
        case 2:
            mazenum=Math.ceil(mazenum*2/3)
            break;
        case 3:
            if (mazenum===1) {
                mazenum+=1
            }else {
                mazenum-=1;
            }
            break;
        case 4:
            mazenum=mazenum+=2;
    }
    roomprog[9][0]===roomprog[9][1]
    if (mazenum>=5) {
        room+=1
        textnum+=1
        stop=true
        prestige=3
        pauseall()
    }else {
        updateGUI4();
    }
}

function guess () {
    let vor=document.getElementById('input').value
    document.getElementById("body").innerHTML="<div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    if (((vor==="Dracula"||vor==="dracula")&&roomprog[room][0]===0)||((vor==="day"||vor==="Day"||vor==="the day")&&roomprog[room][0]===1)||((vor==="nothing"||vor==="Nothing")&&roomprog[room][0]===2)) {
        roomprog[room][0]+=1
        if (roomprog[room][0]===3) {
            room=9;
            textnum+=1;
            prestige=3;
            pauseall();
        }else {
            updateGUI4();
        }
    }else {
        createop("Try Again","stop=true;updateGUI4();")
    }
}

function updateGUI4() {
    if (room===8) {
        document.getElementById("title").innerText="Layer 0"
    }else if (room===9) {
        document.getElementById("title").innerText="Layer 1 Room: "+mazenum
    }else if (room===10||room===11) {
        document.getElementById("title").innerText="Layer 2"
    }
    stop=true
    type(roomtext[room][roomprog[room][0]])
    if (room===8) {
        document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\">"+roomtext[room][roomprog[room][0]]+"<br><br>What will you write?</div><br><br><br><br><br><br><div id=\"inputfieldarea\"></div><div id=\"oc\" class=\"option-container\"></div>"
        for (let i=1; i<9; i++) {
            document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
        input=document.createElement("INPUT");
        input.setAttribute("type","text");
        input.autofocus=true;
        input.id="input"
        document.getElementById("inputfieldarea").appendChild(input)
        createop("Write","guess()")
    }else if (room===9) {
        let o=Math.ceil(Math.random()*4)
        createop("Take route "+o,"shuffle("+o+")")
        let r=[o,o,o];
        for (let i=0; i<3; i++) {
            let t=Math.ceil(Math.random()*4)
            if (Math.ceil(Math.random()*100)>50&&t!==r[0]&&t!==r[1]&&t!==r[2]) {
                createop("Take route "+t,"shuffle("+t+")")
               r[i]=t;
            }
        }
    }else if (room===10) {
        createop("Open your eyes","pauseall();lifesavingvariable=true;playingsound=false;prestige=2;room=11;supdateGUI3();stats[1][1]+=items[13].modifier;")
    }
    createop("Menu","stop=true;loopthis='temp';loopmenu();")
}