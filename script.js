function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + pageNumber).classList.add("active");

    if(pageNumber === 3) startGame();
if(pageNumber === 6) startTyping(); // karena confession sekarang page6
if(pageNumber === 5) startSurprise();

}

/* GAME */
let score = 0;

function startGame() {
    const area = document.getElementById("gameArea");
    area.innerHTML = "";
    score = 0;
    document.getElementById("score").innerText = "0 / 3";

    for(let i=0;i<5;i++){
        let heart = document.createElement("div");
        heart.innerHTML = "💛";
        heart.classList.add("heart");
        heart.style.top = Math.random()*250 + "px";
        heart.style.left = Math.random()*90 + "%";

        heart.onclick = function(){
            score++;
            heart.remove();
            document.getElementById("score").innerText = score + " / 3";
            if(score >= 3) nextPage(4);

        }

        area.appendChild(heart);
    }
}

/* Typing */
function startTyping(){
    const text = "For My King 👑";
    let i = 0;
    const el = document.getElementById("typing");
    el.innerHTML = "";
    function type(){
        if(i < text.length){
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type,100);
        }
    }
    type();
}

/* Button Kabur */
document.addEventListener("mousemove", function(e){
    const noBtn = document.getElementById("noBtn");
    if(!noBtn) return;

    const rect = noBtn.getBoundingClientRect();
    if(Math.abs(e.clientX - rect.left) < 60 &&
       Math.abs(e.clientY - rect.top) < 60){
        noBtn.style.position = "absolute";
        noBtn.style.top = Math.random()*400 + "px";
        noBtn.style.left = Math.random()*400 + "px";
    }
});

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.6;
    music.play().catch(err => {
        console.log("Error:", err);
        alert("Klik sekali lagi yaa 🎵");
    });
}

/* Typing Effect Page 0 */
function startValentineTyping() {
    const text = "Happy Valentine’s Day Sayang 💖";
    let i = 0;
    const speed = 80;
    const el = document.getElementById("valentineTyping");

    if (!el) return;

    el.innerHTML = "";

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            const sub = document.getElementById("subText");
            const btn = document.getElementById("enterBtn");

            if (sub) sub.classList.remove("hidden");
            if (btn) btn.classList.remove("hidden");
        }
    }

    type();
}

/* Jalankan saat halaman load */
document.addEventListener("DOMContentLoaded", function() {
    startValentineTyping();
});

    function fakeChoice() {
    nextPage(5);
}

