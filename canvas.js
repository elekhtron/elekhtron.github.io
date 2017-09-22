"use strict";
var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

{
document.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});
    
document.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
} //Event Handlers
    
function getdirection(){
    if(Math.round(Math.random()) == 0){
        var direction = -1;
    }
    else{
        var direction = 1;
    }
    return direction;   
}

function dist(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


function Circle(x,y, radius){
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.xv = Math.random() * getdirection();
    this.yv = Math.random() * getdirection();
    
    this.draw = function(){
        c.beginPath();
        c.strokeStyle = 'transparent';
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.lineWidth = 2;
        c.stroke();
        c.fillStyle = 'rgb(255,255,255)';
        c.fill();
    }
    
    this.update = function(){
        
        if(this.x > canvas.width || this.x  < 0){
            this.xv = -this.xv;
        }
        if(this.y > canvas.height || this.y < 0){
            this.yv = -this.yv;
        }
        
        this.x += this.xv;
        this.y += this.yv;
        
        
        this.draw();
    }
}

var circlesNum = 150;
var distctoc = 100;
var circles = []
for(var i = 0; i < circlesNum; i++){
    circles.push(new Circle(Math.random() * canvas.width,
                           Math.random() * canvas.height,
                           Math.random() * 5));
}

function animate(){
    requestAnimationFrame(animate);
    
    c.fillStyle = "rgb(10,10,10)";
    c.fillRect(0,0,canvas.width, canvas.height);
    
    for(var i = 0; i < 100; i++){
        circles[i].update();
        
        for(var k = 0; k < circles.length; k++){  
            if(i != k && 
               dist(circles[i].x, circles[i].y, circles[k].x, circles[k].y) < distctoc){
                    c.beginPath();
                    c.moveTo(circles[i].x,circles[i].y);
                    c.lineTo(circles[k].x,circles[k].y);
                    c.lineWidth = 1.0 - (dist(circles[i].x, circles[i].y, circles[k].x, circles[k].y))/distctoc;
                    c.strokeStyle = 'rgba(255,255,255,x)'.replace('x', 1.0 - (dist(circles[i].x, circles[i].y, circles[k].x, circles[k].y))/distctoc);
                    c.stroke();
            
            }
        }
    }
}







































animate();