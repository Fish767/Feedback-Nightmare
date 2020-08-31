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
        type(talktext[room])
        talking=false
        for (let i=1; i<6; i++) {
            createop(options[i-1],"dooption("+i+")")
        }
    }else if (looking===true) {
        cleardoc("textbox")
        type(searchtext[room][roomprog[room][0]])
        if (itemstobegained[room][roomprog[room][0]]) {
            invid[itemstobegained[room][roomprog[room][0]].id]+=1
        }
        if (roomprog[room][0]!==roomprog[room][1]) {
            roomprog[room][0]+=1;
        }
        for (let i=1; i<6; i++) {
            createop(options[i-1],"dooption("+i+")")
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
        refreshinv()
    }
}

function refreshinv() {
    invtracker2=0
    invtracker=0
    document.getElementById("body").innerHTML="<div class=\"option-container\" id=\"oc\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    for (let j=0; j<5;) {
        if (invid[invtracker]!==0) {
            invtracker2++
            if (invtracker2>=(5*invpage)) {
                createop(items[invtracker].name+" x"+invid[invtracker],"dio("+invtracker+")")
                j++
            }
        }
        invtracker++
        if (invtracker>=invid.length-1) {
            j=5
        }
    }
    document.getElementById("o6").remove()
    document.getElementById("o7").remove()
    document.getElementById("o8").remove()
    document.getElementById("oc").innerHTML+="<div id=\"o6\" class=\"option\" onclick=\"if (invpage>0) {invpage--;refreshinv();}\"><==</div>"
    document.getElementById("oc").innerHTML+="<div id=\"o7\" class=\"option\" onclick=\"pageincrease();refreshinv()\">==></div>"
    document.getElementById("oc").innerHTML+="<div id=\"o8\" class=\"option\" onclick=\"cancel()\">Cancel</div>"
    document.getElementById("o6").classList.add("filled")
    document.getElementById("o7").classList.add("filled")
    document.getElementById("o8").classList.add("filled")
}

function pageincrease() {
    let runn=0
    for (let i=0; i<invid.length; i++) {
        if (invid[i]!==0) {
            runn++
        }
    }
    if ((runn/5)>=(invpage+1)) {
        invpage++;
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