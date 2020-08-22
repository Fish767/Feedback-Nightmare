function attack(num) {
    let placeholder=enemies[num]
    let outcome=0
    if (running===true) {
        var t=Math.ceil(Math.ceil(Math.random()*5)/stats[2][1]*placeholder.attack)
        stats[0][1]-=t
        addtext("You lost "+t+" health. ")
        createop("Confirm","battle("+num+")")
        running=false
    }else if (stats[3][1]<placeholder.speed) {
        if (Math.ceil(Math.random()*placeholder.speed)<stats[3][1]||chkabil0>0) {
            var u=Math.ceil(Math.ceil(Math.random()*5)*stats[1][1]/placeholder.defense)
            temphealth-=u
            outcome+=1;
            chkabil0=0;
        }else if (ability>=1) {
            chkabil0++;
        }
        if (temphealth>0) {
            var t=Math.ceil(Math.ceil(Math.random()*5)/stats[2][1]*placeholder.attack)
            if (ability>=2) {
                u+=Math.ceil(t/10);
                temphealth-=Math.ceil(t/10)
            }
            stats[0][1]-=t
            outcome+=1
        }
        if (stats[0][1]<=0) {
            outcome=3
            battleresults(outcome,num,u,t)
        }else if (temphealth<=0) {
            outcome=-3
            battleresults(outcome,num,u,t)
        }else {
            battleresults(outcome,num,u,t,)
        }
    }else if (placeholder.speed<stats[3][1]) {
        var u=Math.ceil(Math.ceil(Math.random()*5)*stats[1][1]/placeholder.defense)
        temphealth-=u
        outcome-=1
        if (temphealth>0) {
            if (Math.ceil(Math.random()*stats[3][1])<placeholder.speed) {
                var t=Math.ceil(Math.ceil(Math.random()*5)/stats[2][1]*placeholder.attack)
                if (ability>=2) {
                    u+=Math.ceil(t/10);
                    temphealth-=Math.ceil(t/10)
                }
                stats[0][1]-=t
                outcome-=1;
            }
        }
        if (stats[0][1]<=0) {
            outcome=3
            battleresults(outcome,num,u,t)
        }else if (temphealth<=0) {
            outcome=-3
            battleresults(outcome,num,u,t)
        }else {
            battleresults(outcome,num,u,t,)
        }
    }else {
        if (stats[0][1]<=0) {
            outcome=3
            battleresults(outcome,num,u,t)
        }else if (temphealth<=0) {
            outcome=-3
            battleresults(outcome,num,u,t)
        }else {
            battleresults(outcome,num,u,t,)
        }
    }
    
}