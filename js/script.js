var link = document.querySelector(".offer-btn");
var popup = document.querySelector(".search-model");
var login = popup.querySelector("[name=check-in]");

link.addEventListener("click", function (event) {
    event.preventDefault();
    if (popup.classList.contains("search-model-show")) {
    popup.classList.remove("search-model-show");
    login.focus();
  } else {
    event.preventDefault();
    popup.classList.add("search-model-show");
  }
});