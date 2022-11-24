const hobbyblock1 = document.getElementById('hobby-block1')
const hobbyblock2 = document.getElementById('hobby-block2')
const hobbyblock3 = document.getElementById('hobby-block3');
const toppic1 = document.getElementById('top-pic1')
const toppic2 = document.getElementById('top-pic2')
const toppic3 = document.getElementById('top-pic3')
const toppic4 = document.getElementById('top-pic4')

window.addEventListener('scroll', ()=> {
  let y1 = hobbyblock1.getBoundingClientRect();
  let scroll1 = window.innerHeight-y1.height;
  let h1 = y1.top ;

  if(scroll1 > h1){
    hobbyblock1.classList.add('animated');
  }
});

window.addEventListener('scroll', ()=> {
  let y2 = hobbyblock2.getBoundingClientRect();
  let scroll2 =window.innerHeight-y2.height;
  let h2 = y2.top ;

  if(scroll2 > h2){
    hobbyblock2.classList.add('animated');
  }
});

window.addEventListener('scroll', ()=> {
  let y3 = hobbyblock3.getBoundingClientRect();
  let scroll3 = window.innerHeight-y3.height;
  let h3 = y3.top ;

  if(scroll3 > h3){
    hobbyblock3.classList.add('animated');
  }
});


const carusel1 = setTimeout(() =>{
  toppic1.classList.add("appear");
},3000);

const carusel2 = setTimeout(() =>{
  toppic1.classList.remove("appear");
  toppic2.classList.add("appear");
},6000);

const carusel3 = () =>{
  toppic1.classList.remove("appear");
  toppic2.classList.add("appear");
  
};

const carusel4 = () =>{
  
};

const carusel = setInterval(()=>{
  carusel1();
  carusel2();
  // setTimeout(carusel1(),0);
 // setTimeout(carusel2(),5);
 // setTimeout(carusel3(),10);
 // setTimeout(carusel4(),15);
}
  ,10000);

  carusel();