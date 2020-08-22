var shipsound = document.getElementById("myAudio");

function playAudio() {
  shipsound.play();
}

function pauseAudio() {
  shipsound.pause();
}

var clearingmusic = document.getElementById("Audio2");

function playca() {
  clearingmusic.play();
}

function pauseca() {
  clearingmusic.pause();
}

var boss1mus = document.getElementById("Audio3");

function playb1() {
  boss1mus.play();
}

function pauseb1() {
  boss1mus.pause();
}

var technolandbase = document.getElementById("Audio4");

function playtech() {
  technolandbase.play();
}

function pausetech() {
  technolandbase.pause();
}

var technolandfold = document.getElementById("Audio5");

function playfold() {
  technolandfold.play();
}

function pausefold() {
  technolandfold.pause();
}

var puzzle = document.getElementById("Audio6");

function playpz1() {
  puzzle.play();
}

function pausepz1() {
  puzzle.pause();
}

var zombieland = document.getElementById("Audio8");

function playzl() {
  zombieland.play();
}

function pausezl() {
  zombieland.pause();
}

var tm = document.getElementById("Audio10");

function playtm() {
  tm.play();
}

function pausetm() {
  tm.pause();
}

var tem = document.getElementById("Audio9");

function playtem() {
  tem.play();
}

function pausetem() {
  tem.pause();
}

var c2m = document.getElementById("Audio11");

function playc2m() {
  c2m.play();
}

function pausec2m() {
  c2m.pause();
}

var s12=document.getElementById("Audio12");

function plays12() {
  s12.play()
}

function pauses12() {
  s12.pause()
}

function pauseall() {
  shipsound.pause()
  clearingmusic.pause()
  boss1mus.pause()
  technolandbase.pause()
  technolandfold.pause()
  puzzle.pause()
  zombieland.pause()
  tm.pause()
  tem.pause()
  c2m.pause()
  s12.pause()
}

function musicadjust(num) {
  shipsound.volume = num/100;
  clearingmusic.volume = num/100;
  boss1mus.volume = num/100;
  technolandbase.volume = num/100;
  technolandfold.volume = num/100;
  puzzle.volume = num/100;
  zombieland.volume = num/100;
  tm.volume = num/100;
  tem.volume = num/100;
  c2m.volume = num/100;
  s12.volume=num/100;
  storevolume=num/100;
}

function musictogg() {
  if (storevolume===0) {
    storevolume=1;
  }
  if (shipsound.volume===0) {
    shipsound.volume = storevolume;
    clearingmusic.volume = storevolume;
    boss1mus.volume = storevolume;
    technolandbase.volume = storevolume;
    technolandfold.volume = storevolume;
    puzzle.volume = storevolume;
    zombieland.volume = storevolume;
    tm.volume = storevolume;
    tem.volume = storevolume;
    c2m.volume = storevolume;
    s12.volume=storevolume;
    mute=false;
  } else {
    mute=true;
    storevolume=shipsound.volume;
    shipsound.volume = 0;
    clearingmusic.volume = 0;
    boss1mus.volume = 0;
    technolandbase.volume = 0;
    technolandfold.volume = 0;
    puzzle.volume = 0;
    zombieland.volume = 0;
    tm.volume = 0;
    tem.volume = 0;
    c2m.volume = 0;
    s12.volume=0;
  }
}
function yesplease() {
  shipsound.volume = storevolume;
  clearingmusic.volume = storevolume;
  boss1mus.volume = storevolume;
  technolandbase.volume = storevolume;
  technolandfold.volume = storevolume;
  puzzle.volume = storevolume;
  zombieland.volume = storevolume;
  tm.volume = storevolume;
  tem.volume = storevolume;
  c2m.volume = storevolume;
  s12.volume = storevolume;
  savefix()
}


function savefix() {
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
    for (let glgl=resourcesarray.length; glgl<resources.length; glgl++) {
      resourcesarray.push(0)
    }
}