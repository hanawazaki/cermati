const notif = document.querySelector('.notif');
const heroOverlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('#close_btn')
const panel = document.querySelector(".newsletter")
const hero = document.querySelector(".hero")
const highlights = document.querySelector(".highlights")

function myFunction() {
  const body = document.querySelector("body")

  let x = body.scrollTop;
  // if (scroll =)
  console.log(x)
  panel.classList.toggle("showPanel")
}

// hero.addEventListener("scroll", function (e) {
//   e.preventDefault();
//   console.log("scrolled")
//   panel.classList.toggle("showPanel")

// })

closeBtn.addEventListener("click", function (event) {
  event.preventDefault()
  panel.classList.toggle("closePanel")
});

const closeNotif = () => {
  notif.classList.toggle("hide")
  heroOverlay.classList.add("noNotif")
}
