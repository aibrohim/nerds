var popup = document.querySelector(".writeus");
var popupOpener = document.querySelector("#writeus-opener");
var popupClose = document.querySelector(".close-button");
var input = document.querySelector(".writeus-input");
var form = document.querySelector(".writeus-form");
var nameSpace = document.querySelector("#name");
var emailSpace = document.querySelector("#email");
var letterSpace = document.querySelector("#letter");

popupOpener.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("writeus-opened");
  input.focus();
})

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("writeus-opened");
})

form.addEventListener("submit", function(evt) {
  if (!nameSpace.value || !emailSpace.value || !letterSpace.value) {
    evt.preventDefault();
    popup.classList.remove("writeus-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("writeus-error");
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("writeus-opened")) {
      evt.preventDefault();
      popup.classList.remove("writeus-opened");
      popup.classList.remove("writeus-error");
    }
  }
});

