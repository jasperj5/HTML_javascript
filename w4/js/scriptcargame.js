//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d')

var mario = new Image();
mario.src = 'images/MainCharacter.png'

var timer = requestAnimationFrame(draw);

var x = 0;

var start = 105;
var finish = 700;

//fuel values
var startFuel = randomRange(600,100);
var fuel = startFuel
//checks to see when we run out of fuel or pass finish line


var barfuelwidth = 300;

//start timer stuff
var sec = 3;
var fps = 60;
var frames = fps;

var car



function draw() {
    timer = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, c.width, c.height);

    //draws text
    ctx.fillStyle = 'white'
    ctx.lineWidth = 1;
    ctx.font = "60px Times New Roman";
    ctx.textAlign = "center";
    ctx.fillText("Race With The Fuel", c.width / 2, 50)
    ctx.strokeText("Race With The Fuel", c.width / 2, 50)



    drawStartline();
    drawfinishline();
    drawSprite();
    drawFuelbar();
    drawfueltext();

    if (sec > 0) {
        runStartimer();
        drawStarttimer();
    }
    else {
        if (fuel > 0) {
            x += 1;
            fuel -= 1;
        }
    }


    if (fuel <= 0 || x + 100 > finish) {
        drawResults();
    }

}

function runStartimer() {
    frames -= 1;

    if (frames < 0) {
        frames = 60;
        sec -= 1;
    }
}

function drawStarttimer() {
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width / 2, c.height / 2)
}

function drawResults() {
    if (x + 100 > finish) {
        ctx.fillStyle = 'white';
        ctx.font = "30px Arial";
        ctx.textAlign = "center"
        ctx.fillText("You Made it! YOU WIN!", c.width / 2, c.height / 2)
    }
    else {
        ctx.fillStyle = 'white';
        ctx.font = "30px Arial";
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel! Game Over! :(", c.width / 2, c.height / 2)
    }
}
function drawSprite() {
    ctx.drawImage(mario, x, 100, 200, 200);
}

function drawStartline() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(start, 58, 10, 400);

}
function drawfinishline() {
    ctx.fillStyle = 'pink'
    ctx.fillRect(finish, 956, 10, 400);
}
function drawFuelbar() {
    var currentBarwidth = barfuelwidth * getfuelpercent();
    ctx.fillStyle = 'yellow'
    ctx.backGroundimg
    ctx.fillRect(start, 75, currentBarwidth, "512px");
}
function drawfueltext() {
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(fuel.toFixed(0), start, 45);
}
function getfuelpercent() {
    return fuel / startFuel;
}