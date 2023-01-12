const showHiddenInput = (inputOverlay, inputPassword, inputIcon) => {
  const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPassword),
    iconEye = document.getElementById(inputIcon);
  iconEye.addEventListener("click", () => {
    //Change password to text
    if (input.type === "password") {
      input.type = "text";
      //change icon
      iconEye.classList.add("bx-show");
    } else {
      //change to password
      input.type = "password";
      //remove the show icon
      iconEye.classList.remove("bx-show");
    }
  });
};
showHiddenInput("input-overlay", "input-password", "input-icon");
