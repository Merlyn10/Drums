var num=document.querySelectorAll(".drum").length
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btn=this.innerHTML
        switch(btn){
        case '1':var audio=new Audio("Sounds/s1.mp3")
        audio.play();
        break;
        case '2':var audio=new Audio("Sounds/s2.mp3")
        audio.play();
        break;
        case '3':var audio=new Audio("Sounds/s3.mp3")
        audio.play();
        break;
        case '4':var audio=new Audio("Sounds/s4.mp3")
        audio.play();
        break;
        case '5':var audio=new Audio("Sounds/s5.mp3")
        audio.play();
        break;
        case '6':var audio=new Audio("Sounds/s6.mp3")
        audio.play();
        break;
        case '7':var audio=new Audio("Sounds/s7.mp3")
        audio.play();
        break;
        }

    })
}
document.addEventListener("keypress",function(e){
    var key=e.key
    switch(key){
        case '1':var audio=new Audio("Sounds/s1.mp3")
        audio.play();
        break;
        case '2':var audio=new Audio("Sounds/s2.mp3")
        audio.play();
        break;
        case '3':var audio=new Audio("Sounds/s3.mp3")
        audio.play();
        break;
        case '4':var audio=new Audio("Sounds/s4.mp3")
        audio.play();
        break;
        case '5':var audio=new Audio("Sounds/s5.mp3")
        audio.play();
        break;
        case '6':var audio=new Audio("Sounds/s6.mp3")
        audio.play();
        break;
        case '7':var audio=new Audio("Sounds/s7.mp3")
        audio.play();
        break;
        default :console.log(e.key)
        }
})