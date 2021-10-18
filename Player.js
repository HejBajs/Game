class Player{
    constructor(){
        this.size = 50;
        this.x = width/2;
        this.y = height/2;
        this.speed = 8;
        this.bullets = [];
        this.ammo = 3;
    }
    
    draw(){
        
        for(var i = 0; i < this.bullets.length; i++){
            this.bullets[i].draw();
            if(this.bullets[i].outsideScreen()){
                this.bullets.splice(i, 1);
            }
        }
        
        
        noStroke();
        fill(255);
        push();
        stroke(0);
        strokeWeight(8);
        rectMode(CENTER);
        translate(this.x, this.y);
        rotate(this.rotateToMouse());
        rect(0, 0, this.size, this.size);
        pop();
        

    }
    
    update(){
        this.input();
        this.draw();
    }
    
    input(){
        if(keyIsDown(65)){
          this.x -= this.speed;
        }

        if(keyIsDown(68)){
          this.x += this.speed;
        }

        if(keyIsDown(87)){
          this.y -= this.speed;
        }

        if(keyIsDown(83)){
          this.y += this.speed;
        }
        
        if(keyIsDown(LEFT_ARROW)){
          this.x -= this.speed;
        }

        if(keyIsDown(RIGHT_ARROW)){
          this.x += this.speed;
        }

        if(keyIsDown(UP_ARROW)){
          this.y -= this.speed;
        }

        if(keyIsDown(DOWN_ARROW)){
          this.y += this.speed;
        }
    }
    
    rotateToMouse(){
        return Math.atan2(mouseY-this.y, mouseX-this.x);
    }
    
    shoot(){
        if(this.ammo > 0){
            this.bullets.push(new Bullet(this.x, this.y, this.rotateToMouse()));
            this.ammo--;
        }
    }
}