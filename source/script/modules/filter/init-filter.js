async function loadData() {
  const url = "../../../../public/projects.json";
  const tmpl = document.querySelector(".template-project-card");
  const list = document.querySelector(".courses__list");
  
  const response = await fetch(url);
  const data = await response.json();

  list.classList.add("is-active");
  list.innerHTML = "";
  data.forEach((elem) => {
    const card = tmpl.content.cloneNode(true);
    const hit = card.querySelector(".product-card__hit");
    if (!elem.hit) {
      hit.remove();
    }
    const productCard = card.querySelector(".product-card");
    const label = card.querySelector(".product-card__label");
    const title = card.querySelector(".product-card__title");
    const date = card.querySelector(".product-card__date");
    const img = card.querySelector(".product-card__img");
    const link = card.querySelector(".product-card__shadow-link");

    productCard.classList.add(...elem.classes);
    label.textContent = elem.label;
    title.textContent = elem.title;
    date.textContent = elem.date;

    img.setAttribute("src", elem.src);
    img.setAttribute("alt", elem.alt);
    img.setAttribute("width", elem.width);
    img.setAttribute("height", elem.height);
    link.setAttribute("href", elem.href);

    list.append(card);
  });
}

let filename = window.location.href.split("/").pop();
if(filename=="data.html") {
  loadData();
}