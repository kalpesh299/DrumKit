
const w=document.getElementById("w");
const a=document.getElementById("a");
const s=document.getElementById("s");
const d=document.getElementById("d");
const j=document.getElementById("j");
const k=document.getElementById("k");
const l=document.getElementById("l");


document.addEventListener("keypress",(event)=>{
    var key=event.key;
    switch(key){
        case "w":
            var sound1=new Audio("./music/crash.mp3");
            sound1.play();
           w.style.border="12px solid black"
           break;
            case "a":
                var sound2=new Audio("./music/kick-bass.mp3");
                sound2.play();
                a.style.border="12px solid black"
               
                break;
                case"s":
                var sound3=new Audio("./music/snare.mp3");
                sound3.play();
                s.style.border="12px solid black"
                break;
                case"d":
                var sound4=new Audio("./music/tom-1.mp3");
                sound4.play();
                d.style.border="12px solid black"
                break;
                case"j":
                var sound5=new Audio("./music/tom-2.mp3");
                sound5.play();
                j.style.border="12px solid black"
                break;
                case"k":
                var sound6=new Audio("./music/tom-3.mp3");
                sound6.play();
                k.style.border="12px solid black"
                break;
                case"l":
                var sound7=new Audio("./music/tom-4.mp3");
                sound7.play();
                l.style.border="12px solid black"

                break;
                 
    }
})