const ghost1 = document.getElementById("ghost1");
const ghost2 = document.getElementById("ghost2");
const boundary = {
    left: 0,
    right: window.innerWidth - ghost1.offsetWidth,
    top: 0,
    bottom: window.innerHeight - ghost1.offsetHeight
};
      
document.addEventListener("keydown", function(event) {
    let currentTop1 = ghost1.offsetTop;
    let currentLeft1 = ghost1.offsetLeft;
    let currentTop2 = ghost2.offsetTop;
    let currentLeft2 = ghost2.offsetLeft;

    switch (event.key) {
        case "w":
        currentTop1 = Math.max(boundary.top, currentTop1 - 10);
        ghost1.style.top = currentTop1 - 40 + "px";
        break;
        case "s":
        currentTop1 = Math.min(boundary.bottom, currentTop1 + 10);
        ghost1.style.top = currentTop1 + 40 + "px";
        break;
        case "a":
        currentLeft1 = Math.max(boundary.left, currentLeft1 - 10);
        ghost1.style.left = currentLeft1 - 40 + "px";
        ghost1.style.transform = "scaleX(-1)";
        break;
        case "d":
        currentLeft1 = Math.min(boundary.right, currentLeft1 + 10);
        ghost1.style.left = currentLeft1 + 40 + "px";
        ghost1.style.transform = "scaleX(1)";
        break;
        case "ArrowUp":
        currentTop2 = Math.max(boundary.top, currentTop2 - 10);
        ghost2.style.top = currentTop2 - 40 + "px";
        break;
        case "ArrowDown":
        currentTop2 = Math.min(boundary.bottom, currentTop2 + 10);
        ghost2.style.top = currentTop2 + 40 + "px";
        
        break;
        case "ArrowLeft":
        currentLeft2 = Math.min(boundary.right, currentLeft2 - 10);
        ghost2.style.left = currentLeft2 - 40 + "px";
        ghost2.style.transform = "scaleX(-1)";
        break;
        case "ArrowRight":
        currentLeft2 = Math.min(boundary.right, currentLeft2 + 10);
        ghost2.style.left = currentLeft2 + 40 + "px";
        ghost2.style.transform = "scaleX(1)";
        break;
    }

    });

