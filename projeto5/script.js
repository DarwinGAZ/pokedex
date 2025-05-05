var currentColor = "black";
var canDraw = false;
var mouseX = 0;
var mouseY = 0;

var screen = document.querySelector("#tela");
var ctx = screen.getContext("2d");

document.querySelectorAll(".colorArea .color").forEach((item) => {
    item.addEventListener("click", (e) => {
        var color = e.target.getAttribute("data-color");
        currentColor = color;

        document.querySelector(".color.active").classList.remove("active");
        e.target.classList.add("active");
    });
});

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

document.querySelector(".clear").addEventListener("click", () => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (canDraw == true) {
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function draw(x, y) {
    var pointX = x - screen.offsetLeft;
    var pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}
