function toMedieval() {
  var text = $("#medievaltext").val();
  clear("#binary");
  vowelArr = ['a', 'e', 'ae', 'ei']

    const randomElement = vowelArr[Math.floor(Math.random() * vowelArr.length)];
    const randomElement1 = vowelArr[Math.floor(Math.random() * vowelArr.length)];
    const randomElement2 = vowelArr[Math.floor(Math.random() * vowelArr.length)];

    var replace = text.replaceAll(/\bhas\b/g, "h" + randomElement2 + "th")
                  .replaceAll(/\bare\b/gi, "art")
                  .replaceAll(/\bof\b/gi, "o'")
                  .replaceAll(/\bhave\b/gi, "hav" + randomElement1)
                  .replaceAll(/\byou\b/gi, "thou")
                  .replaceAll(/\bknow\b/g, "knoweth")
                  .replaceAll(/\bfor it is\b/g, "forthi")
                  .replaceAll("time", "tyme")
                  .replaceAll(/\bsay\b/g, "say" + randomElement + "th")
                  .replaceAll(/\bonly\b/g, "onliic")
                  .replaceAll(/\babout\b/g, "aboue")
                  .replaceAll(/\bmay\b/g, "m" + randomElement + "i")
                  .replaceAll(/\bmy\b/g, "thine")
                  .replaceAll("would", "wolde")
                  .replaceAll(/\bsweet\b/g, "soote")
                  .replaceAll(/\bsmall\b/g, "smale")
                  .replaceAll("hand", "honde")
                  .replaceAll(/\bway\b/g, "weie")
                  .replaceAll(/\bus\b/g, "ous")
                  .replaceAll(/\bour\b/g, "oure")
                  .replaceAll(/\byour\b/g, "jor")
                  .replaceAll(/\bover\b/g, "uf" + randomElement2 + "r")
                  .replaceAll(/\bways\b/g, "wyse")
                  .replaceAll(/\bbut\b/g, "bot")
                  .replaceAll(/\bBut\b/g, "Bot")
                  .replaceAll("little", "littel")
                  .replaceAll("marine", "marn" + randomElement1)
                  .replaceAll("breath", "breeth")
                  .replaceAll("seek", "sek" + randomElement)
                  .replaceAll(/\btongue\b/g, "tonge")
                  .replaceAll(/\bthink\b/g, "thinke")
                  .replaceAll("anywhere", "ani-wer")
                  .replaceAll(/\bknowing\b/g, "knowen")
                  .replaceAll(/\bleave\b/g, "leve")
                  .replaceAll(/\bidiot\b/g, "dalcop")
                  .replaceAll(/\bfool\b/g, "l" + randomElement1 + "per")
                  .replaceAll(/\bkiddo\b/g, "churl")
                  .replaceAll(/\bkid\b/g, "bumpkin")
                  .replaceAll(/\bfucking\b/g, "bloody")
                  .replaceAll(/\bgorilla\b/g, "mancowe")
                  .replaceAll(/\btrained\b/g, "trein" + randomElement + "n")
                  .replaceAll(/\benjoy\b/g, "shurte")
                  .replaceAll(/\bmyself\b/g, "schelfe")
                  .replaceAll(/\bgodamn\b/g, "unholy")
                  .replaceAll(/\bshit\b/g, "shite")
                  .replaceAll(/\bindividual\b/g, "bodi")
                  .replaceAll(/\bindividuals\b/g, "bodis")
                  .replaceAll(/\bchild\b/g, "cild")
                  .replaceAll(/\bchildren\b/g, "cilds")
                  .replaceAll(/\bspeak\b/g, "sp" + randomElement2 + "ak");

    var output= replace.replace(/(.)\1+/g, '$1')
    $("#medievaltext").val($("#medievaltext") + output);
}

function toHex() {
  var binary = $("#hextext").val();
  clear("#hextext");
  for (i = 0; i < binary.length; i++) {
    var output1 = binary[i].charCodeAt(0).toString(16) + " ";
    $("#hextext").val($("#hextext").val() + output1);
  }
}

function clear(type) {
  $(type).val(null);
}
