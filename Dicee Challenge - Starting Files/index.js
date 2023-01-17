
let randomnum1 = Math.ceil(Math.random()*6);

document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomnum1+".png")

let randomnum2 = Math.ceil(Math.random()*6);

document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomnum2+".png")


if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}