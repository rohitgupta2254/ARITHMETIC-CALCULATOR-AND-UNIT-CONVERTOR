document.getElementById("convertbtn").addEventListener("click", function () {

    var initialValue = parseFloat(document.getElementById("v1").value);
    var initialUnit = document.getElementsByTagName("select")[0].value;
    var finalUnit = document.getElementsByTagName("select")[1].value;

   
    var result;
    if (initialUnit === "ms" && finalUnit === "hr") {
        result = initialValue / 3600000;
    } else if (initialUnit === "hr" && finalUnit === "ms") {
        result = initialValue* 3600000;
    } else if (initialUnit === "s" && finalUnit === "min") {
        result = initialValue /60;
    } else if (initialUnit === "min" && finalUnit === "s") {
        result = initialValue*60;
    } else if (initialUnit === "ms" && finalUnit === "s") {
        result = initialValue /1000;
    } else if (initialUnit === "s" && finalUnit === "ms") {
        result = initialValue *1000;
    } else if (initialUnit === "min" && finalUnit === "hr") {
        result = initialValue /60;
    } else if (initialUnit === "hr" && finalUnit === "min") {
        result = initialValue *60;
    } else if (initialUnit === "min" && finalUnit === "ms") {
        result = initialValue * 60000;
    } else if (initialUnit === "ms" && finalUnit === "min") {
        result = initialValue /60000;
    } else if (initialUnit === "hr" && finalUnit === "s") {
        result = initialValue * 3600;
    } else if (initialUnit === "s" && finalUnit === "hr") {
        result = initialValue/3600;

    } else {
        result = initialValue;
    }

    
    document.getElementById("v2").value = result.toFixed(3); 
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