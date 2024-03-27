let txt = document.querySelector("#textWord");
let msg = document.querySelector("#message");
let correctTxt = document.querySelector("#correct-answer");
let wrongTxt = document.querySelector("#wrong-answer");
let myAnswer = document.querySelector("#myAnswer");
let num;
const hiragana = [
    {
        h: "\u3042",
        romaji: "a"
    },
    {
        h: "\u3044",
        romaji: "i"
    },
    {
        h: "\u3046",
        romaji: "u"
    },
    {
        h: "\u3048",
        romaji: "e"
    },
    {
        h: "\u304A",
        romaji: "o"
    },
    {
        h: "\u304B",
        romaji: "ka"
    },
    {
        h: "\u304C",
        romaji: "ga"
    },
    {
        h: "\u304D",
        romaji: "ki"
    },
    {
        h: "\u304E",
        romaji: "gi"
    },
    {
        h: "\u304F",
        romaji: "ku"
    },
    {
        h: "\u3050",
        romaji: "gu"
    },
    {
        h: "\u3051",
        romaji: "ke"
    },
    {
        h: "\u3052",
        romaji: "ge"
    },
    {
        h: "\u3053",
        romaji: "ko"
    },
    {
        h: "\u3054",
        romaji: "go"
    },
    {
        h: "\u3055",
        romaji: "sa"
    },
    {
        h: "\u3056",
        romaji: "za"
    },
    {
        h: "\u3057",
        romaji: "shi"
    },
    {
        h: "\u3058",
        romaji: "zi"
    },
    {
        h: "\u3059",
        romaji: "su"
    },
    {
        h: "\u305A",
        romaji: "zu"
    },
    {
        h: "\u305B",
        romaji: "se"
    },
    {
        h: "\u305C",
        romaji: "ze"
    },
    {
        h: "\u305D",
        romaji: "so"
    },
    {
        h: "\u305E",
        romaji: "zo"
    },
    {
        h: "\u305F",
        romaji: "ta"
    },
    {
        h: "\u3060",
        romaji: "da"
    },
    {
        h: "\u3061",
        romaji: "chi"
    },
    {
        h: "\u3062",
        romaji: "di"
    },
    {
        h: "\u3064",
        romaji: "tsu"
    },
    {
        h: "\u3065",
        romaji: "du"
    },
    {
        h: "\u3066",
        romaji: "te"
    },
    {
        h: "\u3067",
        romaji: "de"
    },
    {
        h: "\u3068",
        romaji: "to"
    },
    {
        h: "\u3069",
        romaji: "do"
    },
    {
        h: "\u306A",
        romaji: "na"
    },
    {
        h: "\u306B",
        romaji: "ni"
    },
    {
        h: "\u306C",
        romaji: "nu"
    },
    {
        h: "\u306D",
        romaji: "ne"
    },
    {
        h: "\u306E",
        romaji: "no"
    },
    {
        h: "\u306F",
        romaji: "ha"
    },
    {
        h: "\u3060",
        romaji: "ba"
    },
    {
        h: "\u3071",
        romaji: "pa"
    },
    {
        h: "\u3072",
        romaji: "hi"
    },
    {
        h: "\u3073",
        romaji: "bi"
    },
    {
        h: "\u3074",
        romaji: "pi"
    },
    {
        h: "\u3075",
        romaji: "fu"
    },
    {
        h: "\u3076",
        romaji: "bu"
    },
    {
        h: "\u3077",
        romaji: "pu"
    },
    {
        h: "\u3078",
        romaji: "he"
    },
    {
        h: "\u3079",
        romaji: "be"
    },
    {
        h: "\u307A",
        romaji: "pe"
    },
    {
        h: "\u307B",
        romaji: "ho"
    },
    {
        h: "\u307C",
        romaji: "bo"
    },
    {
        h: "\u307D",
        romaji: "po"
    },
    {
        h: "\u307E",
        romaji: "ma"
    },
    {
        h: "\u307F",
        romaji: "mi"
    },
    {
        h: "\u3080",
        romaji: "mu"
    },
    {
        h: "\u3081",
        romaji: "me"
    },
    {
        h: "\u3082",
        romaji: "mo"
    },
    {
        h: "\u3084",
        romaji: "ya"
    },
    {
        h: "\u3086",
        romaji: "yu"
    },
    {
        h: "\u3088",
        romaji: "yo"
    },
    {
        h: "\u3089",
        romaji: "ra"
    },
    {
        h: "\u308A",
        romaji: "ri"
    },
    {
        h: "\u308B",
        romaji: "ru"
    },
    {
        h: "\u308C",
        romaji: "re"
    },
    {
        h: "\u308D",
        romaji: "ro"
    },
    {
        h: "\u308F",
        romaji: "wa"
    },
    {
        h: "\u3092",
        romaji: "wo"
    },
    {
        h: "\u3093",
        romaji: "n"
    },
];

let correctAns =  0;
let wrongAns =  0;

function play(){
    correctAns = localStorage.getItem("correct") || 0;
    wrongAns = localStorage.getItem("wrong") || 0;

    num = Math.floor(Math.random() * hiragana.length);
    
    console.log(hiragana[num].h);
    txt.textContent = hiragana[num].h;
}

document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        chechkAnswer()
    };
});

function nextQuestion() {
    correctTxt.textContent = correctAns;
    wrongTxt.textContent = wrongAns;

    localStorage.setItem("correct", correctAns);
    localStorage.setItem("wrong", wrongAns);

    setTimeout(()=>{
        msg.style.background = "transparent";
        msg.textContent = "";
        play();
    },2500);
}

function chechkAnswer(){
    if(myAnswer.value == "")
    {
        msg.style.color = "black";
        msg.textContent = "Silahkan isi terlebih dahulu";
    }
    else 
    if(myAnswer.value.toLowerCase() == hiragana[num].romaji)
    {
        msg.style.padding = "1em";
        msg.style.color = "whitesmoke";
        msg.style.background = "green";
        msg.textContent = "BENAR";
        myAnswer.value = "";
        
        correctAns++;

        nextQuestion();
    }
    else
    {
        msg.style.padding = "1em";
        msg.style.color = "white";
        msg.style.background = "crimson";
        msg.innerHTML = "<strong>" + hiragana[num].romaji.toUpperCase();
        myAnswer.value = "";
        
        wrongAns++;

        nextQuestion();
    }

}

play();