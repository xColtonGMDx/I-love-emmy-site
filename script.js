// Your compliments go here
const compliments = [
    "Hi Emmy :)",
    "You're really fun to be around",
    "You make my day better",
    "You're really sweet and funny",
    "I like being around you"
];

const complimentText = document.getElementById("compliment");
const responseText = document.getElementById("response");

let lastIndex = -1; // remembers previous compliment

document.getElementById("newBtn").onclick = function() {
    let random;

    // Keep picking until it's different from the last one
    do {
        random = Math.floor(Math.random() * compliments.length);
    } while (random === lastIndex);

    lastIndex = random;

    // Fade out
    complimentText.style.opacity = 0;

    setTimeout(() => {
        complimentText.textContent = compliments[random];
        complimentText.style.opacity = 1;
    }, 200);
};

document.getElementById("yesBtn").onclick = function() {
    responseText.textContent = "Yay :)";
};

document.getElementById("noBtn").onclick = function() {
    responseText.textContent = "That's okay, thank you for being honest.";
};
