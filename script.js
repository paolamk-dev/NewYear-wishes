document.addEventListener("DOMContentLoaded",function() {
document.getElementById("wishButton").addEventListener("click",function(){
    const name = document.getElementById("name").Value.trim();
    if(name == ""){
        alert("Please enter your name!");
       
    }
    const message = 'Wishes you a prosperous ,glorious and joyful  YEAR 2025! 🥳🎉🎊💸😉!';
document.getElementById("message").innerText=message;
});
});

/*document.addEventListener("DOMContentLoaded",function() {
    const clock = document.getElementById("clock");
    const prompt = document.getElementById("prompt");
    const message = document.getElementById("message");
    const wishMessage = document.getElementById("wishmessage");
 const inputSection = document.getElementById("inputsection");
  // gets input field
  const inputName = document.getElementById("name");
  const wishButton = document.getElementById("wishButton");
  let name = "Your friend";
  // click listener for the clock
  clock.addEventListener("click",function() {
    gsap. to(clock, {
        scale: 0,duration: 1, oncomplete: showMessage
    });
});
// function shows the massage after clock is clicked
function showMessage() {
    prompt.style.display="none";
    wishMessage.textContent = name +' Wishes you a prosperous ,glorious and joyful  YEAR 2025! 🥳🎉🎊💸😉!';
    gsap.to(
        message,
        {
            opacity:1, scale: 1,duration: 1
        }
    );

// show input for wishing others
inputSection.style.display="block";
gsap.fromTo(inputSection,
    {
        opacity:0
    } ,
    {
        opacity:1 ,duration:1
    }
);
}
// wishing others
 // click listener for the wishingbutton
 wishButton.addEventListener("click", function() {
   
    // get and clean input value
    // trim() removes any extra whitespace from the start and end of the text entered in the input field
    const Username = inputName.Value.trim();
    if(Username){
        
    wishMessage.textContent = name +' Wishes you a prosperous ,glorious and joyful  YEAR 2025! 🥳🎉🎊💸😉!';
    alert("your wish has been updated! Please share the link to your love ones 😉");
    gsap.to(
        message,
        {
            opacity:1, scale: 1,duration: 1
        }
    ); 
} 
});
});*/

   

 
    
