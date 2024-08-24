// PBP
let places = [
    {
        place: "KEMANGGISAN",
        details: [
            {
                date: "Senin, 32 Agustus 2077",
                location: "Zoom",
                meetingShift: "A",
                time: "09.61 - 11.99",
            },
            {
                date: "Selasa, 33 Agustus 2077",
                location: "Zoom",
                meetingShift: "B",
                time: "10.00 - 12.00",
            },
            {
                date: "Rabu, 34 Agustus 2077",
                location: "Zoom",
                meetingShift: "C",
                time: "11.00 - 13.00",
            },
        ],
    },
    {
        place: "SENAYAN",
        details: [
            {
                date: "Kamis, 35 Agustus 2077",
                location: "Campus",
                meetingShift: "A",
                time: "08.00 - 10.00",
            },
            {
                date: "Jumat, 36 Agustus 2077",
                location: "Campus",
                meetingShift: "B",
                time: "09.00 - 11.00",
            },
            {
                date: "Sabtu, 37 Agustus 2077",
                location: "Campus",
                meetingShift: "C",
                time: "10.00 - 12.00",
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
        <h2>${place.place}</h2>
    `;

    document.getElementById("carousel-content").innerHTML = `
    <p>${details.date}</p>
    <p>Location : ${details.location}</p>
    <p>MeetingShift : ${details.meetingShift}</p>
    <p>Time : ${details.time}</p>
  `;
}

function prevSlide() {
    if (currentPlaceIndex == 0 && currentSlideIndex == 0) {
        currentPlaceIndex = 1;
        currentSlideIndex = places[currentPlaceIndex].details.length - 1;
    } else if (currentSlideIndex == 0) {
        currentSlideIndex = places[currentPlaceIndex].details.length - 1;
        currentPlaceIndex--;
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

    // currentSlideIndex =
    //     currentSlideIndex > 0
    //         ? currentSlideIndex - 1
    //         : places[currentPlaceIndex].details.length - 1;
    updateCarousel();
}

function nextSlide() {
    if (
        currentPlaceIndex == 1 &&
        currentSlideIndex == places[currentPlaceIndex].details.length - 1
    ) {
        currentPlaceIndex = 0;
        currentSlideIndex = 0;
    } else if (
        currentSlideIndex ==
        places[currentPlaceIndex].details.length - 1
    ) {
        currentSlideIndex = 0;
        currentPlaceIndex++;
    } else {
        currentSlideIndex++;
    }

    // currentSlideIndex =
    //     currentSlideIndex < places[currentPlaceIndex].details.length - 1
    //         ? currentSlideIndex + 1
    //         : 0;

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
