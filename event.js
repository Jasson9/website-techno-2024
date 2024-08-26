document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const mainContent = document.querySelector("main");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        mainContent.classList.toggle("active");
    });
});

// PBP
let places = [
    {
        place: "ALAM SUTERA",
        details: [
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Alam Sutera",
                Shift: "A",
                time: "09.00 - 11.00",
            },
        ],
    },
    {
        place: "KEMANGGISAN",
        details: [
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Kemanggisan",
                Shift: "A",
                time: "09.00 - 11.00",
            },
            {
                date: "Selasa, 19 Agustus 2024",
                location: "Binus @Kemanggisan",
                Shift: "B",
                time: "09.30 - 11.30",
            },
            {
                date: "Rabu, 19 Agustus 2024",
                location: "Binus @Kemanggisan",
                Shift: "C",
                time: "13.00 - 15.00",
            },
        ],
    },
    {
        place: "SENAYAN (Full English)",
        details: [
            {
                date: "Rabu, 21 Agustus 2024",
                location: "Zoom Meeting",
                Shift: "A",
                time: "09.00 - 11.00",
            },
        ],
    },
    {
        place: "BEKASI",
        details: [
            {
                date: "Selasa, 20 Agustus 2024",
                location: "Binus @Bekasi",
                Shift: "A",
                time: "09.00 - 11.00",
            },
            {
                date: "Selasa, 20 Agustus 2024",
                location: "Binus @Bekasi",
                Shift: "B",
                time: "13.00 - 15.00",
            },
        ],
    },
    {
        place: "BANDUNG",
        details: [
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Bandung",
                Shift: "A",
                time: "09.00 - 11.00",
            },
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Bandung",
                Shift: "B",
                time: "13.00 - 15.00",
            },
        ],
    },
    {
        place: "MALANG",
        details: [
            {
                date: "Sabtu, 10 Agustus 2024",
                location: "Binus @Malang",
                Shift: "A",
                time: "13.00 - 15.00",
            },
            {
                date: "Sabtu, 10 Agustus 2024",
                location: "Binus @Malang",
                Shift: "B",
                time: "13.00 - 15.00",
            },
        ],
    },
    {
        place: "SEMARANG",
        details: [
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Semarang",
                Shift: "A",
                time: "11.00 - 13.00",
            },
            {
                date: "Senin, 19 Agustus 2024",
                location: "Binus @Semarang",
                Shift: "B",
                time: "11.00 - 13.00",
            },
        ],
    },
];

let currentPlaceIndex = 0;
let currentSlideIndex = 0;

function updateCarousel() {
    const place = places[currentPlaceIndex];
    const details = place.details[currentSlideIndex];

    document.getElementById("event-place").innerHTML = `
        <h3>${place.place}</h3>
    `;

    document.getElementById("carousel-content").innerHTML = `
    <p>${details.date}</p>
    <p>Location : ${details.location}</p>
    <p>Shift : ${details.Shift}</p>
    <p>Time : ${details.time}</p>
  `;
}

function prevSlide() {
    if (currentSlideIndex == 0) {
        currentPlaceIndex =
            (currentPlaceIndex - 1 + places.length) % places.length;
        currentSlideIndex = places[currentPlaceIndex].details.length - 1;
    } else {
        currentSlideIndex--;
    }

    const carouselContent = document.getElementById("carousel-content");
    carouselContent.style.animation = "0.2s 1 pbpAnimationBackwards";
    carouselContent.addEventListener(
        "animationend",
        function onEnd() {
            carouselContent.style.removeProperty("animation");
            carouselContent.style.animation =
                "0.2s 1 pbpAnimationBackwardsAfter";
            carouselContent.removeEventListener("animationend", onEnd);
        },
        { once: true },
    );
    updateCarousel();
}

function nextSlide() {
    if (currentSlideIndex == places[currentPlaceIndex].details.length - 1) {
        currentSlideIndex = 0;
        currentPlaceIndex = (currentPlaceIndex + 1) % places.length;
    } else {
        currentSlideIndex++;
    }

    const carouselContent = document.getElementById("carousel-content");
    carouselContent.style.animation = "0.2s 1 pbpAnimation";
    carouselContent.addEventListener(
        "animationend",
        function onEnd() {
            carouselContent.style.removeProperty("animation");
            carouselContent.style.animation = "0.2s 1 pbpAnimationAfter";
            carouselContent.removeEventListener("animationend", onEnd);
        },
        { once: true },
    );
    updateCarousel();
}

// Initialize
updateCarousel();

// Expo
let currCard = 2;
document.getElementById("click-right").addEventListener("click", function () {
    currCard++;
    console.log(currCard);
    if (currCard < 7 && currCard > 2) {
        document.getElementById("click-left").style.visibility = "visible";

        if (currCard === 6) {
            document.getElementById("click-right").style.visibility = "hidden";
        } else {
            document.getElementById("click-right").style.visibility = "visible";
        }

        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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
    } else if (currCard == 4) {
        document.getElementById("click-right").style.visibility = "hidden";
        document.getElementById("click-left").style.visibility = "visible";
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
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

// Expo Carousel Logic for Smaller Screens
let currentCardIndex = 1;
const cards = document.querySelectorAll(".expo-card");
const leftButton = document.getElementById("click-left");
const rightButton = document.getElementById("click-right");

function applyCardSize() {
    if (window.innerWidth <= 480) {
        document.getElementById(`card-${currCard - 1}`).style.width = "65vw";
        document.getElementById(`card-${currCard - 1}`).style.height = "65vw";
    } else {
        document.getElementById(`card-${currCard}`).style.width = "30rem";
        document.getElementById(`card-${currCard}`).style.height = "35rem";
    }
}

function updateButtons() {
    if (currentCardIndex === 1) {
        leftButton.style.visibility = "hidden";
    } else {
        leftButton.style.visibility = "visible";
    }

    if (currentCardIndex === cards.length - 2) {
        rightButton.style.visibility = "hidden";
    } else {
        rightButton.style.visibility = "visible";
    }
}

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
    applyCardSize(); // Call applyCardSize when showing a card
    updateButtons();
}

// Initial display of the first card and button visibility
showCard(currentCardIndex);

// Apply card size on window resize
window.addEventListener("resize", applyCardSize);

rightButton.addEventListener("click", function () {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
});

leftButton.addEventListener("click", function () {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
});
