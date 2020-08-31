function loadmenu() {
  document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\"></div><div class=\"option-container\" id=\"oc\"></div>"
  for (let i=1; i<9; i++) {
      document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
  }
  if (mainboolean) {
    addtext("Save Slot 1 - ")
    addtext(savename1+"<br><br>Save Slot 2 - ")
    addtext(savename2+"<br><br>Save Slot 3 - ")
    addtext(savename3+"<br><br>Save Slot 4 - ")
    addtext(savename4+"<br><br>Save Slot 5 - ")
    addtext(savename5)
    createop("Slot 1","loadss(1)")
    createop("Slot 2","loadss(2)")
    createop("Slot 3","loadss(3)")
    createop("Slot 4","loadss(4)")
    createop("Slot 5","loadss(5)")
  }
  createop("Load Save","load()")
  createop("New Game","window.addEventListener('load', init, false);init();menu=false;check();")
}

ipcRenderer.on("boolean",(event, arg)=>{
  mainboolean=true
})
ipcRenderer.on("playername",(event, arg) => {
  playername=arg
})
ipcRenderer.on("mute",(event, arg) => {
  mute=arg
})
ipcRenderer.on("aprog",(event, arg) => {
  aprog=arg
})
ipcRenderer.on("Aster",(event, arg) => {
  Aster=arg
})
ipcRenderer.on("man",(event, arg) => {
  man=arg
})
ipcRenderer.on("drones",(event, arg) => {
  drones=arg
})
ipcRenderer.on("crafts",(event, arg) => {
  crafts=arg
})
ipcRenderer.on("storevolume",(event, arg) => {
  storevolume=arg
})
ipcRenderer.on("resourcesarray",(event, arg) => {
  resourcesarray=arg
})
ipcRenderer.on("prestige",(event, arg) => {
  prestige=arg
})
ipcRenderer.on("librarycard",(event, arg) => {
  librarycard=arg
})
ipcRenderer.on("town1",(event, arg) => {
  town1=arg
})
ipcRenderer.on("money",(event, arg) => {
  money=arg
})
ipcRenderer.on("town",(event, arg) => {
  town=arg
})
ipcRenderer.on("temple",(event, arg) => {
  temple=arg
})
ipcRenderer.on("feet",(event, arg) => {
  feet=arg
})
ipcRenderer.on("helmet",(event, arg) => {
  helmet=arg
})
ipcRenderer.on("weapon",(event, arg) => {
  weapon=arg
})
ipcRenderer.on("ability",(event, arg) => {
  ability=arg
})
ipcRenderer.on("upperbody",(event, arg) => {
  upperbody=arg
})
ipcRenderer.on("lowerbody",(event, arg) => {
  lowerbody=arg
})
ipcRenderer.on("invid",(event, arg) => {
  invid=arg
})
ipcRenderer.on("lifesavingvariable",(event, arg) => {
  lifesavingvariable=arg
})
ipcRenderer.on("room",(event, arg) => {
  room=arg
})
ipcRenderer.on("roomprog",(event, arg) => {
  roomprog=arg
})
ipcRenderer.on("textnum",(event, arg) => {
  textnum=arg
})
ipcRenderer.on("hunger",(event, arg) => {
  hunger=arg
})
ipcRenderer.on("thirst",(event, arg) => {
  thirst=arg
})
ipcRenderer.on("stats",(event, arg) => {
  stats=arg
})
ipcRenderer.on("next",(event, arg) => {
    if (arg<7) {
      try {
        saveproccess(arg)
      }catch {
        defaultvars()
        saveproccess(arg)
      }
    }else {
      defaultvars()
    }
})

function saveload(num) {
    ipcRenderer.send("num",num)
    ipcRenderer.send("savespot", "ss"+num)
    ipcRenderer.send("request")
}

function loadss(num) {
    document.getElementById("body").innerHTML="<div id=\"textbox\" class=\"textbox\"></div><div class=\"option-container\" id=\"oc\"></div>"
    for (let i=1; i<9; i++) {
        document.getElementById("oc").innerHTML+="<div id=\"o"+i+"\" class=\"option\"></div>"
    }
    if (mainboolean) {
      addtext("Save Slot 1 - ")
      addtext(savename1+"<br><br>Save Slot 2 - ")
      addtext(savename2+"<br><br>Save Slot 3 - ")
      addtext(savename3+"<br><br>Save Slot 4 - ")
      addtext(savename4+"<br><br>Save Slot 5 - ")
      addtext(savename5)
      createop("Slot 1","loadss(1)")
      createop("Slot 2","loadss(2)")
      createop("Slot 3","loadss(3)")
      createop("Slot 4","loadss(4)")
      createop("Slot 5","loadss(5)")
    }
    createop("Load File","load()")
    createop("New Game","window.addEventListener('load', init, false);init();menu=false;check();")
    switch (num) {
        case 1: {
            createop("Start",savetext1+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
            break;
        }
        case 2: {
            createop("Start",savetext2+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
            break;
        }
        case 3: {
            createop("Start",savetext3+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
            break;
        }
        case 4: {
            createop("Start",savetext4+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
            break;
        }
        case 5: {
            createop("Start",savetext5+"window.addEventListener('load', init, false);init();yesplease();menu=false;check();")
            break;
        }
    }
}

saveload(1)