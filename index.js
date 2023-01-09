"use strict";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let navListItem = document.querySelectorAll(".nav-list-item");
  let logo = document.querySelectorAll("#logo");
  let nav = document.querySelector(".navbar");
  let navList = document.querySelector(".nav-list");
  let searchIcon = document.querySelector(".search_icon_svg");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.maxHeight = "80px";
    nav.addEventListener("mouseenter", () => {
      nav.style.opacity = "1";
      nav.style.background = "rgba(94, 93, 88, 0.8)";
    });
    nav.addEventListener("mouseleave", () => {
      nav.style.opacity = "0.5";
      nav.style.background = "rgba(94, 93, 88, 0.5)";
    });

    nav.style.opacity = "0.5";
    navList.style.marginTop = "29px";
    navList.style.marginBottom = "20px";
    searchIcon.style.top = "29px";
    searchIcon.style.paddingBottom = "23.5px";
    document.getElementById("logo-img").style.marginTop = "6px";
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.marginTop = "24px";
    }

    for (let i = 0; i < navListItem.length; i++) {
      navListItem[i].style.paddingBottom = "25px";
    }
  } else {
    document.getElementById("navbar").style.maxHeight = "120px";
    navList.style.marginTop = "49.61px";
    navList.style.marginBottom = "48.74px";
    document.getElementById("logo-img").style.marginTop = "25px";
    nav.style.opacity = "1";

    nav.addEventListener("mouseenter", () => {
      nav.style.background = "rgba(94, 93, 88, 0.5)";
    });

    nav.addEventListener("mouseleave", () => {
      nav.style.opacity = "1";
    });

    for (let i = 0; i < logo.length; i++) {
      logo[i].style.marginTop = "42px";
    }

    for (let i = 0; i < navListItem.length; i++) {
      navListItem[i].style.paddingBottom = "44px";
    }
    document.getElementById("search_icon_svg").style.top = "49px";
    document.getElementById("search_icon_svg").style.paddingBottom = "44px";
  }
};

let servicesSwitch = function () {
  let tabNav = document.querySelectorAll(".services-menu-item");
  let tabContent = document.querySelectorAll(".services-item");
  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    let tabName = this.getAttribute("data-tab-name");
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      if (item.classList.contains(tabName)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
};

servicesSwitch();

let rickroll = function () {
  let rickButton = document.getElementById("click");
  let audio = new Audio();
  audio.src = "./images/services/never-gonna-give-you-up.mp3";
  audio.volume = 0.1;
  audio.loop = true;

  document.addEventListener("click", (e) => {
    const playMusic = e.composedPath().includes(rickButton);
    if (!playMusic) {
      audio.pause();
    } else {
      audio.play();
    }
  })
};

rickroll();

let amTitle = document.querySelectorAll(".work-item");
let amContent = document.querySelectorAll(".works-tabs");
let amTarget;
let loadMore = document.querySelector(".plus");
let loadMoreAgain = document.querySelector(".plus2");
let extraPhotos = document.querySelectorAll(".target-extra");

loadMore.addEventListener("click", () => {
  loadMore.style.display = "none";
  loadMoreAgain.style.display = "flex";
  let target = document
    .querySelector(".work-item.active")
    .getAttribute("data-target");
  amContent.forEach((e) => {
    if (target == "target-all") {
      e.classList.add("active");

      for (let i = 0; i < extraPhotos.length; i++) {
        extraPhotos[i].style.display = "none";
      }
    } else {
      if (e.classList.contains(target)) {
        e.classList.add("active");
      } else e.classList.remove("active");
    }
  });
});

loadMoreAgain.addEventListener("click", () => {
  loadMoreAgain.style.display = "none";
  let target = document
    .querySelector(".work-item.active")
    .getAttribute("data-target");
  amContent.forEach((e) => {
    if (target == "target-all") {
      for (let i = 0; i < extraPhotos.length; i++) {
        extraPhotos[i].style.display = "flex";
      }
    } else {
      if (e.classList.contains(target)) {
        for (let i = 0; i < extraPhotos.length; i++) {
          extraPhotos[i].style.display = "none";
        }
      }
    }
  });
});

amTitle.forEach(function (amclick) {
  amclick.addEventListener("click", (e) => {
    loadMore.style.display = "flex";
    amTitle.forEach((amclick) => {
      amclick.classList.remove("active");
      for (let i = 0; i < extraPhotos.length; i++) {
        extraPhotos[i].style.display = "none";
      }
      loadMoreAgain.style.display = "none";
    });
    amclick.classList.add("active");
    amTarget = amclick.getAttribute("data-target");
    changeAmContent(amTarget);
  });
});

function changeAmContent(amTarget) {
  let counter = 0;
  amContent.forEach((e) => {
    if (amTarget == "target-all") {
      if (counter < 12) {
        e.classList.add("active");
      } else e.classList.remove("active");

      counter++;
    } else {
      if (e.classList.contains(amTarget)) {
        if (counter < 4) {
          e.classList.add("active");
        } else e.classList.remove("active");
        counter++;
      } else e.classList.remove("active");
    }
  })
};

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let peoplePhotoNav = document.querySelectorAll(".image-slider");
let peopleText = document.querySelectorAll(".people_text");
let peoplePhoto = document.querySelectorAll(".people_photo");
let peopleName = document.querySelectorAll(".people_name");
let peoplePosition = document.querySelectorAll(".people_position");
let aboutTarget;

peoplePhotoNav.forEach(function (aboutClick) {
  aboutClick.addEventListener("click", (e) => {
    peoplePhotoNav.forEach((aboutClick) => {
      aboutClick.classList.remove("active");
    });
    aboutClick.classList.add("active");
    aboutTarget = aboutClick.getAttribute("data-tab-name");
    currentSlide = aboutTarget.replace("photo-", "");
    currentSlide--;
    changeAboutContent(aboutTarget);
  });
});

function changeAboutContent(aboutTarget) {
  peoplePhoto.forEach((e) => {
    if (e.classList.contains(aboutTarget)) {
      e.classList.add("active");
    } else e.classList.remove("active");
  });
  peopleText.forEach((e) => {
    if (e.classList.contains(aboutTarget)) {
      e.classList.add("active");
    } else e.classList.remove("active");
  });
  peopleName.forEach((e) => {
    if (e.classList.contains(aboutTarget)) {
      e.classList.add("active");
    } else e.classList.remove("active");
  });
  peoplePosition.forEach((e) => {
    if (e.classList.contains(aboutTarget)) {
      e.classList.add("active");
    } else e.classList.remove("active");
  });
};

let currentSlide = 0;

const slides = document.querySelectorAll(".swiper .image-slider ");
const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", prevSlide);
const btnNext = document.getElementById("btnNext");
btnNext.addEventListener("click", nextSlide);

function prevSlide() {
  slides[currentSlide].className = "image-slider";
  if (currentSlide == 0) {
    currentSlide = 3;
    slides[currentSlide].className = "image-slider active";
    aboutTarget = slides[currentSlide].getAttribute("data-tab-name");
    changeAboutContent(aboutTarget);
  } else {
    currentSlide = (currentSlide - 1) % slides.length;
    slides[currentSlide].className = "image-slider active";
    aboutTarget = slides[currentSlide].getAttribute("data-tab-name");
    changeAboutContent(aboutTarget);
  }
};

function nextSlide() {
  peoplePhotoNav.forEach((aboutclick) => {
    aboutclick.classList.remove("active");
  });
  if (currentSlide == 4) {
    currentSlide = 0;
    slides[currentSlide].className = "image-slider active";
    aboutTarget = slides[currentSlide].getAttribute("data-tab-name");

    changeAboutContent(aboutTarget);
  } else {
    currentSlide++;
    if (currentSlide == 4) {
      currentSlide = 0;
    }
    slides[currentSlide].className = "image-slider active";
    aboutTarget = slides[currentSlide].getAttribute("data-tab-name");

    changeAboutContent(aboutTarget);
  }
};
