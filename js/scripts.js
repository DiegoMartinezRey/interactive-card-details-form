const formElement = document.getElementById("form");

const formInfo = (e) => {
  e.preventDefault();
  console.log(e);
};

formElement.addEventListener("submit", formInfo);
