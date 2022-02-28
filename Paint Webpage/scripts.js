  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

//size canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = '#4c212a';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0 ;
let lastY = 0;

function draw (e){
  if(!isDrawing) return;
  
  //start drawing 
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];



}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () =>  isDrawing = false);
canvas.addEventListener('mouseout', () =>  isDrawing = false);
