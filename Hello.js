
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

document.getElementById("myInput").addEventListener("keyup", myFunction);
function myFunction() {
	var elementValue = document.getElementById("myInput").value;
    document.getElementById("myInput").innerHTML = elementValue;

    // All JS is copied and pasted; text does not change yet.


    function myFunction(input){
      var elementValue = input.value;
      document.getElementById("myAnchor").innerHTML = elementValue;
    }