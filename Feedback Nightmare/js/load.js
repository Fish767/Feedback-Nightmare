function load() {
    input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');
        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\"></div><div class=\"option-container\" id=\"oc\"></div>"
            for (let i=1; i<9; i++) {
                document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
            }
            if (mainboolean) {
                addtext("Save Slot 1 - ")
                addtext(savename1+"<br><br>Save Slot 2 - ")
                addtext(savename2+"<br><br>Save Slot 3 - ")
                addtext(savename3+"<br><br>Save Slot 4 - ")
                addtext(savename4+"<br><br>Save Slot 5 - ")
                addtext(savename5)
                createop("Slot 1","loadss(1)")
                createop("Slot 2","loadss(2)")
                createop("Slot 3","loadss(3)")
                createop("Slot 4","loadss(4)")
                createop("Slot 5","loadss(5)")
            }
            createop("Load Save","load()")
            createop("New Game","window.addEventListener('load', init, false);init();menu=false;check();")
            createop("Start",content+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
        }
    }
    input.click();
}



function restart() {
    if (room===(21||22)) {
        heal(0)
    }else if (room<21) {
        stop=true;
        textnum=0;
        prestige=1;
        room=0;
        lifesavingvariable=false;
        pauseall();
        playingsound=false;
        heal("notext")
        hunger=100;
        thirst=100;
        stats[4][1]=Math.floor(stats[4][1]/2);
        if (librarycard===true) {
            librarycard=false
            for (let f=0; f<items.length; f++) {
                if (items[f].name==="Library Card"&&invid[f]>0) {
                    invid[f]=0
                }
            }
        }
    }else {
        stop=true;
        room=23;
        lifesavingvariable=false;
        pauseall();
        playingsound=false;
        heal("notext")
        hunger=100;
        thirst=100;
        stats[4][1]=Math.floor(stats[4][1]/2);
        if (librarycard===true) {
            librarycard=false
            for (let f=0; f<items.length; f++) {
                if (items[f].name==="Library Card"&&invid[f]>0) {
                    invid[f]=0
                }
            }
        }
    }
}