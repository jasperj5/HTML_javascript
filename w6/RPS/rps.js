var c = document.querySelector("canvas");
var ctx = c.getContext("2d");
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];

//when button is clickedplay game in canvas
btn[0].addEventListener('click', function(e){
    play(0);
});

btn[1].addEventListener('click', function(e){
    play(1);
});

btn[2].addEventListener('click', function(e){
    play(2);
});

function play(playersChoice){
    var cpuChoice = Math.floor(Math.random()*2.9999);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";


    switch(playersChoice){
        //nothing is showing idk where the text is supposed to go
        case 0:
            if(cpuChoice === 0){
                ctx.fillText("Computer choose Rock, You Tied", c.width / 2, c.height / 2)

            }  
            else if(cpuChoice === 1){
                ctx.fillText("Cpu chooses Paper, Ha Ha you lose", c.width / 2, c.height / 2)
            }
            else{
                ctx.fillText("Cpu chooses Scissors, Congrates You Win!", c.width / 2, c.height / 2)
            }
        break;
        case 1:
            if(cpuChoice === 1){
                ctx.fillText("Computer choose Paper, You Tied", c.width / 2, c.height / 2)

            }  
            else if(cpuChoice === 2){
                ctx.fillText("Cpu chooses Scissors, Ha Ha you lose", c.width / 2, c.height / 2)
            }
            else{
                //ctx.fillText("Message", x position, y.position);
                ctx.fillText("Cpu chooses Rock, Congrates You Win!", c.width / 2, c.height / 2)
            }    
        break;
        case 2:
            if(cpuChoice === 2){
                ctx.fillText("Computer choose Scissors, You Tied", c.width / 2, c.height / 2)
            }  
            else if(cpuChoice === 0){
                ctx.fillText("Cpu chooses Rock, Ha Ha you lose", c.width / 2, c.height / 2)
            }
            else{
                ctx.fillText("Cpu chooses Paper, Congrates You Win!", c.width / 2, c.height / 2)
            }
        break;
    }
}
