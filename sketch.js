
let gameData = {
  cnvW: 900,
  cnvH: 500,

  img_PosX: 0,
  img_PosY: 0,

  cnvColor: 126,
  scene: 0,

  timer: 0,
  finishLine: 800,

  cityMap_topDown: null,
  lock: null,

  playerOne_Selector: null,
  playerTwo_Selector: null,
  p1Color: null,
  p2Color: null,

  p1_raceAvatar: null,
  p2_raceAvatar: null,
  stageSelector: null,
  raceStart: false,
  raceEnd: false,
  p1_result: false,
  p2_result: false,
  counter: 0,

  startTime: null,
  duration: 5000,

  reading_Instructions: null,

  fireworks: [],
  particles: [],
  img_Container: [],
  crates: [],

  blue_Orange: [],
  blue_Pink: [],
  blue_Red: [],

  orange_Blue: [],
  orange_Pink: [],
  orange_Red: [],

  pink_Blue: [],
  pink_Orange: [],
  pink_Red: [],

  red_Blue: [],
  red_Orange: [],
  red_Pink: [],
}

function preload() {
  gameData.blue_Orange[3] = loadImage("assets/td_character_images/blue_Orange/Right.png");
  gameData.blue_Orange[2] = loadImage("assets/td_character_images/blue_Orange/Left.png");
  gameData.blue_Orange[1] = loadImage("assets/td_character_images/blue_Orange/Up.png");
  gameData.blue_Orange[0] = loadImage("assets/td_character_images/blue_Orange/Down.png");

  gameData.blue_Pink[3] = loadImage("assets/td_character_images/blue_Pink/Right.png");
  gameData.blue_Pink[2] = loadImage("assets/td_character_images/blue_Pink/Left.png");
  gameData.blue_Pink[1] = loadImage("assets/td_character_images/blue_Pink/Up.png");
  gameData.blue_Pink[0] = loadImage("assets/td_character_images/blue_Pink/Down.png");

  gameData.blue_Red[3] = loadImage("assets/td_character_images/blue_Red/Right.png");
  gameData.blue_Red[2] = loadImage("assets/td_character_images/blue_Red/Left.png");
  gameData.blue_Red[1] = loadImage("assets/td_character_images/blue_Red/Up.png");
  gameData.blue_Red[0] = loadImage("assets/td_character_images/blue_Red/Down.png");

  gameData.orange_Blue[3] = loadImage("assets/td_character_images/orange_Blue/Right.png");
  gameData.orange_Blue[2] = loadImage("assets/td_character_images/orange_Blue/Left.png");
  gameData.orange_Blue[1] = loadImage("assets/td_character_images/orange_Blue/Up.png");
  gameData.orange_Blue[0] = loadImage("assets/td_character_images/orange_Blue/Down.png");

  gameData.orange_Pink[3] = loadImage("assets/td_character_images/orange_Pink/Right.png");
  gameData.orange_Pink[2] = loadImage("assets/td_character_images/orange_Pink/Left.png");
  gameData.orange_Pink[1] = loadImage("assets/td_character_images/orange_Pink/Up.png");
  gameData.orange_Pink[0] = loadImage("assets/td_character_images/orange_Pink/Down.png");

  gameData.orange_Red[3] = loadImage("assets/td_character_images/orange_Red/Right.png");
  gameData.orange_Red[2] = loadImage("assets/td_character_images/orange_Red/Left.png");
  gameData.orange_Red[1] = loadImage("assets/td_character_images/orange_Red/Up.png");
  gameData.orange_Red[0] = loadImage("assets/td_character_images/orange_Red/Down.png");

  gameData.pink_Blue[3] = loadImage("assets/td_character_images/pink_Blue/Right.png");
  gameData.pink_Blue[2] = loadImage("assets/td_character_images/pink_Blue/Left.png");
  gameData.pink_Blue[1] = loadImage("assets/td_character_images/pink_Blue/Up.png");
  gameData.pink_Blue[0] = loadImage("assets/td_character_images/pink_Blue/Down.png");

  gameData.pink_Orange[3] = loadImage("assets/td_character_images/pink_Orange/Right.png");
  gameData.pink_Orange[2] = loadImage("assets/td_character_images/pink_Orange/Left.png");
  gameData.pink_Orange[1] = loadImage("assets/td_character_images/pink_Orange/Up.png");
  gameData.pink_Orange[0] = loadImage("assets/td_character_images/pink_Orange/Down.png");

  gameData.pink_Red[3] = loadImage("assets/td_character_images/pink_Red/Right.png");
  gameData.pink_Red[2] = loadImage("assets/td_character_images/pink_Red/Left.png");
  gameData.pink_Red[1] = loadImage("assets/td_character_images/pink_Red/Up.png");
  gameData.pink_Red[0] = loadImage("assets/td_character_images/pink_Red/Down.png");

  gameData.red_Blue[3] = loadImage("assets/td_character_images/red_Blue/Right.png");
  gameData.red_Blue[2] = loadImage("assets/td_character_images/red_Blue/Left.png");
  gameData.red_Blue[1] = loadImage("assets/td_character_images/red_Blue/Up.png");
  gameData.red_Blue[0] = loadImage("assets/td_character_images/red_Blue/Down.png");

  gameData.red_Orange[3] = loadImage("assets/td_character_images/red_Orange/Right.png");
  gameData.red_Orange[2] = loadImage("assets/td_character_images/red_Orange/Left.png");
  gameData.red_Orange[1] = loadImage("assets/td_character_images/red_Orange/Up.png");
  gameData.red_Orange[0] = loadImage("assets/td_character_images/red_Orange/Down.png");

  gameData.red_Pink[3] = loadImage("assets/td_character_images/red_Pink/Right.png");
  gameData.red_Pink[2] = loadImage("assets/td_character_images/red_Pink/Left.png");
  gameData.red_Pink[1] = loadImage("assets/td_character_images/red_Pink/Up.png");
  gameData.red_Pink[0] = loadImage("assets/td_character_images/red_Pink/Down.png");


  gameData.lock = loadImage("assets/background_images/locked.png");

  gameData.cityMap_topDown = loadImage("assets/background_images/cityMap.jpg");

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
    case 2:
      cityLvl(); 
    default: 
  }
}

function keyPressed() {
  if(gameData.scene === 2) {
    if((key === 'a' || key === 'd' || key === 'w' || key === 's') && gameData.reading_Instructions) {
      gameData.reading_Instructions = false;
    }
  } 

  if(gameData.scene === 1) {
    if(gameData.raceStart && key === 'd') {
      gameData.p1_raceAvatar.frameSpeed = 0.15;
      gameData.p1_raceAvatar.move();
    }

    if(gameData.raceStart && key === 'w') {
      gameData.p1_raceAvatar.jump();
    }

    if(gameData.raceStart && key === 'a') {
      gameData.p2_raceAvatar.frameSpeed = 0.15;
      gameData.p2_raceAvatar.move();
    }
    
    if(gameData.raceStart && key === 's') {
      gameData.p2_raceAvatar.jump();
    }
  }

   if(gameData.scene === 1 && gameData.raceEnd) {

    if(key === 'w' && gameData.playerOne_Selector.pR_indicator_position != 0) {
      gameData.playerOne_Selector.s_locked = true;
      return;
    }

    if(key === 's' && gameData.playerTwo_Selector.pR_indicator_position != 0) {
      gameData.playerTwo_Selector.s_locked = true;
      return;
    }
    
    if(key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 0 && !gameData.playerOne_Selector.s_locked){
      gameData.playerOne_Selector.pR_indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 1 && !gameData.playerOne_Selector.s_locked){
      gameData.playerOne_Selector.pR_indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 2 && !gameData.playerOne_Selector.s_locked){
      gameData.playerOne_Selector.pR_indicator_position = 1;
    }

    if(key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 0 && !gameData.playerTwo_Selector.s_locked){
      gameData.playerTwo_Selector.pR_indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 1 && !gameData.playerTwo_Selector.s_locked){
      gameData.playerTwo_Selector.pR_indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 2 && !gameData.playerTwo_Selector.s_locked){
      gameData.playerTwo_Selector.pR_indicator_position = 1;
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

    this.pR_indicator_position = 0;
    this.p_selection = null;
    this.s_locked = false;
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

  post_Race_Select() {
    let selector_Opacity = 255;

    switch(this.pR_indicator_position) {
      case 1:
        fill(this.r,this.g,this.b,selector_Opacity);
        textSize(this.tSize);
        if(this.player_No === 1) {
          text('P' + this.player_No ,300, 450);
          if(this.s_locked) {
            this.p_selection = 'Rematch';
            this.selection_Locked_Icon();
          }
        } else {
          text('P' + this.player_No ,360, 450);
          if(this.s_locked) {
            this.p_selection = 'Rematch';
            this.selection_Locked_Icon();
          }
        }
        break;
      case 2:
        fill(this.r,this.g,this.b,selector_Opacity);
        textSize(this.tSize);
        if(this.player_No === 1) {
          text('P' + this.player_No ,500, 450);
          if(this.s_locked) {
            this.p_selection = 'Continue';
            this.selection_Locked_Icon();
            
          }
        } else {
          text('P' + this.player_No ,560, 450);
          if(this.s_locked) {
            this.p_selection = 'Continue';
            this.selection_Locked_Icon();
          }
        }
        break;
      default:
        selector_Opacity = 0;  
    } 
  }

  selection_Locked_Icon () {
    if(this.player_No === 1 && this.p_selection === 'Rematch') {
        image(gameData.lock,290,460,50,50);
    } else if (this.player_No === 1 && this.p_selection === 'Continue') {
        image(gameData.lock,490,460,50,50);
    }

    if(this.player_No === 2 && this.p_selection === 'Rematch') {
        image(gameData.lock,350,460,50,50);
    } else if (this.player_No === 2 && this.p_selection === 'Continue') {
        image(gameData.lock,550,460,50,50);
    }
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
    this.frameSpeed = 0;

    this.moveSpeed = 18;
    this.jumpForce = 0;
    this.gravity = 0.5;
    this.idSize = 10;
    this.idColor = 0;
    this.id_Offset = 15;
    this.idPosX = null;
    this.idPosY = null;
    this.isWinner = false;

    if(this.pNumber === 1) {
      this.avatar_Y = 280;
    } else {
      this.avatar_Y = 400;
    }
  }

  stop_Movement() {
    if(gameData.raceEnd) {
      this.moveSpeed = 0;
      this.jumpForce = 0;
      this.gravity = 0;
    }
  }

  race_Result() {
    if(this.avatar_X >= gameData.finishLine) {
      return this.isWinner = true;
    } else {
      return this.isWinner = false;
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
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),0,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'red' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }else { 
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),256,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'pink' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),512,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }
    }else if (this.avatar_C === 'blue' && gameData.raceStart) {
      if(this.pNumber === 1) {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
          this.frame = 0;
        }
      }else {
        image(gameData.character_Selection_Container,this.avatar_X,this.avatar_Y,sprite_Size,sprite_Size,256*(floor(this.frame) + 2),768,255,255);
        this.frame += this.frameSpeed;
        if (this.frame >= 4) {
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
      this.jumpForce = -10;
      this.isJumping = true;
    }      
  }

  pushBack(crate) {
    let avatar_cntX = this.avatar_X + 25;
    let avatar_cntY = this.avatar_Y + 25;

    let crate_cntX = crate.x + (crate.baseSize / 2);
    let crate_cntY = crate.y + (crate.baseSize / 2);

    let d = dist(avatar_cntX,avatar_cntY,crate_cntX,crate_cntY);

    if(gameData.raceStart && d < 55) {
      if(this.avatar_X > 200) {
        this.avatar_X -=200;
      } else {
        this.avatar_X -= 5;
      }

      crate.x = -200;
    }
  }
}

// ===================================
// FIREWORK CLASS
// ===================================

class Firework {

  constructor() {
    this.x = random(width);
    this.y = height;
    this.targetY = random(height / 2);
    this.speed = 3;
    this.exploded = false;
  }

  update() {
    this.y -= this.speed;
    // Explode
    if (this.y <= this.targetY) {
      this.explode();
      this.exploded = true;
    }
  }

  display() {
    fill(255);
    noStroke();
    rect(this.x, this.y, 2, 6);
  }

  explode() {
    for (let i = 0; i < 20; i++) {
      gameData.particles.push(new Particle(this.x, this.y));
    }
  }
}

// ===================================
// PARTICLE CLASS
// ===================================

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI);
    this.speed = random(1, 3);
    this.vx = cos(this.angle) * this.speed;
    this.vy = sin(this.angle) * this.speed;

    this.life = 60;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // Gravity
    this.vy += 0.02;
    this.life--;
  }

  display() {
    noStroke();
    fill(255, 200, 0, map(this.life, 0, 60, 0, 255));
    rect(this.x, this.y, 3, 3);
  }
}

// ===================================
// CRATE CLASS
// ===================================

class Crate {
  constructor(bX,bY, scale) {
    this.x = bX;
    this.y = bY;

    this.scaleAmount = scale;

    this.baseSize = 35;

    this.alpha = 0;
    this.fadingIn = true;
  }

  update() {
    this.x -= 1.5;

    if(this.fadingIn) {
      this.alpha +=3;

      if(this.alpha >= 255) {
        this.alpha = 255;
        this.fadingIn = false;
      }
    }

    if(this.x < 100) {
      this.alpha -=4;
    }

    if(this.x < -100) {
      this.x = random(width + 200, width + 700);
      this.alpha = 0;
      this.fadingIn = true;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scaleAmount);
    let s = this.baseSize;

    //crate body
    fill(139,69,19,this.alpha);
    stroke(90,45,10,this.alpha);
    strokeWeight(2);
    rect(0,0,s,s);

    //wooden crate details
    line(0,0,s,s);
    line(s,0,0,s);
    line(s/2,0,s/2,s);
    line(0,s/2,s,s/2);
    pop();
  }
}

class Vision {
  constructor () {
    this.x = gameData.cnvW;
    this.y = gameData.cnvH;
    
    this.topLayer = createGraphics(this.x,this.y);
    this.topLayer.rect(gameData.img_PosX,gameData.img_PosY,this.x,this.y);
    this.topLayer.fill(0);
    this.topLayer.noStroke();
  }

  fog() {

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
  let rematch = 'Rematch';
  let c_ontinue = 'Continue';
 
  background(gameData.cnvColor);

  if(gameData.p1_raceAvatar === null && gameData.p2_raceAvatar === null) {
    gameData.p1_raceAvatar = new Avatar(gameData.p1Color, gameData.playerOne_Selector.player_No);

    gameData.p2_raceAvatar = new Avatar(gameData.p2Color,gameData.playerTwo_Selector.player_No);
    gameData.stageSelector = floor(random(gameData.img_Container.length));

    gameData.crates.push(new Crate(950,340,1.0));
    gameData.crates.push(new Crate(1400,350,1.0));

    gameData.crates.push(new Crate(1300,440,1.0));
    gameData.crates.push(new Crate(1700,445,1.0));
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

  if(gameData.raceStart === true) {
    // Draw crates
    for (let crate of gameData.crates) {
      crate.update();
      crate.display();

      gameData.p1_raceAvatar.pushBack(crate);
      gameData.p2_raceAvatar.pushBack(crate);
    }
  }

  if(gameData.p1_raceAvatar.avatar_X >= gameData.finishLine ||
     gameData.p2_raceAvatar.avatar_X >= gameData.finishLine) {
    gameData.raceEnd = true;
  }

  if(gameData.raceEnd === true) {

    if(!gameData.p1_result) {
      gameData.p1_result = gameData.p1_raceAvatar.race_Result();
    }
    if(!gameData.p2_result) {
      gameData.p2_result = gameData.p2_raceAvatar.race_Result();
    }

    
    gameData.p1_raceAvatar.stop_Movement();
    gameData.p2_raceAvatar.stop_Movement();

    run_Fireworks();
    display_Results();
    rematch_Button();
    continue_Button();

    gameData.playerOne_Selector.post_Race_Select();
    gameData.playerTwo_Selector.post_Race_Select();


    if(gameData.playerOne_Selector.p_selection === rematch 
      && gameData.playerTwo_Selector.p_selection === rematch) { 
        rematch_Reset();
      }else if (gameData.playerOne_Selector.p_selection === rematch 
      && gameData.playerTwo_Selector.p_selection === c_ontinue) {
        gameData.playerOne_Selector.s_locked = false;
        gameData.playerTwo_Selector.s_locked = false;
        gameData.playerOne_Selector.p_selection = null;
        gameData.playerTwo_Selector.p_selection = null;
      }
      
    if(gameData.playerOne_Selector.p_selection === c_ontinue && gameData.playerTwo_Selector.p_selection === c_ontinue) {
      gameData.scene = 2;
      gameData.reading_Instructions = true;
    }else if (gameData.playerOne_Selector.p_selection === c_ontinue 
      && gameData.playerTwo_Selector.p_selection === rematch) {
        gameData.playerOne_Selector.s_locked = false;
        gameData.playerTwo_Selector.s_locked = false;
        gameData.playerOne_Selector.p_selection = null;
        gameData.playerTwo_Selector.p_selection = null;
      }
  } 
}

function cityLvl() {
  
  if(gameData.reading_Instructions) {
    let injury_msg = null;

    if(gameData.p1_raceAvatar.isWinner && gameData.p2_raceAvatar.isWinner) {
      injury_msg = 'You were both injured during the race. Work together to get home.';
    }else if(gameData.p1_raceAvatar.isWinner) {   
      injury_msg = 'P2 was injured during the race. Work together to get them home.';
    } else if (gameData.p2_raceAvatar.isWinner) {
      injury_msg = 'P1 was injured during the race. Work together to get them home.';
    } 

    background(0);
    
    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(255,255,255);
    text(injury_msg,450,200);
    text('\n\nUse all the buttons to move around the map',450,200);
    text('\n\n\n\nPress any button to start!',450,200);
    pop();
    
  }

  if(!gameData.reading_Instructions) {
    image(gameData.cityMap_topDown,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);

    
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

function display_Results() {
  let winMsg = null;

  if (gameData.p1_result && gameData.p2_result) {
    winMsg = "IT'S A TIE!";
  }else if (gameData.p1_result) {
    winMsg = 'P' + gameData.p1_raceAvatar.pNumber + ' WON!';
  } else if (gameData.p2_result) {
    winMsg = 'P' + gameData.p2_raceAvatar.pNumber + ' WON!';
  }

  if(winMsg !== null) {
    push();
    textAlign(CENTER,CENTER);
    textSize(100);
    fill(255,255,255);
    text(winMsg,450,250);
    pop();
    console.log(winMsg);
  }
}

function rematch_Button() {
  let bX = 300;  
  let bY = 350;
  let bW = 100;
  let bH = 50;

  let tX = 307;
  let tY = 380;
  
  push();
  fill(255);
  rect(bX, bY, bW, bH);
  pop();

  push();
  textSize(18);
  fill(255,0,0);
  text('REMATCH', tX, tY);
  pop();
}

function continue_Button() {
  let bX = 500;  
  let bY = 350;
  let bW = 100;
  let bH = 50;

  
  let tX = 503;
  let tY = 380;
  
  push();
  fill(255);
  rect(bX, bY, bW, bH,);
  pop();

  push();
  textSize(18);
  fill(255,0,0);
  text('CONTINUE', tX, tY);
  pop();
}

function run_Fireworks() {
  if(gameData.startTime === null) {
    gameData.startTime = millis();
  }
  // Semi-transparent background for trail effect
  background(0);

  // Stop after duration if desired
  if (millis() - gameData.startTime < gameData.duration) {

    // Randomly launch fireworks
    if (random(1) < 0.03) {
      gameData.fireworks.push(new Firework());
    }
  }

  // -----------------------------------
  // FIREWORKS
  // -----------------------------------

  for (let i = gameData.fireworks.length - 1; i >= 0; i--) {

    gameData.fireworks[i].update();
    gameData.fireworks[i].display();

    // Remove exploded fireworks
    if (gameData.fireworks[i].exploded) {
      gameData.fireworks.splice(i, 1);
    }
  }

  // -----------------------------------
  // PARTICLES
  // -----------------------------------

  for (let i = gameData.particles.length - 1; i >= 0; i--) {

    gameData.particles[i].update();
    gameData.particles[i].display();

    // Remove dead particles
    if (gameData.particles[i].life <= 0) {
      gameData.particles.splice(i, 1);
    }
  }
}

function rematch_Reset() {
  gameData.timer = 0;
  gameData.raceStart = false;
  gameData.raceEnd = false;
  gameData.p1_result = false;
  gameData.p2_result = false;
  gameData.fireworks = [];
  gameData.particles = [];
  gameData.crates = [];
  gameData.startTime = null;
  gameData.p1_raceAvatar = null;
  gameData.p2_raceAvatar = null;
  gameData.playerOne_Selector.p_selection = null;
  gameData.playerTwo_Selector.p_selection = null;
  
  gameData.playerOne_Selector.pR_indicator_position = 0;
  gameData.playerTwo_Selector.pR_indicator_position = 0;
  
  gameData.playerOne_Selector.s_locked = false;
  gameData.playerTwo_Selector.s_locked = false;

  gameData.counter++;


}
