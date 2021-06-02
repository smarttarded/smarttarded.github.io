let submissions = []

function saveLocalStorage(type)
{
  let data = {
    algoresult: document.forms["algorithms"]['result'].value,
  }

  /*
  var cmnt = document.forms["myForm"]['comment'].value;
  if (cmnt == "") {
    alert("NO COMMENTS DETECTED");
    //$(x).val(null);
    return false;
  }
  */
  //alert("DATA SUBMITTED TO LOCAL STORAGE");
  submissions.push(data);
  document.forms[0].reset();
  console.log(submissions);

  var myStorage = window.localStorage;
  myStorage.setItem("ENTRIES", JSON.stringify(submissions));

  return true;
}
