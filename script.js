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

document.getElementById("newBtn").onclick = function() {
    const random = Math.floor(Math.random() * compliments.length);
    complimentText.textContent = compliments[random];
};

document.getElementById("yesBtn").onclick = function() {
    responseText.textContent = "Yay :)";
};

document.getElementById("noBtn").onclick = function() {
    responseText.textContent = "That's okay, thank you for being honest.";
};