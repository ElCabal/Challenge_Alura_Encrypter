const inputTxt = document.getElementById("inputTxt");
const textEncrypted = document.querySelector(".text_encrypted");
const hiddenDiv = document.getElementById("hidden_div");
const btnCopy = document.querySelector(".btn_copy");

const btnEncrypter = document
  .querySelector(".btn_encrypter")
  .addEventListener("click", encrypterTxt);

const btnClear = document
  .querySelector(".btn_clear")
  .addEventListener("click", clearText);

let hola = "enter imes ober ufat ai";
console.log(hola.indexOf("ai"));

function encrypterTxt() {
  const text = inputTxt.value;
  console.log(text);

  const encrypt = [...text].map((elem) => {
    if (elem === "a") {
      return (elem = "ai");
    } else if (elem === "e") {
      return (elem = "enter");
    } else if (elem === "i") {
      return (elem = "imes");
    } else if (elem === "o") {
      return (elem = "ober");
    } else if (elem === "u") {
      return (elem = "ufat");
    } else {
      return elem;
    }
  });
  console.log(encrypt);
  hiddenDiv.style.display = "none";
  textEncrypted.style.display = "block";
  btnCopy.style.display = "block";

  const joinTxt = encrypt.join("");
  console.log(joinTxt);
  textEncrypted.value = joinTxt;
}
/**
 * The function is called clearText. It has no parameters. It clears the text in the input box.
 */
function clearText() {
  inputTxt.value = "";
  textEncrypted.value = "";
  hiddenDiv.style.display = "block";
  btnCopy.style.display = "none";
}
