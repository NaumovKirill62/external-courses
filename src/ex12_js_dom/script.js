const arrayImage = [
  'asset/1.png',
  'asset/2.png',
  'asset/3.png',
  'asset/4.png'
];
let i = 0;
let btnNext = document.getElementById('next');
let fone = document.getElementById("pic");
let btnPrev = document.getElementById('prev');

function nextSlide() {
  i = i + 1;
  if (i > arrayImage.length-1) {
    i = 0;
  }
  fone.style.opacity = 0;
  fone.style.backgroundImage = `url(${arrayImage[i]})`;
  fone.style.opacity = 1;

  return i;
}

function prevSlide() {
  i = i - 1;
  if (i < 0) {
    i = arrayImage.length;
  }

  fone.style.opacity = 0;
  fone.style.backgroundImage = `url(${arrayImage[i]})`;
  fone.style.opacity = 1;
  
  return i;
}

btnNext.onclick = nextSlide ;
btnPrev.onclick = prevSlide ;
