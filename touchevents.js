var xStart, xEnd, yStart, yEnd;
var tolerance = 50;
var article = document.querySelectorAll(".articleFull");


window.forEach(function (div) {
    div.addEventListener("touchstart", startTouch);
    div.addEventListener("touchend", endTouch);
});

function startTouch (event) {
    xStart = event.changedTouches[0].pageX;
    yStart = event.changedTouches[0].pageY;
}

function endTouch (event) {
    xEnd = event.changedTouches[0].pageX;
    yEnd = event.changedTouches[0].pageY;

    if (xEnd > (xStart + tolerance)) {
        console.log("swiped to the right");
    }

    if (xEnd < (xStart - tolerance)) {
        console.log("Swiped to the left");
    }

    if (yEnd > (yStart + tolerance)) {
        console.log("swiped down");
    }

    if (yEnd < (yStart - tolerance)) {
        console.log("Swiped up");
    }
}