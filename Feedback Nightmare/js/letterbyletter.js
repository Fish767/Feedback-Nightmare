function printLetterByLetter(destination, message, speed){
    let h = 0;
    var interval = setInterval(function(){
        if (h > message.length||(stop===true&&h!==0)){
            clearInterval(interval);
            stop=false
        }else if (message.charAt(h)!=="<") {
            document.getElementById(destination).innerHTML += message.charAt(h);
            h++;
        }else {
            document.getElementById(destination).innerHTML += "<br>"
            h+=4
        }
        if (h===0||h===1) {
            stop=false
        }
    }, speed);
}