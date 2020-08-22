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

function downloadmenu() {
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\">Download Screen Placeholder Message<br><br>If you see this, name your save.</div><br><br><br><br><br><br><br><br><div id=\"inputfieldarea\"></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    input=document.createElement("INPUT");
    input.setAttribute("type","text");
    input.autofocus=true;
    input.id="input"
    createop("Download","getdownloadinfo()")
    createop("Back","loopthis='temp';loopmenu()")
    document.getElementById("inputfieldarea").appendChild(input)
}