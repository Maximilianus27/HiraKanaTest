let txt = document.querySelector("#textWord");
        let msg = document.querySelector("#message");
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
                h: "\u305D",
                romaji: "ki"
            },
            {
                h: "\u305F",
                romaji: "ku"
            },
            {
                h: "\u3051",
                romaji: "ke"
            },
            {
                h: "\u3053",
                romaji: "ko"
            }
        ];
        
        function play(){

            num = Math.floor(Math.random() * hiragana.length);
            
            console.log(hiragana[num].h);
            txt.textContent = hiragana[num].h;
        }

        function chechkAnswer(){
            if(myAnswer.value == ""){
                msg.style.color = "black";
                msg.textContent = "Silahkan isi terlebih dahulu";
            }else if(myAnswer.value == hiragana[num].romaji){
                msg.style.color = "greenyellow";
                msg.textContent = "BENAR!!";
            }else{
                msg.style.color = "crimson";
                msg.textContent = "SALAH";
            }

            setTimeout(()=>{
                myAnswer.value = ""
                msg.textContent = ""
                play();
            },2500)

        }

        play();