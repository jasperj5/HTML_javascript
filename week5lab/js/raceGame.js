var cars = ["Tesla", "civic", "lightningmcqueen", "Mater",]


var c = document.querySelector
var ctx = c.getContent('2d')



function GameObject(){
    this.x = 50;
    this.y = 50;
    this.w = 50;
    this.h = 50;
    this.color ="red";
    this.speed = 1;
    this.fuel = 100;

    this.draw =function(){
        ctx.fillstyle = this.color
        ctx.fillrect(this.x, this.y, this.w, this.h)
    }

    this.move = function(){
        this.x += this.speed;
    }
}

gameStates[] = function(){
    ctx.fillstyle = "white"
    ctx.textAlign = "center"

}
gameStates[] = function(){
    for(var i = 0; i< cars.length; ixx){
        car[i].move();
        if(car[i])
    }
}
gameStates[] = function(){}