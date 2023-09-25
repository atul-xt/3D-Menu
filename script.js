const menu = document.querySelector('#menu');
const main = document.querySelector('.main');
const navElements = document.querySelector('.navElements');
const close = document.querySelector('#close');
const mouseEffect = document.querySelector('.mouseEffect');

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    setTimeout(function(){
        mouseEffect.style.left = `${xValue}px`;
        mouseEffect.style.top = `${yValue}px`;
        mouseEffect.style.transform = "translate(-50%, -50%)";
    }, 50)
})

close.addEventListener('click', function() {
    main.style.transform = "scale(1) translateX(0px)";
    main.style.filter = "blur(0px)";
    navElements.style.left = "-20%";
    menu.style.display = "block";
})

menu.addEventListener('click', function() {
    main.style.transform = "scale(.4) translateX(200px) rotateY(-6deg) skewY(3deg)";
    main.style.filter = "blur(1.5px)";
    navElements.style.left = "2%";
    menu.style.display = "none";
});