function buy(num,num2,num3) {
    if (money>=num2){
        money-=num2;
        invid[num]+=1;
        type("You bought a "+items[num].name+"!")
    }else {
        type("You don't have enough money!")
    }
    createop("Okay","shop("+num3+")")
}

function shop(num) {
    if (num===0) {
        type("I don't buy and if you ain't gonna then get out.<br><br>Money: "+money)
        createop("Buy a watter bottle for 50","buy(8,50,0)")
        createop("Buy some food for 50","buy(9,50,0)")
    }else if (num===1) {
        type("Hey. What can I do for ya?<br><br>Money: "+money)
        createop("Buy a chestplate for 100","buy(11,100,1)")
        createop("Buy some running shoes for 200","buy(12,200,1)")
    }
    createop("Leave","updateGUI3()")
}

function library() {
    document.getElementById("body").innerHTML="<div class=\"textbox\" id=\"textbox\"></div><div class=\"option-container\" id=\"option-container\"></div>"
    type("You walk into the library and hear a voice talk on the loud speakers. The feminine voice says, \"Welcome to the library. You can go to any area that you have already visited. New areas will be available if you do so and please be careful not to lose your Library Card!\"")
    if (room===14&&librarycard===false) {
        createop("Clearing on Gerlund","man=false;invid[14]+=1;pauseall();room=2;updateGUI3();librarycard=true;")
        createop("Land of the Silent","invid[14]+=1;pauseall();room=3;updateGUI3();librarycard=true;")
    }else if (room===18&&librarycard===false) {
        createop("Land of the Silent","invid[15]+=1;pauseall();room=3;updateGUI3();librarycard=true;")
        createop("Laboratory","invid[15]+=1;pauseall();room=11;updateGUI3();librarycard=true;")
    }
    createop("Leave","updateGUI3()")
}