function displayabildesc(num,num2) {
    type(abilities[num].description)
    createop("Cancel","displaytree("+num2+")")
}

function displaytree(num) {
    type("")
    for (let i=0; i<ability; i++) {
        createop(abilities[i].name,"displayabildesc("+i+","+num+")")
    }
    createop("Cancel","explore("+num+")")
}

function explore (num) {
    document.getElementById("body").innerHTML="<div id=\"statsbox\"></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    for (let y=0; y<stats.length-1; y++) {
        if (y!==0&&y!==4) {
            document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"</div>"
        }else if (y===0) {
            document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"/"+stats[5][0]+"</div>"
        }else if (y===4) {
            document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"/"+stats[5][1]+"</div>"
        }
    }
    document.getElementById("statsbox").innerHTML+="<div>Hunger: "+hunger+"</div>"
    document.getElementById("statsbox").innerHTML+="<div>Thirst: "+thirst+"</div>"
    createop("Explore","doevent("+num+")")
    if (num===2) {
        createop("Crossroad","crossroad();")
    }
    if (num===3) {
        createop("Go to the Shrine","crossroad();")
    }
    if (temple===true&&room===13) {
        createop("Go to the Temple","pauseall();playingsound=false;room=15;updateGUI3();")
    }
    if (town===true&&room===13) {
        createop("Go to Town","pauseall();playingsound=false;room=14;updateGUI3();")
    }
    if (town1===true&&room===17) {
        createop("Go to Town","pauseall();playingsound=false;room=18;updateGUI3();")
    }
    if (num===21) {
        createop("Go to the Light","crossroad();")
    }
    if (num===24) {
        createop("Go Back","room=23;pauseall();playingsound=false;supdateGUI3();")
    }
    createop("Rest","heal(0)")
    createop("Manage Skills","displaytree("+num+")")
    createop("Crafting","craftinterface("+num+")")
    createop("Cancel","cancel()")
}

function crossroad() {
    if (room===2) {
        if (invid[14]>0) {
            type("A boulder has fallen on the road. You are unable to go this way.")
            createop("Go Back","supdateGUI3()")
        }else {
            type("You went down a trail...and a sign points down a path. Do you follow it? You won't be able to return if you go.")
            createop("Follow","room=3;pauseca();supdateGUI3()")
            createop("Run away","supdateGUI3()")
        }
    }else if (room===3) {
        if (invid[4]>0) {
            type("The shrine is in ruin. You find nothing useful.")
            createop("Go Back","supdateGUI3()")
        }else {
            type("You went down a trail...and find a small shrine. It is shrouded in darkness. Blue spirits swirl near it. You are filled with a sense of impending doom. Do you approach it?")
            createop("Approach","stop=true;shadow();")
            createop("Run away","supdateGUI3()")
        }
    }else if (room===21) {
        if (invid[18]>0) {
            type("You cannot see the light.")
            createop("Go Back","supdateGUI3()")
        }else {
            type("You see the light.")
            createop("Approach","stop=true;cave(7);")
            createop("Run away","supdateGUI3()")
        }
    }else if (room===22) {
        if (invid[18]>0) {
            type("You cannot see the light.")
            createop("Go Back","supdateGUI3()")
        }else {
            type("You see the light.")
            createop("Approach","stop=true;cave(8);")
            createop("Run away","supdateGUI3()")
        }
    }
}

function shadow() {
    type("Your shadow exends in front of you. The blue spirits swirl more intensly. You watch as your shadow turns into a mirror image of yourself. A toothy grin parts it's mouth.<br><br>\"Prepare to die you virus!\"")
    createop("Fight!","stop=true;enemies[3].defense=stats[1][1];enemies[3].attack=stats[2][1];enemies[3].health=stats[5][0];enemies[3].level=stats[5][2];enemies[3].speed=stats[3][1]-1;bb1=true;battle(3);")
}

var rad;

function craftinterface(num) {
    document.getElementById("body").innerHTML="<div id=\"tex\" class=\"textbox\"></div><div class=\"option-container\" id=\"oc\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    rad=setInterval(() => {
        cleardoc("tex")
        for (let i=0; i<resourcesarray.length; i++) {
            document.getElementById("tex").innerHTML+="Lifeforce: "+Math.floor(resourcesarray[i]*10)/10
        }
    }, 100);
    createop("Craft","clearInterval(rad);craft("+num+");")
    createop("Delegate Drones","clearInterval(rad);automationscreen("+num+");")
    createop("Cancel","clearInterval(rad);explore("+num+");")
}

function craft(num) {
    document.getElementById("body").innerHTML="<div id=\"tex\" class=\"textbox\"></div><div class=\"option-container\" id=\"oc\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    rad=setInterval(() => {
        cleardoc("tex")
        for (let i=0; i<resourcesarray.length; i++) {
            document.getElementById("tex").innerHTML+="Lifeforce: "+Math.floor(resourcesarray[i]*10)/10
        }
    }, 100);
    createop("Automaton: 50","make(0)")
    createop("Back","clearInterval(rad);craftinterface("+num+");")
}

function make(num) {
    while (crafts.length<num+1) {
        crafts.push(0);
    }
    switch (num) {
        case 0:
            if (resourcesarray[0]>=50) {
                resourcesarray[0]-=50
                crafts[0]++;
            }
            break;
    }
}

function automationscreen(num) {
    type("Automatons: "+crafts[0])
    createop("Battle: "+drones[0],"thishappensnow(0,"+num+");")
    createop("Scavenge: "+drones[1],"thishappensnow(1,"+num+");")
    createop("Reset","thishappensnow(-1,"+num+");")
    createop("Back","craftinterface("+num+")")
}

function thishappensnow (num, num2) {
    switch (num) {
        case 0:
            if (crafts[0]>0) {
                crafts[0]-=1;
                drones[0]+=1
            }
            break;
        case 1:
            if (crafts[0]>0) {
                crafts[0]-=1;
                drones[1]+=1
            }
            break;
        case -1:
            crafts[0]+=(drones[0]+drones[1])
            drones[1]=0
            drones[0]=0
            break;
    }
    automationscreen(num2)
}