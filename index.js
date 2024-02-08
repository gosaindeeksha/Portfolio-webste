
/*
js for hamburger button
 */
const elements=document.querySelectorAll(".bar");
document.querySelector(".toggle-button").addEventListener("click",function (){
for(var i=0; i<elements.length;i++){
    elements[i].classList.toggle("icon");
}
document.querySelector(".nav-links ul").classList.toggle("change");
});
/**
 JS for the skills section skill bar
 */
// Function to handle the animation when the skills section is in the viewport
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animated) {
            entry.target.classList.add("animated");
            entry.target.animated = true;
            // Add your existing animation code here if needed
        }
    });
}

   

// Set up the Intersection Observer
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
observer.observe(skillsSection);

/**
 * JS for the theme toggle button 
 */
var r =document.querySelector(":root");
document.querySelectorAll(".theme")[0].addEventListener("click",function () {
   
        document.querySelector("#sun").classList.toggle("hide");
        document.querySelector("#sun").classList.toggle("show");
        document.querySelector("#moon").classList.toggle("hide");
        document.querySelector("#moon").classList.toggle("show");
        //your code to be executed after 1 second
    
   
    r.style.setProperty('--primary','black');
    r.style.setProperty('--secondary','white');
    r.style.setProperty('--primary_num','0');
    r.style.setProperty('--secondary_num','255');
    

    
})
document.querySelectorAll(".theme")[1].addEventListener("click",function () {
        document.querySelector("#sun").classList.toggle("hide");
        document.querySelector("#sun").classList.toggle("show");
        document.querySelector("#moon").classList.toggle("hide");
        document.querySelector("#moon").classList.toggle("show");
        //your code to be executed after 1 second
      
   
    
    r.style.setProperty('--primary','white');
    r.style.setProperty('--secondary','black');
    r.style.setProperty('--primary_num','255');
    r.style.setProperty('--secondary_num','0');

   
    
})
/**JS FOR THE CURSOR */
var mousep = document.querySelector(".cursor");
var poin = document.querySelector(".pointer")
window.addEventListener("mousemove",function(e){
    mousep.style.top = e.pageY+"px";
    mousep.style.left = e.pageX+"px";
    poin.style.top = e.pageY+"px";
    poin.style.left = e.pageX+"px";

})