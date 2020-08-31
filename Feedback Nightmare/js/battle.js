function battle(num) {
    stop=true
    document.getElementById("body").innerHTML="<div class=\"toprow\"><div id=\"enemyname\">"+enemies[num].name+"</div><div id=\"enemypicture\"></div><div id=\"statsbox\"></div></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    if (battlechk!==false) {
        fillpic(num)
    }
    var neccessary=enemies[num]
    if (battlechk===false) {
        spriteidentifier=Math.floor(Math.random()*3+1)
        fillpic(num)
        battlechk=num
        temphealth=neccessary.health
        expcheckerthing=0
        itemcheckerthing=false
        dronecalc()
    }else if (temphealth<=0) {
        win(num)
        clearInterval(imageprogressioncode);
    }else if (stats[0][1]<=0) {
        lose(num)
        clearInterval(imageprogressioncode);
    }
    if (battlechk!==false) {
        document.getElementById("statsbox").innerHTML="<div>"+"Enemy Health: "+temphealth+"</div>"
        for (let y=0; y<stats.length-1; y++) {
            if (y!==0&&y!==4) {
                document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"</div>"
            }else if (y===0) {
                document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"/"+stats[5][0]+"</div>"
            }else if (y===4) {
                document.getElementById("statsbox").innerHTML+="<div>"+stats[y][0]+stats[y][1]+"/"+stats[5][1]+"</div>"
            }
        }
        createop("Fight","clearInterval(imageprogressioncode);attack("+num+")")
        createop("Extract Lifeforce","clearInterval(imageprogressioncode);friend("+num+")")
        createop("Run","clearInterval(imageprogressioncode);run("+num+")")
        createop("Invintory","clearInterval(imageprogressioncode);inventory()")
    }
}

function win(num) {
    money+=Math.ceil(Math.random()*enemies[num].defense+10)
    stats[4][1]+=Math.ceil(Math.random()*enemies[num].health)
    if (enemies[num].name==="The Man") {
        room=16;
        pauseall()
        invid[14]-=1
        librarycard=false
        return updateGUI3()
    }
    if (num===3||num===4) {
        if (num===3||(num===4&&room<4&&librarycard===false)) {
            room=4;
        }
        bb1=false
        pauseall()
        inioption=false
        invchck=false
    }
    type("You won!")
    if (enemies[num].drops!==false) {
        document.getElementById("body").innerHTML+="<div id=\"itemdropbox\" class=\"textbox\"></div>"
        let r=Math.ceil(Math.random()*100)
        if (num===3) {
            if (invid[4]!==1) {
                invid[4]+=1
                printLetterByLetter("itemdropbox","<br>The "+enemies[num].name+" dropped a "+enemies[num].drops.name+"!"+itemcheckerthing,15)
            }
        }else if (enemies[num].drops.chance>=r) {
            invid[enemies[num].drops.id]+=1
            printLetterByLetter("itemdropbox","<br>The "+enemies[num].name+" dropped a "+enemies[num].drops.name+"!"+itemcheckerthing,15)
        }else {
            printLetterByLetter("itemdropbox","<br>"+itemcheckerthing,15)
        }
    }else {
        printLetterByLetter("itemdropbox","<br>"+itemcheckerthing,15)
    }
    if (stats[4][1]>=stats[5][1]) {
        levelup()
    }
    battlechk=false
    createop("Confirm","supdateGUI3()")
}

function lose(num) {
    battlechk=false
    if (num===3||num===4) {
        bb1=false
        pauseall()
        inioption=false
        invchck=false
    }
    if (!enemies[num].type.includes("Boss")||enemies[num].name==="The Man") {
        man=false
        gameOver()
    }else {
        type("You lost! :'(")
        document.getElementById("body").innerHTML+="<div id=\"itemdropbox\" class=\"textbox\"></div>"
        printLetterByLetter("itemdropbox","<br>"+itemcheckerthing,15)
        createop("Try Again","heal(0)")
    }
}

function levelup() {
    addtext("You leveled up!")
        stats[5][2]+=1
        if (abilities[ability]&&stats[5][2]>=abilities[ability].unlock) {
            ability++;
            addtext("You gained the "+abilities[ability-1].name+" ability!")
        }
        for (let t=1; t<4; t++) {
            let r=Math.ceil(Math.random()*100)
            if (r<=30) {
                stats[t][1]+=1;
            }else if (r>30&&r<=60) {
                stats[t][1]+=2;
            }else if (r>60&&r<=85) {
                stats[t][1]+=3;
            }else if (r>85&&r<=95) {
                stats[t][1]+=4;
            }else if (r>95&&r<=100) {
                stats[t][1]+=5;
            }
        }
        stats[4][1]-=stats[5][1]
        stats[5][1]+=100
}

function gameOver() {
    document.getElementById("body").innerHTML="<div id=\"deathbox\"></div><div id=\"itemdropbox\" class=\"textbox\"></div>"
    printLetterByLetter("deathbox","Game Over",15)
    printLetterByLetter("itemdropbox","<br>"+itemcheckerthing,15)
    document.getElementById("body").innerHTML+="<div class=\"option-container2\"><button class=\"option\" onclick=\"restart()\">Continue</button></div>"
}

function dronecalc() {
    for (let ghijoe=0; ghijoe<drones[0]; ghijoe++) {
        money+=Math.ceil(Math.random()*neccessary.defense/5+10)
        if (neccessary.drops!==false) {
            let rad=Math.ceil(Math.random()*100)
            if (neccessary.drops.chance/2>=rad) {
                invid[neccessary.drops.id]+=1
                if (itemcheckerthing===false) {
                    itemcheckerthing=[]
                }
                itemcheckerthing.push(0)
                itemcheckerthing[itemcheckerthing.length-1]=neccessary.drops.name
            }
        }
        let rad=Math.ceil(Math.random()*neccessary.health/10+10)
        expcheckerthing+=rad
        stats[4][1]+=expcheckerthing
    }
    let pqrsm=itemcheckerthing
    itemcheckerthing=""
    for (let ghijoe=0; ghijoe<pqrsm.length; ghijoe++) {
        if (ghijoe===0) {
            itemcheckerthing=" You also got "+pqrsm[ghijoe]
        }else if (ghijoe!==pqrsm.length-1) {
            itemcheckerthing+=", "+pqrsm[ghijoe]
        }else if (pqrsm.length>2) {
            itemcheckerthing+=", and "+pqrsm[ghijoe]+"!"
        }else {
            itemcheckerthing+=" and "+pqrsm[ghijoe]+"!"
        }
    }
}
var imagechk=true;
function fillpic(num) {
    imageprog=1;
    if (num===1) {
        imageprogressioncode=setInterval(() => {
            var img = document.createElement("img");
            img.src = "Sprites/"+enemies[num].name+"/"+enemies[num].name+imageprog+".png";
            img.alt = enemies[num].name;
            img.id = "img"
            document.getElementById("enemypicture").innerHTML=""
            document.getElementById("enemypicture").appendChild(img)
            if (imagechk) {
                imageprog+=1
                if (imageprog>=6) {
                    imageprog=6
                    imagechk=false
                }
            }else {
                imageprog-=1;
                if (imageprog<=1) {
                    imageprog=1
                    imagechk=true
                }
            }
        }, 50);
    }else if (num===0) {
        imageprogressioncode=setInterval(() => {
            var img = document.createElement("img");
            img.src = "Sprites/"+enemies[num].name+"/"+spriteidentifier+enemies[num].name+imageprog+".png";
            img.alt = enemies[num].name;
            img.id="img"
            document.getElementById("enemypicture").innerHTML=""
            document.getElementById("enemypicture").appendChild(img)
            if (imageprog>=2) {
                imageprog=1;
            }else {
                imageprog=2;
            }
        }, 500);
    }
}

var spriteidentifier=1;
var imageprog=1,
imageprogressioncode;