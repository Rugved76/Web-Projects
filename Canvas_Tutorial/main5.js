// In this one we created 10 randomly moving circles 


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

        context.arc(this.xpos,this.ypos,this.radius,0,Math.PI*2,false);
        context.lineWidth= 5;
        context.fillStyle = "red"
        context.fill();
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

//let random_y = Math.random()*window_height;
//let random_x = Math.random()*window_width;
var allcircles=[];

let randomnumber = function(min,max){
    var result=Math.random()*(max-min)+min;
    return result;
}

for(var i=0; i<10; i++){
    var radius=50;
    var random_x = randomnumber(radius,(window_width-radius));
    var random_y = randomnumber(radius,(window_height-radius));
    let my_circle = new Circle(random_x,random_y,50,"black","A",SPEED);
    allcircles.push(my_circle);
    // my_circle.draw(context);
}

let updatecircle = function(){
    requestAnimationFrame(updatecircle);        // Recursion
    context.clearRect(0,0,window_width,window_height);
    allcircles.forEach(element=>{
        element.update();
    })
}

updatecircle();         //   Function call








