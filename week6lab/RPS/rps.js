//
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];

//when button is clickedplay game
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
    var cpuChoice = Math.floor(Math.random()*2.9999)
    switch(playersChoice){
        case 0:
            if(cpuChoice === 0){
                alert("Computer choose Rock, You Tied")

            }  
            else if(cpuChoice === 1){
                alert("Cpu chooses Paper, you lose")
            }
            else{
                alert("Cpu chooses Scissors You Win!")
            }
        break;
        case 1:
            if(cpuChoice === 1){
                alert("Computer choose Paper, You Tied")

            }  
            else if(cpuChoice === 2){
                alert("Cpu chooses Scissors, you lose")
            }
            else{
                alert("Cpu chooses Rock You Win!")
            }    
        break;
        case 2:
            if(cpuChoice === 2){
                alert("Computer choose Scissors, You Tied")

            }  
            else if(cpuChoice === 0){
                alert("Cpu chooses Rock, you lose")
            }
            else{
                alert("Cpu chooses Paper You Win!")
            }
        break;
    }
}
