class Bullet{
    constructor(x, y, rotation){
        this.x = x;
        this.y = y;
        this.pX = mouseX;
        this.pY = mouseY;
        this.speedX = cos(rotation);
        this.speedY = sin(rotation);
        this.speed = 10;
        this.size = 20;
    }
    
    draw(){
        push();
        stroke(0);
        strokeWeight(3);
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size);
        pop();
        
        this.toMouse();
    }
    
    toMouse(){
        this.x += this.speedX*this.speed;
        this.y += this.speedY*this.speed;
    }
    
    outsideScreen(){
        if(this.x+this.size <= 0 || this.x-this.size >= width || this.y+this.size <= 0 || this.y-this.size >= height){
            return true;
        }
    }
}