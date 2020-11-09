//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d')

var mario = new Image();
mario.src = 'images/mario.png'

var timer = requestAnimationFrame(draw);

var x = 0;

var start = 105;
var finish = 700;

//fuel values
var startFuel = randomRange(600, );
var fuel = startFuel
//checks to see when we run out of fuel or pass finish line


var barfuelwidth = 300;

//start timer stuff
var sec = 3;
var fps = 60;
var frames = fps;

var car = new Car();



function draw() {
    timer = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, c.width, c.height);

    //draws text
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 1;
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Game title", c.width / 2, 50)
    ctx.strokeText("Game title", c.width / 2, 50)



    drawStartline();
    drawfinishline();
    drawCar();
    drawSprite();
    drawFuelbar();
    drawfueltext();

    car.y = 500;
    car.x = x
    car.w = 45;
    car.draw();

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
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width / 2, c.height / 2)
}

function drawResults() {
    if (x + 100 > finish) {
        ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.textAlign = "center"
        ctx.fillText("You Made it! YOU WIN!", c.width / 2, c.height / 2)
    }
    else {
        ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel! Game Over! :(", c.width / 2, c.height / 2)
    }
}
function drawSprite() {
    ctx.drawImage(mario, x, 100, 200, 200);
}

function drawCar() {
    ctx.fillStyle = 'teal'
    ctx.fillRect(x, c.height / 2, 100, 50)
}

function drawStartline() {
    ctx.fillStyle = 'green';
    ctx.fillRect(start, 100, 10, 400);

}
function drawfinishline() {
    ctx.fillStyle = 'purple'
    ctx.fillRect(finish, 100, 10, 400);
}
function drawFuelbar() {
    var currentBarwidth = barfuelwidth * getfuelpercent();
    ctx.fillStyle = 'yellow'
    ctx.fillRect(start, 75, currentBarwidth, 20);
}
function drawfueltext() {
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText(fuel.toFixed(0), start, 45);
}
function getfuelpercent() {
    return fuel / startFuel;
}