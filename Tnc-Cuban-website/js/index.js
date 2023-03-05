const btnUploadFile = document.querySelector(".button");
function setButtonProgress(button, percent) {
  const textElement = button.querySelector(".button__text");

  button.querySelector(".button__progress").style.width = `${percent}%`;

  if (percent >= 0) {
    textElement.textContent = button.dataset.progressText;
  }

  if (percent >= 100) {
    textElement.textContent = button.dataset.completeText;
  }
}

from(document.querySelector(".age")){
  if (conditions = true)(".then sand to sorry.html")

  else (conditions = false)(".then send to form.html")
}
form(document.querySelector(".patreon")){

  if ( conditions = true)(".then sand to form.html")

else (conditions = false)(".then sand to <a href="//bit.ly/TNC_Patreon" target="_blank"
>")

}