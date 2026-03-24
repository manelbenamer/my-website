let noBtn = document.getElementById("btn2");

noBtn.onmouseover = function() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 300 + "px";
};