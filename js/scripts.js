$(document).ready(function() {

  $(".btn").click(function(event) {
    $(".wordPuzzle").hide();

    //get user Input
    var input = $("#stringInput").val();
    var charArray = [];

    for(index =0; index < input.length; index +=1){
      charArray[index] = input.charAt(index);
    }
debugger;
    for(index= 0; index < charArray.length; index+=1){
      if(charArray[index] === 'a' || charArray[index] === 'e' || charArray[index] === 'i' || charArray[index] === 'o' || charArray[index] === 'u'){
        alert("found vowel!");

      }else {
        alert("no vowel found");
      }

    }








      event.preventDefault();
  });
});
