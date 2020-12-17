var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = true;
var score = 0;
var gameStates = [];
var currentState = 0;
var x = document.createElement("IMG");
var shipImage = new Image();
shipImage.src = "images/spaceship.png"
shipImage.onload = function(){
    main();
}
var asteroidImage = new Image();
asteroidImage.src = "images/astroid.png"
asteroidImage.onload = function(){
    main();
}

var menuImage = new Image();
menuImage.src = "images/title_screen.png";
menuImage.onload = function(){
    main();
}
var deathMenuImage = new Image();
deathMenuImage.src = "images/Alien-mouth-700x1050.png";
deathMenuImage.onload = function(){
    main();
}





function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(50,15);
    this.x = randomRange(c.width - this.radius, 0 + this.radius)+ c.width;
    this.y = randomRange(c.height - this.radius, 0 + this.radius);
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10,5);
    this.color = "white";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.closePath();
        context.fill();
        context.drawImage(asteroidImage, this.x, this.y, this.radius, this.radius);
        context.restore();
    }
}

function gameStart() {
    //for loop to create the intances of the asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }
    //create the instance of the ship for the game
    ship = new PlayerShip();
}

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 25;
    this.h = 25;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = -30;
    //x.setAttribute("src", "images/spaceship.jpg");
    //x.setAttribute("alt", "Space ship");
    //document.body.appendChild(x);

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this drws the flame behind the ship
        if(this.up == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == -30){
                this.flamelength = 10;
            }
            else{
                this.flamelength = -30;
            }
            context.fillStyle = "orange";
            context.beginPath();
            context.moveTo(this.flamelength, 0);
            context.lineTo(0, -5);
            context.lineTo(0, 5);
            context.lineTo( this.flamelength, 0);
            context.closePath();
            context.fill();
            context.restore();
        }
        //context.fillStyle = "red";
        //context.fillRect(-this.w/2,-this.h/2, this.w, this.h)
        context.drawImage(shipImage, -15, -10, 25, 20);

        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        console.log(this.x, this.y, c.width,c.height);
        //adds boundaries and keeps ship on the screen
        if(this.x > c.width - 20){
            this.x = c.width - 20;
            this.vx = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.x < 0 + 13){
            this.x = 13;
            this.vx = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.y > c.height - 10){
            this.y = c.height - 10;
            this.vy = 0;
        }
        //left side
        if(this.y < 0 + 10){
            this.y =  10;
            this.vy = 0;
        }
    }
}


document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);


function keyPressDown(e){
    //console.log("Key Down " + e.keyCode);
    if (gameOver == false) {
        if (e.keyCode === 87) {
            ship.up = true;
        }
        if (e.keyCode === 83) {
            ship.down = true;
        }
        if (e.keyCode === 68) {
            ship.left = true;
        }
        if (e.keyCode === 65) {
            ship.right = true;
        }
    }

    if(gameOver == true){
        if (e.keyCode === 13) {
            

            if (currentState == 2) {
                score = 0;
                numAsteroids = 10;
                asteroids = [];
                gameStart();
            
                currentState = 0;
                main();

            }
            else {
                gameStart();
                gameOver = false;
                currentState = 1;
                main();
                scoreTimer();
            }
        }
    }
}
    


function keyPressUp(e){
    console.log("Key Up " + e.keyCode);
    if(gameOver == false){
        if(e.keyCode === 87){
            ship.up = false;
        }
        if(e.keyCode === 83){
            ship.down = false;
        }
        if(e.keyCode === 68){
            ship.left = false;
        }
        if(e.keyCode === 65){
            ship.right = false;
        }
    }
}





//Game States for menus and gameplay
gameStates[0] = function(){
    
    context.save();
    var link = document.getElementById('link');
    context.drawImage(menuImage,0,0,c.width,c.height); //= "images/title_screen.png";
    context.fillStyle = "white"
    context.font = "20px 'Press Start 2P'";
    context.textAlign = "center";
    context.fillText("Alien Avoider",c.width/2,c.height/2 - 30);
    context.font = "15px 'Press Start 2P'";
    context.fillText("Press Enter to Begin", c.width/2,c.height/2 + 20);
    context.restore();   
}

gameStates[1] = function(){
    //Game code from main function goes here
    //display score
    context.save();
    
    context.font = "15px 'Press Start 2P'"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30);
    context.restore();

    //ship.vy += gravity;

    if(ship.up == true){
        ship.vx = 10;
    }
    else{
        ship.vx = -3;
    }

    if(ship.left == true){
        ship.vy = 3;
    }
    else if(ship.right == true){
        ship.vy = -3;
    }
    else{
        ship.vy = 0;
    }

    for(var i = 0; i<asteroids.length; i++){
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
           // console.log("We collided with Asteroid " + i);
            gameOver = true;
            currentState = 2;
            //document.removeEventListener('keydown', keyPressDown);
            //document.removeEventListener('keyup', keyPressUp);
        }

        //checks to see if asteroid is off screen
        if(asteroids[i].x < - asteroids[i].radius){
            //reset steroids position off screen 
            asteroids[i].y = randomRange(c.height - asteroids[i].radius/2, 0 + asteroids[i].radius);
            asteroids[i].x = randomRange(c.width - asteroids[i].radius/2, 0 + asteroids[i].radius/2)+c.width;
        }
        if(gameOver == false){
            asteroids[i].x += asteroids[i].vx;
        }
        asteroids[i].draw();
    }

    ship.draw();
    if(gameOver == false){
      ship.move();  
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
}

gameStates[2] = function(){
    context.save();
    context.drawImage(deathMenuImage,0,0,c.width,c.height);
    context.font = "20px 'Press Start 2P'";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Game Over Your score was : " + score.toString() , 400, 495 - 30);
    context.font = "15px 'Press Start 2P'";
    context.fillText("Press Enter to Play Again", 400, 500  + 20);
    context.restore();
}



function main(){
    context.clearRect(0,0, c.width, c.height);
    /*
        this is where our original game code was
    */
    
    if (gameOver == false) {
        timer = requestAnimationFrame(main);
    }
    gameStates[currentState]();
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        //console.log(score);
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer,1000);
    }
}
//scoreTimer();

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}
