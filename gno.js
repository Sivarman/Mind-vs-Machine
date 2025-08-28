let startno = document.getElementById("srtno");
let endingno = document.getElementById("endno");
let guessno = document.getElementById("gsno");
let checkbutton = document.getElementById("chk");
let resetbutton = document.getElementById("rst");
let message = document.getElementById("opmsg");

let randomNumber = null; 

checkbutton.addEventListener("click", function (e) {
    e.preventDefault();
    message.classList.add("animation-ltr");

    let start = Number(startno.value);
    let end = Number(endingno.value);
    let guess = Number(guessno.value);

    if (!start || !end || !guess) {
        message.textContent = "Enter all values";
        return;
    }

    
    if (start > end) {
        let t = start;
        start = end;
        end = t;
        startno.value = start;
        endingno.value = end;
    }

    if (randomNumber === null) {
        randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        console.log("Generated number:", randomNumber); 
    }

    if (guess === randomNumber) {
        message.textContent = " Wow great guess!";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
});

resetbutton.addEventListener("click", function (e) {
    e.preventDefault();
    startno.value = "";
    endingno.value = "";
    guessno.value = "";
    message.textContent = "";
    randomNumber = null; 
});
