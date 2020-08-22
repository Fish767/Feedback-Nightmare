function doevent(num) {
    let r=Math.ceil(Math.random()*100)
    if (num!==3&&num!==2) {
        bellytick()
    }
    switch (num) {
        case 2:
            if (r<=20) {
                type("You went down a trail...and found...nothing!")
                createop("Confirm","supdateGUI3()")
            }else if (20<r&&r<=75&&invid[14]===0) {
                type("You went down a trail...and an alien Slime attacked you!")
                createop("Confirm","battle(0)")
            }else if (75<r&&r<=100&&invid[14]===0) {
                type("You went down a trail...and an alien Bat attacked you!")
                createop("Confirm","battle(1)")
            }else if (man===false) {
                man=true
                type("You found the man.<br><br>What will you do?")
                createop("Fight","pauseall();battle(7);playb1();bb1=true;")
                createop("Run","room=16;supdateGUI3();invid[14]-=1;librarycard=false;")
            }
            break;
        case 3:
            if (r<=20) {
                type("You went down a trail...and found...silence.")
                createop("Confirm","supdateGUI3()")
            }else if (20<r&&r<=70) {
                type("You went down a trail...and a Hollow attacked you!")
                createop("Confirm","battle(2)")
            }else if (r>70&&invid[14]===0) {
                type("You went down a trail...and a Hollow attacked you!")
                createop("Confirm","battle(2)")
            }else {
                type("You are in control now.")
                createop("Confirm","supdateGUI3()")
            }
            break;
        case 11:
            if (r<=20) {
                type("You went down a trail...and found...nothing!")
                createop("Confirm","supdateGUI3()")
            }else if (20<r&&r<=95) {
                type("You went down a trail...and a Zombie attacked you!") 
                createop("Confirm","battle(5)")
            }else if (r>95) {
                type("You went down a trail...and a Slime attacked you!") 
                createop("Confirm","battle(0)")
            }
            break;
        case 13:
            if (r<=10) {
                type("You stumbled around in the desert for an hour and decided to return to the lab.") 
                createop("Confirm","supdateGUI3()")
            }else if ((20<r&&r<=50&&town===false)||(temple===true&&r>50&&r<=80&&town===false)) {
                type("You see a town off in the distance.<br><br>Do you approach it?") 
                createop("Approach","pauseall();playingsound=false;room=14;town=true;supdateGUI3();")
                createop("Run","supdateGUI3()")
            }else if ((r>50&&r<=80&&temple===false)||(town===true&&r>20&&r<=50&&temple===false)) {
                type("After stumbling around in the desert for a few hours you end up at a old temple.<br><br>What will you do?") 
                createop("Approach","pauseall();playingsound=false;room=15;temple=true;supdateGUI3();")
                createop("Run","supdateGUI3()")
            }else {
                type("The sand swirls around you and you watch as it makes a statue in the shape of a giant. The giant looks down at you.<br><br>What will you do?") 
                createop("Fight","battle(6)")
                createop("Run","supdateGUI3()")
            }
            break;
        case 17:
            if (r<=20) {
                type("You explored the forst and found nothing.") 
                createop("Confirm","supdateGUI3()")
            }else if (20<r&&r<=45&&town1===false) {
                type("You see a town off in the distance.<br><br>Do you approach it?") 
                createop("Approach","pauseall();playingsound=false;room=18;town1=true;supdateGUI3();")
                createop("Run","supdateGUI3()")
            }else if (60<r&&Aster===true) {
                type("You find a giant bee!")
                createop("Confirm","battle(9)")
            }else if (Aster===false) {
                type("You see a tall teenage boy in front of you. His shoulder length white hair has been tossed by the wind. Light forms the shape of a halo above his head. Emerald eyes shimmering in the light draw your attenetion to his face. You can't help but stare at him, stunned by his presence, for what feels like an eternity.<br><br>He smiles when he sees you. You sudder at the sight. His smile radiates evil but his eyes look as friendly as ever. He removes a hand from the pocket of his red cloak and holds it out for a shake saying, \"Hey, my name is Aster and I'm lost. You wouldn't happen to know where we are, would you?\"")
                createop("Shake his hand and say yes","stop=true;aste=1;aster()")
                createop("Shake his hand and say no","stop=true;aste=3;aster()")
            }else {
                type("You find a giant frog!")
                createop("Confirm","battle(8)")
            }
            break;
        case 21:
            if (r<=20) {
                type("You explored the room and found a Slime.")
                createop("Confirm","battle(0)")
            } else if (20<r&&r<=40) {
                type("You explored the room and found a Bat.")
                createop("Confirm","battle(1)")
            }else if (40<r&&r<=70) {
                type("You explored the room and found a Large Bat.")
                createop("Confirm","battle(10)")
            }else {
                type("You explored the room and found a Group of Bats.")
                createop("Confirm","battle(11)")
            }
            break;
        case 24:
            if (r<=20) {
                type("You explored the room and found a Slime.")
                createop("Confirm","battle(0)")
            } else if (20<r&&r<=40) {
                type("You explored the room and found a Bat.")
                createop("Confirm","battle(1)")
            }else if (40<r&&r<=70) {
                type("You explored the room and found a Large Bat.")
                createop("Confirm","battle(10)")
            }else {
                type("You explored the room and found a Group of Bats.")
                createop("Confirm","battle(11)")
            }
            break;
    }
}

function scavenge(num) {
    for (let fbi=0; fbi<drones[1]; fbi++) {
        let outofvars=Math.floor(Math.random()*100)
        if (outofvars>=96) {
            invid[8]+=1
            invid[9]+=1
            type("You automaton found food and water!")
            
        }else if (outofvars>=78) {
            invid[8]+=1
            type("Your automaton found water!")
        }else if (outofvars>=60) {
            invid[9]+=1
            type("Your automaton found food!")
        }
    }
    if (num===11) {
        let r=Math.ceil(Math.random()*100)
        if (r<=35) {
            document.getElementById("textbox").innerHTML+="You found a water bottle!"
            invid[8]+=1
            createop("Confirm","supdateGUI3()")
        }else if (35<r&&r<=70) {
            document.getElementById("textbox").innerHTML+="You found some food!"
            invid[9]+=1
            createop("Confirm","supdateGUI3()")
        }else if (70<r&&r<=90) {
            printLetterByLetter("textbox","You went down a trail...and found...nothing!",15)
            createop("Confirm","supdateGUI3()")
        }else if (r>90) {
            printLetterByLetter("textbox","You went down a trail...and a Zombie attacked you!",15)
            createop("Confirm","battle(5)")
        }
    }
}

function bellytick() {
    hunger-=Math.ceil(Math.random()*10)
        if (hunger<25) {
            stats[0][1]-=5;
            if (hunger<0) {
                hunger=0
            }
        }thirst-=Math.ceil(Math.random()*10)
        if (thirst<25) {
            stats[0][1]-=5;
            if (thirst<0) {
                thirst=0
            }
        }
}