
function a1(){
    const a1=document.querySelector('.k1')
    const a2=document.querySelector('.box106')
    const a3=document.querySelector('.box777')
    const a4=document.querySelectorAll('.box1061')
    const a5=document.querySelector('.box777')
    const a6=a5.querySelectorAll('a')[0]
    const a7=document.querySelector('.k11')
    console.log(a6)
    a1.addEventListener('click', function(event){
        a2.classList.add('act')
        a2.classList.remove('box106')
        a7.style.display="flex"
    a7.addEventListener('click',function(){
        a2.classList.remove('act')
        a2.classList.add('box106')
        a7.style.display="none"
        for(let i of a4){
            i.classList.remove('act3')
            i.classList.add('box1061')
            }
        })
    a3.addEventListener('click',function(event){
        for(let i of a4){
            i.classList.add('act3')
            i.classList.remove('box1061')
        }
    })
})}
a1();

setTimeout(function a2(){
    const b1=document.querySelector('#fraza1')
    b1.style.marginLeft="2%";
},2000)

function g1(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2] 
      }
  
     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act2')
    }
        else(target.classList.remove('act2'))
       console.log(entry)    
    })
    }
        let observer = new IntersectionObserver(callback, options);
    
        let target = document.querySelectorAll('.box301');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g1();
   

 
const yakor=document.querySelectorAll('a[href*="#"]')
for (let i of yakor){
    i.addEventListener('click', function(event){
       event.preventDefault();
        const n=i.getAttribute('href')
        document.querySelector(''+ n ).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}

var i2=0;
var b3=[];

b3[0]="img/71.png";
b3[1]="img/78.jpeg";
b3[2]="img/98.jpeg";
b3[3]="img/99.jpeg";

const b10=document.querySelector('.left')
b10.addEventListener('click', function() {
    document.slider.src=b3[i2];
    i2--;
    if(i2<0){
        i2=2;}})

const b20=document.querySelector('.rite')
b20.addEventListener('click', function () {
    document.slider.src=b3[i2];
    i2++;
    if(i2>=b3.length){
        i2=0;}})


var i5=0;
var b5=[];
var b51=3500;

b5[0]="img/81.jpg";
b5[1]="img/82.jpg";
b5[2]="img/87.jpg";

function slider1 () {
    document.slider1.src=b5[i5];
    if(i5<b5.length-1){
        i5++;
    } else {
        i5=0;
    }
    setTimeout("slider1()",b51);   
}



var i7=0;
var b7=[];
var b71=4000;

b7[0]="img/88.jpg";
b7[1]="img/94.jpg";
b7[2]="img/91.jpg";

function slider3 () {
    document.slider3.src=b7[i7];
    if(i7<b7.length-1){
        i7++;
    } else {
        i7=0;
    }
    setTimeout("slider3()",b71);   
}


var i8=0;
var b8=[];
var b81=3800;

b8[0]="img/40.png";
b8[1]="img/96.jpg";
b8[2]="img/95.jpg";
b8[2]="img/97.jpg";

function slider4 () {
    document.slider4.src=b8[i8];
    if(i8<b8.length-1){
        i8++;
    } else {
        i8=0;
    }
    setTimeout("slider4()",b81);   
}

window.onload=slider1(),slider3(),slider4();


function g2(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2] 
      }

     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act4')
    }
        else(target.classList.remove('act4'))
       console.log(entry)    
    })
    }
      
        let observer = new IntersectionObserver(callback, options);
        let target = document.querySelectorAll('.box5 img');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g2();

function g3(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2]
      }
      
     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act5')
    }
        else(target.classList.remove('act5'))
       console.log(entry)    
    })
    }
        let observer = new IntersectionObserver(callback, options);
    
        let target = document.querySelectorAll('.box20 div');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g3();


function g4(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2] 
      }
      
     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act6')
    }
        else(target.classList.remove('act6'))
       console.log(entry)    
    })
    }
        let observer = new IntersectionObserver(callback, options);
    
        let target = document.querySelectorAll('.box103 div');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g4();


function g5(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2]
      }
     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act7')
    }
        else(target.classList.remove('act7'))
       console.log(entry)    
    })
    }
        let observer = new IntersectionObserver(callback, options);
    
        let target = document.querySelectorAll('.box955 input');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g5();


function g6(){
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.2] 
      }
      
     let callback = (entries, observer) => {
        entries.forEach(entry => {
            const{target,isIntersecting,intersectionRatio}=entry
            if(isIntersecting){
            target.classList.add('act8')
    }
        else(target.classList.remove('act8'))
       console.log(entry)    
    })
    }
        let observer = new IntersectionObserver(callback, options);

        let target = document.querySelectorAll('.box1011 img');
        target.forEach((el) => {
        observer.observe(el);
    } 
    )}
g6();