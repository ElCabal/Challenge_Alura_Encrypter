const inputTxt = document.getElementById("inputTxt");
const textEncrypted = document.querySelector(".text_encrypted");
const hiddenDiv = document.getElementById("hidden_div");
const btnCopy = document.querySelector(".btn_copy");

const btnEncrypter = document
  .querySelector(".btn_encrypter")
  .addEventListener("click", encrypterTxt);

const btnDecrypter = document
  .querySelector(".btn_decryptor")
  .addEventListener("click", decrypterTxt);

const btnClear = document
  .querySelector(".btn_clear")
  .addEventListener("click", clearText);

/**
 * The function takes the value of the input field, splits it into an array, maps over the array and
 * replaces the vowels with the corresponding string, then joins the array back into a string and
 * displays it in the textarea.
 */
function encrypterTxt() {
  const text = inputTxt.value;
  if (text === "") {
    return console.log("Por favor introducir un texto");
  } else if (text === /[A-Z]+/gim) {
    return console.log("No se puede introducir texto en mayúscula");
  } else {
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
    inputTxt.value = "";
    hiddenDiv.style.display = "none";
    textEncrypted.style.display = "block";
    btnCopy.style.display = "block";

    const joinTxt = encrypt.join("");
    console.log(joinTxt);
    textEncrypted.value = joinTxt;
  }
}

/* Copying the text from the textarea to the input field. */
btnCopy.addEventListener("click", function copyTxt() {
  inputTxt.value = textEncrypted.value;
  textEncrypted.style.display = "none";
  btnCopy.style.display = "none";
  hiddenDiv.style.display = "block";
});

/**
 * It takes the text from the input field, replaces the encrypted words with the correct letters, and
 * then displays the decrypted text in the textarea.
 */
function decrypterTxt() {
  const txtEncrypted = inputTxt.value;
  if (txtEncrypted === "") {
    return console.log("Por favor ingresar texto");
  } else {
    let txtDecrypted = txtEncrypted
      .replace(/ai/gim, "a")
      .replace(/enter/gim, "e")
      .replace(/imes/gim, "i")
      .replace(/ober/gim, "o")
      .replace(/ufat/gim, "u");

    hiddenDiv.style.display = "none";
    textEncrypted.style.display = "block";
    btnCopy.style.display = "block";
    textEncrypted.value = txtDecrypted;
    inputTxt.value = "";
  }
}

/**
 * The function is called clearText. It has no parameters. It clears the text in the input box.
 */
function clearText() {
  inputTxt.value = "";
  textEncrypted.value = "";
  textEncrypted.style.display = "none";
  hiddenDiv.style.display = "block";
  btnCopy.style.display = "none";
}
