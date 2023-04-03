var main = document.querySelector("#자막박스");

var 위 = document.querySelector("#자막.위");
var 중간 = document.querySelector("#자막.중간");
var 아래 = document.querySelector("#자막.아래");

var lyrics = [
    "첫번째 라인은 Light체로 표시됩니다\n두번째 라인부터\nBold체로 표시됩니다",
    "첫번째 라인은 Light체로 표시됩니다\n두번째 라인부터\nBold체로 표시됩니다"
];
var line = 0;

/*
document.querySelector("#textAlign").addEventListener("input", e => {
    console.log("글자 정렬 변경");
    main.className = `${e.target.value}-align`;
})
*/

document.querySelector("#apply").addEventListener("click", e => {
    line = -1;

    var speed = parseInt(document.querySelector("#speed").value) / 1000;

    [위, 중간, 아래].forEach(e => {
        e.style = `animation-duration: ${speed}s !important`;
        e.classList.remove("퇴장");
        e.classList.remove("메인");
        e.classList.remove("등장");
        e.querySelectorAll("p").forEach(p => {
            p.innerHTML = "";
        });
    })

    lyrics = document.querySelector("#lyrics").value.split("\n\n");

    for (var i = 0; i < lyrics.length; i++) {
        Next();
    }
    for (var i = 0; i < lyrics.length; i++) {
        Previous();
    }
    line = -1;

    console.log(lyrics);
});

document.querySelector("#next").addEventListener("click", e => {
    Next();
});

document.querySelector("#previous").addEventListener("click", e => {
    Previous();
});

window.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft") {
        Previous();
    }
    else if (e.code === "ArrowRight") {
        Next();
    }
});

function CreateLyricBox(position = "중간") {
    var div = document.createElement("div");
    div.id = "자막";
    div.className = position;

    var jp = document.createElement("p"); jp.className = "일어";
    var ro = document.createElement("p"); ro.className = "발음";
    var kr = document.createElement("p"); kr.className = "뜻";

    div.appendChild(jp);
    div.appendChild(ro);
    div.appendChild(kr);

    return div;
}

function Next() {
    var previous_lyrics = lyrics[line - 1]?.split("\n") ?? ['.', '.', '.'];
    var current_lyrics = lyrics[line]?.split("\n") ?? ['.', '.', '.'];
    var next_lyrics = lyrics[line + 1]?.split("\n") ?? ['.', '.', '.'];

    위.classList.toggle("반대", false);
    중간.classList.toggle("반대", false);
    아래.classList.toggle("반대", false);

    위.classList.remove("퇴장");
    중간.classList.remove("메인");
    아래.classList.remove("등장");

    void 위.offsetWidth;
    void 중간.offsetWidth;
    void 아래.offsetWidth;

    위.classList.add("퇴장");
    중간.classList.add("메인");
    아래.classList.add("등장");

    for (var i = 0; i < 3; i++) {
        if (previous_lyrics[i] == "." || previous_lyrics[i] == "간주중") {
            위.children[i].classList.toggle("얇게", true);
            위.children[i].innerHTML = previous_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            위.children[i].classList.toggle("얇게", false);
            위.children[i].innerHTML = previous_lyrics[i];
        }

        if (current_lyrics[i] == "." || current_lyrics[i] == "간주중") {
            중간.children[i].classList.toggle("얇게", true);
            중간.children[i].innerHTML = current_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            중간.children[i].classList.toggle("얇게", false);
            중간.children[i].innerHTML = current_lyrics[i];
        }

        if (next_lyrics[i] == "." || next_lyrics[i] == "간주중") {
            아래.children[i].classList.toggle("얇게", true);
            아래.children[i].innerHTML = next_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            아래.children[i].classList.toggle("얇게", false);
            아래.children[i].innerHTML = next_lyrics[i];
        }
    }
    line += 1;
}

function Previous() {
    line -= 1;

    var previous_lyrics = lyrics[line - 1]?.split("\n") ?? ['.', '.', '.'];
    var current_lyrics = lyrics[line]?.split("\n") ?? ['.', '.', '.'];
    var next_lyrics = lyrics[line + 1]?.split("\n") ?? ['.', '.', '.'];

    위.classList.toggle("반대", true);
    중간.classList.toggle("반대", true);
    아래.classList.toggle("반대", true);

    위.classList.remove("퇴장");
    중간.classList.remove("메인");
    아래.classList.remove("등장");

    void 위.offsetWidth;
    void 중간.offsetWidth;
    void 아래.offsetWidth;

    위.classList.add("퇴장");
    중간.classList.add("메인");
    아래.classList.add("등장");

    for (var i = 0; i < 3; i++) {
        if (previous_lyrics[i] == "." || previous_lyrics[i] == "간주중") {
            위.children[i].classList.toggle("얇게", true);
            위.children[i].innerHTML = previous_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            위.children[i].classList.toggle("얇게", false);
            위.children[i].innerHTML = previous_lyrics[i];
        }

        if (current_lyrics[i] == "." || current_lyrics[i] == "간주중") {
            중간.children[i].classList.toggle("얇게", true);
            중간.children[i].innerHTML = current_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            중간.children[i].classList.toggle("얇게", false);
            중간.children[i].innerHTML = current_lyrics[i];
        }

        if (next_lyrics[i] == "." || next_lyrics[i] == "간주중") {
            아래.children[i].classList.toggle("얇게", true);
            아래.children[i].innerHTML = next_lyrics[i].replace('.', 'ㅤ');
        }
        else {
            아래.children[i].classList.toggle("얇게", false);
            아래.children[i].innerHTML = next_lyrics[i];
        }
    }
}