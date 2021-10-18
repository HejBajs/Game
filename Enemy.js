class Enemy{
    constructor(player){
        this.x = this.randomX();
        this.y = this.randomY();
        this.pX = player.x;
        this.pY = player.y;
        this.player = player;
        this.speedX = cos(this.rotation());
        this.speedY = sin(this.rotation());
        this.size = random(40, 70);
        this.speed = this.size/13;
    }
    
    draw(){
        push();
        stroke(0);
        strokeWeight(9);
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, this.size);
        pop();
        
        this.toPlayer();
    }
    
    toPlayer(){
        this.speedX = cos(this.rotation());
        this.speedY = sin(this.rotation());
        
        this.x += this.speedX*this.speed;
        this.y += this.speedY*this.speed;
    }
    
    rotation(){
        return Math.atan2(this.player.y-this.y, this.player.x-this.x);
    }
    
    randomX(){return random(-100, width+100);}
    
    randomY(){
        if(this.randomX() > width/2){
            return -30;
        } else{
            return height+30;
        }
    }
}