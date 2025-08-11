
for(var i =0 ;i<document.querySelectorAll(".drum").length;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var letter = this.innerHTML;
    
   makeSound(letter);

   buttonAnimation(letter);
    
})
}




document.addEventListener("keypress",function(event){
  var key = event.key;
  makeSound(key)

  buttonAnimation(key)
})

function makeSound(key){
   switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
      case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;

              case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;
              case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;

              case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            
            break;

              case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            
            break;

              case "l":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            
            break;
        default:
            break;
    }

}




function buttonAnimation(currentKey){
  var animationKey = document.querySelector("." + currentKey)

 animationKey.classList.add("pressed");

 setTimeout(function(){
  animationKey.classList.remove("pressed")
 },100);
}
