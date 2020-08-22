var menu=true, context;
function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}
var playingsound=false,
 invchck=false,
 songtime=0,
 aste,
 loopthis=true,
 inioption=false,
 battlechk=false,
 temphealth=0,
 looking=false,
 chkabil0=0,
 man=false,
 atext=[[]],
 aprog=[],
 aoptions=[[]],
 acoptions=[[]],
 mazenum=1,
 roomtext=["You are in a small room. Parts of the wall are on fire. A red light is blinking rapidly and a high pitch sound fills the room. You determine it to be an alarm. A message written in blood on the moniter in front of you reads: \"RUN! THEY ARE COMING!\". You don't know who \"they\" are but a sense of dread fills you. There is a door to your left. A green fog pours into the room from it. There are no other openings in the room.<br><br>What do you do?","You escaped unscathed. The hall smells like rotten fish. The area infront of you is dotted with small fires. You avoid them and make your way into a circular chamber.<br><br>A creature hangs on the wall opposite of you. It is dead, nothing more than a husk. You approach the obviously non-human corpse. Its skin is a dark green color with brown splotches scattered here and there. The blood that flows from it is bright orange. You reach out and touch it. Your hand warms from the contact.<br><br>Someone behind you pipes up, \"What lays before you is nothing more than a Yerkgul. Known as the scourge of the universe, they pillage ships and generally are a large pain in the arse.\"<br><br>\"How do you know?\" you ask.<br><br>\"I lived with them for many years. A captive on one of their ships... this ship.\"<br><br>\"Why are you still here then?\"<br><br>\"My orders before I got captured were to kill you. If I fail then I cannot return home. The Yerkgul were the easiest means of getting you and I in the same area. Don't worry. I am a fair guy. The planet Gurlend is bellow us. There is an escape pod to your left. You will take it and land on the planet below. Once both of us are there we can have a fair competition. Whoever wins gets my spacecraft and can leave the planet.\"<br><br>\"And if I disagree?\"<br><br>\"You wouldn't like the consequences. Like I said I am a fair guy. We will both start with nothing.\"<br><br>Sounds like you don't have a choice.","You are at a small clearing on Gurlend. You are using the escape pod as a house. You can't start a fire because the smoke will attract the man who wants to kill you.<br><br>What do you do?","You are in an abandoned village. Silence surrounds you. You open your mouth to speak, but nothing comes out. The silence is driving you crazy, but nothing makes a sound. Not the doors on the houses, not the rocks by the road, not even your footsteps make a sound. You are in the Land of the Silent.<br><br>What do you do?","You wake up in a white room. Well, you think it is white. The walls don't quite seem there, its almost like they're ghosts. Nothing about this room feels right. You can't smell anything, your tounge isn't dry, the air isn't cold or hot, you aren't stiff, and your mind is sharper than ever. You don't feel right. There is a monitor in front of you. Glare blocks the image. You try to move to see the screen clearer, but you can't move. No, you feel like you are moving but you aren't. This isn't sleep paralisis. Your hands don't have the well known feeling of blood loss. The only sound in the room is the clock on the wall. You can't even hear your heart beat. With each passing second you gain more strength.<br><br>After an entire two hours you can smell. This room smells like a hospital. Or it would if it wasn't for the slightest tint of something. You don't know what but it is the most pleasent smell you've ever known.<br><br>Each hour you regain feeling in another part of your body. It takes a full 24 hours before you can feel everything. You stand and look at the monitor. You see.........yourself. You wave and just a few moments later the person on the moitor waves. Eveything about the monitor seems normal except it's placement.<br><br>Looking around the room you can see two doors. One to your right and one to your left.<br><br>What do you do?","There is a pulsing portal in front of you. It glows a faint green color. Screams pierce the room. Their source is right in front of you.<br><br>What do you do?","You are in a bedroom. A bed is in the corner opposite you. It has been made, but a film of dust has settled on the sheets. No one has slept in it for a very long time. There is a toybox in front of the bed.<br><br>What do you do?","What you see can best be described as.......otherworldly. You are on a narrow street. Buildings surround the street for as far as the eye can see in either direction. You know that you aren't on Gurlend anymore. The street is transparent and the vast nothingness of space is just beyond the glass. The buildings are unlike anything you have ever seen before. They all sway from side to side in complete unison. Someone is walking down the street towards you waving. They seem friendly enough so you wave back. You wait for him to reach you and when he does you stick your hand out and say, \"Hi, I am "+playername+".\"<br><br>He shakes your hand and says, \"Welcome to the Fold. It has been eons since I've had any visitors. I am sure you have many questions and I will answer them all once we get to my house. Follow me.\"<br><br>You walked for a couple of hours until you reached a rickety wodden shack. It was at the end of the line of buildings and it blocked the street from continuing any further. You both enter the building. The man tells you to sit down and you do. He sits in the chair across form you.<br><br>\"The Fold is a special place. It exists outside of time and space. It isn't just a pocket dimension. It is the first pocket dimension. This was here before time was created and before the laws of space were defined. It takes quite a lot to get here and only a few are able to pass the required tests. All the buildings you saw on the way here are the pieces that house the code of the universe. They keep everything running smoothly. Without them nothing could or would exist. I am the gaurdian of this land and a century ago I put tests in place to find a warrior. Since this place does not obey the laws of time I can't die from old age. Diseases also don't exist here. But there are an evil few who want to destroy this world and release chaos upon the land. I need a warrior to go out and exterminate that evil. You are the only one who passed all the tests. You can decide to help me or not. If you choose to accept go out the backdoor, but if you want nothing to do with this go out the front door. I must go attend to my gardens.\"<br><br>The man gets up and leaves the house through a third door. It disappears once he has gone through.<br><br>What do you do?",["There is a chalkboard in front of you. It has some text written on it. What you can read says, \"My name when read forward induces fear, but when read backward it makes you wonder where I am from. What is my name?\". There is a lonely piece of chalk on the board.<br><br> What do you write?","The writing changes. It now reads, \"I am long in the morning, but short in the evening. What am I?\"<br><br>What do you write?","The writing shifts. Now it reads, \"The poor have me. The rich can't. If you breath me you die and eating me makes you hungry. Drinking me makes you thirsty. What am I?\"<br><br>What will you write?"],["The room you are in undergoes the most dramatic transformation you have ever seen. The floor drops out from under your feet as the walls race away from you. Everything changes to a shade of red as you hit the ground below. You are fine because of your code like properties. Countless pillars sprout from the ground. They grow upwards at an alarming rate and they don't show any signs of slowing down. Walls jutt out from the sides of the pillars connecting them to one another. A voice that comes from nowhere booms, \"VIRUS DETECTED! INITIATING SAFTEY PROTOCOLS. HOLD STILL WHILE WE ERADICATE YOU.\"<br><br>The walls are phasing in and out of existance creating a new maze every second. A distant sound of metal clanging against metal grows louder with each second that passes.<br><br>Better run.","You come to a fork in the road.<br><br>What will you do?"],["You stand in a small metal box. There is a hole near the top of the door. You look out the gash. The room outside of your box is circular and larger than an average gym. There is a man in the center of the room. His back is to you. There is an ax in his hand and blood runs off the blade. It's like a never ending stream. It pools near the man's shoes. You can see a huge pile of corpses in front of him. You know them. All of them. They are the people you knew a long tme ago but forgot about as you grew older. Each with a large x gouged on their face. Blood gushes from the pile. Soon the room is completly flooded. You can't bear to look at the sickening sight any more so you turn around. The man is right there. Inches from your face. You can feel his breath on your face and it smells like oil. He stares you in the eyes and says, \"You let them die. You became so focused on the present that you forgot the past. You forgot about them. You killed them.\" He lifts the ax up and hands it to you.<br><br>The scene around shifts and fades along with your vision."],"You are at an abandoned laboratory. The lights are flickering and glass is scattered on the ground around you. The ax is still in your hand.<br><br>What will you do?","You are in a large room with many containers strewn about. There is a monitor on the wall accross from you. It is throwing sparks and has cracks all across its screen.<br><br>What will you do?","You are outside the lab in a desert. The wind rushes past you fiercly. It feels cold against your hand.<br><br>What will you do?","You walk into a large open square. Shops surround the square. Each has a symbol above it which tells you what it is. There is an Otter next to one of the shops. She is reading a book.<br><br>What will you do?","You walk into the center of the crumbling building. Hundreds of little passageways line the walls but most are filled in with rubble.<br><br>What do you do?","You run away from the man, dropping your library card in the process, and find his ship. You can hear him running after you.<br><br>What will you do?","You crash landed on a little red planet. You can breath the atmosphere luckily. You are using the ship as a home for now.<br><br>What will you do?","You wander into a small town. There is no one in the plaza.","\"This is the cave I was telling you about,\" Aster says. \"I think the entrance is over here.\"<br><br>Aster leads you into the cave. Once inside he looks to you and says, \"I've never gone inside here before. Why don't you lead the way, I'm a little rusty.\"<br><br>What will you do?","You are in the cave Aster lead you to.<br><br>What will you do?","You are in a large chamber with a light radiating from the far side. It is filled with bats, but you have a broken arm. You have a feeling that if you go towards to the light you will not be able to return.<br><br>What will you do?","You and Aster are in a large chamber with a light radiating from the far side. It is filled with bats. You have a feeling that if you go towards to the light you will not be able to return.<br><br>What will you do?","There is a town outside this end of the cave. You walk into the center of it. There are people all over and a ton of fancy looking shops. You can probably go back into the cave from here.<br><br>What do you do?","You and Aster are in a large chamber filled with bats.<br><br>What will you do?"],
 searchtext=[["You find a vial with what looks like a blood drop on its label. You store it in your pouch.<br><br>There is nothing else here.<br><br>You gained a Vial of Blood","There is nothing here."],["There is only the dead monster. Your better judgement tells you not to touch it again."],["Nothing to see here."],["You look for what is causing this strange silence. In your search you come across a book titled \"How the Wind Cries\". You store it in your pouch.<br><br>You find nothing else.<br><br>You gained the book \"How the Wind Cries\".","All you find is your insanity inching closer and closer."],["You look around the room. It is empty except for the chair and monitor. The walls of the room appear to go on forever, but a simple touch proves that wrong."],["You circle the portal but gain no information from your inspection."],["You open the toybox. A single sock is crumpled up in the bottom of it. It would fit a young elementary school student's foot. There is blood on the side of it.","There is nothing else in this room."],["The only things in this room are the chair you are setting on and the two doors.<br><br>What will you do?"],[],[],[],["There is a red vial labled DO NOT INGEST. You store it in your pouch.","There is a green vial labled INGEST.","There is nothing here."],["You find a ball of slime in one of the crates!","Nothing to see here...yet."],["You only find the shifting dunes."],["The ground is immaculate."],["Dirt lines the floor."],["You see a ship."],["You see your ship."],["Grass spreads out forever."],[],["It's so dark you can barely see anything. You search nontheless and find nothing of importance near you."],["You find a few dead bats. You take a couple of seconds to extract the bats' lifeforece.","All you see is bats that are very much alive and a light far off in the distance."],["You see tons of bats everywhere. There is light eminating from the far side of the cavern."],["There are people all over and that makes it very difficult to search about."],["Nothing can be found on the cavern floor except for large piles of bat dung."]],
 talktext=["There is no one to talk to.","\"Get going. I have already waited 5 years for this chance and I won't wait any longer.\"","Talking to yourself won't help your situation.","If only you could talk to yourself. It's a shame you can't.","You can talk to yourself, but that doesn't seem very helpful right now.","You call out to the portal:<br><br>\"Hello?\"<br><br>The room falls silent for just a moment before you hear a vaint, raspy, reply:<br><br>\"Run.\"<br><br>The screeching resumes as though nothing had happened.","Your voice echoes off the walls. The echo isn't a constant pitch. It wavers as time passes. Growing ever deeper until you can't hear it.","You say to yourself, \"What to do now?\" A mouth appears on the house and says, \"Run.\" Then it disappears.<br><br>What will you do?","","","","Your voice echoes off the walls. You should keep quiet unless you want to attract attention.","There is no one to talk to.","There is no one to talk to.","You turn to the Otter and say hello. She just keeps on reading.","There is no one to talk to.","You can't muster words to speak.","You talk to yourself for an hour or two.","There is no one to talk to."],
 talking=false,
 itemstobegained=[[{name: "Vial of Blood", type: "consumable", id: 0}],[],[],[{name: "How the Wind Cries", type: "book", id: 2}],[],[],[],[],[],[],[],[{name: "Red Vial", type: "consumable", id: 5},{name: "Green Vial", type: "consumable", id: 6}],[{name: "Slime Ball", type: "consumable", id: 7}],[],[],[],[],[],[],[],[],[{name: "Vial of Lifeforce", type: "consumable", id: 17}],[],[],[]],
 itemeffects=["Your attack has been raised by 2.", "Your speed has increased by 2!","The wind doesn't cry like it used to. This land has become a silent abyss of nothing. Sound no longer graces our ears, the wind no longer talks, the animals don't cry, and we can't listen. The wind used to guide us. Every day it showed us the way. Now it cries. It cries cries that we can't hear. It sings songs that we can't know. Alas! we can never know. If only it talked, but talk it can no longer. If only it sang, but sing it can no longer. This land is bleak and many are leaving for the river afar. Some couldn't wait and are dangling from the trees. The wind would cry for them if it could. It can't of course. Peace be to us forever more, but the peace is what we most fear. Be careful what you wish for. It just may be a curse.",,"Your shadow will always be with you.","You feel fine for a little bit and you wander what you just drank. About two hours after drinking the red vial you start to feel icky. You don't know how to describe it. Your skin is crawling. Literally crawling right off your muscles. In about two seconds it is on the floor. You can't see because your eyes fell out and your nose and ears are gone. You feel like screaming but can't because your lower and upper jaw bones merged. A new ragged fur grows in where your skin should be. It just leaves your muscles visible underneath. Your eye sockets fill in with teeth and you can see again. Your eyes migrated onto what used to be your ears. Aided by some small tentacles they are able to see all around you. Your nose grows back sharper and longer than you remember. Scales start to grow in between the strands of fur and cover up your exposed muscles. In a few moments you feel invigorated.","You grow horns and powerful claws (will update description later)!","Your Defense went up by 1!","You are less thristy now","You are less hungry now","You feel slightly tougher now!","","","","You returned to the library!","You returned to the library!","Nothing happened and you still have an empty bottle.","You gain 80 lifeforce!"],
 stop=false,
 movemenu=false,
 bb1=false,
 running=false,
 movementoptions=[["Left"],["Left"],["Explore"],["Explore"],["Left","Right"],["Forward","Backward"],["Backward"],["Frontdoor","Backdoor"],[],[],[],["Left","Scavenge","Explore","Right"],["Backward","Explore","Scavenge"],["Backward","Explore","Scavenge"],["Leave","General Store","Blacksmith","Library"],["Leave","Leftmost Passage","Middle Passage","Rightmost Passage"],["Fly off Gerlund"],["Scavenge","Explore"],["Leave","Library"],[],["Explore"],["Explore"],["Explore"],["Crossroad"],["Explore"]],
 abilities=[
    {
        name: "Shadow Steps",
        description: "You cannot miss twice in a row",
        unlock: 5
    },
    {
        name: "Acid Blood",
        description: "Your blood has turned into acid from your time away from home. Your attackers will take damage if they hit you.",
        unlock: 10
    }
], enemies=[
    {
        name: "Slime",
        health: 20,
        attack: 10,
        defense: 15,
        speed: 5,
        drops: {name: "Vial of Blood", chance: 60, id: 0},
        friendable: {possible: true, item: 7, resource: 0, amount: 35, chance: 40},
        level: 1,
        type: [""]
    },
    {
        name: "Bat",
        health: 15,
        attack: 5,
        defense: 10,
        speed: 20,
        drops: {name: "Speedy Vial", chance: 50, id: 1},
        friendable: {possible: true, item: 0, resource: 0, amount: 20, chance: 50},
        level: 1,
        type: [""]
    },
    {
      name: "Hollow",
      health: 20,
      attack: 15,
      defense: 15,
      speed: 20,
      drops: {name: "Bell of Silence", chance: 100, id: 3},
      friendable: {possible: false},
      level: 3,
      type: [""]
    },
    {
      name: "Shadow",
      health: 100,
      attack: 10,
      defense: 10,
      speed: 9,
      drops: {name: "Shadow Stone", chance: 100, id: 4},
      friendable: {possible: false},
      level: 1,
      type: ["Boss"]
    },
    {
      name: "Shadow",
      health: 100,
      attack: 10,
      defense: 10,
      speed: 11,
      drops: false,
      friendable: {possible: false},
      level: 1,
      type: ["Boss"]
    },
    {
      name: "Zombie",
      health: 50,
      attack: 20,
      defense: 20,
      speed: 5,
      drops: {name: "Slime Ball", chance: 75, id: 7},
      friendable: {possible: false},
      level: 5,
      type: [""]
    },
    {
      name: "Sand Giant",
      health: 100,
      attack: 30,
      defense: 35,
      speed: 30,
      drops: {name: "Bottle of Sand", chance: 70, id: 10},
      friendable: {possible: false},
      level: 6,
      type: [""]
    },
    {
      name: "The Man",
      health: 1400,
      attack: 400,
      defense: 1200,
      speed: 999999,
      drops: false,
      friendable: {possible: false},
      level: 999999,
      type: ["Boss"]
    },
    {
      name: "Frog",
      health: 200,
      attack: 40,
      defense: 30,
      speed: 25,
      drops: false,
      friendable: {possible: false},
      level: 8,
      type: [""]
    },
    {
      name: "Bee",
      health: 150,
      attack: 30,
      defense: 20,
      speed: 55,
      drops: false,
      friendable: {possible: false},
      level: 8,
      type: [""]
    },
    {
      name: "Large Bat",
      health: 100,
      attack: 15,
      defense: 20,
      speed: 40,
      drops: {name: "Speedy Vial", chance: 70, id: 1},
      friendable: {possible: true, item: 0, resource: 0, amount: 40, chance: 40},
      level: 10,    
      type: [""]
    },
    {
      name: "Group of Bats",
        health: 300,
        attack: 25,
        defense: 10,
        speed: 40,
        drops: {name: "Speedy Vial", chance: 100, id: 1},
        friendable: {possible: true, item: 0, resource: 0, amount: 60, chance: 80},
        level: 15,
        type: [""]
    }
], items=[
    {
        name: "Vial of Blood",
        type: "consumable",
        id: 0
    },
    {
        name: "Speedy Vial",
        type: "consumable",
        id: 1
    },
    {
        name: "How the Wind Cries",
        type: "book",
        id: 2
    },
    {
        name: "Bell of Silence",
        type: "consumable",
        id: 3
    },
    {
        name: "Shadow Stone",
        type: "key",
        id: 4
    },
    {
        name: "Red Vial",
        type: "consumable",
        id: 5
    },
    {
        name: "Green Vial",
        type: "consumable",
        id: 6
    },
    {
        name: "Silme Ball",
        type: "consumable",
        id: 7
    },
    {
        name: "Watter Bottle",
        type: "consumable",
        id: 8
    },
    {
        name: "Food",
        type: "consumable",
        id: 9
    },
    {
        name: "Sand Shard",
        type: "consumable",
        id: 10
    },
    {
        name: "Chestplate",
        type: "equipment",
        modifier: 10,
        area: "upper body",
        id: 11
    },
    {
        name: "Running Shoes",
        type: "equipment",
        modifier: 2,
        area: "feet",
        id: 12
    },
    {
        name: "Bloody Ax",
        type: "equipment",
        modifier: 4,
        area: "weapon",
        id: 13
    },
    {
        name: "Library Card",
        type: "card",
        roomnum: 14,
        id: 14
    },
    {
        name: "Library Card",
        type: "card",
        roomnum: 18,
        id: 15
    },
    {
      name: "Empty Bottle",
      type: "consumable",
      id: 16
    },
    {
      name: "Vial of Lifeforce",
      type: "consumable",
      id: 17
    }
], resources=[
    {
      name: "Lifeforce",
      description: "The basic material required for crafting. It is the very essence of the universe itself. Everything is made from it and without it nothing could exist.",
      id: 0
    }
],
 textnum=0,
 storevolume=1,
 crafts=[0],
 drones=[0,0],
 mute=false,
 form="Human",
 hunger=100,
 thirst=100,
 town=false,
 temple=false,
 helmet=false,
 feet=false,
 upperbody=false,
 lowerbody=false,
 weapon=false,
 money=0,
 librarycard=false,
 town1=false,
 ability=0,
 Aster=false,
 itemcheckerthing,
 expcheckerthing;


//Checks for savefile
var savechk=[[0,1],[0,0],[0,0],[0,1],[0,0],[0,0],[0,1],[0,0],[0,3],[0,1],[0,0],[0,2],[0,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1],[0,0],[0,0],[0,0]],
    aprogchk=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
if (roomprog.length!==savechk.length) {
    let yeahididthisbadly=roomprog.length
  for (let i=0; i<savechk.length-yeahididthisbadly; i++) {
    roomprog.push(0)
    roomprog[roomprog.length-1]=[savechk[roomprog.length-1][0]]
  }
}
for (let i=0; i<roomprog.length; i++) {
    roomprog[i].push(savechk[i][1])
    if (roomprog[i][0]>roomprog[i][1]) {
        roomprog[i][0]=roomprog[i][1]
    }
}
if (aprog.length!==aprogchk.length) {
  let yeahididthisbadly=aprog.length
  for (let i=0; i<aprogchk.length-yeahididthisbadly; i++) {
    aprog.push(0)
    aprog[aprog.length-1]=[aprogchk[aprog.length-1][0]]
  }
}
for (let i=0; i<aprog.length; i++) {
  aprog[i].push(aprogchk[i][1])
  if (aprog[i][0]>aprog[i][1]) {
      aprog[i][0]=aprog[i][1]
  }
}
while(invid.length<items.length) {
    invid.push(0)
}
var resourcesarray=[];
for (let glgl=resourcesarray.length; glgl<resources.length; glgl++) {
  resourcesarray.push(0)
}