// In this one we created two circles travelling on their own 

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var window_height= window.innerHeight;  
var window_width= window.innerWidth;  

canvas.width=window_width;
canvas.height=window_height;

canvas.style.background="#ff8";

class Circle
{
    constructor(xpos,ypos,radius,color,text,speed)
    {
        this.xpos=xpos; 
        this.ypos=ypos; 
        this.radius=radius;
        this.color=color;
        this.text=text;
        this.speed=speed;

        this.dx=this.speed;              // 0.9 here is coeffiecient of restitution
        this.dy=this.speed;
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
    };
    
    
    update(){                    // Gameloop
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

let random_y = Math.random()*window_height;
let random_x = Math.random()*window_width;

let my_circle = new Circle(400,400,50,"black","A",5);
my_circle.draw(context);

let updatecircle = function(){
    requestAnimationFrame(updatecircle);        // Recursion
    context.clearRect(0,0,window_width,window_height);
    my_circle.update();
}

updatecircle();         //   Function call








