let second = 100
let correctAnswer = 0
let incorrectAnswer = 0
function getElement(id) {
    return document.getElementById(id);
}
function generateRandomTagavor() {
    return nkarner [Math.floor(Math.random(nkarner.lenght-1)*10)]
}
function main(){
    tag = generateRandomTagavor();
    getElement("tagavor").src = tag.nkar;

}

function timer() {
    setTimeout(finish, second * 1000)
    getElement("time").innerHTML = second;
    let countdown = setInterval(function () {
             main ();
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
    if (input === "Տիգրան 2_րդ Մեծ") {
        correctAnswer++
        getElement("score").innerHTML = correctAnswer
    } else {
        incorrectAnswer++
    }
    clearInterval(checkInterval);
}
function finish() {
    clearInterval(checkInterval);
    let parcentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    getElement("allertaccuracy").innerHTML = ` Քո արդյունքն է${parcentage}%`;
}
let checkInterval = setInterval(check, 50);
timer();




