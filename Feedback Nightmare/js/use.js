function use(number) {
    let idds=number
    if (battlechk===false) {
        document.getElementById("body").innerHTML=""
        let fforrm=form
        let yon=doEffects(idds)
        if (yon==="yes") {
            invid[number]-=1
        }
        if (idds===4) {
            type(itemeffects[idds])
        }else if (idds!==5&&idds!==6&&items[number].type!=="card") {
            type(itemeffects[idds])
        }else if (fforrm==="Human"&&items[number].type!=="card") {
            type(itemeffects[idds])
        }else if (items[number].type!=="card") {
            type("You can't use this.")
        }else {    
        }
    }else {
        type("Not in a battle.")
    }
    if (idds!==4) {
        createop("Cancel","stop=true;cancel()")
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
                type(itemeffects[idds])
            }else if (idds!==5&&idds!==6) {
                type(itemeffects[idds])
            }else if (fforrm==="Human") {
                type(itemeffects[idds])
            }else {
                type("You can't use this.")
            }
        }
        if (idds!==4&&items[number].type!=="card") {
            createop("Cancel","cancel()")
        }
    }else {
        type("Not in a battle.")
        createop("Cancel","cancel()")
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