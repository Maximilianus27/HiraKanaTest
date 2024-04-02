let body = document.querySelector("body");

let txt = document.querySelector("#textWord");
let msg = document.querySelector("#message");
let correctTxt = document.querySelector("#correct-answer");
let wrongTxt = document.querySelector("#wrong-answer");
let correctTxtM = document.querySelector("#cont-correct-answer > #correct-answer");
let wrongTxtM = document.querySelector("#cont-wrong-answer > #wrong-answer");
let myAnswer = document.querySelector("#myAnswer");
let theme = document.querySelector("#theme-toogle");
let themeM = document.querySelector("#cont-theme-toogle > #theme-toogle");
let num;
let hk;
const hika = ["k", "h"];
const hiraKana = [
    {
        h: "\u3042",
        k: "\u30A2",
        romaji: "a"
    },
    {
        h: "\u3044",
        k: "\u30A4",
        romaji: "i"
    },
    {
        h: "\u3046",
        k: "\u30A6",
        romaji: "u"
    },
    {
        h: "\u3048",
        k: "\u30A8",
        romaji: "e"
    },
    {
        h: "\u304A",
        k: "\u30AA",
        romaji: "o"
    },
    {
        h: "\u304B",
        k: "\u30AB",
        romaji: "ka"
    },
    {
        h: "\u304C",
        k: "\u30AC",
        romaji: "ga"
    },
    {
        h: "\u304D",
        k: "\u30AD",
        romaji: "ki"
    },
    {
        h: "\u304E",
        k: "\u304E",
        romaji: "gi"
    },
    {
        h: "\u304F",
        k: "\u30AF",
        romaji: "ku"
    },
    {
        h: "\u3050",
        k: "\u3050",
        romaji: "gu"
    },
    {
        h: "\u3051",
        k: "\u30B1",
        romaji: "ke"
    },
    {
        h: "\u3052",
        k: "\u30B2",
        romaji: "ge"
    },
    {
        h: "\u3053",
        k: "\u30B3",
        romaji: "ko"
    },
    {
        h: "\u3054",
        k: "\u30B4",
        romaji: "go"
    },
    {
        h: "\u3055",
        k: "\u30B5",
        romaji: "sa"
    },
    {
        h: "\u3056",
        k: "\u30B6",
        romaji: "za"
    },
    {
        h: "\u3057",
        k: "\u30B7",
        romaji: "shi"
    },
    {
        h: "\u3058",
        k: "\u30B8",
        romaji: "zi"
    },
    {
        h: "\u3059",
        k: "\u30B9",
        romaji: "su"
    },
    {
        h: "\u305A",
        k: "\u30BA",
        romaji: "zu"
    },
    {
        h: "\u305B",
        k: "\u30BB",
        romaji: "se"
    },
    {
        h: "\u305C",
        k: "\u30BC",
        romaji: "ze"
    },
    {
        h: "\u305D",
        k: "\u30BD",
        romaji: "so"
    },
    {
        h: "\u305E",
        k: "\u30BE",
        romaji: "zo"
    },
    {
        h: "\u305F",
        k: "\u30BF",
        romaji: "ta"
    },
    {
        h: "\u3060",
        k: "\u30C0",
        romaji: "da"
    },
    {
        h: "\u3061",
        k: "\u30C1",
        romaji: "chi"
    },
    {
        h: "\u3062",
        k: "\u30C2",
        romaji: "di"
    },
    {
        h: "\u3064",
        k: "\u30C4",
        romaji: "tsu"
    },
    {
        h: "\u3065",
        k: "\u30C5",
        romaji: "du"
    },
    {
        h: "\u3066",
        k: "\u30C6",
        romaji: "te"
    },
    {
        h: "\u3067",
        k: "\u30C7",
        romaji: "de"
    },
    {
        h: "\u3068",
        k: "\u30C8",
        romaji: "to"
    },
    {
        h: "\u3069",
        k: "\u30C9",
        romaji: "do"
    },
    {
        h: "\u306A",
        k: "\u30CA",
        romaji: "na"
    },
    {
        h: "\u306B",
        k: "\u30CB",
        romaji: "ni"
    },
    {
        h: "\u306C",
        k: "\u30CC",
        romaji: "nu"
    },
    {
        h: "\u306D",
        k: "\u30CD",
        romaji: "ne"
    },
    {
        h: "\u306E",
        k: "\u30CE",
        romaji: "no"
    },
    {
        h: "\u306F",
        k: "\u30CF",
        romaji: "ha"
    },
    {
        h: "\u3070",
        k: "\u30D0",
        romaji: "ba"
    },
    {
        h: "\u3071",
        k: "\u30D1",
        romaji: "pa"
    },
    {
        h: "\u3072",
        k: "\u30D2",
        romaji: "hi"
    },
    {
        h: "\u3073",
        k: "\u30D3",
        romaji: "bi"
    },
    {
        h: "\u3074",
        k: "\u30D4",
        romaji: "pi"
    },
    {
        h: "\u3075",
        k: "\u30D5",
        romaji: "fu"
    },
    {
        h: "\u3076",
        k: "\u30D6",
        romaji: "bu"
    },
    {
        h: "\u3077",
        k: "\u30D7",
        romaji: "pu"
    },
    {
        h: "\u3078",
        k: "\u30D8",
        romaji: "he"
    },
    {
        h: "\u3079",
        k: "\u30D9",
        romaji: "be"
    },
    {
        h: "\u307A",
        k: "\u30DA",
        romaji: "pe"
    },
    {
        h: "\u307B",
        k: "\u30DB",
        romaji: "ho"
    },
    {
        h: "\u307C",
        k: "\u30DC",
        romaji: "bo"
    },
    {
        h: "\u307D",
        k: "\u30DD",
        romaji: "po"
    },
    {
        h: "\u307E",
        k: "\u30DE",
        romaji: "ma"
    },
    {
        h: "\u307F",
        k: "\u30DF",
        romaji: "mi"
    },
    {
        h: "\u3080",
        k: "\u30E0",
        romaji: "mu"
    },
    {
        h: "\u3081",
        k: "\u30E1",
        romaji: "me"
    },
    {
        h: "\u3082",
        k: "\u30E2",
        romaji: "mo"
    },
    {
        h: "\u3084",
        k: "\u30E4",
        romaji: "ya"
    },
    {
        h: "\u3086",
        k: "\u30E6",
        romaji: "yu"
    },
    {
        h: "\u3088",
        k: "\u30E8",
        romaji: "yo"
    },
    {
        h: "\u3089",
        k: "\u30E9",
        romaji: "ra"
    },
    {
        h: "\u308A",
        k: "\u30EA",
        romaji: "ri"
    },
    {
        h: "\u308B",
        k: "\u30EB",
        romaji: "ru"
    },
    {
        h: "\u308C",
        k: "\u30EC",
        romaji: "re"
    },
    {
        h: "\u308D",
        k: "\u30ED",
        romaji: "ro"
    },
    {
        h: "\u308F",
        k: "\u30EF",
        romaji: "wa"
    },
    {
        h: "\u3092",
        k: "\u30F2",
        romaji: "wo"
    },
    {
        h: "\u3093",
        k: "\u30F3",
        romaji: "n"
    },
];

let correctAns =  0;
let wrongAns =  0;

function play(){

    correctAns = localStorage.getItem("correct") || 0;
    wrongAns = localStorage.getItem("wrong") || 0;

    hk = Math.floor(Math.random() * hika.length);
    num = Math.floor(Math.random() * hiraKana.length);
    switch (hika[hk]) {
        case "h":
            console.log(hiraKana[num].h);
            txt.textContent = hiraKana[num].h;
            break;
        case "k":
            console.log(hiraKana[num].k);
            txt.textContent = hiraKana[num].k;
            break;
    }
}

document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        chechkAnswer()
    };
});

function nextQuestion() {
    correctTxt.textContent = correctAns;
    wrongTxt.textContent = wrongAns;
    correctTxtM.textContent = correctAns;
    wrongTxtM.textContent = wrongAns;

    localStorage.setItem("correct", correctAns);
    localStorage.setItem("wrong", wrongAns);

    setTimeout(()=>{
        msg.style.background = "transparent";
        msg.textContent = "";
        if( body.classList == "light"){
            txt.style.color = "var(--darkText)";
        }else{
            txt.style.color = "var(--lightText)";
        }
        play();
    },2500);
}

function chechkAnswer(){
    if(myAnswer.value == "")
    {
        if( body.classList == "light"){
            msg.style.color = "var(--darkText)";
        }else{
            msg.style.color = "var(--lightText)";
        }
        msg.textContent = "Silahkan isi terlebih dahulu";
        msg.classList.add("shake-animation");
    }
    else 
    if(myAnswer.value.toLowerCase() == hiraKana[num].romaji)
    {
        msg.style.padding = "1em";
        msg.style.color = "whitesmoke";
        msg.style.background = "green";
        msg.textContent = "BENAR";
        myAnswer.value = "";
        
        txt.classList.add("pulse-animation");
        txt.style.color = "var(--succesText)";

        correctAns++;

        nextQuestion();
    }
    else
    {
        msg.style.padding = "1em";
        msg.style.color = "white";
        msg.style.background = "crimson";
        msg.innerHTML = "<strong>" + hiraKana[num].romaji.toUpperCase();
        myAnswer.value = "";
        
        txt.classList.add("shake-animation");
        txt.style.color = "var(--dangerText)";

        wrongAns++;

        nextQuestion();
    }

    setTimeout(() => {
        txt.classList.remove("pulse-animation");
        txt.classList.remove("shake-animation");
        msg.classList.remove("shake-animation");
    }, 1500);

}   

play();

// THEME SYSTEMS

theme.addEventListener("click", ()=>{themeSwitch();})
themeM.addEventListener("click", ()=>{themeSwitch();})
function themeSwitch(){
    // HIIIITAAAAAMMMMM
    if( body.classList == "light")
    {
        theme.children[0].classList.remove("fa-moon");
        theme.children[0].classList.add("fa-sun");

        txt.style.color = "var(--lightText)";
        
        body.classList.remove("light");
        body.classList.add("dark");
        body.style.color = "var(--lightText)"
        body.style.backgroundColor = "var(--darkMode)"
    }
    // TTEEEEEEEEERAAAAAAAAAAAAAAAANGGGGGGGGGGGGG
    else
    {
        theme.children[0].classList.remove("fa-sun");
        theme.children[0].classList.add("fa-moon");
        
        txt.style.color = "var(--darkText)";

        body.classList.remove("dark");
        body.classList.add("light");
        body.style.color = "var(--darkText)"
        body.style.backgroundColor = "var(--lightMode)"
    }
}
themeSwitch();