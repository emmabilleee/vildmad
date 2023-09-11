fetch("https://aghzgepwumrefviuxsmp.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnaHpnZXB3dW1yZWZ2aXV4c21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDA3MTIsImV4cCI6MjAwOTMxNjcxMn0.IBRZrNvaKbyNmJxdxb9-DhSg6g1ynocm-TBz24Sj1PA",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}

function showItem(item) {
  console.log(item);
  //Fang template
  const template = document.querySelector("template").content;

  //Lav en kopi
  const copy = template.cloneNode(true);

  //Ændre indhold
  copy.querySelector("h3").textContent = item.navn;
  copy.querySelector(".sankelandskab").textContent = item.sankelandskaber;
  copy.querySelector(".tilberedning").textContent = item.tilberedes;
  copy.querySelector(".måneder").textContent = item.season;
  copy.querySelector(".kategori").textContent = item.category;

  //Append
  document.querySelector("main").appendChild(copy);
}
