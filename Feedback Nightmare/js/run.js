function run(num) {
    let r=Math.ceil(Math.random()*100)
     if ((stats[3][1]>enemies[num].speed&&r>=25)||r>=90) {
        battlechk=false
        type("You escaped from "+enemies[num].name+"!")
        createop("Confirm","supdateGUI3()")
    }else {
        if (enemies[num].type.includes("Boss")) {
            type("You cannot run away from this enemy. "+enemies[num].name+" blocks your path! "+enemies[num].name+" attacks you!")
        }else{
            type(enemies[num].name+" blocks your path! "+enemies[num].name+" attacks you!")
        }
        running=true
        attack(num)
    }
}