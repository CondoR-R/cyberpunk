// смена картинок
const classNames = ["header__bg-1", "header__bg-2", "header__bg-3"];
const header = document.querySelector(".header__bg");
let i = 0;

function changeImage() {
  header.classList.remove(".active");
  header.classList.remove(classNames[i]);
  i = i === classNames.length - 1 ? getI(0) : getI(i + 1);
}

function getI(i) {
  header.classList.add(classNames[i]);
  header.classList.add(".active");
  return i;
}

setInterval(changeImage, 5000);
