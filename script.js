const container = document.querySelector('.container')
const card = document.querySelector('.card')
const shoe = document.querySelector('.shoe img')
const title = document.querySelector('.title')
const desc = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')

container.addEventListener('mousemove', (e) =>{

    console.log(window.innerWidth, window.innerHeight)

    var xAngle = (window.innerWidth/2 - e.pageX)/10;
    var yAngle = (window.innerHeight/2 - e.pageY)/10;

    card.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
})

container.addEventListener('mouseenter', (e) =>{
    console.log("entered");
    card.style.transition = `none`;
    shoe.style.transform = `translateZ(200px)`;
    title.style.transform = `translateZ(150px)`;
    desc.style.transform = `translateZ(90px)`;
    sizes.style.transform = `translateZ(70px)`;
    purchase.style.transform = `translateZ(60px)`;
})

container.addEventListener('mouseleave', (e) =>{
    console.log("left");
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = `1s ease`;
    shoe.style.transform = `translateZ(0px)`;
    title.style.transform = `translateZ(0px)`;
    desc.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purcahse.style.transform = `translateZ(0px)`;
})