document.addEventListener("DOMContentLoaded", function () {
  const search_icon = document.querySelector(".search_icon");
  const search_bar = document.querySelector(".search_bar");

  search_icon.onclick = function () {
    search_bar.classList.toggle("active");
  };
});