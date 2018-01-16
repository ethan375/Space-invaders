console.log("JS file linked");
// grab the canvas by the id
let canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
let ctx = canvas.getContext('2d');

// global variables
let playerX = 350; //this is the starting x coordinate for the player 


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


document.addEventListener('keydown', function(event){
  let key = event.which;
  if(key == 39){
    playerX = playerX + 10;
  }else if(key == 37){
    playerX = playerX - 10;
  }
  console.log(key)
  console.log(playerX)
});



let animateCanvas = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAliens();
  player();
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

