const newMessage = document.getElementById("new-message"); 
const birthdayMessage = document.getElementById("birthday-message");
const birthdayWishes = document.getElementById("birthday-wishes");
const nextButton = document.getElementById("next-button");
const birthdayMusic = document.getElementById("birthday-music");
const balloons = document.getElementById("balloons");
const finalButton = document.getElementById("final-button");
const finalMessage = document.getElementById("final-message");

newMessage.addEventListener("click", function () {

    // Hide the first message
    newMessage.style.display = "none";
    nextButton.style.display = "none";

    // Show the birthday section
    birthdayMessage.style.display = "block";
    
    birthdayMusic.play();

    // Create 500 balloons
    for (let i = 0; i < 500; i++) {

        // Create one balloon
        const balloon = document.createElement("span");

        // Add balloon emoji
        balloon.innerText = "🎈";

        // Give it the balloon CSS class
        balloon.classList.add("balloon");

        // Put balloon at a random place across the bottom
        balloon.style.left = Math.random() * 100 + "%";

        // Make each balloon start at a slightly different time
        balloon.style.animationDelay =
            Math.random() * 4 + "s";

        // Give each balloon a different speed
        balloon.style.animationDuration =
            5 + Math.random() * 5 + "s";

        // Add balloon to the page
        balloons.appendChild(balloon);
    }
});

birthdayMusic.addEventListener("ended", function() {
    nextButton.style.display = "block";
});

nextButton.addEventListener("click", function () {
    birthdayMessage.style.display = "none";

    // Make the birthday wishes appear
    birthdayWishes.style.display = "block";
    finalButton.style.display = "block"; 
});

finalButton.addEventListener("click", function () {
    birthdayWishes.style.display = "none";
    finalButton.style.display = "none"; 

    // Make the birthday wishes appear
    finalMessage.style.display = "flex";
});