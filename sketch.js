
let gameData = {
  cnvW: 900,
  cnvH: 500,

  img_PosX: 0,
  img_PosY: 0,

  cnvColor: 126,
  scene: 0,

  timer: 0,

  playerOne_Selector: null,
  playerTwo_Selector: null,
  p1Color: null,
  p2Color: null,

  p1_raceAvatar: null,
  p2_raceAvatar: null,
  stageSelector: null,
  raceStart: false,

  img_Container: [],
}

function preload() {
  gameData.character_Selection_Container = loadImage("assets/character_images/character_Sheet_01.png");

  gameData.img_Container[0] = loadImage("assets/background_Images/track_field_Stage.jpg");

  gameData.img_Container[1] = loadImage("assets/background_Images/street_Stage.jpg");

  gameData.img_Container[2] = loadImage("assets/background_Images/city_Stage_on.jpg");

  gameData.img_Container[3] = loadImage("assets/background_Images/city_Stage_off.jpg");

  gameData.img_Container[4] = loadImage("assets/background_Images/bw_track_field_Stage.jpg");

  gameData.img_Container[5] = loadImage("assets/background_Images/bw_street_Stage.jpg");
    
  gameData.img_Container[6] = loadImage("assets/background_Images/bw_city_Stage_on.jpg");

  gameData.img_Container[7] = loadImage("assets/background_Images/bw_city_Stage_off.jpg");  
}

function setup() {
  createCanvas(gameData.cnvW,gameData.cnvH);
  background(gameData.cnvColor);
}

function draw() {
  switch(gameData.scene) {
    case 0:
      characterSelect();
      break;
    case 1:
      raceLvl();
      break;  
    default: 
  }
}

function keyPressed() {
  if(gameData.scene === 1) {
    if(gameData.raceStart && key === 'd') {
      gameData.p1_raceAvatar.move();
    }

    if(gameData.raceStart && key === 'w') {
      gameData.p1_raceAvatar.jump();
    }

    if(gameData.raceStart && key === 'a') {
      gameData.p2_raceAvatar.move();
    }
    
    if(gameData.raceStart && key === 's') {
      gameData.p2_raceAvatar.jump();
    }
  }

  if(gameData.scene === 0) {
    if(gameData.playerOne_Selector.player_ready && gameData.playerTwo_Selector.player_ready ) {
     return ;
    }

    if(key === 'w' && !gameData.playerOne_Selector.player_ready && gameData.playerOne_Selector.avatar_Color !== null) {
      gameData.playerOne_Selector.player_ready = true;
    }

    if(key === 's' && !gameData.playerTwo_Selector.player_ready && gameData.playerTwo_Selector.avatar_Color !== null) {
      gameData.playerTwo_Selector.player_ready = true;
    }

    // player 1 character selector cycles to the right 
    if(key === 'd' && gameData.playerOne_Selector.indicator_position === 0){
      gameData.playerOne_Selector.indicator_position++;  
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 1) {
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 2) {
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 3) {
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 4) {
      gameData.playerOne_Selector.indicator_position = 1;
    } 

    if(key === 'a' && gameData.playerTwo_Selector.indicator_position === 0){
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 1) {
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 2) {
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 3) {
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 4) {
      gameData.playerTwo_Selector.indicator_position = 1;
    } 
  }
}

class Selection_Indicator {
  constructor(tS,pNo,x1,y1,x2,y2,sO) {
    this.tSize = tS;
    this.player_No = pNo;

    this.pos_X1 = x1;
    this.pos_Y1 = y1;

    this.pos_X2 = x2;
    this.pos_Y2 = y2;

    this.opacity = sO;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.sW = 5;
    
    this.tColor = 255;

    this.indicator_position = 0;

    this.player_ready = false;

    this.avatar_Color = null;
  }

  displayIndicator() {
    let textPosX;
    let textPosY;

    let offset_Y = 30;

    let Indicator_Center = (this.pos_X2 - this.pos_X1) / 2;
    textPosX = this.pos_X1 + Indicator_Center;
    textPosY;

    if(this.indicator_position !== 0) {
      this.opacity = 255;
    }
    
    switch(this.indicator_position) {
      case 1:
        if(this.player_No === 1) {
          this.avatar_Color = 'orange';
          this.pos_X1 = 45;
          this.pos_Y1 = 134;
          this.pos_X2 = 151;
          this.pos_Y2 = 134;
          textPosY = this.pos_Y1 - offset_Y;
        } else {
          this.avatar_Color = 'orange';
          this.pos_X1 = 45;
          this.pos_Y1 = 364;
          this.pos_X2 = 151;
          this.pos_Y2 = 364;
          textPosY = this.pos_Y1 + offset_Y;
        }
        break;
      case 2:
        if(this.player_No === 1) {
          this.avatar_Color = 'red';
          this.pos_X1 = 265;
          this.pos_Y1 = 134;
          this.pos_X2 = 371;
          this.pos_Y2 = 134;
          textPosY = this.pos_Y1 - offset_Y;
        } else {
          this.avatar_Color = 'red';
          this.pos_X1 = 265;
          this.pos_Y1 = 364;
          this.pos_X2 = 371;
          this.pos_Y2 = 364;
          textPosY = this.pos_Y1 + offset_Y;
        }
        break;
      case 3:
        if(this.player_No === 1) {
          this.avatar_Color = 'pink';
          this.pos_X1 = 519;
          this.pos_Y1 = 134;
          this.pos_X2 = 625;
          this.pos_Y2 = 134;
          textPosY = this.pos_Y1 - offset_Y;
        } else {
          this.avatar_Color = 'pink';
          this.pos_X1 = 519;
          this.pos_Y1 = 364;
          this.pos_X2 = 625;
          this.pos_Y2 = 364;
          textPosY = this.pos_Y1 + offset_Y;
        }
        break;
      case 4:
          if(this.player_No === 1) {
          this.avatar_Color = 'blue';
          this.pos_X1 = 750;
          this.pos_Y1 = 134;
          this.pos_X2 = 856;
          this.pos_Y2 = 134;
          textPosY = this.pos_Y1 - offset_Y;
        } else {
          this.avatar_Color = 'blue';
          this.pos_X1 = 750;
          this.pos_Y1 = 364;
          this.pos_X2 = 856;
          this.pos_Y2 = 364;
          textPosY = this.pos_Y1 + offset_Y;
        }
        break;  
      default:
        this.opacity = 0;
    }


    push();
    fill(this.tColor);
    textAlign(CENTER, CENTER);
    textSize(this.tSize);
    text("P" + this.player_No, textPosX, textPosY);
    pop();

    push();
    strokeWeight(this.sW);
    stroke(this.r,this.g,this.b,this.opacity);
    line(this.pos_X1,this.pos_Y1,this.pos_X2,this.pos_Y2);
    pop();

    if(this.player_No === 1) {
      if(this.player_ready) {
        push();
        fill(this.tColor);
        textAlign(CENTER,CENTER);
        textSize(this.tSize);
        text( 'P'+ this.player_No + ' Ready', 200, 450);
        pop();
      }
    } else {
      if(this.player_ready) {
        push();
        fill(this.tColor);
        textAlign(CENTER,CENTER);
        textSize(this.tSize);
        text( 'P'+ this.player_No + ' Ready', 700, 450);
        pop();
      }
    }
    return this.avatar_Color;   
  }
}

class Avatar {

  constructor(aC,n) {
    this.avatar_C = aC;
    this.pNumber = n;

    this.isJumping = false;

    this.avatar_X = 0;
    this.avatar_Y = null;

    this.frame = 0;
    this.frameSpeed = 0.15;

    this.moveSpeed = 10;
    this.jumpForce = 0;
    this.gravity = 0.5;
    this.idSize = 10;
    this.idColor = 0;
    this.id_Offset = 15;
    this.idPosX = null;
    this.idPosY = null;

    if(this.pNumber === 1) {
      this.avatar_Y = 280;
    } else {
      this.avatar_Y = 400;
    }
  }

  show() { 
    let sprite_H = gameData.character_Selection_Container.height;
    let scale_By = .09;

    let sprite_Size = sprite_H * scale_By;

    this.jumpForce +=this.gravity;
    this.avatar_Y +=this.jumpForce;

    if(this.pNumber === 1 && this.avatar_Y > 280) {
      this.avatar_Y = 280;
      this.jumpForce = 0;
      this.isJumping = false;
    } 
    if(this.pNumber === 2 && this.avatar_Y > 400) {
      this.avatar_Y = 400;
      this.jumpForce = 0;
      this.isJumping = false; 
    }


    //display 'run' sprite
    if(this.avatar_C === 'orange' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),0,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),0,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'red' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else { 
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'pink' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'blue' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }

    //display 'idle' sprites prior to race
    if(this.avatar_C === 'orange' && !gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),0,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),0,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'red' && !gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else { 
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'pink' && !gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'blue' && !gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*floor(this.frame),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 2) {
          this.frame = 0;
        }
      }
    }
  }
  
  show_playerId() {
    if(this.avatar_C === 'red' || this.avatar_C === 'orange') {
      this.idPosX = this.avatar_X + this.id_Offset;
      this.idPosY = this.avatar_Y + this.id_Offset;
    } else {
      this.idPosX = this.avatar_X + this.id_Offset;
      this.idPosY = (this.avatar_Y + this.id_Offset) + 25;
    }

    if(gameData.raceStart && this.avatar_C === 'pink' || this.avatar_C === 'blue' ) {
      this.idPosX = this.avatar_X + this.id_Offset;
      this.idPosY = this.avatar_Y + this.id_Offset;
    }
    push();
    fill(this.idColor);
    textSize(this.idSize);
    text('P' + this.pNumber, this.idPosX, this.idPosY);
    pop();
  }

  move() {
    this.avatar_X += this.moveSpeed;
  }

  jump() {
    if(this.isJumping === false) {
      this.jumpForce = -15;
      this.isJumping = true;
    }      
  }
}

function characterSelect() {
  background(gameData.cnvColor);

  if(gameData.playerOne_Selector === null && gameData.playerTwo_Selector === null) {
    gameData.playerOne_Selector = new Selection_Indicator(30,1,0,0,0,0,255);

    gameData.playerTwo_Selector = new Selection_Indicator(30,2,0,0,0,0,255);
  }

  let sprite_Sheet_H = gameData.character_Selection_Container.height;
  let scaleBy = .2;

  let spriteSize = sprite_Sheet_H * scaleBy;

  let center_Along_y = (gameData.cnvH/2) - (spriteSize / 2);

  image(gameData.character_Selection_Container,0,center_Along_y,spriteSize,spriteSize,0,0,255,255);

  image(gameData.character_Selection_Container,221,center_Along_y,spriteSize,spriteSize,0,256,255,255);

  image(gameData.character_Selection_Container,474,center_Along_y,spriteSize,spriteSize,0,512,255,255);

  image(gameData.character_Selection_Container,702,center_Along_y,spriteSize,spriteSize,0,768,255,255);

  gameData.p1Color = gameData.playerOne_Selector.displayIndicator();
  gameData.p2Color = gameData.playerTwo_Selector.displayIndicator();

  if (gameData.playerOne_Selector.player_ready && gameData.playerTwo_Selector.player_ready) {
    gameData.scene = 1;
  }
}

function raceLvl() {
  background(gameData.cnvColor);

  if(gameData.p1_raceAvatar === null && gameData.p2_raceAvatar === null) {
    gameData.p1_raceAvatar = new Avatar(gameData.p1Color, gameData.playerOne_Selector.player_No);

    gameData.p2_raceAvatar = new Avatar(gameData.p2Color,gameData.playerTwo_Selector.player_No);
    gameData.stageSelector = floor(random(gameData.img_Container.length));
  }

  image(gameData.img_Container[gameData.stageSelector],gameData.img_PosX,gameData.img_PosY, gameData.cnvW, gameData.cnvH);

  gameData.timer+= deltaTime;

  rStartUp();

  if(gameData.timer > 3000) {
    //player 1
    gameData.p1_raceAvatar.show_playerId();
    gameData.p1_raceAvatar.show();
    //player 2
    gameData.p2_raceAvatar.show_playerId();
    gameData.p2_raceAvatar.show();
    gameData.raceStart = true;
  }  
}

function rStartUp() {
  push();

  if (gameData.timer > 0 && gameData.timer < 3001) {
  
  fill(0,0,0,255);
  rect(gameData.img_PosX,gameData.img_PosY,gameData.cnvW,gameData.cnvH);
  }

  if(gameData.timer > 0 && gameData.timer <= 1000) {
    push();
    textAlign(CENTER,CENTER);
    textSize(265);
    fill(255,255,255);
    text('READY',442,250);
    pop();
  }

  if(gameData.timer > 1000 && gameData.timer <= 2000) {
    push();
    textAlign(CENTER,CENTER);
    textSize(270);
    fill(255,255,255);
    text('SET',450,250);
    pop();
  }

  if(gameData.timer > 2000 && gameData.timer <= 3000) {
    push();
    textAlign(CENTER,CENTER);
    textSize(270);
    fill(255,255,255);
    text('GO',450,250);
    pop();
  }
  pop();
}