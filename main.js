
const backbtn = document.getElementById('back-btn')
const navbtn = document.getElementById('nav-button')
const closebtn = document.getElementById('nav-close')
const navmenu = document.getElementById('nav-menu')

//クリックでTOPに戻る
const toTop =()=>{
  window.scrollTo(0,0);
};

//スクロールで表示非表示切り替え
window.addEventListener('scroll', ()=> {
  const scrollValue = document.scrollingElement.scrollTop;

  if(scrollValue >=400){;
    backbtn.style.opacity=1;
    backbtn.addEventListener('click',toTop);
  }
  else{
    backbtn.style.opacity=0;
    backbtn.removeEventListener('click',toTop);
  }
});

navbtn.addEventListener('click',()=>{
  navbtn.classList.add('hidden')
  navmenu.classList.remove('hidden')
});

closebtn.addEventListener('click',()=>{
  navmenu.classList.add('hidden')
  navbtn.classList.remove('hidden')
});

