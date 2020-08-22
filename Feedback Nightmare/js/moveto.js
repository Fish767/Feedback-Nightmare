function moveto(num1,num2) {
    let u=movementoptions[num1][num2]
    if (u==="Left") {
        switch(num1) {
            case 0:
                room=1;
                break;
            case 1:
                room=2;
                pauseAudio()
                playingsound=false
                break;
            case 4:
                room=6;
                break;
            case 11:
                room=12;
                break;
        }
    }else if (u==="Right") {
        switch(num1) {
            case 4:
                room=5;
                break;
            case 11:
                room=13;
                break;
        }
    }else if (u==="Forward") {
        switch(num1) {
            case 5:
                room=7;
                pausetech();
                break;
        }
    }else if (u==="Backward") {
        switch(num1) {
            case 5:
                room=4;
                break;
            case 6:
                room=4;
                break;
            case 12:
                room=11;
                break;
            case 13:
                room=11;
                break;
        }
    }else if (u==="Explore") {
        switch(num1) {
            case 2:
                explore(2)
                break;
            case 3:
                explore(3)
                break;
            case 11:
                explore(11)
                break;
            case 12:
                explore(11)
                break;
            case 13:
                explore(13)
                break;
            case 17:
                explore(17)
                break;
            case 20:
                type("You arrive at a junction in the cave. There are seven different halls of various sizes. Only five look large enough to walk in.<br><br>Aster pipes up, \"We can split up if you want. Or I can stay with you. Your choice.\"<br><br>What do you want to do?")
                createop("Split up","cave(0)")
                createop("Go together","cave(1)")
                break;
            case 21:
                explore(21)
                break;
            case 22:
                explore(21)
                break;
            case 23:
                explore(23)
                break;
            case 24:
                explore(24)
                break;
        }
    }else if (u==="Frontdoor") {
        switch(num1) {
            case 7:
                stop=true;
                textnum=0;
                room=8;
                prestige=3;
                pauseall();
                break;
        }
    }else if (u==="Backdoor") {
        switch(num1) {
            case 7:
                stop=true;
                textnum=0;
                prestige=1;
                room=0;
                lifesavingvariable=false;
                pauseall();
                playingsound=false;
                break;
        }
    }else if (u==="Scavenge") {
        bellytick()
        switch(num1) {
            case 11:
                scavenge(11);
                break;
            case 12:
                scavenge(11);
                break;
            case 13:
                scavenge(11);
                break;
            case 17:
                scavenge(11);
                break;
        }
    }else if (u==="Leave") {
        pauseall()
        switch(num1) {
            case 14:
                room=13
                break;
            case 15:
                room=13
                break;
            case 18:
                room=17
                break;
        }
    }else if (u==="General Store") {
        switch(num1) {
            case 14:
                shop(0)
                break;
        }
    }else if (u==="Blacksmith") {
        switch(num1) {
            case 14:
                shop(1)
                break;
        }
    }else if (u==="Leftmost Passage") {
        switch(num1) {
            case 15:
                type("You see a mural of two huge serphants fighting. One is black with red an orange diamonds running down its back. It has huge green horns. The other is white and has the same markings and horns. Their bodies are interlocked and each is hissing at the other.<br><br>You get the feeling that this is very important.")
                createop("Go back","updateGUI3()")
                break;
         }
    }else if (u==="Middle Passage") {
        switch(num1) {
            case 15:
                type("You see a mural of the sun and the moon fighting. Neither seems to be able to overcome the other.<br><br>You get the feeling that this is very important.")
                createop("Go back","updateGUI3()")
                break;
       }
    }else if (u==="Rightmost Passage") {
        switch(num1) {
            case 15:
                type("You see a mural of a person fighting his shadow. Both are dripping blood. The text on this mural reads, \"Man cannot overcome their own shadow. Any who does is simply not a man. The shadow is the very essence of human conscious. it sees what the mind can't and holds the knowledge that the mind can't. Only those who have killed their shadow will see this and only they can rescue the world from doom.\"<br><br>You get the feeling that this is very important.")
                createop("Go back","updateGUI3()")
                break;
       }
    }else if (u==="Library") {
        switch(num1) {
            case 14:
                library()
                break;
            case 18:
                library()
                break;
        }
    }else if (u==="Fly off Gerlund") {
        room=17;
        pauseall();
        playingsound=false;
    }else if (u==="Crossroad") {
        switch(num1) {
            case 23:
                type("You arrive at a fork in the road. There are many paths you can go, but for now the only open path is towards the cave full of bats.")
                createop("Go to the cave.","room=24;pauseall();playingsound===false;supdateGUI3();")
                createop("Cancel","supdateGUI3();")
                break;
        }
    }
    if (u!=="Explore"&&u!=="Scavenge"&&u!=="General Store"&&u!=="Blacksmith"&&u!=="Leftmost Passage"&&u!=="Middle Passage"&&u!=="Rightmost Passage"&&u!=="Library"&&u!=="Crossroad") {
        updateGUI3()
    }
}