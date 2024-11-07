const nameInputElement = document.getElementById("card-name");
const cardInputElement = document.getElementById("card-number");
const mounthInputElement = document.getElementById("card-mounth");
const yearInputElement = document.getElementById("card-year");
const cvcInputElement = document.getElementById("card-cvc");
const nameLabelElement = document.getElementById("name");
const numberLabelElement = document.getElementById("number");
const mounthLabelElement = document.getElementById("mounth");
const yearLabelElement = document.getElementById("year");
const cvcNumberElement = document.getElementById("cvc-number");

const formElement = document.getElementById("form");

const formInfo = (e) => {
  e.preventDefault();
  if (nameInputElement.value === "") {
    nameInputElement.classList.add("errorInput");
  } else {
    nameInputElement.classList.remove("errorInput");
  }
  if (cardInputElement.value === "") {
    cardInputElement.classList.add("errorInput");
  } else {
    cardInputElement.classList.remove("errorInput");
  }
  if (mounthInputElement.value === "") {
    mounthInputElement.classList.add("errorInput");
  } else {
    mounthInputElement.classList.remove("errorInput");
  }
  if (yearInputElement.value === "") {
    yearInputElement.classList.add("errorInput");
  } else {
    yearInputElement.classList.remove("errorInput");
  }
  if (cvcInputElement.value === "") {
    cvcInputElement.classList.add("errorInput");
  } else {
    cvcInputElement.classList.remove("errorInput");
  }
};

const fillCardName = () => {
  nameLabelElement.textContent = nameInputElement.value;
  if (nameInputElement.value === "")
    nameLabelElement.textContent = "Jane Appleseed";
};
const fillCardNumber = () => {
  numberLabelElement.textContent = cardInputElement.value;
  if (cardInputElement.value === "")
    numberLabelElement.textContent = "0000 0000 0000 0000";
};
const fillMounth = () => {
  mounthLabelElement.textContent = mounthInputElement.value;
  if (mounthInputElement.value === "") mounthLabelElement.textContent = "00";
};
const fillYear = () => {
  yearLabelElement.textContent = yearInputElement.value;
  if (yearInputElement.value === "") yearLabelElement.textContent = "00";
};
const fillCvc = () => {
  cvcNumberElement.textContent = cvcInputElement.value;
  if (cvcInputElement.value === "") cvcNumberElement.textContent = "000";
};

nameInputElement.addEventListener("input", fillCardName);
cardInputElement.addEventListener("input", fillCardNumber);
mounthInputElement.addEventListener("input", fillMounth);
yearInputElement.addEventListener("input", fillYear);
cvcInputElement.addEventListener("input", fillCvc);

formElement.addEventListener("submit", formInfo);
