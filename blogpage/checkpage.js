function checkE() {
  var mainPage = document.getElementById('mainPage');
  var form = document.getElementById('formID')
  var close = document.getElementById('btnClose');

  var offendedchoice = document.querySelector('input[name="offendedquiz"]:checked').value

  var thinkchoice = document.querySelector('input[name="offendedquiz"]:checked').value
  var ironychoice = document.querySelector('input[name="ironyquiz"]:checked').value
  var stupidchoice = document.querySelector('input[name="stupidquiz"]:checked')
  var employeechoice = document.querySelector('input[name="employeequiz"]:checked')

  if(offendedchoice == "definitely" && ironychoice == "definitely" && thinkchoice == "definitely" && employeechoice == null && stupidchoice == null)
  {
    close.onclick = function () {
      mainPage.style.display = "flex";
      form.style.display = "none";
    };
  }
  else
  {
      alert("Unfortunately, we will not be moving forward with your application, but we appreciate your time and interest. - PR")
      document.getElementById("formID").reset();
    }
}

function showSlide(){
    slides.style.display = "block";
}
