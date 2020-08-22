function battleresults(num,num2,num3,num4) {
    let placeholder=enemies[num2]
    if (num===0) {
        type("You are evenly matched with "+placeholder.name+"! Try running away.")
    }else if (num===1) {
        type("Your attack missed.<br><br>The "+enemies[num2].name+" attacked. You lost "+num4+" health.")
    }else if (num===2) {
        type("You attacked the "+enemies[num2].name+". It lost "+num3+" health.<br><br>The "+enemies[num2].name+" attacked. You lost "+num4+" health.")
    }else if (num===-1) {
        type("You attacked the "+enemies[num2].name+". It lost "+num3+" health.<br><br>The "+enemies[num2].name+" attacked. You artfully avoided the attack.")
    }else if (num===-2) {
        type("You attacked the "+enemies[num2].name+". It lost "+num3+" health.<br><br>The "+enemies[num2].name+" attacked. You lost "+num4+" health.")
    }else if (num===3) {
        type("The "+enemies[num2].name+" attacked. You were unable to withstand the attack.")
    }else if (num===-3) {
        type("You attacked the "+enemies[num2].name+". It writhes in pain. In a flash it turns into a pile of ash!")
    }
    createop("Confirm","battle("+num2+")")
}