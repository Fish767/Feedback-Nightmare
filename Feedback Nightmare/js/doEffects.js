function doEffects(number) {
    if (number===0) {
        stats[1][1]+=2
        return "yes";
    }else if (number===1) {
        stats[3][1]+=2
        return "yes";
    }else if (number===2) {
        return "no";
    }else if (number===3) {
        itemeffects[3]="Your experience went up by "+stats[5][1]/10+"!"
        stats[4][1]+=stats[5][1]/10
        if (stats[4][1]>=stats[5][1]) {
            levelup()
        }
        return "yes"
    }else if (number===4) {
        type("Your Shadow rises against you!")
        createop("Fight","pauseall();enemies[4].defense=stats[1][1];enemies[4].attack=stats[2][1];enemies[4].health=stats[5][0];enemies[4].level=stats[5][2];enemies[4].speed=stats[3][1]+1;bb1=true;battle(4);")
        return "no"
    }else if (number===5) {
        if (form==="Human") {
            stats[5][0]+=50
            stats[1][1]+=10
            stats[2][1]+=10
            stats[3][1]-=3
            form="Razulk"
            return "yes"
        }else {
            return "no"
        }
    }else if (number===6) {
        if (form==="Human") {
            stats[5][0]+=20
            stats[1][1]+=15
            stats[3][1]+=10
            form="Bird"
            return "yes"
        }else {
            return "no"
        }
    }else if (number===7) {
        stats[2][1]+=1
        return "yes"
    }else if (number===8) {
        thirst+=30;
        if(thirst>100) {
            thirst=100
        }
        invid[16]+=1
        return "yes"
    }else if (number===9) {
        hunger+=30;
        if(hunger>100) {
            hunger=100
        }
        return "yes"
    }else if (number===10) {
        stats[2][1]+=2
        return "yes"
    }else if (number===14||number===15) {
        room=items[number].roomnum
        librarycard=false
        inioption=false
        invchck=false
        pauseall()
        library()
        return "yes"
    }else if (number===16) {
        return "no"
    }else if (number===17) {
        resourcesarray[0]+=80
        return "yes"
    }
}