const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;


function shadow (e){
    //get height and width of the screen
    const { offsetWidth: width, offsetHeight: height } = hero;
    let  { offsetX: x, offsetY: y} = e;
    
    if(this != e){
        x = x + e.target.offsetLeft;
        y= y + e.target.offsetTop;
    };
    const xWalk = Math.round((x / width * walk ) - (walk / 2));
    const yWalk = Math.round((y / width * walk ) - (walk / 2));
    console.log(xWalk, yWalk);
};

hero.addEventListener('mousemove', shadow);