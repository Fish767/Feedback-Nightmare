function ftt(n) {
    switch (n) {
        case 0:
            supdateGUI3();
            break;
        case 1:
            type("\"I'm Aster.\"");
            createop("Ok", "ftt(0)")
            createop("Where did you come from?", "ftt(2)")
            createop("What's in your hands?", "ftt(3)")
            break;
        case 2:
            type("\"Nevermind that,\" he answers with a lopsidded smile.");
            createop("Ok...", "ftt(0)")
            createop("Who are you?", "ftt(1)")
            createop("What's in your hands?", "ftt(3)")
            break;
        case 3:
            type("\"Just my sword. I've had it since before I can remember,\" he says while looking up at the sky. \"It's been passed down my family for generations. The blade was pure white a long time ago, but it has been stained red by the blood of my foes. The same can be said of my cloak. So, what about you? What's your story?\"<br><br>You tell him everything that's happened so far. He stares at the sand the entire time you are talking. When you finish he looks up at you and says, \"Wow, that's quite a long story. How about I help you escape from here? It's the least I can do for you. After all, you are the first pure person I have met in a long time. I know a cave nearby that might be useful to you. Come on, I'll take you there.\"<br><br>You set off for the cave with Aster, not knowing what lies ahead.");
            room=19;
            createop("Confirm","ftt(0);pauseall();playingsound=false;")
            break;
    }
}

aoptions=[["Hey!","Who are you?","Where did you come from?","What's in your hand?"],[],[],["Ok"],["Cancel"],["Ok"],["Cancel"],["Cancel"]];
acoptions=[["ftt(0)","ftt(1)","ftt(2)","ftt(3)"],[],[],["ftt(0)"],["supdateGUI3()"],["ftt(0)"],["ftt(0)"],["ftt(0)"]];
atext=[["Hi!"],[],[],["Don't mind me, I'm following you."],["There is no one to talk to."],["I think we should fight some bats and then go toward the light."],["This hasn't been added yet."],["This hasn't been added yet."]]


function type(message) {
    stop=true;
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\"></div><div id=\"oc\" class=\"option-container\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    printLetterByLetter("textbox", message, 15)
}

function createop(text, program) {
    for (let i=1; i<9; i++) {
        if (!document.getElementById("o"+i).classList.contains("filled")) {
            document.getElementById("o"+i).classList.add("filled")
            document.getElementById("o"+i).innerText=text
            document.getElementById("o"+i).addEventListener("click", ()=> {program})
            i=9
        }
    }
}

function addtext(message) {
    document.getElementById("textbox").innerHTML+=message
}

function cave(n) {
    switch (n) {
        case 0:
            type("\"Ok. I'll got this way. You go that way. Let's meet back up here once we're done,\" Aster says, gesturing for you to go in the rightmost entrance and him to go in the leftmost area.")
            createop("Go forward", "cave(2)")
            break;
        case 1:
            type("\"Which way should we go?\"<br><br>Which path do you follow?")
            createop("Path 1", "cave(3)")
            createop("Path 2", "cave(4)")
            createop("Path 3", "cave(5)")
            createop("Path 4", "cave(5)")
            createop("Path 5", "cave(6)")
            break;
        case 2:
            type("You walk forward, parting ways with Aster for the moment. The path ahead of you is damp and extremely dark. Barely able to see the ground you stumble through the rough terrain. Eventually you find a wall and reach a hand out to brace yourself. Immediately you notice that the wall is extremely wet and very slippery. With all your weight on that hand you start to fall uncontrollably. It becomes aparant after a few moments that you are falling down some kind of hole. Luckily enough you hit the equivalent to a water slide before too long, although you can feel a sharp pain running through your arm. You barely manage to keep a hold on your ax.<br><br>You slide for a few minutes more and finally end up in a large chamber.")
            createop("Continue", "room=21;stats[0][1]=1;supdateGUI3();")
            break;
        case 3:
            type("You walk in front of Aster and do your best to follow the dimly lit path before you. The ground is wet and very slippery, forcing you to place a hand against the wall for support.<br><br>You walk along the long winding path for some time until you reach the exit. The room you end up in is small and has mettalic walls. A screen on the far end of the room bathes you in green light. The room feels familiar somehow. Like you've already been here. You walk up to the monitor and look in it. It shows you in a white room. You wave and moments later the person on the monitor does the exact same thing. You call Aster over and ask him to look. You notice that he doesn't appear on the monitor at all. He looks at it and asks a little puzzled, \"What are you looking at? It's just a blank screen.\" You tell Aster what you see. He looks at the screen with a smile on his face and says, \"How interesting. I wonder what else this cave has in store for us. Let's go back, ok?\"")
            createop("Go Back", "cave(1)")
            break;
        case 4:
            type("Aster takes the lead. This path is a downward slope. It's very wet and slippery giving you a hard time. The rough terrain doesn't seem to bother aster at all. Before to long you arrive at a small building. It's made out of the same thing as the cave.<br><br>\"Looks like someone decided to make this cave their home. Let's investigate some. Maybe the person living here can tell us how to get to the next layer,\" Aster tells you. Aster walks to the door and gives it a few good whacks. He waits a moment, and then knocks on the door again. This time the door opens slightly. Aster calls out, \"Is anyone home?\" before opening the door a little farther. Once the door is open you can see that the house is empty. All that is in the small shack is a bed, a toychest, and a piece of paper on the floor.<br><br>You walk to the paper and pick it up. It feels rough in your hands, almost like clay. When you flip it over, you find that the clay like substance is dried blood. The message that the blood outlines reads, \"RUN! THEY ARE COMING!\" You pass the note to Aster and open the toychest. Inside you find a child's sock that is stained with blood. You turn to Aster and say, \"There's no one here. Let's go.\"")
            createop("Go Back", "cave(1)")
            break;
        case 5:
            type("The path ends at a dead end. You decide to return.")
            createop("Go Back", "cave(1)")
            break;
        case 6:
            type("The path ahead of you is damp and extremely dark. Barely able to see the ground you stumble through the rough terrain. Eventually you find a wall and reach a hand out to brace yourself. Immediately you notice that the wall is extremely wet and very slippery. With all your weight on that hand you start to fall uncontrollably. Aster reaches oout and catches you before you fall down a very deep hole. You thank him and continue on your way. The tunnel empties out to a large open cavern filled with bats.")
            createop("Continue", "room=22;supdateGUI3();")
            break;
        case 7:
            type("You walk toward the light and end up at a huge monitor. it is divided into sections with each one showing you a different part of the cave. The first section shows a small metalic room. You are looking up at the ceiling at an angle. Judging on the the distance to the ceiling you assume the camera is on the wall. You watch the room for a while and see yourself come up to the screen and look in it. Then you watch yourself turn around and talk to someone. You can't tell who and you can't hear what you are saying. Then you watch yourself leave. You look at the next screen over and see an empty house with a bed and a toybox. On the ground is a note. It has been flipped upside down which prevents you from reading it. There is some writing on the door and with some further inspection you notice it reads, \"RUN!\" A chill goes down your spine. You see nothing else in the room. On the final screen you see a humanoid shape. It is slightly translucent and overall white. You watch as it moves around the dark room and then disappears down a tunnel. It ressembles the monster that was on the ship. Tall with long arms. It's hands were as large as a baseball glove and it had claws the size bagets. It's large oval eyes were visible through it's skin. You back away from the monitor to think about what you just saw. You sit down and think for a few minutes. The metal room reminds you of the white room you woke up in a while ago, and the house reminds you of the room with the bed and toybox. They were almost reskinned replikas. If that is ture, then could the monst you saw be what was screaming in the portal? You can't be sure. You are so deep in though that you don't notice Aster approaching from behind. Seeing that you are distracted, he takes the oppurtunity to explore the large room. When he comes back he gets your attention and says, \"I found an exit, that is if you're ready?\"<br><br>\"Yeah, let's go,\" you say.")
            createop("Continue", "room=23;supdateGUI3();pauseall();playingsound=false;")
            break;
        case 8:
            type("You walk toward the light and find the exit. You are more than happy to exit the cave after all the weird things you have experienced and everything you have seen.")
            createop("Continue", "room=23;supdateGUI3();pauseall();playingsound=false;")
            break;
    }
}
