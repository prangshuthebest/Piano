var fingure,fingureImage,key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11,key12,key13,key14,key15,b1,b2;
var a,aa,b,bb,c,cc,d,dd,e,ee,f,ff,g,gg,h,hh,i,ii,j,jj,k,kk,l,ll,m,mm,nn,n,o,oo,pianoswitch,pianoswitch2;
var m1,m2,m3,m4,m5,m6,m7,music,indicator,playButton;
function preload(){
fingureImage = loadImage("figure.png");
m1 = loadSound("puzzle_game_accent_bubble_01.mp3");
m2 = loadSound("lighthearted_bonus_objective_4.mp3");
m3 = loadSound("lighthearted_bonus_objective_1.mp3");
m4 = loadSound("destruction_5.mp3");
m5 = loadSound("collect_item_bling_1.mp3");
m6 = loadSound("coin_2.mp3");
m7 = loadSound("airy_bell_notification.mp3");
music = loadSound("music.mp3");
}
function setup() {
  createCanvas(1350,800);
  pianoswitch = createSprite(1300,100,50,100);
  pianoswitch2 = createSprite(1200,100,50,100);
  playButton = createSprite(1000,300,50,50);
  playButton.shapeColor = "green";
  indicator = createSprite(850,100,20,20);
  indicator.visible = false;
  key1 = createSprite(100,500,50,200);
  key2 = createSprite(150,475,50,150);
  key2.shapeColor=rgb(0,0,0);
  key3 = createSprite(200,500,50,200);
  key4 = createSprite(250,475,50,150);
  key4.shapeColor=rgb(0,0,0);
  key5 = createSprite(300,500,50,200);
  key6 = createSprite(350,475,50,150);
  key6.shapeColor=rgb(0,0,0);
  key7 = createSprite(400,500,50,200);
  key8 = createSprite(450,500,50,200);
  b1 = createSprite(425,500,5,200);
  b1.shapeColor = rgb(0,0,0)
  key9 = createSprite(500,475,50,150);
  key9.shapeColor=rgb(0,0,0);
  key10= createSprite(550,500,50,200);
  key11= createSprite(600,475,50,150);
  key11.shapeColor=rgb(0,0,0);
  key12= createSprite(650,475,50,150);
  key12.shapeColor=rgb(0,0,0);
  b2 = createSprite(625,475,5,150);
  b2.shapeColor = rgb(255,255,255);
  key13= createSprite(700,500,50,200);
  key14= createSprite(750,475,50,150);
  key14.shapeColor=rgb(0,0,0);
  key15= createSprite(800,500,50,200);
  fingure = createSprite(200,200,200);
  fingure.addImage(fingureImage);
  fingure.scale=0.5;
  fingure.setCollider("rectangle",30,30,30,200)
  aa = createSprite(100,260,1,280);
  a = createSprite(100,100,50,50);
  b = createSprite(150,270,1,260);
  bb = createSprite(150,150,50,50);
  c = createSprite(200,100,50,50);
  cc = createSprite(200,260,1,280);
  d = createSprite(250,150,50,50);
  dd = createSprite(250,270,1,260);
  e = createSprite(300,100,50,50);
  ee = createSprite(300,260,1,280);
  f = createSprite(350,150,50,50);
  ff = createSprite(350,270,1,260)
  g = createSprite(400,100,50,50);
  gg = createSprite(400,260,1,280);
  h = createSprite(450,150,50,50);
  hh = createSprite(450,270,1,260)
  i = createSprite(500,100,50,50);
  ii = createSprite(500,260,1,280);
  j = createSprite(550,150,50,50);
  jj = createSprite(550,270,1,260);
  k = createSprite(600,100,50,50);
  kk = createSprite(600,260,1,280);
  l = createSprite(650,150,50,50);
  ll = createSprite(650,265,1,270);
  m = createSprite(700,100,50,50);
  mm = createSprite(700,263,1,275);
  n = createSprite(750,150,50,50);
  nn = createSprite(750,263,1,275);
  o = createSprite(800,100,50,50);
  oo = createSprite(800,263,1,275);
}

function draw() {
  background(255,255,255);  
  textSize(20);
  fill("black");
  text("ON",1280,200);
  text("OFF",1180,200);
  fingure.x=mouseX;
 fingure.y=mouseY;

  if(mousePressedOver(playButton)){
music.play();
  }

 if(indicator.visible === true){
  playPiano();
 }

 if(mousePressedOver(pianoswitch)){
  m1.play();
indicator.visible = true;
  indicator.shapeColor = rgb(13,208,65);
pianoswitch.shapeColor = "yellow";
a.shapeColor = "yellow";
aa.shapeColor = "yellow";
b.shapeColor = "yellow";
bb.shapeColor = "yellow";
c.shapeColor = "yellow";
cc.shapeColor = "yellow";
d.shapeColor = "yellow";
dd.shapeColor = "yellow";
e.shapeColor = "yellow";
ee.shapeColor = "yellow";
f.shapeColor = "yellow";
ff.shapeColor = "yellow";
g.shapeColor = "yellow";
gg.shapeColor = "yellow";
h.shapeColor = "yellow";
hh.shapeColor = "yellow";
i.shapeColor = "yellow";
ii.shapeColor = "yellow";
j.shapeColor = "yellow";
jj.shapeColor = "yellow";
k.shapeColor = "yellow";
kk.shapeColor = "yellow";
l.shapeColor = "yellow";
ll.shapeColor = "yellow";
m.shapeColor = "yellow";
mm.shapeColor = "yellow";
n.shapeColor = "yellow";
nn.shapeColor = "yellow";
o.shapeColor = "yellow";
oo.shapeColor = "yellow";
}
if(mousePressedOver(pianoswitch2)){
  m1.play();
  pianoswitch.shapeColor = "grey";
  a.shapeColor = "grey";
  aa.shapeColor = "grey";
b.shapeColor = "grey";
bb.shapeColor = "grey";
c.shapeColor = "grey";
cc.shapeColor = "grey";
d.shapeColor = "grey";
dd.shapeColor = "grey";
e.shapeColor = "grey";
ee.shapeColor = "grey";
f.shapeColor = "grey";
ff.shapeColor = "grey";
g.shapeColor = "grey";
gg.shapeColor = "grey";
h.shapeColor = "grey";
hh.shapeColor = "grey";
i.shapeColor = "grey";
ii.shapeColor = "grey";
j.shapeColor = "grey";
jj.shapeColor = "grey";
k.shapeColor = "grey";
kk.shapeColor = "grey";
l.shapeColor = "grey";
ll.shapeColor = "grey";
m.shapeColor = "grey";
mm.shapeColor = "grey";
n.shapeColor = "grey";
nn.shapeColor = "grey";
o.shapeColor = "grey";
oo.shapeColor = "grey";
  }
  text("Indicator",870,107);
  text("Piano keys",830,500);

drawSprites();
}
  
function playPiano(){
  if(fingure.isTouching(key1)){
    m7.play();
    a.shapeColor = rgb(255,0,0);
    aa.shapeColor = rgb(255,0,0);
    } else{
      a.shapeColor = "grey";
    aa.shapeColor = "grey";
    }
    if(fingure.isTouching(key2)){
      m2.play();
      b.shapeColor = rgb(255,0,225);
      bb.shapeColor = rgb(255,0,225);
      } else{
        b.shapeColor = "grey";
      bb.shapeColor = "grey";
      }
    if(fingure.isTouching(key3)){
      m3.play();
      c.shapeColor =  rgb(0,255,0);
      cc.shapeColor = rgb(0,255,0);
      } else{
        c.shapeColor = "grey";
      cc.shapeColor = "grey";
      }
      if(fingure.isTouching(key4)){
        m4.play();
        d.shapeColor = rgb(255,242,0);
        dd.shapeColor = rgb(255,242,0);
        } else{
          d.shapeColor = "grey";
        dd.shapeColor = "grey";
        }
    
        if(fingure.isTouching(key5)){
          m5.play();
          e.shapeColor = rgb(255,0,131);
          ee.shapeColor = rgb(255,0,131)
          } else{
            e.shapeColor = "grey";
          ee.shapeColor = "grey";
          }


          if(fingure.isTouching(key6)){
            m6.play();
            f.shapeColor =  rgb(0,203,255);
            ff.shapeColor = rgb(0,203,255);
            } else{
              f.shapeColor = "grey";
            ff.shapeColor = "grey";
            }
        
            if(fingure.isTouching(key7)){
              m7.play();
              g.shapeColor = "orange";
              gg.shapeColor = "orange";
              } else{
                g.shapeColor = "grey";
              gg.shapeColor = "grey";
              }
              if(fingure.isTouching(key8)){
                m2.play();
                h.shapeColor = "coral";
                hh.shapeColor = "coral";
                } else{
                  h.shapeColor = "grey";
                hh.shapeColor = "grey";
                }
            
                if(fingure.isTouching(key9)){
                  m3.play();
                  i.shapeColor = "pink";
                  ii.shapeColor = "pink";
                  } else{
                    i.shapeColor = "grey";
                  ii.shapeColor = "grey";
                  }
                  if(fingure.isTouching(key10)){
                    m4.play();
                    j.shapeColor = "red";
                    jj.shapeColor = "red";
                    } else{
                      j.shapeColor = "grey";
                    jj.shapeColor = "grey";
                    }
                    if(fingure.isTouching(key11)){
                      m5.play();
                      k.shapeColor = rgb(180,0,131);
                      kk.shapeColor = rgb(180,0,131);
                      } else{
                        k.shapeColor = "grey";
                      kk.shapeColor = "grey";
                      }
                      if(fingure.isTouching(key12)){
                        m6.play();
                        l.shapeColor = rgb(180,153,131);
                        ll.shapeColor = rgb(180,153,131);
                        } else{
                          l.shapeColor = "grey";
                        ll.shapeColor = "grey";
                        }
                        if(fingure.isTouching(key13)){
                          m7.play();
                          m.shapeColor = rgb(180,153,218);
                          mm.shapeColor = rgb(180,153,218);
                          } else{
                            m.shapeColor = "grey";
                          mm.shapeColor = "grey";
                          }
                          if(fingure.isTouching(key14)){
                            m2.play();
                            n.shapeColor = rgb(227,153,218);
                            nn.shapeColor = rgb(227,153,218);
                            } else{
                              n.shapeColor = "grey";
                            nn.shapeColor = "grey";
                            }
                            if(fingure.isTouching(key15)){
                              m3.play();
                              o.shapeColor =  rgb(227,69,218);
                              oo.shapeColor = rgb(227,69,218);
                              } else{
                                o.shapeColor = "grey";
                              oo.shapeColor = "grey";
                              }










  }
