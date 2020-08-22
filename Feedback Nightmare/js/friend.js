function dofriend(num11,num12) {
    invid[num11]-=1
    let r=Math.round(Math.random()*100)
    if (r>=(100-enemies[num12].friendable.chance)) {
        battlechk=false;
            let lopsiddedcrown=Math.round(Math.random()*(enemies[num12].friendable.amount-10))+10
            resourcesarray[enemies[num12].friendable.resource]+=lopsiddedcrown
        type("You caught "+enemies[num12].name+"! You gained "+lopsiddedcrown+" Lifeforce!"+itemcheckerthing)
        createop("Continue","cancel()")
    }else {
        type("You failed to catch "+enemies[num12].name+".")
        running=true;
        attack(num12)
    }
}

function friend (num) {
    let canfriend=false
    let whoppsydoopsy=0
    if (invid[enemies[num].friendable.item]>0) {
        canfriend=true
        whoppsydoopsy=enemies[num].friendable.item
    }
    if (enemies[num].friendable.possible===false) {
        type("You can't lure this enemy.")
    }else if (canfriend===true) {
        type("You can try to lure and catch this enemy.")
        createop("Attempt to lure and lose 1 "+items[whoppsydoopsy].name+".","dofriend("+whoppsydoopsy+","+num+")")
    }else {
        type("You don't have the item to lure this enemy.")
    }
        createop("Cancel","battle("+num+")")
}