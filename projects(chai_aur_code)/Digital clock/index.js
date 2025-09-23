const clock =document.getElementById('clock');
// let time = new Date();
// console.log(time)
setInterval(( function(){
    let time = new Date()
    console.log(time.toLocaleTimeString());
    clock.innerHTML=`${time.toLocaleTimeString()}`     
}
),1000)