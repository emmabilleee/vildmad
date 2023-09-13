window.addEventListener("load", sidenVises);
document.querySelector(".hero_skov").addEventListener("mouseenter", hooverskov);
document.querySelector(".hero_skov").addEventListener("mouseleave", hooverskovreset);

function sidenVises() {
  document.querySelector("#tale").classList.add("tale_ani");
  document.querySelector("#tale").addEventListener("animationend", anireset);
}

function anireset() {
  document.querySelector("#tale").classList.remove("tale_ani");
}

function hooverskov() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "SKOV-OMRÅDE";
  tekst.classList.remove("tale_ani"); // Remove the animation class
  tekst.classList.add("tale_ani"); // Add it immediatel
}

function hooverskovreset() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "KLIK PÅ ET OMRÅDE FOR AT SE MERE…";
  tekst.classList.remove("tale_ani");
}

document.querySelector(".hero_vand").addEventListener("mouseover", hoovervand);
document.querySelector(".hero_vand").addEventListener("mouseout", hoovervandreset);

function hoovervand() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "VAND-OMRÅDE";
  tekst.classList.remove("tale_ani"); // Remove the animation class
  tekst.classList.add("tale_ani"); // Add it immediatel
}

function hoovervandreset() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "KLIK PÅ ET OMRÅDE FOR AT SE MERE…";
  tekst.classList.remove("tale_ani");
}

document.querySelector(".hero_by").addEventListener("mouseover", hooverby);
document.querySelector(".hero_by").addEventListener("mouseout", hooverbyreset);

function hooverby() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "BY-OMRÅDE";
  tekst.classList.remove("tale_ani"); // Remove the animation class
  tekst.classList.add("tale_ani"); // Add it immediatel}
}
function hooverbyreset() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "KLIK PÅ ET OMRÅDE FOR AT SE MERE…";
  tekst.classList.remove("tale_ani");
}

document.querySelector(".hero_land").addEventListener("mouseover", hooverland);
document.querySelector(".hero_land").addEventListener("mouseout", hooverlandreset);

function hooverland() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "LAND-OMRÅDE";
  tekst.classList.remove("tale_ani"); // Remove the animation class
  tekst.classList.add("tale_ani"); // Add it immediatel}
}
function hooverlandreset() {
  const tekst = document.querySelector("#tale");
  tekst.textContent = "KLIK PÅ ET OMRÅDE FOR AT SE MERE…";
  tekst.classList.remove("tale_ani");
}
