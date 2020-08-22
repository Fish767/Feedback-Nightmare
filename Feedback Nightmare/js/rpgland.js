options=["Investigate","Talk","Move","Inventory","Menu"]

function supdateGUI3() {
    stop=true
    updateGUI3()
}

function updateGUI3 (){
    if (movemenu===true) {
        document.getElementById("body").innerHTML="<div id=\"statsbox\"></div><div id=\"oc\" class=\"option-container\"></div>"
        for (let i=1; i<9; i++) {
            document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
        document.getElementById("statsbox").innerHTML+="<div>Hunger: "+hunger+"</div>"
        document.getElementById("statsbox").innerHTML+="<div>Thirst: "+thirst+"</div>"
        for(let pop=0; pop<movementoptions[room].length; pop++) {
            createop(movementoptions[room][pop],"moveto("+room+","+pop+")")
        }
        createop("Cancel","cancel()")
        movemenu=false
    }else if (talking===true) {
        cleardoc("textbox")
        printLetterByLetter("textbox",talktext[room],15)
        talking=false
    }else if (looking===true) {
        cleardoc("textbox")
        type(searchtext[room][roomprog[room][0]])
        if (itemstobegained[room][roomprog[room][0]]) {
            invid[itemstobegained[room][roomprog[room][0]].id]+=1
        }
        if (roomprog[room][0]!==roomprog[room][1]) {
            roomprog[room][0]+=1;
        }
        looking=false
    }else if (invchck===false) {
        if (room===1||room===0) {
            document.getElementById("title").innerText="You are in Space, "+playername+"!"
        }else if (room===2) {
            document.getElementById("title").innerText="You are on Gurlend, "+playername+"!"
        }else if (room===3) {
            document.getElementById("title").innerText="You are in the Land of the Silent!"
        }else if (room===4) {
            document.getElementById("title").innerText="You are on ?????."
        }else if (room===7) {
            document.getElementById("title").innerText="Welcome to the Fold."
        }
        type(roomtext[room])
        for (let i=1; i<6; i++) {
        createop(options[i-1],"dooption("+i+")")
        }
    }else if (inioption===false) {
        document.getElementById("body").innerHTML="<div id=\"inventory-container\"><div id=\"item-container\"></div></div><div class=\"option-container\" id=\"oc\"></div>"
        for (let j=0; j<invid.length; j++) {
            if (invid[j]!==0) {
                document.getElementById("item-container").innerHTML+="<div><div class=\"invslot\">"+items[j].name+" x"+invid[j]+"</div><br><div class=\"item-options-buttons\" onclick=\"dio("+j+")\">Options</div></div>"
            }
        }
        createop("Cancel","cancel()")
    }
}

function investigate () {
    looking=true
    updateGUI3()
}

function talk () {
    if (Aster===true&&room>=17) {
        astertalk();
    }else{
    talking=true
    updateGUI3()
    }
}

function move () {
    movemenu=true
    updateGUI3()
}

function dio(i) {
    inioption=true
    type(items[i].name)
    if (items[i].type==="consumable") {
        createop("Use","use("+i+")")
        if (invid[i]>1) {
            createop("Use x"+invid[i],"buse("+i+","+invid[i]+")")
        }
        createop("Toss","toss("+i+")")
    }
    if (items[i].type==="book") {
        createop("Read","use("+i+")")
    }
    if (items[i].type==="key") {
        createop("Fight the boss this item came from","use("+i+")")
    }
    if (items[i].type==="card") {
        createop("Return to the Library","use("+i+")")
    }
    if (items[i].type==="equipment") {
        createop("Equip","equip("+i+")")
        createop("Toss","toss("+i+")")
    }
    createop("Cancel","cancel()")
    updateGUI3()
}

function inventory () {
    invchck=true
    updateGUI3()
}

function cancel () {
    if (inioption===true) {
        inioption=false
    }else if (invchck===true) {
        invchck=false
        if (battlechk!==false) {
            battle(battlechk)
        }
    }else if (looking===true) {
        looking=false
    }
    if (battlechk===false) {
        updateGUI3()
    }
}

function dooption(c) {
    if (room===19) {
        room=20
    }
    stop=true
    if (c===1) {
        investigate()
    }else if (c===2) {
        talk()
    }else if (c===3) {
        move()
    }else if (c===4) {
        inventory()
    }else if (c===5) {
        loopthis='temp';
        loopmenu();
    }
}

function loop3() {
    if (lifesavingvariable===false) {
        updateGUI3()
        lifesavingvariable=true
    }
}