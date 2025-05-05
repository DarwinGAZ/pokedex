var sElement = document.querySelector(".p_s");
var mElement = document.querySelector(".p_m");
var hElement = document.querySelector(".p_h");

function Digital() {
    const digitalDiv = document.querySelector(".digital");
    const data = new Date();
    const hr = String(data.getHours()).padStart(2, "0");
    const min = String(data.getMinutes()).padStart(2, "0");
    const seg = String(data.getSeconds()).padStart(2, "0");

    digitalDiv.innerHTML = `${hr}:${min}:${seg}`;

    var sDeg = (360 / 60) * seg - 90;
    var mDeg = (360 / 60) * min - 90;
    var hDeg = (360 / 12) * hr - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(Digital, 1000);
Digital();
