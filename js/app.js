console.log("JS file linked");
// grab the canvas by the id
const canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
const ctx = canvas.getContext('2d');

// // global variables
// let playerX = 350; //this is the starting x coordinate for the player 
// //let laserX = playerX //this will be the position of the laser when fired, being equal to player's x coordinate will make it appear as if it is coming from the players ship
// const laserY = 650; //this will be y coordinate for the bullet which will travel upwards on y axis when shot
// const laserX = playerX;
// let bullets = [];



function Aliens (x, y, dx, dy){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.draw = ()=>{
    ctx.fillStyle = 'rgb(20, 230, 30)'
    ctx.fillRect(this.x, this.y, 10, 20);
  },



  this.update = ()=>{
    if(this.x + 5 > canvas.Width || this.x -5 < 0){
      this.dx = -dx
    }
    if(this.x + 5 > canvas.width || this.x - 5 < 0){
      this.dy = -dy;
    }
    this.x += dx;
    this.y -= dy;
    this.draw();
  }
}

  const alienArray = [];

for(let i = 0; i < 10; i++){
  let x = Math.random() * canvas.height;
  let y = 100;
  let dx = 0;
  let dy = 0;
  alienArray.push(new Aliens(x, y, dx, dy))
}


// let how = ()=>{
//   ctx.fillStyle = 'rgb(20,230,30)';
//   ctx.fillRect(100,100,10,20)
// }

// let player = ()=>{
//   ctx.fillStyle = 'rgb(20, 20, 200)'
//   ctx.fillRect(playerX, 670, 30, 20)
// }

// let laser = ()=>{
//   ctx.fillStyle = 'rgb(200, 30, 50)'
//   ctx.fillRect(laserX + 10 , laserY, 10, 20);
//   laserY -= 10

// };


// document.addEventListener('keydown', function(event){
//   let key = event.which;
//   if(key == 39){
//     playerX = playerX + 10;
//   }else if(key == 37){
//     playerX = playerX - 10;
//   }else if(key == 32){ 
//   }
// });

// let laserReset = ()=>{
//    laserX += 10;
//    laserY = 650
// }





let animateCanvas = ()=>{
  window.requestAnimationFrame(animateCanvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i < 10; i++) {
    alienArray[i].update();
  }
  // player();
};
animateCanvas();









