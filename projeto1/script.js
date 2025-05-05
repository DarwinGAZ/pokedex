document.body.addEventListener("keyup", (e) => {
    playSound(e.code.toLowerCase());
});

document.querySelectorAll("div[data-key]").forEach((div) => {
    div.addEventListener("click", () => {
        const key = div.getAttribute("data-key");
        playSound(key);
    });
});

document.body
    .querySelector(".composer button")
    .addEventListener("click", () => {
        input = document.body.querySelector(".composer input").value;

        if (input !== "") {
            var inputArray = input.split("");
            playInput(inputArray);
        }
    });

function playSound(sound) {
    const audio = document.querySelector(`#s_${sound}`);
    var datakey = document.querySelector(`div[data-key="${sound}"]`);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    if (datakey) {
        datakey.classList.add("active");
        setTimeout(() => {
            datakey.classList.remove("active");
        }, 100);
    }
}

function playInput(inputArray) {
    var wait = 0;
    for (let input of inputArray) {
        setTimeout(() => {
            playSound(`key${input}`);
        }, wait);

        wait += 250;
    }
}
