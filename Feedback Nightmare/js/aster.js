function aster() {
    switch (aste) {
        case 1:
            type("That's too bad. I guess I'll just have to kill you then.")
            createop("Confirm","stop=true;aste=2;aster()")
            break;
        case 2:
            type("Aster takes out his sword and before you know it you are looking down at him from above. Looks like you died. You hear him say, \"You shouldn't lie.\" Everything goes black.")
            createop("Confirm","stop=true;aste=4;aster()")
            break;
        case 3:
            type("Wonderful. I'll just follow you then.")
            createop("Confirm","supdateGUI3()")
            Aster=true;
            break;
        case 4:
            restart()
            break;
    }
}



function astertalk () {
    type(atext[room-17][aprog[room-17][0]]);
    for (let i=0; i<aoptions[room-17].length; i++) {
        createop(aoptions[room-17][i],acoptions[room-17][i])
    }
}