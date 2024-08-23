// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('.expo-card-wrap');
//     const prevButton = document.querySelector('.expo-button-left');
//     const nextButton = document.querySelector('.expo-button-right');

//     let scrollAmount = 0;
//     const cardWidth = document.querySelector('.expo-card').offsetWidth;
//     const visibleCards = Math.floor(carousel.parentElement.offsetWidth / cardWidth);

//     nextButton.addEventListener('click', () => {
//         if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
//             scrollAmount += cardWidth;
//             carousel.style.transform = `translateX(-${scrollAmount}px)`;
//         }
//     });

//     prevButton.addEventListener('click', () => {
//         if (scrollAmount > 0) {
//             scrollAmount -= cardWidth;
//             carousel.style.transform = `translateX(-${scrollAmount}px)`;
//         }
//     });
// });

let currCard = 2;
document.getElementById("click-right").addEventListener("click", function () {
    currCard++;
    console.log(currCard);
    if (currCard < 7 && currCard > 2) {
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById("click-right").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard - 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard - 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard - 2}`).style.width = "0";
        document.getElementById(`card-${currCard - 2}`).style.height = "0";
        document.getElementById(`card-${currCard - 2}`).style.marginRight =
            "-3rem";
        document.getElementById(`card-${currCard - 2}`).style.opacity = "0";
        document.getElementById(`card-desc-${currCard - 2}`).style.width = "0";
        document.getElementById(`card-desc-${currCard - 2}`).style.height = "0";
        document.getElementById(`card-${currCard + 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard + 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard + 1}`).style.opacity = "1";
        document.getElementById(`card-desc-${currCard + 1}`).style.width =
            "100%";
        document.getElementById(`card-desc-${currCard + 1}`).style.height =
            "100%";
        document.getElementById(`card-${currCard + 1}`).style.marginLeft = "0";
    } else if (currCard == 7) {
        document.getElementById("click-right").style.visibility = "hidden";
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard - 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard - 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard - 2}`).style.width = "0";
        document.getElementById(`card-${currCard - 2}`).style.height = "0";
        document.getElementById(`card-${currCard - 2}`).style.marginRight =
            "-3rem";
        document.getElementById(`card-${currCard - 2}`).style.opacity = "0";
        document.getElementById(`card-desc-${currCard - 2}`).style.width = "0";
        document.getElementById(`card-desc-${currCard - 2}`).style.height = "0";
    } else {
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById("click-right").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard - 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard - 1}`).style.height =
            "24.4rem";

        document.getElementById(`card-${currCard + 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard + 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard + 1}`).style.opacity = "1";
        document.getElementById(`card-desc-${currCard + 1}`).style.width =
            "100%";
        document.getElementById(`card-desc-${currCard + 1}`).style.height =
            "100%";
        document.getElementById(`card-${currCard + 1}`).style.marginLeft = "0";
    }
});

document.getElementById("click-left").addEventListener("click", function () {
    currCard--;
    if (currCard > 1 && currCard < 6) {
        document.getElementById("click-right").style.visibility = "visible";
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard - 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard - 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard - 1}`).style.opacity = "1";
        document.getElementById(`card-desc-${currCard - 1}`).style.opacity =
            "1";
        document.getElementById(`card-desc-${currCard - 1}`).style.width =
            "100%";
        document.getElementById(`card-desc-${currCard - 1}`).style.height =
            "100%";
        document.getElementById(`card-${currCard - 1}`).style.marginRight = "0";
        document.getElementById(`card-${currCard + 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard + 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard + 2}`).style.width = "0";
        document.getElementById(`card-${currCard + 2}`).style.height = "0";
        document.getElementById(`card-${currCard + 2}`).style.marginLeft =
            "-3rem";
        document.getElementById(`card-${currCard + 2}`).style.opacity = "0";
        document.getElementById(`card-desc-${currCard + 2}`).style.width = "0";
        document.getElementById(`card-desc-${currCard + 2}`).style.height = "0";
    } else if (currCard == 1) {
        document.getElementById("click-right").style.visibility = "visible";
        document.getElementById("click-left").style.visibility = "hidden";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard + 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard + 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard + 2}`).style.width = "0";
        document.getElementById(`card-${currCard + 2}`).style.height = "0";
        document.getElementById(`card-${currCard + 2}`).style.marginLeft =
            "-3rem";
        document.getElementById(`card-${currCard + 2}`).style.opacity = "0";
        document.getElementById(`card-desc-${currCard + 2}`).style.width = "0";
        document.getElementById(`card-desc-${currCard + 2}`).style.height = "0";
    } else {
        document.getElementById("click-right").style.visibility = "visible";
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30.3rem";
        document.getElementById(`card-${currCard}`).style.height = "40.6rem";
        document.getElementById(`card-${currCard - 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard - 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard - 1}`).style.opacity = "1";
        document.getElementById(`card-desc-${currCard - 1}`).style.opacity =
            "1";
        document.getElementById(`card-desc-${currCard - 1}`).style.width =
            "100%";
        document.getElementById(`card-desc-${currCard - 1}`).style.height =
            "100%";
        document.getElementById(`card-${currCard - 1}`).style.marginRight = "0";
        document.getElementById(`card-${currCard + 1}`).style.width = "23.6rem";
        document.getElementById(`card-${currCard + 1}`).style.height =
            "24.4rem";
        document.getElementById(`card-${currCard + 1}`).style.opacity = "1";
        document.getElementById(`card-desc-${currCard + 1}`).style.width =
            "100%";
        document.getElementById(`card-desc-${currCard + 1}`).style.height =
            "100%";
        document.getElementById(`card-${currCard + 1}`).style.marginLeft = "0";
    }
});
