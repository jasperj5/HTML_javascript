var c = document.querySelector('canvas');
var context = c.getContext("2d")
var timer = requestAnimationFrame(main);
var gravity = 1
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = false
var score = 0
var gameStates = [];
var currentState = 0;
var ship;


function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//Class for the Astriods
function Asteriods() {
    this.radius = randomRange(10, 5)
    this.x = randomRange(c.width - this.radius, 0 + this.radius);
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height;
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10, 5);
    this.color = "white"

    this.draw = function () {
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.closePath();
        context.fill();
        context.restore();
    }
}

//for loop to create the intences of the astroids
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteriods();
}


function PlayerShip() {
    this.x = c.width / 2;
    this.y = c.height / 2;
    this.w = 0;
    this.h = 0;
    this.vx = 0
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30
    


    this.draw = function () {
        context.save();
        context.translate(this.x, this.y);
        //this draws flame behind ship
        if (this.up == true) {
            context.save();
            if (this.flamelength == true) {
                this.flamelength = 10;
            }
            else {
                this.flamelength = 30;
            }
            context.fillStyle = "orange";
            context.beginPath();
            context.moveTo(0, this.flamelength);
            context.lineTo(5, 5);
            context.lineTo(-5, 5);
            context.lineTo(0, this.flamelength);
            context.closePath();
            context.fill();
            context.restore();

        }
        context.beginPath();
        context.fillStyle = "red";
        context.moveTo(0, -13);
        context.lineTo(10, 10);
        context.lineTo(-10, 10);
        context.lineTo(0, -13);
        context.closePath();
        context.fill();

        context.restore();
    }


    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > c.height - 20) {
            this.y = c.height - 20;
            this.vy = 0;
        }
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        if(this.x < 0 + 10){
            this.x = 10;
            this.vx = 0;
        }
    }
}

//create the instance of the ship for the game
var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e) {
    console.log("Key Down" + e.keyCode);
    if (e.keyCode === 38) {
        ship.up = true
    }
    if (e.keyCode === 37) {
        ship.left = true
    }
    if (e.keyCode === 39) {
        ship.right = true
    }
    if (e.keyCode === 87) {
        ship.up = true
    }
    if (e.keyCode === 65) {
        ship.left = true
    }
    if (e.keyCode === 68) {
        ship.right = true
    }

}
if(e.keyCode === 13){
    gameOver = false;

    if
}

function keyPressUp(e) {
    //console.log("Key up" + e.keyCode)
    if(gameOver == false)
    if (e.keyCode === 38) {
        ship.up = false;
    }
    if (e.keyCode === 37) {
        ship.left = false;
    }
    if (e.keyCode === 39) {
        ship.right = false;
    }
    if (e.keyCode === 87) {
        ship.up = false
    }
    if (e.keyCode === 65) {
        ship.left = false
    }
    if (e.keyCode === 68) {
        ship.right = false
    }
}

//game states for menus and gameplay

gameStates[0] = function(){
    context.save();
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Press Enter to Start", c.width/2, c.height/2 - 30)
}
gameStates[1] = function(){

}
 context.save();
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30)
    context.restore();

    //ship.vy += gravity;

    if (ship.up === true) {
        ship.vy = -3;
    }
    else{
        ship.vy = 3;
    }
    if (ship.left === true) {
        ship.vx = -3;
    }
    else if (ship.right === true) {
        ship.vx = 3;
    }
    else {
        ship.vx = 0;
    }
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));

        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            //console.log("we collided with Asteroid" + i)
            gameOver = true;
            //document.removeEventListener('keydown', keyPressDown);
            //document.removeEventListener('keyup', keyPressUp);
        }
        if(asteroids[i].y > c.height + asteroids[i].radius){
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
            asteroids[i].y = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;

        }
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy;
        }
        asteroids[i].draw();
    }
    ship.draw();
    if(gameOver == false){
        ship.move();
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteriods)
    }
}

gameStates[2] = function
    

function main() {
    context.clearRect(0, 0, c.width, c.height);
/*
    context.save();
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30)
    context.restore();

    //ship.vy += gravity;

    if (ship.up === true) {
        ship.vy = -3;
    }
    else{
        ship.vy = 3;
    }
    if (ship.left === true) {
        ship.vx = -3;
    }
    else if (ship.right === true) {
        ship.vx = 3;
    }
    else {
        ship.vx = 0;
    }
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));

        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            //console.log("we collided with Asteroid" + i)
            gameOver = true;
            document.removeEventListener('keydown', keyPressDown);
            document.removeEventListener('keyup', keyPressUp);
        }
        if(asteroids[i].y > c.height + asteroids[i].radius){
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
            asteroids[i].y = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;

        }
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy;
        }
        asteroids[i].draw();
    }
    ship.draw();
    if(gameOver == false){
        ship.move();
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteriods)
    }
    timer = requestAnimationFrame(main);
*/
timer = requestAnimationFrame(main);
}




function scoreTimer(){
    if(gameOver == false){
        score++;
        if(score += 0)
        setTimeout(scoreTimer,1000)
    }

}
scoreTimer();
    
function detectCollision(distance, calcdistance){
    return distance < calcdistance;
}