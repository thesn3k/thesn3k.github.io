let imgObj;
let animate; 
let students=[
  {name: "Ruhan",regno: "urk19cs2002",dob:"21-09-2001"},{name:"Harish Reddy",regno:"urk19cs2003",dob:"25-09-2001"},{name:"David",regno:'urk19cs2004',dob:'13-05-1999'}];


const displayClock = () => {
 
  var d= new Date();
  var hours = d.getHours()
  var mins = d.getMinutes()
  var sec = d.getSeconds()
  document.getElementById("time").innerHTML = `${hours}:${mins}:${sec}`
}

const changeBG = () => {
  var red = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var color=`background-color: rgb(${red},${green},${blue})`
  document.getElementById('bg').style = color
}

const incSize = () => {
  document.getElementById('para').style = "font-size: 2rem";
}

const decSize = () => {
  document.getElementById('para').style = "font-size: 1rem";
}

const init = () => {
  imgObj = document.getElementById('img');
  imgObj.style.position = 'relative';
  imgObj.style.left = '0px';
}

const moveRight = () => {
imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
animate = setTimeout('moveRight()',10); 
}

function stop()
{
clearTimeout(animate);
imgObj.style.left = '0px';
}

for(var i=0;i<students.length;i++){
  var year = parseInt(students[i]['dob'].slice(6,10));
  const node = document.createElement("li");
  const textnode = document.createTextNode(`name: ${students[i]['name']} regno: ${students[i]['regno']}`);
  node.appendChild(textnode);
  
  if(year<2000){
    document.getElementById("born-before").appendChild(node);
  }else{
    document.getElementById("born-after").appendChild(node);
  }
  
}

setInterval(displayClock, 1000);
setInterval(changeBG,1000);
window.onload = init();