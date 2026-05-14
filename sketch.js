// ===================================
// GLOBAL VARIABLES
// ===================================
let gameData = {
  cnvW: 900,
  cnvH: 500,

  img_PosX: 0,
  img_PosY: 0,

  cnvColor: 126,
  scene: 0,

  timer: 0,
  finishLine: 800,

  city_Music: null,
  cityMap_topDown: null,
  lock: null,
  deadEnd_Sign: null, 
  watchtower: null,
  cave_Entrance: null,
  forest_Thing: null,
  herb: null,

  playerOne_Selector: null,
  playerTwo_Selector: null,
  p1Color: null,
  p2Color: null,

  songSelect: null,
  p1_raceAvatar: null,
  p2_raceAvatar: null,
  city_Avatar: null,
  hide_Map: null,
  stageSelector: null,
  raceStart: false,
  raceEnd: false,
  p1_result: false,
  p2_result: false,

  
  aIsPressed: false,
  sIsPressed: false,
  dIsPressed: false,
  wIsPressed: false,

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

  mirror_Red: [],
  mirror_Orange: [],
  mirror_Blue: [],
  mirror_Pink: [],

  zone_Container: [],

  music_Container: [],
  fx_Container: [],
}

// ===================================
// PRELOAD - IMAGES
// ===================================
function preload() {
  gameData.city_Music = loadSound("assets/sounds/Track_08.mp3");

  gameData.music_Container[0] = loadSound("assets/sounds/Track_01.mp3");
  gameData.music_Container[1] = loadSound("assets/sounds/Track_02.mp3");
  gameData.music_Container[2] = loadSound("assets/sounds/Track_03.mp3");
  gameData.music_Container[3] = loadSound("assets/sounds/Track_04.mp3");
  
  gameData.fx_Container[0] = loadSound("assets/sounds/Track_05.mp3");
  gameData.fx_Container[1] = loadSound("assets/sounds/Track_06.mp3");
  gameData.fx_Container[2] = loadSound("assets/sounds/Track_07.mp3");
  gameData.fx_Container[3] = loadSound("assets/sounds/Track_09.mp3");
  gameData.fx_Container[4] = loadSound("assets/sounds/Track_10.mp3");
  gameData.fx_Container[5] = loadSound("assets/sounds/Track_11.mp3");
  gameData.fx_Container[6] = loadSound("assets/sounds/Track_12.mp3");
  gameData.fx_Container[7] = loadSound("assets/sounds/Track_13.mp3");

  gameData.mirror_Orange[3] = loadImage("assets/td_character_images/mirror_Orange/Right.png");
  gameData.mirror_Orange[2] = loadImage("assets/td_character_images/mirror_Orange/Left.png");
  gameData.mirror_Orange[1] = loadImage("assets/td_character_images/mirror_Orange/Up.png");
  gameData.mirror_Orange[0] = loadImage("assets/td_character_images/mirror_Orange/Down.png");

  gameData.mirror_Blue[3] = loadImage("assets/td_character_images/mirror_Blue/Right.png");
  gameData.mirror_Blue[2] = loadImage("assets/td_character_images/mirror_Blue/Left.png");
  gameData.mirror_Blue[1] = loadImage("assets/td_character_images/mirror_Blue/Up.png");
  gameData.mirror_Blue[0] = loadImage("assets/td_character_images/mirror_Blue/Down.png");

  gameData.mirror_Red[3] = loadImage("assets/td_character_images/mirror_Red/Right.png");
  gameData.mirror_Red[2] = loadImage("assets/td_character_images/mirror_Red/Left.png");
  gameData.mirror_Red[1] = loadImage("assets/td_character_images/mirror_Red/Up.png");
  gameData.mirror_Red[0] = loadImage("assets/td_character_images/mirror_Red/Down.png");

  gameData.mirror_Pink[3] = loadImage("assets/td_character_images/mirror_Pink/Right.png");
  gameData.mirror_Pink[2] = loadImage("assets/td_character_images/mirror_Pink/Left.png");
  gameData.mirror_Pink[1] = loadImage("assets/td_character_images/mirror_Pink/Up.png");
  gameData.mirror_Pink[0] = loadImage("assets/td_character_images/mirror_Pink/Down.png");

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

  gameData.forest_Thing = loadImage("assets/background_Images/ForestThings.png");
  gameData.herb = loadImage("assets/background_Images/herb.png");
  gameData.deadEnd_Sign = loadImage("assets/background_Images/deadEnd.png");  
  gameData.watchtower = loadImage("assets/background_Images/watchtower.png"); 
  gameData.cave_Entrance = loadImage("assets/background_Images/caveEntrance.png"); 
  gameData.lock = loadImage("assets/background_Images/locked.png");
  gameData.cityMap_topDown = loadImage("assets/background_Images/cityMap.jpg");

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

// ===================================
// SETUP
// ===================================
function setup() {
  let cnv = createCanvas(gameData.cnvW,gameData.cnvH);
  background(gameData.cnvColor);

  cnv.parent('game_Container');

  gameData.fx_Container[0].setVolume(0.5);
  gameData.fx_Container[1].setVolume(0.4);
  gameData.fx_Container[2].setVolume(0.5);
  gameData.fx_Container[3].setVolume(0.5);
  gameData.fx_Container[4].setVolume(0.4);
  gameData.fx_Container[5].setVolume(0.4);
  gameData.fx_Container[6].setVolume(0.4);
  gameData.fx_Container[7].setVolume(0.4);

  gameData.city_Music.setVolume(0.5);
  gameData.fx_Container[4].playMode('restart');
  gameData.fx_Container[7].playMode('restart');
}

// ===================================
// DRAW 
// ===================================
function draw() {
  switch(gameData.scene) {
    case 0:
      character_Select_Instructions();
      break;
    case 1:
      characterSelect();
      break;
    case 2:
      race_Instructions()
      break;
    case 3:
      raceLvl();
      break; 
    case 4:
      cityLvl();
      break;
    case 5:
      last_Scene(); 
    default: 
  }
}

// ===================================
// INPUT
// ===================================
function keyPressed() {
  if(gameData.scene === 4) {

    if((key === 'a' || key === 'd' || key === 'w' || key === 's') && gameData.reading_Instructions) {
      gameData.reading_Instructions = false;
      }
    
    if (gameData.city_Avatar !== null) {
      if(gameData.city_Avatar.readingQuest) {
        if(key === 'a' || key === 'd' || key === 'w' || key === 's') {
          gameData.city_Avatar.readingQuest = false;
          gameData.city_Avatar.inHouse = false; 
          gameData.city_Avatar.questGiven = true;

          if(!gameData.city_Avatar.steppedOnDroppings) {
            gameData.city_Avatar.citySpeed = 2.25;
          } else {
            gameData.city_Avatar.citySpeed = 1.75;
          }
        }
      }

      if(gameData.city_Avatar.steppedOnDroppings) {
        if(key === 'a' || key === 'd' || key === 'w' || key === 's') {
          gameData.city_Avatar.debuffMsg = false;
        }
      }

      if(gameData.city_Avatar.hasHerb) {
        if(key === 'a' || key === 'd' || key === 'w' || key === 's') {
          gameData.city_Avatar.herbMsg = false;
        }
      }
    }
  }

  if(gameData.scene === 3) {
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

  if(gameData.scene === 3 && gameData.raceEnd) {

    if(key === 'w' && gameData.playerOne_Selector.pR_indicator_position != 0) {
      gameData.fx_Container[7].play();
      gameData.playerOne_Selector.s_locked = true;
      return;
    }

    if(key === 's' && gameData.playerTwo_Selector.pR_indicator_position != 0) {
      gameData.fx_Container[7].play();
      gameData.playerTwo_Selector.s_locked = true;
      return;
    }
    
    if(key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 0 && !gameData.playerOne_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.pR_indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 1 && !gameData.playerOne_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.pR_indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.pR_indicator_position === 2 && !gameData.playerOne_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.pR_indicator_position = 1;
    }

    if(key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 0 && !gameData.playerTwo_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.pR_indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 1 && !gameData.playerTwo_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.pR_indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.pR_indicator_position === 2 && !gameData.playerTwo_Selector.s_locked){
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.pR_indicator_position = 1;
    }
  }

   if(gameData.scene === 2) {
    if((key === 'a' || key === 'd' || key === 'w' || key === 's')) {
      gameData.scene = 3;
      }
    }

  if(gameData.scene === 1) {

    if(gameData.playerOne_Selector.player_ready && gameData.playerTwo_Selector.player_ready ) {
     return ;
    }

    if(key === 'w' && !gameData.playerOne_Selector.player_ready && gameData.playerOne_Selector.avatar_Color !== null) {
      gameData.fx_Container[6].play();
      gameData.playerOne_Selector.player_ready = true;
    }

    if(key === 's' && !gameData.playerTwo_Selector.player_ready && gameData.playerTwo_Selector.avatar_Color !== null) {
      gameData.fx_Container[6].play();
      gameData.playerTwo_Selector.player_ready = true;
    }

    // player 1 character selector cycles to the right 
    if(key === 'd' && gameData.playerOne_Selector.indicator_position === 0){
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.indicator_position++;  
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 1) {
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 2) {
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 3) {
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.indicator_position++;
    } else if (key === 'd' && gameData.playerOne_Selector.indicator_position === 4) {
      gameData.fx_Container[4].play();
      gameData.playerOne_Selector.indicator_position = 1;
    } 

    if(key === 'a' && gameData.playerTwo_Selector.indicator_position === 0){
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 1) {
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 2) {
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 3) {
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.indicator_position++;
    } else if (key === 'a' && gameData.playerTwo_Selector.indicator_position === 4) {
      gameData.fx_Container[4].play();
      gameData.playerTwo_Selector.indicator_position = 1;
    } 
  }

  if(gameData.scene === 0) {
    if((key === 'a' || key === 'd' || key === 'w' || key === 's')) {
      gameData.scene = 1;
      }
    }
}

// ===================================
// INVISIBLE WALLS CLASS
// ===================================
class Zone{
  constructor (x,y,w,h,z_name) {
    this.wall_x = x;
    this.wall_y = y;
    this.wall_w = w;
    this.wall_h = h;
    this.zone = z_name;

    this.zR = null;
    this.zG = null;
    this.zB = null;

    this.z_Opacity = 0;
  }

  display_Zone() {
    if (this.zone === 'house' || this.zone === 'stadium' || 
        this.zone === 'watchtower' || this.zone === 'dead_End' || this.zone === 'c_Entrance01' || 
        this.zone === 'c_Entrance02') {
      this.zR = 255;
      this.zG = 0;
      this.zB = 0;
    } else if (this.zone === 'h_zone_01' || this.zone === 'h_zone_02' || this.zone === 'h_zone_03' || this.zone === 'h_zone_04' || this.zone === 'h_zone_05' || this.zone === 'h_zone_06' || this.zone === 'h_zone_07' || this.zone === 'h_zone_08' || this.zone === 'h_zone_09' || this.zone === 'h_zone_10' || this.zone === 'h_zone_11') {
      this.zR = 0;
      this.zG = 255;
      this.zB = 0;
    }else {
      this.zR = 255;
      this.zG = 255;
      this.zB = 255;
    }

    push();
    noStroke();
    fill(this.zR,this.zG,this.zB,this.z_Opacity);
    rect(this.wall_x,this.wall_y,this.wall_w,this.wall_h);
    pop();
  }
}

// ===================================
// SELECTOR INDCATOR CLASS
// ===================================
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

// ===================================
// AVATAR CLASS
// ===================================
class Avatar {

  constructor(aC,n) {
    this.avatar_C = aC;
    this.pNumber = n;

    this.questGiven = false;
    this.readingQuest = false;
    this.inWatchtower = false;
    this.inDeadEnd = false;
    this.inHouse = false;
    this.inCave_Entrance_01 = false;
    this.inCave_Entrance_02 = false;
    this.debuffMsg = false;
    this.steppedOnDroppings = false; 
    this.herbMsg = false;
    this.hasHerb = false;
    this.canTravel = true;
    this.isJumping = false;

    this.avatar_X = 0;
    this.avatar_Y = null;

    this.frame = 0;
    this.frameSpeed = 0;
    this.citySpeed = 2.25; 
    this.moveSpeed = 18;
    this.jumpForce = 0;
    this.gravity = 0.5;
    this.idSize = 10;
    this.idColor = 0;
    this.id_Offset = 15;
    this.idPosX = null;
    this.idPosY = null;
    this.isWinner = false;

    this.avatar_Size = 30;
    this.city_Spawn_x = 115;
    this.city_Spawn_Y = 340;

    this.cA_S = this.avatar_Size;
    this.cA_X = this.city_Spawn_x;
    this.cA_Y = this.city_Spawn_Y;
    this.location = null;

    if(this.pNumber === 1) {
      this.avatar_Y = 280;
    } else {
      this.avatar_Y = 400;
    }

    if(gameData.scene === 4) {
      if(gameData.p1_raceAvatar.isWinner) {
        this.carrying_PlayerColor = gameData.p1Color;
        this.player_Carried = gameData.p2Color;
      } else if (gameData.p2_raceAvatar.isWinner) {
        this.carrying_PlayerColor = gameData.p2Color;
        this.player_Carried = gameData.p1Color;
      } 
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

  showCL () {
    if(this.carrying_PlayerColor === 'pink' && this.player_Carried === 'pink') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.mirror_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.mirror_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.mirror_Pink[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.mirror_Pink[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.mirror_Pink[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.mirror_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'blue' && this.player_Carried === 'blue') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.mirror_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.mirror_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.mirror_Blue[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.mirror_Blue[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.mirror_Blue[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.mirror_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'orange' && this.player_Carried === 'orange') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.mirror_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.mirror_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.mirror_Orange[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.mirror_Orange[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.mirror_Orange[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.mirror_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'red' && this.player_Carried === 'red') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.mirror_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.mirror_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.mirror_Red[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.mirror_Red[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.mirror_Red[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.mirror_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'orange' && this.player_Carried === 'red') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.orange_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.orange_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.orange_Red[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.orange_Red[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.orange_Red[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.orange_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'orange' && this.player_Carried === 'blue') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.orange_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.orange_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.orange_Blue[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.orange_Blue[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.orange_Blue[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.orange_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'orange' && this.player_Carried === 'pink') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.orange_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.orange_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.orange_Pink[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.orange_Pink[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.orange_Pink[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.orange_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'red' && this.player_Carried === 'orange') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.red_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.red_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.red_Orange[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.red_Orange[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.red_Orange[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.red_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'red' && this.player_Carried === 'pink') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.red_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.red_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.red_Pink[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.red_Pink[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.red_Pink[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.red_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'red' && this.player_Carried === 'blue') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.red_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.red_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.red_Blue[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.red_Blue[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.red_Blue[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.red_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'pink' && this.player_Carried === 'orange') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.pink_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.pink_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.pink_Orange[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.pink_Orange[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.pink_Orange[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.pink_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'pink' && this.player_Carried === 'red') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.pink_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.pink_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.pink_Red[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.pink_Red[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.pink_Red[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.pink_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'pink' && this.player_Carried === 'blue') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.pink_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.pink_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.pink_Blue[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.pink_Blue[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.pink_Blue[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.pink_Blue[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'blue' && this.player_Carried === 'orange') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.blue_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.blue_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.blue_Orange[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.blue_Orange[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.blue_Orange[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.blue_Orange[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'blue' && this.player_Carried === 'red') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.blue_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.blue_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.blue_Red[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.blue_Red[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.blue_Red[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.blue_Red[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }

    if(this.carrying_PlayerColor === 'blue' && this.player_Carried === 'pink') {
      if((!gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed && !gameData.wIsPressed)) {
        image(gameData.blue_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if ((gameData.sIsPressed && (gameData.dIsPressed || gameData.wIsPressed || gameData.aIsPressed) || gameData.dIsPressed && (gameData.wIsPressed || gameData.sIsPressed || gameData.aIsPressed))) {
        image(gameData.blue_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.sIsPressed) {
        image(gameData.blue_Pink[2],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.dIsPressed) {
        image(gameData.blue_Pink[3],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.aIsPressed) {
        image(gameData.blue_Pink[1],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      } else if (gameData.wIsPressed) {
        image(gameData.blue_Pink[0],this.cA_X,this.cA_Y,this.cA_S,this.cA_S);
      }
    }
    
  }

  combined_Movement() {
    if(keyIsDown(65)) {
      gameData.aIsPressed = true;
    } else if (!keyIsDown(65)) {
      gameData.aIsPressed = false;
    }

    if(keyIsDown(68)) {
      gameData.dIsPressed = true;
    } else if (!keyIsDown(68)) {
      gameData.dIsPressed = false;
    }

    if(keyIsDown(87)) {
      gameData.wIsPressed = true;
    } else if (!keyIsDown(87)) {
      gameData.wIsPressed = false;
    }

    if(keyIsDown(83)) {
      gameData.sIsPressed = true;
    } else if (!keyIsDown(83)) {
      gameData.sIsPressed = false;
    }

    if(gameData.aIsPressed && !gameData.sIsPressed && !gameData.dIsPressed &&
      !gameData.wIsPressed) {
      this.cA_Y -= this.citySpeed;
    }

    if(gameData.dIsPressed && !gameData.sIsPressed && !gameData.aIsPressed &&
      !gameData.wIsPressed) {
      this.cA_X += this.citySpeed;
    }

    if(gameData.wIsPressed && !gameData.sIsPressed && !gameData.aIsPressed &&
      !gameData.dIsPressed) {
      this.cA_Y += this.citySpeed;
    }

    if(gameData.sIsPressed && !gameData.aIsPressed && !gameData.dIsPressed &&
      !gameData.wIsPressed) {
      this.cA_X -= this.citySpeed;
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

      if(!gameData.raceEnd) {
        gameData.fx_Container[1].play();
      }
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

      if(!gameData.raceEnd) {
        gameData.fx_Container[2].play();
      }

      crate.x = -200;
    }
  }

  p_location(object) {

    for(let i = 0; i < object.length; i++) {
      let obj_x = object[i].wall_x;
      let obj_y = object[i].wall_y;
      
      let obj_w = object[i].wall_w;
      let obj_h = object[i].wall_h;

      let player_l = object[i].zone;

      if(this.cA_X > obj_x && this.cA_X < (obj_x + obj_w) && this.cA_Y > obj_y &&
       this.cA_Y < (obj_y + obj_h)) {
        this.location = player_l;
       }
    }  
  }

  check_Collision() {
    this.inWatchtower = false;
    this.inDeadEnd = false;
    this.inCave_Entrance_01 = false;
    this.inCave_Entrance_02 = false;
    let vZ_Container = ['zone_01','zone_02','zone_03','zone_04','zone_05','zone_06','zone_07','zone_08','zone_09','zone_10','zone_11','zone_12','zone_13','zone_14','zone_15']

    let zContainer = gameData.zone_Container;
    let zX;
    let zW;
    let zY;
    let zH;

    if(vZ_Container.includes(this.location)) {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;

          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
        }
      }
    } else if (this.location === 'h_zone_01'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          if(this.cA_Y < zY) {
            this.cA_Y = zY;
          }
        }
      }
    } else if (this.location === 'h_zone_02'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          if(this.cA_Y < zY) {
            this.cA_Y = zY;
          }

          push();
          let b_x1 = (zX+41);
          let b_y1 = (zY+40);
          let b_x2 = ((zX+zW-302));
          let b_y2 = (zY+40);

          let l2_x1 = (b_x2 + 41);
          let l2_y1 = (zY+40);
          let l2_x2 = ((b_x2+zW-301));
          let l2_y2 = (zY+40);
          
          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);
          line(b_x1,b_y1,b_x2,b_y2);
          line(l2_x1,l2_y1,l2_x2,l2_y2);

          if(this.cA_X > zX && this.cA_X < b_x2) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }
          }

          if(this.cA_X > l2_x1 && this.cA_X < (l2_x2)) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }
          }
          pop();
        }
      }
    } else if (this.location === 'h_zone_03'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
          zH = zContainer[i].wall_h;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          let x1 = 41;
          let x2 = 111;

          let x3 = 125; 
          let x4 = 241;

          let x5 = 242; 
          let x6 = 254;

          let x7 = 255;
          let x8 = 370;

          let x9 = 390;
          let x10 = 570;

          let b_x1 = (x6);
          //console.log(b_x1);
          let b_y1 = (zY+40);
          let b_x2 = (x7);
          //console.log(b_x2);

          let b_y2 = (zY+40);
          push();
          stroke(zContainer.zR,zContainer.zG,zContainer.zB,zContainer.z_Opacity);
          line(b_x1, b_y1, b_x2, b_y2);
          pop();
          
          if (this.cA_X > x1 && this.cA_X < x2 || this.cA_X > x3 && this.cA_X < x4 || this.cA_X > x7 && this.cA_X < x8 || this.cA_X > x9 && this.cA_X < x10) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }else if (this.cA_Y < zY) {
              this.cA_Y = zY;
            } 
          }else if (this.cA_X > x5 && this.cA_X < x6) {
            if (this.cA_Y < zY) {
              this.cA_Y = zY;
            }
          }
        }
      }
    } else if (this.location === 'h_zone_04'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          push();
          let b_x1 = (zX+40);
          let b_y1 = zY;
          let b_x2 = (zX + zW - 40);
          let b_y2 = zY;
          let mini = b_y1;
          let maxi = (b_y1);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          this.cA_Y = constrain(this.cA_Y,mini,maxi)
          pop();
        }
      }
    } else if (this.location === 'h_zone_05') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          push();
          let b_x1 = (zX+40);
          let b_y1 = (zY);
          let b_x2 = (zX+zW-40);
          let b_y2 = (zY);
          let mini = b_y1;
          let maxi = gameData.cnvH;
          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);
          line(b_x1,b_y1,b_x2,b_y2);
          this.cA_Y = constrain(this.cA_Y,mini,maxi)

          let other_b_x1 = (zX);
          let other_b_y1 = (zY + zContainer[i].wall_h);
          let other_b_x2 = (zX+zW-40);
          
          line(other_b_x1,other_b_y1,other_b_x2,other_b_y1);

          if(this.cA_X > other_b_x1 && this.cA_X < other_b_x2) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }
          }
          pop();
        }
      }
    } else if (this.location === 'h_zone_06'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          push();
          let b_x1 = (zX+40);
          let b_y1 = (zY);
          let b_x2 = (zX+zW);
          let b_y2 = (zY);
          let mini = b_y1;
          let maxi = (b_y1 + 5);
          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);
          line(b_x1,b_y1,b_x2,b_y2);
          this.cA_Y = constrain(this.cA_Y,mini,maxi)
          pop();
        }
      }
    } else if (this.location === 'h_zone_07'){
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
          zH = zContainer[i].wall_h;
            
          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));
          
          let b_x1 = (zX+42);
          let b_y1 = (zY+40);
          let b_x2 = (zX+zW);
          let b_y2 = (zY+40);
          push();
          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);
          line(b_x1, b_y1, b_x2, b_y2);
          pop();


          if(this.cA_X > 280 && this.cA_X < 324) {
            if(this.cA_Y < zY) {
              this.cA_Y = zY;
            }
          } else if(this.cA_X > 325 && this.cA_X < 369) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }else if (this.cA_Y < zY){
              this.cA_Y = zY;
            }
          } else if(this.cA_X > 370 && this.cA_X < 410) {
            if(this.cA_Y > zY) {
              this.cA_Y = zY;
            }
          }
        }
      }
    } else if (this.location === 'h_zone_09') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;
          
          if(this.cA_X < zX) {
            this.cA_X = zX;
          }

          if(this.cA_Y > zY) {
            this.cA_Y = zY;
          }
        }
      }
    } else if (this.location === 'h_zone_10') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_X = constrain(this.cA_X,zX,zX+(zW-25));

          if(this.cA_Y > zY) {
            this.cA_Y = zY;
          } else if (this.cA_Y < zY) {
            this.cA_Y = zY;
          } 
        }
      }
    } else if (this.location === 'h_zone_11') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_Y = constrain(this.cA_Y,zY,gameData.cnvH);

          push();
          let b_x1 = (zX);
          let b_y1 = (zY);
          let b_x2 = (zX+zW);
          let b_y2 = (zY);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          if(this.cA_X > zX + 5) {
            this.cA_X = zX + 5;
          }
          pop();
        }
      }
    } else if (this.location === 'stadium') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));

          push();
          let b_x1 = (zX);
          let b_y1 = (zY+50);
          let b_x2 = (zX+zW-40);
          let b_y2 = (zY+50);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_Y > zY) {
            this.cA_Y = zY;
          }
          pop();
        }
      }
    } else if (this.location === 'watchtower') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          this.inWatchtower = true;
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));

          push();
          let b_x1 = (zX);
          let b_y1 = (zY+50);
          let b_x2 = (zX+zW-40);
          let b_y2 = (zY+50);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_Y > zY) {
            this.cA_Y = zY;
          }
          pop();
        }
      }
    } else if (this.location === 'dead_End' ) {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          this.inDeadEnd = true;
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));

          push();
          let b_x1 = (zX);
          let b_y1 = (zY+50);
          let b_x2 = (zX+zW-40);
          let b_y2 = (zY+50);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_Y < zY) {
            this.cA_Y = zY;
          }
          pop();
        } 
      }
    } else if (this.location === 'house') {
      this.inHouse = true;
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_X = constrain(this.cA_X,zX,(zX+(zW-25)));

          push();
          let b_x1 = (zX);
          let b_y1 = (zY+50);
          let b_x2 = (zX+zW-40);
          let b_y2 = (zY+50);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_Y < zY) {
            this.cA_Y = zY;
          }
          pop();
        }
      }
    } else if (this.location === 'c_Entrance01') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          this.inCave_Entrance_01 = true;
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_Y = constrain(this.cA_Y,zY,(zY+1));

          push();
          let b_x1 = (zX+zW);
          let b_y1 = (zY);
          let b_x2 = (zX+zW);
          let b_y2 = (zY);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_X > zX + 5) {
            this.cA_X = zX + 5;
          }
          pop();
        }
      }
    } else if (this.location === 'c_Entrance02') {
      for(let i = 0; i < zContainer.length; i++) {
        if(this.location === zContainer[i].zone) {
          this.inCave_Entrance_02 = true;
          zX = zContainer[i].wall_x;
          zW = zContainer[i].wall_w;
          zY = zContainer[i].wall_y;

          this.cA_Y = constrain(this.cA_Y,zY,(zY+1));

          push();
          let b_x1 = (zX+zW);
          let b_y1 = (zY);
          let b_x2 = (zX+zW);
          let b_y2 = (zY);

          stroke(zContainer[i].zR,zContainer[i].zG,zContainer[i].zB,zContainer[i].z_Opacity);

          line(b_x1,b_y1,b_x2,b_y2);

          if(this.cA_X < zX + 5) {
            this.cA_X = zX + 5;
          }
          pop();
        }
      }
    }
    if (!this.inCave_Entrance_01 && !this.inCave_Entrance_02) {
      this.canTeleport = true;
    }
  }

  showQuest() {
    let x = gameData.cnvW/2; 
    let y = gameData.cnvH/2;
    let w = 400;
    let h = 200;
    let color = 0;
    let cR = 25;    
    
    this.citySpeed = 0;
    
    push();
    fill(color,240);
    rectMode(CENTER);
    rect(x,y,w,h,cR);
    pop();

    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(255,255,255);
    text(':Quest:',450,190);
    text('\n\nGo to Forest',450,190);
    text('\n\n\n\nCollect the herbs',450,190);
    text('\n\n\n\n\n\nto Heal your friend.',450,190);
    text('\n\n\n\n\n\n\n\nPress Any Key to Advance',450,190);
    pop();
  }

  speedReduction_Msg() {
    let x = gameData.cnvW/2; 
    let y = gameData.cnvH/2;
    let w = 400;
    let h = 200;
    let color = 0;
    let cR = 25;
    
    push();
    fill(color,240);
    rectMode(CENTER);
    rect(x,y,w,h,cR);
    pop();

    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(255,255,255);
    text(':Speed Reduction:',450,190);
    text('\n\nYou Stepped on Poop!',450,190);
    text('\n\n\n\n\nPress Any Key to Advance',450,190);
    pop();
  }
  
  herb_Picked_Up_Msg() {
    let x = gameData.cnvW/2; 
    let y = gameData.cnvH/2;
    let w = 400;
    let h = 200;
    let color = 0;
    let cR = 25;
    
    push();
    fill(color,240);
    rectMode(CENTER);
    rect(x,y,w,h,cR);
    pop();

    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(255,255,255);
    text(':Picked Up Herb:',450,190);
    text('\n\nGet your friend home and heal them!',450,190);
    text('\n\n\n\n\nPress Any Key to Advance',450,190);
    pop();
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

// ===================================
// VISION CLASS Used Gemini for this part of the code
// ===================================

class Vision {
  constructor () {
    this.c_value = 0;
    
    this.x = gameData.cnvW;
    this.y = gameData.cnvH;
  
    //set constructor property to create an off-screen canvas
    this.topLayer = createGraphics(this.x,this.y); 

    // give the canvas a color of value 0.
    this.topLayer.background(this.c_value);
  }

  fog() {
    //if statement check if player is in the watchtower zone
    //if they are clear the top layer 
    if(gameData.city_Avatar.inWatchtower) {
      this.topLayer.clear();
      image(this.topLayer,0,0);
      return;
    } else {
    //start the erase mode in topLayer  
      this.topLayer.erase();

    }
    //make circle around character
    this.topLayer.ellipse(gameData.city_Avatar.cA_X + (gameData.city_Avatar.cA_S/2), gameData.city_Avatar.cA_Y + (gameData.city_Avatar.cA_S/2),50,50);

    //stop the eraser mode   
    this.topLayer.noErase();

    //anything between erase noErase draws holes into buffer.

    //layer off screen where black background and erasing is happening and gets printed to see the erasing action
    image(this.topLayer, 0,0);
  }

}

// ===================================
// CHARACTER SELECTION SCENE 0
// ===================================
function character_Select_Instructions() {
  background(0)
  push();
  textAlign(CENTER,CENTER);
  textSize(30);
  fill(255,255,255);
  text(':Instructions:',450,105);
  text('\n\nUse switches to select character',450,175);
  text('\n\n\n\nClick [Down] to cycle through characters',450,175);
  text('\n\n\n\n\n\nClick [Up] to confirm',450,175);
  text('\n\n\n\n\n\n\n\n',450,175);
  text('\n\n\n\n\n\n\n\n\n\n\nPress any button to start!',450,175);
  pop();
}

// ===================================
// CHARACTER SELECTION SCENE 1
// ===================================
function characterSelect() {
  background(gameData.cnvColor);

  if(gameData.playerOne_Selector === null && gameData.playerTwo_Selector === null) {
    gameData.reading_Instructions = true;
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
    gameData.scene = 2;
  }
}

// ===================================
// CHARACTER SELECTION SCENE 2
// ===================================
function race_Instructions() {
  background(0)
  push();
  textAlign(CENTER,CENTER);
  textSize(30);
  fill(255,255,255);
  text(':Instructions:',450,105);
  text('\n\nUse switches to move character',450,175);
  text('\n\n\n\nClick [Down] to Run',450,175);
  text('\n\n\n\n\n\nClick [Up] to Jump',450,175);
  text('\n\n\n\n\n\n\n\nObjective: Get to the Finish Line',450,175);
  text('\n\n\n\n\n\n\n\n\n\n\nPress any button to start!',450,175);
  pop();
}

// ===================================
// COMPETITVE LEVEL SCENE 3
// ===================================
function raceLvl() {
  let musicPlaying = false;
  let rematch = 'Rematch';
  let c_ontinue = 'Continue';
 
  background(gameData.cnvColor);

  if(gameData.p1_raceAvatar === null && gameData.p2_raceAvatar === null) {
    gameData.p1_raceAvatar = new Avatar(gameData.p1Color, gameData.playerOne_Selector.player_No);

    gameData.p2_raceAvatar = new Avatar(gameData.p2Color,gameData.playerTwo_Selector.player_No);
    gameData.stageSelector = floor(random(gameData.img_Container.length));

    gameData.crates.push(new Crate(950,320,1.0));
    gameData.crates.push(new Crate(1400,345,1.0));

    gameData.crates.push(new Crate(1300,418,1.0));
    gameData.crates.push(new Crate(1700,445,1.0));
  }


  for(let i = 0; i < gameData.music_Container.length; i++) {
    if(gameData.music_Container[i].isPlaying()) {
      musicPlaying = true;
    }
  }

  if(!musicPlaying && gameData.raceStart === true) {
    gameData.songSelect = floor(random(0,gameData.music_Container.length));
    gameData.music_Container[gameData.songSelect].setVolume(0.25);
    gameData.music_Container[gameData.songSelect].play();
  }

  if(gameData.raceEnd === true) {
    gameData.music_Container[gameData.songSelect].stop();
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

  if(gameData.p1_raceAvatar.avatar_X >= gameData.finishLine && !gameData.p1_raceAvatar.isJumping ||
     gameData.p2_raceAvatar.avatar_X >= gameData.finishLine && !gameData.p2_raceAvatar.isJumping) {
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
      gameData.scene = 4;
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

// ===================================
// COLLABORATION LEVEL SCENE 4
// ===================================
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
    textSize(30);
    fill(255,255,255);
    text(injury_msg,450,200);
    text('\n\nUse all the buttons to move around the map',450,200);
    text('\n\n\n\nPress any button to start!',450,200);
    text('\n\n\n\n\n\n\nHint: Look for the watchtower',450,200);
    pop();
    
  }

  if(!gameData.reading_Instructions) {
    image(gameData.cityMap_topDown,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);

    if(gameData.city_Avatar === null) {
      gameData.city_Avatar = new Avatar (gameData.p1Color, gameData.playerOne_Selector.player_No);
      gameData.hide_Map = new Vision();

      gameData.zone_Container.push(new Zone(1,58,40,180, 'zone_01'));

      gameData.zone_Container.push(new Zone(1,278,40,180, 'zone_02'));

      gameData.zone_Container.push(new Zone(52,58,40,80, 'zone_03'));

      gameData.zone_Container.push(new Zone(111,58,40,180, 'zone_04'));

      gameData.zone_Container.push(new Zone(111,278,40,60, 'zone_05'));

      gameData.zone_Container.push(new Zone(242,278,40,180, 'zone_06'));

      gameData.zone_Container.push(new Zone(370,58,40,180, 'zone_07'));

      gameData.zone_Container.push(new Zone(370,278,40,97, 'zone_08'));
      
      gameData.zone_Container.push(new Zone(571,178,40,60, 'zone_09'));

      gameData.zone_Container.push(new Zone(571,278,40,180, 'zone_10'));

      gameData.zone_Container.push(new Zone(631,58,40,160, 'zone_11'));

      gameData.zone_Container.push(new Zone(852,113,40,105, 'zone_12'));

      gameData.zone_Container.push(new Zone(852,258,40,200, 'zone_13'));

      gameData.zone_Container.push(new Zone(306,116,40,80, 'zone_14'));

      gameData.zone_Container.push(new Zone(290,415,40,41, 'zone_15'));

      gameData.zone_Container.push(new Zone(852,73,40,40, 'house'));

      gameData.zone_Container.push(new Zone(571,138,40,40, 'dead_End'));

      gameData.zone_Container.push(new Zone(52,138,40,40, 'watchtower'));

      gameData.zone_Container.push(new Zone(111,338,40,40, 'stadium'));

      gameData.zone_Container.push(new Zone(1,18,91,40, 'h_zone_01'));

      gameData.zone_Container.push(new Zone(111,18,560,40, 'h_zone_02'));

      gameData.zone_Container.push(new Zone(1,238,610,40, 'h_zone_03'));

      gameData.zone_Container.push(new Zone(1,458,281,40, 'h_zone_04'));

      gameData.zone_Container.push(new Zone(631,218,261,40, 'h_zone_05'));

      gameData.zone_Container.push(new Zone(571,456,321,40, 'h_zone_06'));

      gameData.zone_Container.push(new Zone(290,375,120,40, 'h_zone_07'));


      gameData.zone_Container.push(new Zone(290,456,40,40, 'h_zone_09'));

      gameData.zone_Container.push(new Zone(187,196,159,40, 'h_zone_10'));

      gameData.zone_Container.push(new Zone(307,76,39,40, 'h_zone_11'));

      gameData.zone_Container.push(new Zone(330,456,40,40, 'c_Entrance01'));

      gameData.zone_Container.push(new Zone(267,76,40,40, 'c_Entrance02'));

      if(!gameData.city_Music.isPlaying()) {
        gameData.city_Music.play();
      }
    } 

    if(!gameData.city_Avatar.steppedOnDroppings && !gameData.city_Avatar.questGiven && !gameData.city_Avatar.hasHerb && gameData.city_Avatar.location === 'h_zone_10') {
      image(gameData.forest_Thing,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);

      for(let i = 0; i < gameData.zone_Container.length; i++) {
        if(gameData.zone_Container[i].zone === gameData.city_Avatar.location) {
          let x = gameData.zone_Container[i].wall_x;
          let y = gameData.zone_Container[i].wall_y;

          if(gameData.city_Avatar.cA_X > x - 50 && gameData.city_Avatar.cA_X < x + 50 && gameData.city_Avatar.cA_Y > y - 50 && gameData.city_Avatar.cA_Y < y + 50) {
            gameData.city_Avatar.steppedOnDroppings = true;
            gameData.fx_Container[3].play();
            gameData.city_Avatar.debuffMsg = true;

            gameData.city_Avatar.citySpeed = 1.75;
          }
        }
      }
    }
    
    if(gameData.city_Avatar.questGiven && !gameData.city_Avatar.hasHerb && gameData.city_Avatar.location === 'h_zone_10') {
      
      image(gameData.herb,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);

      for(let i = 0; i < gameData.zone_Container.length; i++) {
        if(gameData.zone_Container[i].zone === gameData.city_Avatar.location) {
          let x = gameData.zone_Container[i].wall_x;
          let y = gameData.zone_Container[i].wall_y;

          if(gameData.city_Avatar.cA_X > x - 50 && gameData.city_Avatar.cA_X < x + 50 && gameData.city_Avatar.cA_Y > y - 50 && gameData.city_Avatar.cA_Y < y + 50) {
            gameData.city_Avatar.hasHerb = true;

            gameData.city_Avatar.herbMsg = true;
          }
        }
      }
    }

    for(let i = 0; i < gameData.zone_Container.length; i++) {
      gameData.zone_Container[i].display_Zone();
    }

    gameData.city_Avatar.combined_Movement();
    gameData.city_Avatar.showCL();

    image(gameData.watchtower,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);
    
    image(gameData.cave_Entrance,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);
    
    gameData.hide_Map.fog();
    gameData.city_Avatar.p_location(gameData.zone_Container);
    gameData.city_Avatar.check_Collision();

    if(gameData.city_Avatar.inDeadEnd) {
      image(gameData.deadEnd_Sign,gameData.img_PosX,gameData.img_PosY,gameData.cnvW, gameData.cnvH);
    }

    if(gameData.city_Avatar.inHouse && !gameData.city_Avatar.hasHerb && !gameData.city_Avatar.readingQuest) {
      gameData.city_Avatar.readingQuest = true;
      gameData.fx_Container[5].play();
    }else if (gameData.city_Avatar.inHouse && gameData.city_Avatar.hasHerb) {
      gameData.scene = 5;
    }
    
    if(gameData.city_Avatar.inCave_Entrance_01 && gameData.city_Avatar.canTravel) {
      for(let i = 0; i < gameData.zone_Container.length; i++) {
        if(gameData.zone_Container[i].zone === 'c_Entrance02') {

          let c_Entrance_x = gameData.zone_Container[i].wall_x;
          let c_Entrance_y = gameData.zone_Container[i].wall_y;

          gameData.city_Avatar.cA_X = (c_Entrance_x + 42);
          gameData.city_Avatar.cA_Y = c_Entrance_y;

          gameData.city_Avatar.inCave_Entrance_01 = false;
          gameData.city_Avatar.canTeleport = false;

          break;
        }
      }
    }else if(gameData.city_Avatar.inCave_Entrance_02 && gameData.city_Avatar.canTravel) {
      for(let i = 0; i < gameData.zone_Container.length; i++) {
        if(gameData.zone_Container[i].zone === 'c_Entrance01') {

          let c_Entrance_x = gameData.zone_Container[i].wall_x;
          let c_Entrance_y = gameData.zone_Container[i].wall_y;

          gameData.city_Avatar.cA_X = (c_Entrance_x - 35);
          gameData.city_Avatar.cA_Y = c_Entrance_y;

          gameData.city_Avatar.inCave_Entrance_02 = false;
          gameData.city_Avatar.canTeleport = false;

          break;
        }
      }
    }
    
    if(gameData.city_Avatar.readingQuest) {
      gameData.city_Avatar.showQuest();
    }

    if(gameData.city_Avatar.debuffMsg) {
      gameData.city_Avatar.speedReduction_Msg();
    }

    if(gameData.city_Avatar.herbMsg) {
      gameData.city_Avatar.herb_Picked_Up_Msg();
    }
    
  }
}

// ===================================
// COLLABORATION LEVEL SCENE 5
// ===================================
function last_Scene() {
    background(0);

    let x = gameData.cnvW/2; 
    let y = gameData.cnvH/2;
    let w = 400;
    let h = 200;
    let color = 0;
    let cR = 25;

    push();
    fill(color,240);
    rectMode(CENTER);
    rect(x,y,w,h,cR);
    pop();

    push();
    textAlign(CENTER,CENTER);
    textSize(30);
    fill(255,255,255);
    text(':The End:',450,190);
    text('\n\nCreated By',450,190);
    text('\n\n\n\nJacob, Jonathan, and Hector',450,190);
    text('\n\n\n\n\n\nPress [F5] to Play Again!',450,190);
    pop();
}

// ===================================
// RACE COUNTDOWN DISPLAY
// ===================================
function rStartUp() {
  let cd_playing = false;
  push();

  if (gameData.timer > 0 && gameData.timer < 3001) {
    if(gameData.fx_Container[0].isPlaying()){
      cd_playing = true;
    }

    if(!cd_playing) {
      gameData.fx_Container[0].play();
    }
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

// ===================================
// RACE RESULTS DISPLAY
// ===================================
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
  }
}

// ===================================
// REMATCH BUTTON
// ===================================
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

// ===================================
// CONTINUE BUTTON
// ===================================
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

// ===================================
// RUNS FIREWORKS
// ===================================
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

// ===================================
// RESETS VARIABLES SCENE 1
// ===================================
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
