function toss(number) {
    invid[number]-=1
    document.getElementById("body").innerHTML="<div class=textbox>Tossed!</div><button class=\"cancel\" onclick=\"cancel()\">Cancel</button>"
}