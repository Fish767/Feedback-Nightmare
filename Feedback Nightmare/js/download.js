const { ipcRenderer } = require("electron")

var input;

function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}

function getdownloadinfo() {
    let idstring=""
    let roomstring=""
    let resourcestring=""
    let dronestring=""
    let craftstring=""
    let aprogstring=""
    for (let i=0; i<invid.length; i++) {
        if (i===0) {
            idstring+="["+invid[i]+""
        }else  {
            idstring+=","+invid[i]+""
        }
        if(i===invid.length-1) {
            idstring+="]"
        }
    }
    for (let i=0; i<roomprog.length; i++) {
        let roomstringtemp=roomprog[i][0]
        if (i===0) {
            roomstring+="[["+roomstringtemp+"]"
        }else {
            roomstring+=",["+roomstringtemp+"]"
        }
        if(i===roomprog.length-1) {
            roomstring+="]"
        }
    }
    for (let i=0; i<aprog.length; i++) {
        let aprogtempstring=aprog[i][0]
        if (i===0) {
            aprogstring+="[["+aprogtempstring+"]"
        }else {
            aprogstring+=",["+aprogtempstring+"]"
        }
        if(i===aprog.length-1) {
            aprogstring+="]"
        }
    }
    if (invid.length===0) {
        idstring+="[]"
    }
    for (let i=0; i<resourcesarray.length; i++) {
        if (i===0) {
            resourcestring+="["+resourcesarray[i]
        }else {
            resourcestring+=","+resourcesarray[i]
        }
        if(i===resourcesarray.length-1) {
            resourcestring+="]"
        }
    }
    if (resourcesarray.length===0) {
        resourcestring+="[]"
    }
    for (let i=0; i<drones.length; i++) {
        if (i===0) {
            dronestring+="["+drones[i]
        }else {
            dronestring+=","+drones[i]
        }
        if(i===drones.length-1) {
            dronestring+="]"
        }
    }
    if (drones.length===0) {
        dronestring+="[]"
    }
    for (let i=0; i<crafts.length; i++) {
        if (i===0) {
            craftstring+="["+crafts[i]
        }else {
            craftstring+=","+crafts[i]
        }
        if(i===crafts.length-1) {
            craftstring+="]"
        }
    }
    if (crafts.length===0) {
        craftstring+="[]"
    }
    let yeahiamgonnamakethisnamereallylongfornoreason="playername="+"'"+playername+"'"+";mute="+mute+";aprog="+aprogstring+";Aster="+Aster+";man="+man+";drones="+dronestring+";crafts="+craftstring+";storevolume="+storevolume+";resourcesarray="+resourcestring+";prestige="+prestige+";librarycard="+librarycard+";town1="+town1+";money="+money+";town="+town+";temple="+temple+";feet="+feet+";helmet="+helmet+";weapon="+weapon+";ability="+ability+";upperbody="+upperbody+";lowerbody="+lowerbody+";invid="+idstring+";lifesavingvariable="+lifesavingvariable+";room="+room+";roomprog="+roomstring+";textnum="+textnum+";hunger="+hunger+";thirst="+thirst+";stats=[['Health: ',"+stats[0][1]+"],['Attack: ',"+stats[1][1]+"],['Defense: ',"+stats[2][1]+"],['Speed: ', "+stats[3][1]+"],['Exp: ',"+stats[4][1]+"],["+stats[5][0]+","+stats[5][1]+","+stats[5][2]+"]];"
    let r=playername+" Lv."+stats[5][2]
    let vor=document.getElementById('input').value
    if (vor!=="") {
        r=vor
    }
    download(yeahiamgonnamakethisnamereallylongfornoreason,r+'.svfl','text/plain')
}

var downloadscreenv=false;
var clearscreenv=false;

function downloadmenu(arg) {
    downloadscreenv=true;
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\">Download Screen Placeholder Message<br><br>If you see this, name your save. Only works for the downloadable file. Please wait for a message to say it is done.</div><div id=\"inputfieldarea\"></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
            document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
        }
    if (mainboolean) {
        addtext("<br><br>Save Slot 1 - ")
        addtext(savename1+"<br><br>Save Slot 2 - ")
        addtext(savename2+"<br><br>Save Slot 3 - ")
        addtext(savename3+"<br><br>Save Slot 4 - ")
        addtext(savename4+"<br><br>Save Slot 5 - ")
        addtext(savename5)
        if (arg===true) {
            addtext("<br><br>Done editing Save File.")
        }
        createop("Save Slot 1","stingying=1;downloadmenu();savething('ss1')")
        createop("Save Slot 2","stingying=2;downloadmenu();savething('ss2')")
        createop("Save Slot 3","stingying=3;downloadmenu();savething('ss3')")
        createop("Save Slot 4","stingying=4;downloadmenu();savething('ss4')")
        createop("Save Slot 5","stingying=5;downloadmenu();savething('ss5')")
        createop("Delete Saves","downloadscreenv=false;clearscreen()")
    }
    input=document.createElement("INPUT");
    input.setAttribute("type","text");
    input.autofocus=true;
    input.id="input"
    createop("Download","getdownloadinfo()")
    createop("Menu","downloadscreenv=false;loopthis='temp';loopmenu()")
    document.getElementById("inputfieldarea").appendChild(input)
}

function clearscreen(arg) {
    clearscreenv=true;
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\">This will permanently delete your save. Wait for a message saying it is done.</div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    addtext("<br><br>Save Slot 1 - ")
    addtext(savename1+"<br><br>Save Slot 2 - ")
    addtext(savename2+"<br><br>Save Slot 3 - ")
    addtext(savename3+"<br><br>Save Slot 4 - ")
    addtext(savename4+"<br><br>Save Slot 5 - ")
    addtext(savename5)
    if (arg===true) {
        addtext("<br><br>Done editing Save File.")
    }
    createop("Delete Slot 1","stingying=1;clearscreen();clearthing('ss1')")
    createop("Delete Slot 2","stingying=2;clearscreen();clearthing('ss2')")
    createop("Delete Slot 3","stingying=3;clearscreen();clearthing('ss3')")
    createop("Delete Slot 4","stingying=4;clearscreen();clearthing('ss4')")
    createop("Delete Slot 5","stingying=5;clearscreen();clearthing('ss5')")
    createop("Save Game","clearscreenv=false;downloadmenu()")
    createop("Menu","clearscreenv=false;loopthis='temp';loopmenu()")
}

ipcRenderer.on("Done",(event, arg)=>{
    if (clearscreenv===true) {
        clearscreen(true)
    }else if (downloadscreenv===true) {
        downloadmenu(true)
    }
})

var stingying;

ipcRenderer.on("newname",(event, arg)=>{
    switch (stingying) {
        case 1: {
            if (arg==="undefined Lv. undefined") {
                savename1="Empty"
            }else {
                savename1=arg
            }
            break;
        }
        case 2: {
            if (arg==="undefined Lv. undefined") {
                savename2="Empty"
            }else {
                savename2=arg
            }
            break;
        }
        case 3: {
            if (arg==="undefined Lv. undefined") {
                savename3="Empty"
            }else {
                savename3=arg
            }
            break;
        }
        case 4: {
            if (arg==="undefined Lv. undefined") {
                savename4="Empty"
            }else {
                savename4=arg
            }
            break;
        }
        case 5: {
            if (arg==="undefined Lv. undefined") {
                savename5="Empty"
            }else {
                savename5=arg
            }
            break;
        }
    }
})

function clearthing(string) {
    ipcRenderer.send("savespot",string)
    ipcRenderer.send("clearthing","")
}

function saveproccess(num) {
    let idstring=""
    let roomstring=""
    let resourcestring=""
    let dronestring=""
    let craftstring=""
    let aprogstring=""
    for (let i=0; i<invid.length; i++) {
        if (i===0) {
            idstring+="["+invid[i]+""
        }else  {
            idstring+=","+invid[i]+""
        }
        if(i===invid.length-1) {
            idstring+="]"
        }
    }
    for (let i=0; i<roomprog.length; i++) {
        let roomstringtemp=roomprog[i][0]
        if (i===0) {
            roomstring+="[["+roomstringtemp+"]"
        }else {
            roomstring+=",["+roomstringtemp+"]"
        }
        if(i===roomprog.length-1) {
            roomstring+="]"
        }
    }
    if (roomprog.length===0) {
        roomstring="[]"
    }
    for (let i=0; i<aprog.length; i++) {
        let aprogtempstring=aprog[i][0]
        if (i===0) {
            aprogstring+="[["+aprogtempstring+"]"
        }else {
            aprogstring+=",["+aprogtempstring+"]"
        }
        if(i===aprog.length-1) {
            aprogstring+="]"
        }
    }
    if (aprog.length===0) {
        aprogstring="[]"
    }
    if (invid.length===0) {
        idstring+="[]"
    }
    for (let i=0; i<resourcesarray.length; i++) {
        if (i===0) {
            resourcestring+="["+resourcesarray[i]
        }else {
            resourcestring+=","+resourcesarray[i]
        }
        if(i===resourcesarray.length-1) {
            resourcestring+="]"
        }
    }
    if (resourcesarray.length===0) {
        resourcestring+="[]"
    }
    for (let i=0; i<drones.length; i++) {
        if (i===0) {
            dronestring+="["+drones[i]
        }else {
            dronestring+=","+drones[i]
        }
        if(i===drones.length-1) {
            dronestring+="]"
        }
    }
    if (drones.length===0) {
        dronestring+="[]"
    }
    for (let i=0; i<crafts.length; i++) {
        if (i===0) {
            craftstring+="["+crafts[i]
        }else {
            craftstring+=","+crafts[i]
        }
        if(i===crafts.length-1) {
            craftstring+="]"
        }
    }
    if (crafts.length===0) {
        craftstring+="[]"
    }
    let yeahiamgonnamakethisnamereallylongfornoreason="playername="+"'"+playername+"'"+";mute="+mute+";aprog="+aprogstring+";Aster="+Aster+";man="+man+";drones="+dronestring+";crafts="+craftstring+";storevolume="+storevolume+";resourcesarray="+resourcestring+";prestige="+prestige+";librarycard="+librarycard+";town1="+town1+";money="+money+";town="+town+";temple="+temple+";feet="+feet+";helmet="+helmet+";weapon="+weapon+";ability="+ability+";upperbody="+upperbody+";lowerbody="+lowerbody+";invid="+idstring+";lifesavingvariable="+lifesavingvariable+";room="+room+";roomprog="+roomstring+";textnum="+textnum+";hunger="+hunger+";thirst="+thirst+";stats=[['Health: ',"+stats[0][1]+"],['Attack: ',"+stats[1][1]+"],['Defense: ',"+stats[2][1]+"],['Speed: ', "+stats[3][1]+"],['Exp: ',"+stats[4][1]+"],["+stats[5][0]+","+stats[5][1]+","+stats[5][2]+"]];"
    switch (num) {
        case 2: {
            if (playername===0) {
                savename1="Empty"
            }else {
                savename1=playername+" Lv. "+stats[5][2]
            }
            savetext1=yeahiamgonnamakethisnamereallylongfornoreason;
            break;
        }
        case 3: {
            if (playername===0) {
                savename2="Empty"
            }else {
                savename2=playername+" Lv. "+stats[5][2]
            }
            savetext2=yeahiamgonnamakethisnamereallylongfornoreason;
            break;
        }
        case 4: {
            if (playername===0) {
                savename3="Empty"
            }else {
                savename3=playername+" Lv. "+stats[5][2]
            }
            savetext3=yeahiamgonnamakethisnamereallylongfornoreason;
            break;
        }
        case 5: {
            if (playername===0) {
                savename4="Empty"
            }else {
                savename4=playername+" Lv. "+stats[5][2]
            }
            savetext4=yeahiamgonnamakethisnamereallylongfornoreason;
            break;
        }
        case 6: {
            if (playername===0) {
                savename5="Empty"
            }else {
                savename5=playername+" Lv. "+stats[5][2]
            }
            savetext5=yeahiamgonnamakethisnamereallylongfornoreason;
            break;
        }
    }
    saveload(num)
}

function savething(string) {
    ipcRenderer.send("savespot",string)
    ipcRenderer.send("playername",playername)
    ipcRenderer.send("mute",mute)
    ipcRenderer.send("aprog",aprog)
    ipcRenderer.send("Aster",Aster)
    ipcRenderer.send("man",man)
    ipcRenderer.send("drones",drones)
    ipcRenderer.send("crafts",crafts)
    ipcRenderer.send("storevolume",storevolume)
    ipcRenderer.send("resourcesarray",resourcesarray)
    ipcRenderer.send("prestige",prestige)
    ipcRenderer.send("librarycard",librarycard)
    ipcRenderer.send("town1",town1)
    ipcRenderer.send("money",money)
    ipcRenderer.send("town",town)
    ipcRenderer.send("temple",temple)
    ipcRenderer.send("feet",feet)
    ipcRenderer.send("helmet",helmet)
    ipcRenderer.send("weapon",weapon)
    ipcRenderer.send("ability",ability)
    ipcRenderer.send("upperbody",upperbody)
    ipcRenderer.send("lowerbody",lowerbody)
    ipcRenderer.send("invid",invid)
    ipcRenderer.send("lifesavingvariable",lifesavingvariable)
    ipcRenderer.send("room",room)
    ipcRenderer.send("roomprog",roomprog)
    ipcRenderer.send("textnum",textnum)
    ipcRenderer.send("hunger",hunger)
    ipcRenderer.send("thirst",thirst)
    ipcRenderer.send("stats",stats)
}