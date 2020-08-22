function heal(num) {
    if (num===0||num==="notext") {
        stats[0][1]=stats[5][0]
    }
    if (room>=11&&room<=13) {
        hunger-=Math.ceil(Math.random()*20)
        thirst-=Math.ceil(Math.random()*20)
        if (hunger<0) {
            hunger=0;
        }
        if (thirst<0) {
            thirst=0;
        }
        if (Math.ceil(Math.random()*100)<=30) {
            type("A Zombie attacked you in your sleep!")
            stats[0][1]-=Math.ceil(stats[5][0]/(Math.random()*8+4))
            createop("Confirm","battle(5)")
        }else {
            type("Your wounds are fully healed. You wonder how they healed so quickly and what it means for you.")
            createop("Confirm","supdateGUI3()")
        }
    }else if (room===21||room===22) {
        hunger-=Math.ceil(Math.random()*20)
        thirst-=Math.ceil(Math.random()*20)
        if (hunger<0) {
            hunger=0;
        }
        if (thirst<0) {
            thirst=0;
        }
        if (Math.ceil(Math.random()*100)<=50) {
            type("A Bat attacked you in your sleep!")
            stats[0][1]-=Math.ceil(stats[5][0]/(Math.random()*8+4))
            createop("Confirm","battle(1)")
        }else if (Math.ceil(Math.random()*100)<=70) {
            type("A Large Bat attacked you in your sleep!")
            stats[0][1]-=Math.ceil(stats[5][0]/(Math.random()*8+4))
            createop("Confirm","battle(10)")
        }else {
            type("Your wounds are fully healed. You wonder how they healed so quickly and what it means for you.")
            createop("Confirm","supdateGUI3()")
        }
    }else if (num!=="notext") {
        type("Your wounds are fully healed. You wonder how they healed so quickly and what it means for you.")
        createop("Confirm","supdateGUI3()")
    }
}