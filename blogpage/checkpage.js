function checkE() {
  var mainPage = document.getElementById('mainPage');
  var form = document.getElementById('formID')
  var close = document.getElementById('btnClose');

  var offendedchoice = document.querySelector('input[name="offendedquiz"]:checked').value
  console.log(offendedchoice);
  var thinkchoice = document.querySelector('input[name="offendedquiz"]:checked').value
  console.log(thinkchoice)

  var ironychoice = document.querySelector('input[name="ironyquiz"]:checked').value
  var stupidchoice = document.querySelector('input[name="stupidquiz"]:not(:checked)').value
  console.log(stupidchoice)

  if(offendedchoice == "definitely" && ironychoice == "definitely" && stupidchoice == "definitelynot")
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
