function hint() {
    document.getElementById("body").innerHTML="<div class=\"textbox\" id=\"textbox\"></div><div class=\"option-container\" id=\"oc\"><div id=\"o1\" class=\"option\" onclick=\"loopthis='temp';loopmenu();\">Back</div></div>"
    switch (room) {
        case 2:
            if (librarycard===false) {
                document.getElementById("textbox").innerText="Go into the Abandoned Town at the crossroads. Make sure to get a few Bats first."
            }else {
                document.getElementById("textbox").innerText="There is no specific hint given. Try exploring or moving around some."
            }
            break;
        case 3:
            document.getElementById("textbox").innerText="Go to the shrine."
            break;
        case 8:
            document.getElementById("textbox").innerText="1: A famous vampire.\n\n2: There are seven in a week.\n\n3: Litterally nothing."
            break;
        case 9:
            document.getElementById("textbox").innerText="Routes 2 and 3 are bad."
            break;
        case 11:
            document.getElementById("textbox").innerText="Go to the library on the town and then go back to the clearing."
            break;
        case 12:
            document.getElementById("textbox").innerText="Go to the library on the town and then go back to the clearing."
            break;
        case 13:
            document.getElementById("textbox").innerText="Go to the library on the town and then go back to the clearing."
            break;
        case 14:
            document.getElementById("textbox").innerText="Go to the library on the town and then go back to the clearing."
            break;
        case 17:
            document.getElementById("textbox").innerText="Talk to Aster."
            break;
            
        default:
            document.getElementById("textbox").innerText="There is no specific hint given. Try exploring or moving around some."
            break;
    }
}