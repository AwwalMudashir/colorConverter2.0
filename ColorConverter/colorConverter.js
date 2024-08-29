// switch
const switchC = document.getElementById('switch')
let stat = 'hex'
const title = document.getElementById('title')
const th = document.getElementById('toHex')
const tr = document.getElementById('toRGB')
// to hex
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const con = document.querySelector('.convertHex')
const hexcolor =  document.getElementById('hex-color')
const body = document.querySelector('body')
const clearB = document.getElementById('clear')
const clearB2 = document.getElementById('clear2')

// to RGB
const hex = document.getElementById('hex')
const con2 = document.querySelector('.convertRGB')
const rgbColor = document.getElementById('rgb-color')

function convertRGB(){
  let hex;
  let r = red.value
  let g = green.value
  let b = blue.value
  const max = 255;
  const min = 0;
  let r1,r2,g1,g2,b1,b2;
  let final = ""

  if(r == "" || b == "" || g == ""){
    alert("Fill in the values !!")
  }else if(r > max || b > max || g > max ){
    alert("The values should not be higher than 255")
  }else if(r < min || b < min || g < min ){
    alert("The values should not be lower than 0")
  }else{
    let i;
    r1 = r / 16
    r1 = parseInt(r1)
    r2 = r % 16
    
    g1 = g / 16
    g1 = parseInt(g1)
    g2 = g % 16
    
    b1 = b / 16
    b1 = parseInt(b1)
    b2 = b % 16

    let myArray = [r1,r2,b1,b2,g1,g2]

    for(i=0; i<myArray.length; i++){
      const val = hexadecimal(myArray[i]) 
      final += val
    }

    hexcolor.innerText = `HEX :  #${final} `

    if(r >= 240 && b>= 240 && g >= 240){
      body.style.color = 'black'
      con.style.color = 'white'
      con.style.backgroundColor = 'black'
      clearB.style.color = 'white'
      clearB.style.backgroundColor = 'black'
    }else{
      body.style.color = 'white'
      con.style.color = 'black'
      con.style.backgroundColor = 'white'
      clearB.style.color = 'black'
      clearB.style.backgroundColor = 'white'
    }
    body.style.backgroundColor = `#${final}`
  }
}

function hexToRgb() {

  let rgb  = hex.value
  let final = ""
  
 rgb = rgb.replace(/^#/, '');

  let r = parseInt(rgb.substring(0, 2), 16); 
  let g = parseInt(rgb.substring(2, 4), 16);
  let b = parseInt(rgb.substring(4, 6), 16); 


  rgbColor.innerText = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  if(r >= 240 && b>= 240 && g >= 240){
    body.style.color = 'black'
    con.style.color = 'white'
    con.style.backgroundColor = 'black'
    clearB.style.color = 'white'
    clearB.style.backgroundColor = 'black'
  }else{
    body.style.color = 'white'
    con.style.color = 'black'
    con.style.backgroundColor = 'white'
    clearB.style.color = 'black'
    clearB.style.backgroundColor = 'white'
  }
}



function hexadecimal(num) {
  if (num < 10) {
    return num.toString(); 
  }else{
    if (num === 10) return "A";
    else if (num === 11) return "B";
    else if (num === 12) return "C";
    else if (num === 13) return "D";
    else if (num === 14) return "E";
    else if (num === 15) return "F";
  }  
}

function clear(){
  red.value = ""
  blue.value = ""
  green.value = ""
 

  hexcolor.innerText = ``

}

function clear2(){
  hex.value = ""
 

  rgbColor.innerText = ``

}





function change(){
  if(stat == 'hex'){
    stat = 'rgb'
    title.innerHTML = `<h1 style="margin-top: 40px;" id="title">Hex to RGB Color Converter </h1>`
    th.style.display='none'
    tr.style.display='block'
  }else if(stat == 'rgb'){
    stat = 'hex'
    title.innerHTML = `<h1 style="margin-top: 40px;" id="title">RGB to Hex Color Converter</h1>`
    tr.style.display='none'
    th.style.display='block'
  }
}

clearB.addEventListener('click',clear)
clearB2.addEventListener('click',clear2)

con.addEventListener('click',convertRGB);
con2.addEventListener('click',hexToRgb)
switchC.addEventListener('click',change)