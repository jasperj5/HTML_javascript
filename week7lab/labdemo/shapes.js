window.onload = function(){
    //your code will go here
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var deg = 45
    var timer = requestAnimationFrame(draw);
    var x = 0;

    var rotatingBox = [];
    var count = 10

    function GameObject(){
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = this.w;
        this.deg = 0
        this.vx = 1
        this.vy = 1
        this.color = 'rgb(${Math.random()*255),$(Math.random()*255})';

        this.drawBox = function(){
            ctx.save();
            cts.fillStyle = this.color
            ctx.fillRect (this.x, this.y, this.h, this.w)
        }

        this.drawRotateBox = function(){
            ctx.save();
            ctx.fillStyle = this.color
            ctx.translate
        }
    }
    var box = new GameObject
    box.x = 0;
    box.y = 300;

    var rotatingBox = new GameObject();
    rotatingBox.x = 300
    rotatingBox.y = 300

    for(var i = 0; i < count; i++){
        rotatingBox[i] = new GameObject();
        rotatingBox[i].x = i * rotatingBox[i].w;
        rotatingBox[i].y = 100;

        if(rotatingBox[i].x > c.width){
            rotatingBox[i].y = rotatingBox[i].h + rotatingBox[i].y + 100;
            rotatingBox[i].x = 0

        }
    }


    

    //this is where we will draw stuff for the example
    function draw(){
       /* ctx.clearRect(0,0,c.width, c.height)
        
        ctx.fillStyle = "blue"
        ctx.save();
        ctx.translate (c.width/2, c.height/2);
        ctx.rotate(deg+=1 * Math.PI/180);
        ctx.fillRect(0-100, 0-100, 200,200);
        ctx.restore();

        ctx.fillRect(x +=1 , 100, 20,20)
        */
        ctx.clearRect(0,0,c.width, c.height)

        box.drawBox

        for(var i = 0; i < rotatingBox.length);


        timer = requestAnimationFrame(draw)

    }

    draw();
}