const urlParams = new URLSearchParams(window.location.search)
const season = urlParams.get("season")
const omrode = urlParams.get("omrode")
console.log(season, omrode);
console.log(urlParams)
fetch(`https://aghzgepwumrefviuxsmp.supabase.co/rest/v1/vildmad?season=eq.${season}&omrode=eq.${omrode}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnaHpnZXB3dW1yZWZ2aXV4c21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDA3MTIsImV4cCI6MjAwOTMxNjcxMn0.IBRZrNvaKbyNmJxdxb9-DhSg6g1ynocm-TBz24Sj1PA",
  },
})
  .then((res) => res.json())
  .then(showDatas);


function showDatas(items) {
  console.log(items)
  items.forEach(showData);
}

document.querySelector(".header_side2").textContent=omrode
document.querySelector(".subheader_side2").textContent=season


function showData(item) {
  console.log(item);
  //fang template
  const template = document.querySelector("#item_boks").content;
  //lav kopi
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = item.navn;
  copy.querySelector(".sankelandskab").textContent = item.sankelandskaber;
  copy.querySelector(".maaneder").textContent = item.month;
  copy.querySelector(".kategori").textContent = item.navn;
  copy.querySelector(".description").textContent = item.beskrivelse;
  copy.querySelector(".img").src = item.img;

  if (item.tilberedes === true) {
    copy.querySelector(".tilberedning").textContent = `Tilberedes før spisning`;
  } else {
    copy.querySelector(".tilberedning").textContent = `Behøver ikke tilberedning før spisning`;
  }

  document.querySelector("main").appendChild(copy);
}

