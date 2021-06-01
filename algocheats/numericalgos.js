function iterator() {
  let sum = $('#numeric1').val()
  let sum1 = $('#numeric2').val()
  //console.log(sum1)
    let sumBetween = [0];
    for (let i = sum; i < sum1; i++) {
        sumBetween += i;
        //i starts at the min of arr, and if its less than or equal to the max of arr it incremenets, and each increment value is added in sum to the var sumBetween.
    }
    return $("#result").val($("#result").val() + sumBetween);
}

function sumAll() {

    let fullArr = $('#sum1').val();
    let arrSplit = Array.from(fullArr.toString()).map(Number);
    console.log(arrSplit);

    var sum = arrSplit.reduce(function(a, b){
        return a + b;
    }, 0);

    console.log(sum);
    return $("#result").val($("#result").val() + sum);
}

function factorialize() {
  let num = $('#factorial1').val();
  var result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return $("#result").val($("#result").val() + result);
}

//-----------------------------------------------\\

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  var res = quickSort([left]).concat(pivot, quickSort([right]));
  return $("#result").val($("#result").val() + res);
};
