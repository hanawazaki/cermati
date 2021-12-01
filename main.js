let notif = document.querySelector('.notif');
let heroOverlay = document.querySelector('.overlay');

const closeNotif = () => {
  notif.classList.toggle("hide")
  heroOverlay.classList.add("noNotif")
}