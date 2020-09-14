const star = document.querySelector('.review__star').children;
const card = document.querySelector('.bottom__review').children;



if (screen.width < 476) {
    star[0].style.marginLeft = '0px';
    star[1].style.marginLeft = '0px';
    star[2].style.marginLeft = '0px';

    card[0].style.marginTop = '0px';
    card[1].style.marginTop = '0px';
    card[2].style.marginTop = '0px';
} else {
    star[0].style.marginLeft = '80px';
    star[1].style.marginLeft = '140px';
    star[2].style.marginLeft = '200px';

    card[0].style.marginTop = '20px';
    card[1].style.marginTop = '40px';
    card[2].style.marginTop = '60px';
}
