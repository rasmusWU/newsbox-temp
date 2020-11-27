slider1 = document.getElementById("slider1");
slider2 = document.getElementById("slider2");
slider3 = document.getElementById("slider3");
slider4 = document.getElementById("slider4");
slider5 = document.getElementById("slider5");

slider1.addEventListener("click", function (move) {
    if (window.localStorage.getItem("us", "on")) {
        window.localStorage.removeItem("us");
    slider1.classList.remove("moved");
} else {
    window.localStorage.setItem("us", "on");
    slider1.classList.add("moved");
}
});

if (window.localStorage.getItem("us", "on")) {
    slider1.classList.add("moved");
}

slider2.addEventListener("click", function (move) {
    if (window.localStorage.getItem("world", "on")) {
        window.localStorage.removeItem("world");
        slider2.classList.remove("moved");
    } else {
        window.localStorage.setItem("world", "on");
        slider2.classList.add("moved");
    }
});

if (window.localStorage.getItem("world", "on")) {
    slider2.classList.add("moved");
}

slider3.addEventListener("click", function (move) {
    if (window.localStorage.getItem("health", "on")) {
        window.localStorage.removeItem("health");
        slider3.classList.remove("moved");
    } else {
        window.localStorage.setItem("health", "on");
        slider3.classList.add("moved");
    }
});

if (window.localStorage.getItem("health", "on")) {
    slider3.classList.add("moved");
}

slider4.addEventListener("click", function (move) {
    if (window.localStorage.getItem("business", "on")) {
        window.localStorage.removeItem("business");
        slider4.classList.remove("moved");
    } else {
        window.localStorage.setItem("business", "on");
        slider4.classList.add("moved");
    }
});

if (window.localStorage.getItem("business", "on")) {
    slider4.classList.add("moved");
}

slider5.addEventListener("click", function (move) {
    if (window.localStorage.getItem("travel", "on")) {
        window.localStorage.removeItem("travel");
        slider5.classList.remove("moved");
    } else {
        window.localStorage.setItem("travel", "on");
        slider5.classList.add("moved");
    }
});

if (window.localStorage.getItem("travel", "on")) {
    slider5.classList.add("moved");
}