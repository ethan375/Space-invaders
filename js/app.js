console.log("JS file linked");
// grab the canvas by the id
const canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
const ctx = canvas.getContext('2d');

// // global variables
let playerX = 350; //this is the starting x coordinate for the player 
let laserX = playerX //this will be the position of the laser when fired, being equal to player's x coordinate will make it appear as if it is coming from the players ship
let laserY = 650; //this will be y coordinate for the bullet which will travel upwards on y axis when shot
let laserArray = [];


//constructor function for the aliens
function Aliens (x, y, ){
  this.x = x;
  this.y = y;
  // this.dx = dx;
  // this.dy = dy;

  this.draw = ()=>{
    ctx.fillStyle = 'rgb(20, 230, 30)'
    ctx.fillRect(this.x, this.y, 10, 20);
  },



  this.update = ()=>{
    // if(this.x  > 700 || this.x < 0){
    //   this.dx = -dx
    // }
    // if(this.x + 5 > 700 || this.x - 5 < 0){
    //   this.dy = -dy;
    // }
    // this.x += dx;
    // this.y -= dy;
    this.draw();
  }
}

  const alienArray = [];

for(let i = 0; i < 10; i++){
  let x = 15;
  let y = 10;
  let row = 6;
  let col = 7;
  for(let i=0; i < row;i++){
    for(let j=0; j<col; j++){
      alienArray.push(new Aliens(x, y))
      x += 20;
    }
    y += 30;
  }
}


// let how = ()=>{
//   ctx.fillStyle = 'rgb(20,230,30)';
//   ctx.fillRect(100,100,10,20)
// }

let player = ()=>{
  ctx.fillStyle = 'rgb(20, 20, 200)'
  ctx.fillRect(playerX, 670, 30, 20)
}

// function laser (y, dy) {
//   this.y = y;
//   this.dy = dy;

//   thi
//   ctx.fillStyle = 'rgb(200, 30, 50)';
//   ctx.fillRect(laserX + 10 , 650, 10, 20);
//   laserY -= 10
// };


document.addEventListener('keydown', function(event){
  let key = event.which;
  if(key == 39){
    playerX = playerX + 10;
  }else if(key == 37){
    playerX = playerX - 10;
  }else if(key == 32){ 
    // laserArray.push(new laser)
  }
});







let animateCanvas = ()=>{
  window.requestAnimationFrame(animateCanvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i < 10; i++) {
    alienArray[i].update();
  }
  player();
};
animateCanvas();









