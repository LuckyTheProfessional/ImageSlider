const imageBox = document.querySelector('.image');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const pageBox = document.querySelector('.page');

let page = 1;
const pageSum = 5;

const showPicture = () => {
    imageBox.innerHTML = `
        <img src="pictures/picture${page}.jpg" alt="nature">
    `
}

const showPage = () => {
    pageBox.innerHTML = `
        <div class="page">${page} / ${pageSum}</div>
    `
}

showPicture();
showPage();

leftArrow.addEventListener('click', () => {
    if (page > 1) {
        page--
        showPicture();
        showPage();
    }else if (page === 1) {
        showPicture();
        showPage();
    }
})

rightArrow.addEventListener('click', () => {
    if (page < pageSum) {
        page++
        showPicture();
        showPage();
    }else if (page === pageSum) {
        showPicture();
        showPage();
    }
})