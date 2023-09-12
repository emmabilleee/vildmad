window.addEventListener("load", sidenVises);
document.querySelector(".hero_skov").addEventListener("mouseover", hooverskov);
document.querySelector(".hero_skov").addEventListener("mouseout", hooverskovreset);

function sidenVises() {
  document.querySelector("#tale").classList.add("tale_ani");
}

function hooverskov() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "SKOV-OMRÅDE";
}

function hooverskovreset() {
  const tekst = document.querySelector("#tale"); // Use #tale to select the element by its ID
  tekst.textContent = "KLIK PÅ ET TERRÆN FOR AT SE MERE…";
}

document.querySelector(".hero_vand").addEventListener("mouseover", hoovervand);
document.querySelector(".hero_vand").addEventListener("mouseout", hoovervandreset);

function hoovervand() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "VAND-OMRÅDE";
}

function hoovervandreset() {
  const tekst = document.querySelector("#tale"); // Use #tale to select the element by its ID
  tekst.textContent = "KLIK PÅ ET TERRÆN FOR AT SE MERE…";
}

document.querySelector(".hero_by").addEventListener("mouseover", hooverby);
document.querySelector(".hero_by").addEventListener("mouseout", hooverbyreset);

function hooverby() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "BY-OMRÅDE";
}

function hooverbyreset() {
  const tekst = document.querySelector("#tale"); // Use #tale to select the element by its ID
  tekst.textContent = "KLIK PÅ ET TERRÆN FOR AT SE MERE…";
}

document.querySelector(".hero_land").addEventListener("mouseover", hooverland);
document.querySelector(".hero_land").addEventListener("mouseout", hooverlandreset);

function hooverland() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "LAND-OMRÅDE";
}

function hooverlandreset() {
  const tekst = document.querySelector("#tale"); // Use #tale to select the element by its ID
  tekst.textContent = "KLIK PÅ ET TERRÆN FOR AT SE MERE…";
}
