
let correct;
let seconds = 10
let correctAnswer = 0;
let incorrectAnswer = 0;
function getElement(id) {
    return document.getElementById(id);
}
function getRandomCountry() {
    return nkarner[Math.round(Math.random() * (nkarner.length - 1))];
}
function main() {
    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let tag = getRandomCountry();
        if (options.indexOf(tag) === -1) {
            if (options.length == 0) {
                options.push(tag);
            } else if(options[0].tipe == tag.tipe) {
                options.push(tag);
            }

        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    getElement("tagavor").src = correct.nkar;
}

function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        if (seconds === 7) {
            getElement("time").style.color = "green";
        }
        if (seconds === 5) {
            getElement("time").style.color = "yellow";
        }
        if (seconds === 3) {
            getElement("time").style.color = "red";
        }
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectAnswer++;
    }
    main();
}


function finish() {
    clearInterval(checkInterval);
    getElement("alert").style.display = "block";
    getElement("card").style.display = "none";
    getElement("alertscore").innerHTML = correctAnswer;
    let percentage = Math.round((correctAnswer / (correctAnswer + incorrectAnswer)) * 100);
    if (isNaN(percentage)) {
        resultForAnswers = 100;
    } else {
        if (percentage >= 75 && percentage < 95) {
            resultForAnswers = "Դուք ցուցաբերել եք լավ արդյունք"
        } else if (percentage >= 95) {
            resultForAnswers = "Դուք ցուցաբերել եք գերազանց արդյունք "
        } else if (percentage >= 50 && percentage < 75) {
            resultForAnswers = "Դուք ցուցաբերել եք միջին արդյունք"
        } else if (percentage >= 25 && percentage < 50) {
            resultForAnswers = "Դուք ցուցաբերել եք միջինից վատ արդյունք"
        } else if (percentage < 25) {
            resultForAnswers = "Դուք ցուցաբերել եք վատ արդյունք"
        }
    }
    getElement("alertaccuracy").innerHTML = `${resultForAnswers}  `;
}

function refresh() {
    location = location;
}

let checkInterval = setInterval(check, 50);
main();
timer();



