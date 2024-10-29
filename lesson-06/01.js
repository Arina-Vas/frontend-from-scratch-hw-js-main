/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

const btnPrev = document.getElementById("prev-button");
console.log(btnPrev);

const btnNext = document.querySelector("#next-button");
console.log(btnNext);

// btnPrev.addEventListener('click', function () {
//   const img = document.querySelector("#web-tech-image");
//   if (img.src === WEB_TECH_IMAGES[0]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[2]}`)
//   }
//   else if (img.src === WEB_TECH_IMAGES[1]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[0]}`)
//   }
//   else if (img.src === WEB_TECH_IMAGES[2]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[1]}`)
//   }
// }
// )
// btnNext.addEventListener('click', function () {
//   const img = document.querySelector("#web-tech-image");
//   if (img.src === WEB_TECH_IMAGES[0]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[1]}`)
//   }
//   else if (img.src === WEB_TECH_IMAGES[1]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[2]}`)
//   }
//   else if (img.src === WEB_TECH_IMAGES[2]) {
//     img.setAttribute('src', `${WEB_TECH_IMAGES[0]}`)
//   }
// }
// )



const img = document.querySelector("#web-tech-image");   // ❗❗❗ Рефакторинг 
let i = 0;

function newImage() {
  img.setAttribute('src', `${WEB_TECH_IMAGES[i]}`)
}

function prev() {
  if (WEB_TECH_IMAGES.indexOf(img.src) === 0) {
    i = WEB_TECH_IMAGES.length - 1;
    newImage()
  }
  else {
    i = WEB_TECH_IMAGES.indexOf(img.src) - 1;
    newImage()
  }
}

function next() {
  if (WEB_TECH_IMAGES.indexOf(img.src) === WEB_TECH_IMAGES.length - 1) {
    i = 0;
    newImage();
  }
  else {
    i = WEB_TECH_IMAGES.indexOf(img.src) + 1;
    newImage();
  }
}

btnPrev.addEventListener('click', prev)
btnNext.addEventListener('click', next)


// btnPrev.addEventListener('click', function () {
//   if (WEB_TECH_IMAGES.indexOf(img.src) === 0) {
//     i = WEB_TECH_IMAGES.length - 1;
//     newImage()
//   }
//   else {
//     i = WEB_TECH_IMAGES.indexOf(img.src) - 1;
//     newImage()
//   }
// }
// )

// btnNext.addEventListener('click', function () {
//   if (WEB_TECH_IMAGES.indexOf(img.src) === WEB_TECH_IMAGES.length - 1) {
//     i = 0;
//     newImage();
//   }
//   else {
//     i = WEB_TECH_IMAGES.indexOf(img.src) + 1;
//     newImage();
//   }
// }
// )