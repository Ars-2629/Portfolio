let menubar = document.getElementById('menubar');
let dropdown = document.getElementById('dropdown');
let project1 = document.getElementById('project1');
let project1heading = document.getElementById('project1heading');
let project2 = document.getElementById('project2');
let project2heading = document.getElementById('project2heading');
let link = document.getElementById('link');

menubar.addEventListener('click',showOption);

function showOption(){
    dropdown.classList.toggle('hidden');
}

project1.addEventListener('mouseover',enableOption1);

function enableOption1(){
    project1heading.innerHTML= `https://amazing-salmiakki-b1a14c.netlify.app/`
}

project1.addEventListener('mouseout',disableOption1);

function disableOption1(){
    project1heading.innerHTML=``
}

project2.addEventListener('mouseover',enableOption2);

function enableOption2(){
    project2heading.innerHTML= `https://codebookhub.netlify.app/`
}

project2.addEventListener('mouseout',disableOption2);

function disableOption2(){
    project2heading.innerHTML=``
}



let tl = gsap.timeline({repeat:-1});
tl.to("#me",{
    y:-700,
    duration:8,
    rotation:360,
    opacity:0,
    ease:"power1.in",
    scale:2,
    yoyo:true,
    visibility:"visible",
    stagger:{
        each:1,
        from:"center"
    }
})

gsap.to("#span1",{
    x:-200,
    duration:5,
    onStart:()=>{
        $('#span1').textillate({ in: { effect: 'fadeIn' } });
       
    }
});

gsap.from("#heading2",{
    color:"white",
    duration:4,
    repeat:-1,
    yoyo:true

})