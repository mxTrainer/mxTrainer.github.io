const c = document.getElementById("c");
const ctx = c.getContext('2d');
ctx.translate(0.5, 0.5);
c.width = window.innerWidth - 60;
c.height = c.width;

const rowLimit = 5;
const dW = c.width/rowLimit;
const dH = dW/2;
const spacer = dH/4;

let dotW = dH/14;

let bPrint = [
  [],
  [0,0,0,0,1,0,0,0,0],
  [1,0,0,0,0,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,1,0,0,0,1,0,1],
  [1,0,1,0,1,0,1,0,1],
  [1,1,1,0,0,0,1,1,1],
  [1,1,1,0,1,0,1,1,1],
  [1,1,1,1,0,1,1,1,1],
  [1,1,1,1,1,1,1,1,1]];

//let bPrintColor = ["","lightblue","green","pink","darkgrey","darkblue","gold","blue","darkgreen","purple","orange","black","grey"]
let bPrintColor = ["","#00B6FF","green","#FF008E","darkgrey","darkblue","#FFEB23","#87A1BE","darkgreen","#5C0B94","orange","black","#B7B7B7"]

function displayTrain(train){
  //let w = 100; //window.innerWidth/rowLimit;
  //let h = w/2;
  cls(); //clear old train
  for(let i = 0; i < train.length; i++){
    let x = dW*(i%rowLimit);
    let y = (dH+spacer)*(Math.floor(i/rowLimit));
    drawDomino(x,y,dW,dH,10,train[i]);
  }
}

function drawDomino(x,y,w,h,r,d){
  const xW = x+w; //used three times in the function,
  const yH = y+h; //saved instead of calcualting it over and over again.

  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.moveTo(x+r, y); //starting point
  ctx.arcTo(xW, y,  xW,   y+r,  r); //top
  ctx.arcTo(xW, yH, xW-r, yH,   r); //right
  ctx.arcTo(x,  yH, x,    yH-r, r); //bottom
  ctx.arcTo(x,  y,  x+r,  y,    r); //left
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black"
  ctx.fill();
  ctx.stroke();

  //ctx.save();

  ctx.beginPath();
  ctx.moveTo(x + w/2, y + h * 0.1);
  ctx.lineTo(x + w/2, yH - h * 0.1 ); //center line
  ctx.stroke();
  //ctx.save();

  for(let j = 0; j < 2; j++){
    if(d[j] > 9){twelvePattern(x, y, d[j], j);}
    else if(d[j] > 0){ninePattern(x, y, d[j], j);}
  }

  //ctx.restore();
}

function ninePattern(x,y,n,pos){
  side = pos*dW/2;
  halfDW = dW / 2;
  spaceX = (halfDW - dotW*3)/4;
  spaceY = (dH - dotW*3)/4;
  spaceDotX = dotW + spaceX;
  spaceDotY = dotW + spaceY;
  ctx.beginPath();
  ctx.fillStyle = bPrintColor[n];

  if(bPrint[n][0]){
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2);
    ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][1]){
    ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2);
    ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][2]){
    ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2);
    ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
  }
  //row 2
  if(bPrint[n][3]){
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
    ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][4]){
    ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY);
    ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][5]){
    ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY);
    ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  }
//row 3
  if(bPrint[n][6]){
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
    ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][7]){
    ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
    ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
  }
  if(bPrint[n][8]){
    ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
    ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
  }

  ctx.fill();
  //ctx.save();
}
function twelvePattern(x,y,n,pos){
  side = pos*dW/2;
  halfDW = dW / 2;
  spaceX = (halfDW - dotW*4)/5;
  spaceY = (dH - dotW*3)/4;
  spaceDotX = dotW + spaceX;
  spaceDotY = dotW + spaceY;
  ctx.beginPath();
  ctx.fillStyle = bPrintColor[n];
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2);
  ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
    ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2);
  ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
      ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2);
  ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
      ctx.moveTo(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2);
  ctx.arc(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2, dotW, 0, 2 * Math.PI);
    //row 2
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
  ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  if(n == 12){
      ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY);
    ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
        ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY);
    ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  }
  else if(n == 11){
        ctx.moveTo(x + halfDW/2 + side, y + spaceY + dotW/2 + spaceDotY);
    ctx.arc(x + halfDW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  }
      ctx.moveTo(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY);
  ctx.arc(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + spaceDotY, dotW, 0, 2 * Math.PI);
  //row 3
    ctx.moveTo(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
  ctx.arc(x + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
    ctx.moveTo(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
  ctx.arc(x + spaceDotX + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
      ctx.moveTo(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
  ctx.arc(x + (spaceDotX * 2) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);
      ctx.moveTo(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2));
  ctx.arc(x + (spaceDotX * 3) + spaceX + dotW/2 + side, y + spaceY + dotW/2 + (spaceDotY * 2), dotW, 0, 2 * Math.PI);

  ctx.fill();
  //ctx.save();
}



function cls(){ctx.clearRect(0,0,c.width,c.height)}
