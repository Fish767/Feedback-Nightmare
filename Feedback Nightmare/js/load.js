function load() {
    input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');
        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            document.getElementById("option-container").innerHTML="<div id=\"o1\" class=\"option\" onclick=\"load()\">Load Save</div><div id=\"o2\" class=\"option\" onclick=\""+content+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();\">Start</div><div id=\"o3\" class=\"option\" onclick=\"window.addEventListener('load', init, false);init();menu=false;check();\">New Game</div>"
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