$(document).ready(function() {

  $(".btn").click(function(event) {
    $(".wordPuzzle").hide();

    //get user Input
    var input = $("#stringInput").val();
    var charArray = [];
    var vowel = ["a", "e", "i", "o", "u"];
    //array for splitting
    var splitArray = [];

    splitArray= input.split("");

    //alert(splitArray);

    for(index =0; index < input.length; index +=1){
      charArray[index] = input.charAt(index);
    }

    for(index =0; index < splitArray.length; index+=1){
      if(vowel.includes(splitArray[index])){
        splitArray[index] = "-";
        splitArray.join("");

      }else{
        // do nothing
      }
    }
    $("#output").append(splitArray);
    // this is the regEx way
    // var newArray = input.replace(/e/, '-');
    // alert(newArray)

// debugger;


// second method, not finished, prints with commas!
    // for(index= 0; index < charArray.length; index+=1){
    //   if(charArray[index] === 'a' || charArray[index] === 'e' || charArray[index] === 'i' || charArray[index] === 'o' || charArray[index] === 'u'){
    //     charArray[index] = "-";
    //     //alert(charArray);
    //
    //   }else {
    //
    //   }
    //
    // }

      event.preventDefault();
  });
});
