const form = document.forms["form"];
const button = form.element["buttons"];

const inputArr = Array.from(form);
const validInputArr = [];

inputArr.forEach((el) => {
  if (el.hasAttribute("required")) {
    validInputArr.push(el);
  }
});
button.addEventListener("click", buttonHandler);
form.addEventListener("input", inputHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("required") || target.hasAttribute("pattern")) {
    inputCheck(target);
  }
}
function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("required");
  const reg = new RegExp(inputReg);
  console.log(inputValue, reg);
  if (reg.test(inputValue)) {
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}
function buttonHandler(e) {
  const isAllValid = [];
}
// let errors = [];
// function checkValidity(input) {
//   let validity = input.validity;
//   if (validity.valueMissing) {
//     errors.push("Поле" + input.placeholder + "не заполнено");
//   }
//   if (validity.rangeOverflow) {
//     let max = getAttributeValue(input, "max");
//     errors.push("Максимально значение не может быть больше чем" + max);
//   }
//   if (validity.rangeUnderflow) {
//     let min = getAttributeValue(input, "min");
//     errors.push("Минимальное значение не может быть меньше чем" + min);
//   }
// }
// function checkAll() {
//   errors = [];
//   let inputs = document.querySelectorAll("input");
//   for (let input of inputs) {
//     checkValidity(input);
//   }
//   document.getElementById("regform__error_confirm").innerHTML =
//     errors.join(", <br>");
// }

// function checkError() {
//   let email = document.getElementById("regform__email");
//   let password = document.getElementById("regform__password");
//   let yourName = document.getElementById("regform__name");
//   let yourLast = document.getElementById("regform__lastname");
//   let passwordConfirm = document.getElementById("regform__confirm");
//   document.getElementById("regform__error").innerHTML = "";
//   document.getElementById("regform__names_error").innerHTML = "";
//   document.getElementById("regform__error_gmail").innerHTML = "";
//   document.getElementById("regform__error_confirm").innerHTML = "";

//   if (email.value == "") {
//     document.getElementById("regform__error_gmail").innerHTML +=
//       "Укажите адрес Gmail<br>";
//   }
//   if (password.value == "") {
//     document.getElementById("regform__error").innerHTML += "Введите пароль<br>";
//   }
//   if (yourName.value == "" || yourLast.value == "") {
//     document.getElementById("regform__names_error").innerHTML +=
//       "Введите Ваши имя и фамилию<br>";
//   }
//   if (passwordConfirm.value == "") {
//     document.getElementById("regform__error_confirm").innerHTML +=
//       "Подтвердите пароль<br>";
//   }
//   if (passwordConfirm.value !== password.value) {
//     document.getElementById("regform__error_confirm").innerHTML +=
//       "Пароли не совпадают<br>";
//   }
// }
