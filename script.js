fetch("url")
  .then((res) => res.json())
  .then(showItems);

function showItems(items) {
  items.forEach(showItem);
}

function showItem(item) {
  console.log(item);
  //Fang template
  const template = document.querySelector("#item_boks").content;

  //Lav en kopi
  const copy = template.cloneNode(true);

  //Ændre indhold
  copy.querySelector("h3").textContent = item.navn;
  copy.querySelector(".sankelandskab").textContent = item.navn;
  copy.querySelector(".tilberedning").textContent = item.navn;
  copy.querySelector(".måneder").textContent = item.navn;
  copy.querySelector(".kategori").textContent = item.navn;

  //Append
  document.querySelector("main").appendChild(copy);
}
