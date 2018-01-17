console.log("JS file linked");
// grab the canvas by the id
let canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
let ctx = canvas.getContext('2d');

// global variables
let playerX = 350; //this is the starting x coordinate for the player 
let laserX = playerX //this will be the position of the laser when fired, being equal to player's x coordinate will make it appear as if it is coming from the players ship
let laserY = 650; //this will be y coordinate for the bullet which will travel upwards on y axis when shot
let FPS = 60; //this is our frames per second

let drawAliens = ()=>{
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(30,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(70,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(110,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(150,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(190,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(230,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(270,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(310,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(350,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(390,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(430,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(470,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(510,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(550,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(590,30,30,20)
  ctx.fillStyle = 'rgb(20, 200, 30)';
  ctx.fillRect(630,30,30,20)
}

let player = ()=>{
  ctx.fillStyle = 'rgb(20, 20, 200)'
  ctx.fillRect(playerX, 670, 30, 20)
}

let laser = ()=>{
  ctx.fillStyle = 'rgb(200, 30, 50)'
  ctx.fillRect(laserX + 10 , laserY, 10, 20);
  laserY -= 10
  if(laserY < 60){
    laserReset();
  }
};


document.addEventListener('keydown', function(event){
  let key = event.which;
  if(key == 39){
    playerX = playerX + 10;
  }else if(key == 37){
    playerX = playerX - 10;
  }else if(key == 32){
   Laser();
  }
  // console.log(key)
  // console.log(playerX)
});

let laserReset = ()=>{
   laserX = laserX;
   laserY = 650
}





let animateCanvas = ()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAliens();
  player();
  laser();
  window.requestAnimationFrame(animateCanvas);

};

animateCanvas();





  // let count = 16;
  // let x = 30
  // let y = 30
  // for(let i = 0; i<count; i++){
  //   ctx.fillStyle = 'rgb(20, 200, 30)';
  //   ctx.fillRect(x + 50,y,30,20)
  // }

