let correct;
let second = 7
let correctAnswer = 0
let incorrectAnswer = 0
function getElement(id) {
    return document.getElementById(id);
}
function generateRandomTagavor() {
    return nkarner[Math.floor(Math.random()*(nkarner.length - 1))]
}

function main() {
    let options = [];
    let maxoption = 3;
    while (options.length < maxoption) {
        let tagav = generateRandomTagavor();
        if (options.indexOf(tagav) === -1) {
            options.push(tagav);
        }
    }
    for (i = 0; i < options.length; i++) {
        getElement(`option${i + 1}input`).innerHTML = options[i].name;
        getElement(`option${i + 1}label`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false
    }

    correct = options[Math.round(Math.random() * (options.length-1))]
    getElement("tagavor").src = correct.nkar;
}

function timer() {
    setTimeout(finish, second * 1000)
    getElement("time").innerHTML = second;
    let countdown = setInterval(function () {
        second--;
        getElement("time").textContent = second;
        if (second <= 0) {
            clearInterval(countdown);
        }
        if (second === 7) {
            getElement("time").style.color = "green";
        }
        if (second === 5) {
            getElement("time").style.color = "yellow";
        }
        if (second === 3) {
            getElement("time").style.color = "red";
        }
    }, 1000)

}
function check() {
    let input;
    try {
        input = document.querySelector('input[name="option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++
        getElement("score").innerHTML = correctAnswer
    } else {
        incorrectAnswer++
    }
    main();
}



function finish() {
    {
        clearInterval(checkInterval);
        let partencage = Math.round((correctAnswer / (correctAnswer + incorrectAnswer))* 100);  
        if (isNaN(partencage)) {
            resultForAnswers = "duq patasxan chuneq";
        } else {
            if (partencage >= 75 && partencage <= 95) {
                resultForAnswers = "duq cucabereciq lav ardyunq"
            } else if (partencage >= 95) {
                resultForAnswers = "duq cucabereciq gerazanc ardyunq"
            }
            getElement("alertaccuracy").innerHTML = ` duq vastakeciq${resultForAnswers}`
        }

    }
}
function refresh() {
    location = location;

}
let checkInterval = setInterval(check, 50);
main();
timer();
// {
//     clearInterval(checkInterval);
//     let partencage = Math.round((correctAnswer / (correctAnswer + incorrectAnswer)))
//     if (isNaN(partencage)) {
//         resultForAnswers = "duq patasxan chuneq";
//     } else {
//         if (partencage >= 75 && partencage <= 95) {
//             resultForAnswers = "duq cucabereciq lav ardyunq"
//         } else if (partencage >= 95) {
//             resultForAnswers = "duq cucabereciq gerazanc ardyunq"
//         }
//         getElement("alertaccuracy").innerHTML = `${resultForAnswers}`
//     }

// }



