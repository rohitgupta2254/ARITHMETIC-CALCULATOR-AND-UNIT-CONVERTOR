document.getElementById("convertbtn").addEventListener("click", function () {
   
    var initialValue = parseFloat(document.getElementById("v1").value);
    var initialUnit = document.getElementsByTagName("select")[0].value;
    var finalUnit = document.getElementsByTagName("select")[1].value;
  
    
    var result;
    if (initialUnit === "ml" && finalUnit === "l") {
        result = initialValue / 1000; 
    } else if (initialUnit === "ml" && finalUnit === "kl") {
        result = initialValue / 1000000; 
    } else if (initialUnit === "l" && finalUnit === "ml") {
        result = initialValue * 1000; 
    } else if (initialUnit === "l" && finalUnit === "kl") {
        result = initialValue / 1000; 
    } else if (initialUnit === "kl" && finalUnit === "ml") {
        result = initialValue * 1000000; 
    } else if (initialUnit === "kl" && finalUnit === "l") {
        result = initialValue * 1000; 
    } else {
        result = initialValue; 
    }
  
    // Display the result
    document.getElementById("v2").value = result.toFixed(4); // Show result with 4 decimal places
});


  // Get all buttons with the class "button"
  var buttons = document.querySelectorAll('.button');

  // Add a click event listener to each button
  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          // Remove the "active" class from all buttons
          buttons.forEach(function (btn) {
              btn.classList.remove('active');
          });

          // Add the "active" class to the clicked button
          button.classList.add('active');
      });
  });