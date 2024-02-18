//reach all the button at once using for loop iteration

// for more cleaner put the dom and store in variable

var numberOfDrums = document.querySelectorAll(".drum").length; // all button lengths store in variable for iterate purpose
for(var i =0;i<=numberOfDrums;i++){  // for iterate to all buttons

    //select the butto property
document.querySelectorAll("button")[i].addEventListener("click",function (){   // nameLess Function == Anonyms function
    //to reach the each button letters
    var buttonInnerHtml = this.innerHTML;

     makeSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);
});

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

};






function makeSound(key){

    //switch case for selected value provide the diff sounds
    switch (key) {
        case "w":
            var w = new Audio('sounds/tom-1.mp3')
            w.play();
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3')
            a.play();
            break;
        case "s":
            var s = new Audio('sounds/crash.mp3')
            s.play();
            break;
        case "d":
            var d = new Audio('sounds/kick-bass.mp3')
            d.play();
            break;
        case "j":
            var j = new Audio('sounds/tom-3.mp3')
            j.play();
            break;
        case "k":
            var k = new Audio('sounds/snare.mp3')
            k.play();
            break;
        case "l":
            var l = new Audio('sounds/tom-4.mp3')
            l.play();
            break;
        default:
            console.log("Not Applied");
            break;
    }

};


function buttonAnimation(currenkey){
    var activeButton = document.querySelector("."+ currenkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}