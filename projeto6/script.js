var currentQuestion = 0;
var correctAnswers = 0;

document
    .querySelector(".scoreArea button")
    .addEventListener("click", resetQuiz);

function showQuestion() {
    if (questions[currentQuestion]) {
        var q = questions[currentQuestion];

        var pct = (currentQuestion / questions.length) * 100;

        document.querySelector(
            ".progress .progress--bar"
        ).style.width = `${pct}%`;

        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block";

        document.querySelector(".question").innerHTML = q.question;

        document.querySelector(".options").innerHTML = "";

        for (var i in q.options) {
            document.querySelector(
                ".options"
            ).innerHTML += `<div data-op=${i} class="option"> <span>${
                Number(i) + 1
            }</span>${q.options[i]}</div>`;
        }

        document.querySelectorAll(".options .option").forEach((item) => {
            item.addEventListener("click", optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    var clickedOption = Number(e.target.getAttribute("data-op"));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
        currentQuestion++;
        showQuestion();
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    document.querySelector(".progress .progress--bar").style.width = `100%`;
    document.querySelector(".questionArea").style.display = "none";
    document.querySelector(".scoreArea").style.display = "block";

    points = Math.floor((correctAnswers / questions.length) * 100);

    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;
    document.querySelector(
        ".scoreText2"
    ).innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}`;
}

function resetQuiz() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}

showQuestion();
