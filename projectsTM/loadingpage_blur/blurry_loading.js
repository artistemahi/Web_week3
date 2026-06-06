const loadtext=document.querySelector('.loading-text'); // select the elements ( here loading-text which is class)
const bg= document.querySelector('.bg'); // same here bg is the element
let load =0; // seting load variable

let interval= setInterval(bluring, 30); // ye bluring function ko countinuously run kr raha h in 30 milisecond time interval
 // making the bluring function
function bluring(){ 
     load++; // load value incremented 
     if(load===100){ // upto  100
        clearInterval(interval); //clearing the interval or stoping as load become 100
     }
       loadtext.innerHTML=`${load}%`; // adding the load with % sign inside the html  
       // maping the load and opacity 
       loadtext.style.opacity=scale(load,0,100,1,0); // ye brackets me jo bhi h vo niche function ke acc set kiya h like hume kya krvana h 
       // maping the blur effect with load
       bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`; // same here
     }
 function scale (number, inMin, inMax, outMin, outMax) { // fucntion that (Javascript / jQuery) - map a range of numbers to another range of numbers

    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}