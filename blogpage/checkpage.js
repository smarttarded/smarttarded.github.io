function checkE() {
  var mainPage = document.getElementById('mainPage');
  var form = document.getElementById('formID')
  var close = document.getElementById('btnClose');

  var offendedchoice = document.querySelector('input[name="offendedquiz"]:checked').value
  console.log(offendedchoice);
  var ironychoice = document.querySelector('input[name="ironyquiz"]:checked').value


  if(offendedchoice == "definitely" && ironychoice == "definitely")
  {
    close.onclick = function () {
      mainPage.style.display = "flex";
      form.style.display = "none";

    };
  }
}

function showSlide(){
    slides.style.display = "block";
}
