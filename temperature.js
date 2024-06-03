document.getElementById("convertbtn").addEventListener("click", function () {
   
    var initialValue = parseFloat(document.getElementById("v1").value);
    var initialUnit = document.getElementsByTagName("select")[0].value;
    var finalUnit = document.getElementsByTagName("select")[1].value;
  
    
    var result;
    if (initialUnit === "c" && finalUnit === "f") {
        result = (initialValue*9/5)+32; 
    } else if (initialUnit === "c" && finalUnit === "k") {
        result = initialValue+273.15; 
    } else if (initialUnit === "f" && finalUnit === "c") {
        result = (initialValue-32)*5/9; 
    } else if (initialUnit === "f" && finalUnit === "k") {
        result = (initialValue-32)*5/9+32; 
    } else if (initialUnit === "k" && finalUnit === "c") {
        result = initialValue-273.15; 
    } else if (initialUnit === "k" && finalUnit === "f") {
        result = (initialValue-273.15)*9/5+32; 
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