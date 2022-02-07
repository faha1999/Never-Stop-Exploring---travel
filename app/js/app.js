let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');

  // header active
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () => {
  // header active
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// search

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.add('active');
};

document.querySelector('#close-search').onclick = () => {
  searchForm.classList.remove('active');
};

// home slid
var swiper = new Swiper('.home-slider', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// shop slide
var swiper = new Swiper('.products-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});

// reviews
// shop slide
var swiper = new Swiper('.review-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
