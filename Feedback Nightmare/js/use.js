function use(number) {
    if (battlechk===false) {
        document.getElementById("body").innerHTML=""
        let fforrm=form
        let idds=number
        let yon=doEffects(idds)
        if (yon==="yes") {
            invid[number]-=1
        }
        if (idds===4) {
            document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div>"
        }else if (idds!==5&&idds!==6&&items[number].type!=="card") {
            document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div><button class=\"cancel\" onclick=\"cancel()\" id=\"cancel\">Cancel</button>"
        }else if (fforrm==="Human"&&items[number].type!=="card") {
            document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div><button class=\"cancel\" onclick=\"cancel()\" id=\"cancel\">Cancel</button>"
        }else if (items[number].type!=="card") {
            document.getElementById("body").innerHTML+="<div class=textbox>You can't use this.</div><button class=\"cancel\" onclick=\"cancel()\" id=\"cancel\">Cancel</button>"
        }else {    
        }
    }else {
        document.getElementById("body").innerHTML="<div class=textbox>Not in a battle.</div><button class=\"cancel\" onclick=\"cancel()\">Cancel</button>"
    }
}

function buse(number, onum) {
    if (battlechk===false) {
        document.getElementById("body").innerHTML=""
        let fforrm=form
        let idds=number
        for (let i=0; i<onum; i++) {
            let yon=doEffects(idds)
            if (yon==="yes") {
                invid[number]-=1
            }
            if (idds===4) {
                document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div>"
            }else if (idds!==5&&idds!==6) {
                document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div>"
            }else if (fforrm==="Human") {
                document.getElementById("body").innerHTML+="<div class=textbox>"+itemeffects[idds]+"</div>"
            }else {
                document.getElementById("body").innerHTML+="<div class=textbox>You can't use this.</div>"
            }
        }
        if (idds!==4&&items[number].type!=="card") {
            document.getElementById("body").innerHTML+="<button class=\"cancel\" onclick=\"cancel()\" id=\"cancel\">Cancel</button>"
        }
    }else {
        document.getElementById("body").innerHTML="<div class=textbox>Not in a battle.</div><button class=\"cancel\" onclick=\"cancel()\">Cancel</button>"
    }
}

function equip(i) {
    if (items[i].area==="weapon") {
        if (weapon===false) {
            invid[i]-=1;
            weapon=i
            stats[1][1]+=items[i].modifier
        }else {
            invid[weapon]+=1
            stats[1][1]-=items[i].modifier
            invid[i]-=1
            weapon=i
            stats[1][1]+=items[i].modifier
        }
    }
    if (items[i].area==="feet") {
        if (feet===false) {
            invid[i]-=1;
            feet=i
            stats[3][1]+=items[i].modifier
        }else {
            invid[feet]+=1
            stats[3][1]-=items[i].modifier
            invid[i]-=1
            feet=i
            stats[3][1]+=items[i].modifier
        }
    }
    if (items[i].area==="upper body") {
        if (upperbody===false) {
            invid[i]-=1;
            upperbody=i
            stats[2][1]+=items[i].modifier
        }else {
            invid[upperbody]+=1
            stats[2][1]-=items[i].modifier
            invid[i]-=1
            upperbody=i
            stats[2][1]+=items[i].modifier
        }
    }
    if (items[i].area==="lower body") {
        if (lowerbody===false) {
            invid[i]-=1;
            lowerbody=i
            stats[5][0]+=items[i].modifier
        }else {
            invid[lowerbody]+=1
            stats[5][0]-=items[i].modifier
            invid[i]-=1
            lowerbody=i
            stats[5][0]+=items[i].modifier
        }
    }
    if (items[i].area==="helmet") {
        if (helmet===false) {
            invid[i]-=1;
            helmet=i
            stats[2][1]+=items[i].modifier
        }else {
            invid[helmet]+=1
            stats[2][1]-=items[i].modifier
            invid[i]-=1
            helmet=i
            stats[2][1]+=items[i].modifier
        }
    }
    cancel()
}