function checkPalindrome() {
    let origStr = $('#string1').val().replace(/[,._ -/]+/g, "").trim().toLowerCase()
    let revStr = origStr.split("").reverse().join("");
    if (origStr === revStr) {
      return $("#result").val($("#result").val() + revStr + " IS A PALINDROME");
    }
    else {
        return $("#result").val($("#result").val() + " IS NOT A PALINDROME");
    }
}

function reverseString() {
    let str = $('#reverse1').val()
    return $("#result").val($("#result").val() + str
        .split("")
        .reverse()
        .join(""));
}
