function timeDate() {


    let d;
    d = new Date()
    var MyDateString;

    UTC = d.toTimeString();
    console.log(UTC);

    UTCmin = d.getUTCMinutes()
    UTChr = d.getUTCHours();

      d.setDate(d.getDate());

      MyDateString = ('0' + (UTChr+1)).slice(-2) + ':' + ('0' + (UTCmin+1)).slice(-2) + ' ' + ('0' + (d.getUTCMonth()+1)).slice(-2) + '/' + ('0' + d.getUTCDate()).slice(-2) + '/' +  d.getFullYear();

    console.log(MyDateString.toString());

    document.getElementById('date').innerHTML = MyDateString.toString();
    return $("#date").val($("#date").val() + MyDateString);
}

function validateForm() {
  var a = document.forms["myForm"]["data[NAME]"].value;
  var b = document.forms["myForm"]["data[EMAIL]"].value;
  var c = document.forms["myForm"]["data[AGE]"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "") {
    alert("Please Fill All Required Field");
    return false;
  }
  timeDate()
}



/*
const ipURL = new URL('https://grabify.link/track/QTFJ8X');

ipURL.hostname = 'grabify.link';

ipURL.search= '?ip';

console.log(ipURL);
console.log(ipURL.search.toString());

let params = new URLSearchParams('https://grabify.link/track/QTFJ8X');
console.log(params)
*/
