function loopmenu () {
    if (loopthis===true) {
        /*"<div id=\"backgroundbox\"></div>"*/
        document.getElementById("body").innerHTML="<div id=\"atrib\" class=\"atrib\"></div><div class=\"option-container\" id=\"oc\"></div>"
        for (let i=1; i<9; i++) {
            document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
        document.getElementById("atrib").innerHTML="Feedback: Nightmare"
        createop("Load Save","load()")
        createop("New Game","window.addEventListener('load', init, false);init();menu=false;check();")
        loopthis=false
    }else if (loopthis==="temp") {
        document.getElementById("body").innerHTML="<div id=\"atrib\" class=\"atrib\"></div><div class=\"option-container\" id=\"oc\"></div>"
        for (let i=1; i<9; i++) {
            document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
        document.getElementById("atrib").innerHTML="Music by Eric Matyas<br>www.soundimage.org<br><br><br>Art by Dillysim9"
        createop("Hint","hint()")
        createop("Options","optionss()")
        createop("Download Save","downloadmenu()")
        createop("Quit","javascript:window.close('','_parent','');")
        createop("Back","menu=false;check();")
        loopthis=false
    }
}

function looploop () {
    if (bb1===true) {
        if (playingsound===false) {
            songtime=Date.now()
            playb1()
            playingsound=true
        }else if (Date.now()-songtime>=44) {
            playingsound=false
        }
    }else if (menu===true) {
        loopmenu()
    }else if (prestige===1) {
        loop2()
    }else if (prestige===2) {
        loop3()
        if (room<2) {
            if (playingsound===false) {
                songtime=Date.now()
                playAudio()
                playingsound=true
            }else if (Date.now()-songtime>=71) {
                playingsound=false
            }
        }else if (room===2||room===16) {
            if (playingsound===false&&bb1!==true) {
                songtime=Date.now()
                playca()
                playingsound=true
            }else if (Date.now()-songtime>=38&&bb1!==true) {
                playingsound=false
            }else if (Date.now()-songtime>=45) {
                playingsound=false
            }else if (playingsound===false){
                songtime=Date.now()
                playb1()
                playingsound=true
            }
        }else if (room===4||room===5||room===6) {
            if (playingsound===false) {
                songtime=Date.now()
                playtech()
                playingsound=true
            }else if (Date.now()-songtime>=92) {
                playingsound=false
            }
        }else if (room===7) {
            if (playingsound===false) {
                songtime=Date.now()
                playfold()
                playingsound=true
            }else if (Date.now()-songtime>=155) {
                playingsound=false
            }
        }else if (room>10&&room<=13) {
            if (playingsound===false) {
                songtime=Date.now()
                playzl()
                playingsound=true
            }else if (Date.now()-songtime>=51) {
                playingsound=false
            }
        }else if (room===14||room===18||room===23) {
            if (playingsound===false) {
                songtime=Date.now()
                playtm()
                playingsound=true
            }else if (Date.now()-songtime>=64) {
                playingsound=false
            }
        }else if (room===15) {
            if (playingsound===false) {
                songtime=Date.now()
                playtem()
                playingsound=true
            }else if (Date.now()-songtime>=66) {
                playingsound=false
            }
        }else if (room===17) {
            if (playingsound===false) {
                songtime=Date.now()
                playc2m()
                playingsound=true
            }else if (Date.now()-songtime>=96) {
                playingsound=false
            }
        }else if (room===19||room===20||room===21||room===22||room===24) {
            if (playingsound===false) {
                songtime=Date.now()
                plays12()
                playingsound=true
            }else if (Date.now()-songtime>=34) {
                playingsound=false
            }
        }
    }else if (prestige===3) {
        loop4()
    }else if (prestige===4) {
        if (room===8||room===9||room===10) {
            if (playingsound===false) {
                songtime=Date.now()
                playpz1()
                playingsound=true
            }else if (Date.now()-songtime>=116) {
                playingsound=false
            }
        }
    }
    
}

setInterval(looploop,17)



function optionss() {
    if (shipsound.volume===0) {
        var gather="Unmute"
    }else {
        var gather="Mute"
    }
    document.getElementById("body").innerHTML="<div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    createop("Volume","volumemenu();")
    createop(gather,"musictogg();optionss();")
    createop("Back","loopthis='temp';loopmenu();")
}

function volumemenu() {
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\">Enter a volume form 0 to 100.</div><br><br><br><br><br><br><br><br><div id=\"inputfieldarea\"></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    input=document.createElement("INPUT");
    input.setAttribute("type","text");
    input.autofocus=true;
    input.id="input"
    document.getElementById("inputfieldarea").appendChild(input)
    createop("Submit","musicadjust(parseFloat("+document.getElementById('input').value+"));")
    createop("Back","optionss()")
}