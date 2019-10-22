function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const c = document.querySelector(".circle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);
function getCord(e){
    var x = (e.clientX-25)+"px";
    var y = (e.clientY-25)+"px";
    c.style.top = y;
    c.style.left = x;
    console.log(x,y);
    console.log(getRandomColor());
    document.querySelector("body").style.backgroundColor = getRandomColor();
    return [x, y];
}

document.addEventListener("mousemove", getCord);