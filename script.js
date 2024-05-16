AOS.init();

const cardImages = document.querySelectorAll(".card-img");
const openMenuBtn = document.querySelector(".ham-btn.open");
const closeMenuBtn = document.querySelector(".ham-btn.close");
const dateEl = document.querySelector("#date");

const date = new Date().getFullYear();
dateEl.textContent = date;
function changeSrcMobile() {
  if (window.innerWidth < 620) {
    cardImages[0].src = "./images/mobile/image-deep-earth.jpg";
    cardImages[1].src = "./images/mobile/image-night-arcade.jpg";
    cardImages[2].src = "./images/mobile/image-soccer-team.jpg";
    cardImages[3].src = "./images/mobile/image-grid.jpg";
    cardImages[4].src = "./images/mobile/image-from-above.jpg";
    cardImages[5].src = "./images/mobile/image-pocket-borealis.jpg";
    cardImages[6].src = "./images/mobile/image-curiosity.jpg";
    cardImages[7].src = "./images/mobile/image-fisheye.jpg";

    document.querySelector(".see-all").remove();
    const button = document.createElement("button");
    button.classList.add("see-all");
    button.textContent = "See all";
    button.setAttribute("data-aos", "fade-up");
    button.setAttribute("data-aos-duration", "1000");
    document.querySelector("#creations").append(button);
  }
}

changeSrcMobile(); // Calling function for mobile images

openMenuBtn.addEventListener("click", function () {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  document.querySelector("nav ul").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
});

closeMenuBtn.addEventListener("click", function () {
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  document.querySelector("nav ul").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});
