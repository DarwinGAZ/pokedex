document.querySelector("button").addEventListener("click", async (event) => {
    event.preventDefault();

    let searchInput = document.querySelector("#searchInput");

    if (searchInput.value != "") {
        showWarning("Carregando...");

        let url = `https://pokeapi.co/api/v2/pokemon/${searchInput.value
            .trim()
            .toLowerCase()}`;

        try {
            let results = await fetch(url);

            if (results.ok == true) {
                let json = await results.json();
                showInfo({
                    name: json.name,
                    sprite: json.sprites.front_default,
                    id: json.id,
                    sound: json.cries.latest,
                });
            } else {
                alert("Pokemon não encontrado");
                showWarning("");
            }
        } catch (error) {
            document.querySelector(".resultado").style.display = "none";
            console.error(error);
        }
    } else {
        alert("Digite o nome de um pokemon");
    }
});

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg;
}

function showInfo(json) {
    showWarning("");

    document.querySelector(".resultado").style.display = "block";

    document.querySelector(".titulo").innerHTML = String(
        json.name
    ).toUpperCase();
    document.querySelector(".pokemonInfo").innerHTML = `Pokedex: #${String(
        json.id
    ).padStart(4, 0)}`;
    document.querySelector("img").src = json.sprite;
    let audioElement = document.querySelector("audio");
    audioElement.src = json.sound;
    audioElement.volume = 0.4;
    audioElement.play();
}
