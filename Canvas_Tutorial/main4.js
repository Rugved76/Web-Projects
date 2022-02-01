// In this one we made collision detection betweeen two circles and changed their colors on collisions


const  SPEED = 5;

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var window_height= window.innerHeight;  
var window_width= window.innerWidth;  

canvas.width=window_width;
canvas.height=window_height;

canvas.style.background="#ff8";

class Circle{
    constructor(xpos,ypos,radius,color,text,speed)
    {
        this.xpos=xpos; 
        this.ypos=ypos; 
        this.radius=radius;
        this.color=color;
        this.text=text;
        this.speed=speed;

        this.dx=1*this.speed;
        this.dy=1*this.speed;
    }

    draw(context){
        context.beginPath();

        context.strokeStyle=this.color;
        context.textAlign = "center";
        context.textBaseline= "middle";
        context.font="20px Arial";
        context.fillText(this.text,this.xpos,this.ypos);      // These both work
        //context.strokeText(this.text,this.xpos,this.ypos);

        context.lineWidth= 5;
        context.arc(this.xpos,this.ypos,this.radius,0,Math.PI*2,false);
        context.stroke();
        context.closePath();
    }

    update(){        // Gameloop

        this.draw(context);

        // Collision Detection
        if((this.xpos + this.radius)>window_width || (this.xpos-this.radius)<0)
        {
            this.dx=-this.dx;
        }
        if((this.ypos-this.radius)<0 || (this.ypos+this.radius)>window_height)
        {
            this.dy=-this.dy;
        }
       
        this.xpos+=this.dx; 
        this.ypos+=this.dy;
    }
} 

let getdistance = function(xpos1,ypos1,xpos2,ypos2){
    var result = Math.sqrt(Math.pow(xpos2-xpos1,2) +Math.pow(ypos2-ypos1,2));
    return result;
}

// getdistance(my_circle.xpos,my_circle.ypos,my_circle2.xpos,my_circle2.ypos);
let my_circle = new Circle(600,200,50,"black","A",5);
let my_circle2 = new Circle(300,300,200,"black","B",0);
my_circle.draw(context);
my_circle2.draw(context);

let updatecircle = function(){
    requestAnimationFrame(updatecircle);        // Recursion
    context.clearRect(0,0,window_width,window_height);
    my_circle.update();
    my_circle2.update();
    if(getdistance(my_circle.xpos,my_circle.ypos,my_circle2.xpos,my_circle2.ypos)<my_circle2.radius+my_circle.radius)
    {
        my_circle2.color="red"
    }
    if(getdistance(my_circle.xpos,my_circle.ypos,my_circle2.xpos,my_circle2.ypos)>=my_circle2.radius+my_circle.radius)
    {
        my_circle2.color="black"
    }
}

updatecircle();         //   Function call








