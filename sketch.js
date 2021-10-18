let player;
let enemies = [];
let c = 1;
let score = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    player = new Player();
    enemies.push(new Enemy(player));
}

function draw(){
    background(40);
    player.update();
    ammo();
    for(var i = 0; i<enemies.length; i++){
        enemies[i].draw();
    }
    
    for(var i = 0; i <enemies.length; i++){
        for(var j = 0; j < player.bullets.length; j++){
            if(collide(player.bullets[j].x, player.bullets[j].y, player.bullets[j].size/2, enemies[i].x, enemies[i].y, enemies[i].size, enemies[i].size)){
                player.bullets.splice(j, 1);
                player.ammo++;
                enemies.splice(i, 1);
                score += 10;
                if(enemies.length == 0){
                    score += c * 10;
                    c++;
                    spawn(c);
                }
            }
        }
    }
    
    for(var i = 0; i <enemies.length; i++){
        if(die(player, enemies[i])){
            print("dead");
        }
    }
    
    push();
    textAlign(LEFT, TOP);
    textSize(40);
    fill(255);
    noStroke();
    text("score:" + score, 10, 10)
    pop();
}

function mousePressed(){
    player.shoot();
}

function keyTyped(){
    if(key === " "){
        player.shoot();
    }
}

function collide(cx, cy, rad, rx, ry, rw, rh) {
  let testX = cx;
  let testY = cy;
  
  if (cx < rx)         testX = rx;
  else if (cx > rx+rw) testX = rx+rw;
  if (cy < ry)         testY = ry;
  else if (cy > ry+rh) testY = ry+rh;
  
  let d = dist(cx, cy, testX, testY);
  
    if (d <= rad) {
    return true;
  }
  return false;

}

function die(p, e){
    return false;
}

function spawn(c){
    player.ammo = 3;
    for(i = 0; i < c; i++){
        enemies.push(new Enemy(player));
    }
}

function ammo(){
    textAlign(CENTER, TOP);
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(10);
    textSize(100);
    text(player.ammo, this.width/2, 30);
}