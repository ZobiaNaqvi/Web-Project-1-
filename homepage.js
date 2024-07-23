const button = document.getElementById("myButton"); // Assuming your button has id "myButton"
// const message = document.getElementById("message"); // Assuming your message paragraph has id "message"

hasmouseclicked = false
  button.addEventListener("click", function() {
    hasmouseclicked = true
    console.log("something")
    // Update the button text
    button.innerHTML = "Can't Touch This!";
});

myaudio = document.getElementById("myaudio")

audioplayed=0
button.addEventListener("mouseover", function() {
if(hasmouseclicked){
  // console.log("Yes it's working")

//   if(audioplayed==0){
    
//     myaudio.play();
//     audioplayed++; 
// }else{
//   audioplayed++; 
//   myaudio.resume()
// }
 myaudio.play()
  button.style.position = "absolute";
  button.style.zIndex = 1; 
  
  
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    const randomX = Math.random() * (screenWidth - buttonWidth);
    //console.log(randomX)
    const randomY = Math.random() * (screenHeight - buttonHeight);
  
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  
    setTimeout(pauseAudio, 4000)
  
}
      function pauseAudio(){
      myaudio.pause();
  
    }  });


