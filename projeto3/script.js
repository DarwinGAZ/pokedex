document.querySelector(".busca").addEventListener("submit", async (e) => {
    e.preventDefault();

    var input = document.querySelector("#searchInput").value;

    if (input != "") {
        showWarning("Carregando...");

        var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(
            input
        )}&appid=a6e95219d00d02b6c213013be82e0987`;
        var results = await fetch(apiUrl);
        var json = await results.json();
        console.log(json);
    }
});

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg;
}
