const burger = document.querySelector(".sandwich");
const logo = document.querySelector(".header__logo");
const nav = document.querySelector(".main-nav");
const mediaQuery = window.matchMedia("(max-width: 1023px)");
const items = document.querySelectorAll(".main-nav__item");

burger.addEventListener("click", () => {
  if (!burger.classList.contains("is-active")) {
    activeClass(true);
  } else {
    activeClass(false);
  }
});

function activeClass(status) {
  if (status === true) {
    burger.classList.add("is-active");
    
    logo.classList.add("is-menu");
    document.body.classList.add("scroll-lock");
    nav.classList.add("is-active");
    items.forEach((item, index) => {
      const delay = ++index * 200;
      setTimeout(() => {
        item.classList.add("main-nav__item--is-active");
      }, delay);
    });
  } else if (status === false) {
    burger.classList.remove("is-active");
    logo.classList.remove("is-menu");
    document.body.classList.remove("scroll-lock");
    nav.classList.remove("is-active");
    items.forEach((item, index) => {
      const delay = ++index * 200;
      setTimeout(() => {
        item.classList.remove("main-nav__item--is-active");
      }, delay);
    });
  }
}

// При клике по esc сбрасываются active-классы
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    activeClass(false);
  }
});

// При ширине экрана от 1024 и более сбрасываются active-классы
mediaQuery.addEventListener("change", (e) => {
  if (e.matches === false) {
    activeClass(false);
  }
});

// const burger = document.querySelector(".sandwich");
// const logo = document.querySelector(".header__logo");
// const nav = document.querySelector(".main-nav");
// const items = document.querySelectorAll(".main-nav__item")
// const mediaQuery = window.matchMedia("(max-width: 1023px)");

// burger.addEventListener("click", () => {
//   toggleMenu();
// });

// function toggleMenu() {
//     burger.classList.toggle("is-active");
//     logo.classList.toggle("is-menu");
//     document.body.classList.toggle("scroll-lock");
//     nav.classList.toggle("is-active");

//     items.forEach((item, index) => {
//       const delay = index*200
//       setTimeout(()=>{
//         item.classList.toggle("main-nav__item--active");
//       },1000)
//     })
// }

// // При клике по esc сбрасываются active-классы
// document.addEventListener("keyup", (event) => {
//   if ((event.key=== "Escape") && nav.classList.contains("is-active")){
//     // activeClass(false);
//     toggleMenu()
//     console.log(event.key);
//   }
// });

// // При ширине экрана от 1024 и более сбрасываются active-классы
// mediaQuery.addEventListener("change", (e)=>{
//     if(e.matches===false){
//         toggleMenu();
//     }
// });
