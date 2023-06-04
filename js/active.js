let um = document.querySelector(".um");
let dois = document.querySelector(".dois");
let tres = document.querySelector(".tres");
let quatro = document.querySelector(".quatro");
let cinco = document.querySelector(".cinco");
var li = document.querySelector("li");


um.onclick = function() {
    um.classList.toggle("active")
    dois.classList.remove("active")
    tres.classList.remove("active")
    quatro.classList.remove("active")
    cinco.classList.remove("active")
    
} 

dois.onclick = function() {
    um.classList.remove("active")
    dois.classList.toggle("active")
    tres.classList.remove("active")
    quatro.classList.remove("active")
    cinco.classList.remove("active")
    
} 

tres.onclick = function() {
    um.classList.remove("active")
    dois.classList.remove("active")
    tres.classList.toggle("active")
    quatro.classList.remove("active")
    cinco.classList.remove("active")
    
} 

quatro.onclick = function() {
    um.classList.remove("active")
    dois.classList.remove("active")
    tres.classList.remove("active")
    quatro.classList.toggle("active")
    cinco.classList.remove("active")
   
} 


cinco.onclick = function() {
    dois.classList.remove("active")
    um.classList.remove("active")
    tres.classList.remove("active")
    quatro.classList.remove("active")
    cinco.classList.toggle("active")
    
} 




