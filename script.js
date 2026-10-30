const entities = [
  {
    breed: 'Бобтейл<br>Короткохвостый',
    weight: '4.5 кг',
    age: '2 года',
    color: 'Серый полосатый',
    img: 'images/bobtail-short-tailed.png'
  },
  {
    breed: 'Британец<br>Короткошерстный',
    weight: '5.2 кг',
    age: '3 года',
    color: 'Голубой',
    img: 'images/british-shorthair.png'
  },
  {
    breed: 'Турецкая<br>Ангора',
    weight: '3.8 кг',
    age: '1.5 года',
    color: 'Белый пушистый',
    img: 'images/turkish-angora.png'
  }
];

let currentIndex = 0;

const image = document.querySelector('.slider-image');
const breed = document.querySelector('.breed');
const weight = document.querySelector('.weight');
const age = document.querySelector('.age');
const color = document.querySelector('.color');
const tabs = document.querySelectorAll('.tab');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlider(index) {
  image.src = entities[index].img;
  breed.innerHTML = entities[index].breed;
  weight.textContent = entities[index].weight;
  age.textContent = entities[index].age;
  color.textContent = entities[index].color;

  tabs.forEach((tab, i) => {
    if (i === index) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  dots.forEach((dot, i) => {
    if (i === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= entities.length) {
    currentIndex = 0; 
  }
  updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = entities.length - 1; 
  }
  updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

updateSlider(currentIndex);