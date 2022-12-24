let password = [
    "This birthday, I wish you abundant happiness and love. May all your dreams turn into a reality.", 
"May you be gifted with life's biggest joys and never ending bliss.", 
"Friends are awesome especially yours. Happy birthday dearie",
 "Every year on this day, I am reminded how lucky I am to have a friend like you.", 
 "May good luck go with you, and happiness too", 
 "Wishing you a year filled with love, adventure, and prosperity",
]
let Bwishes = document.getElementById("b-wishes")


tap.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random()*password.length)
    Bwishes.textContent = password[randomIndex]
})


