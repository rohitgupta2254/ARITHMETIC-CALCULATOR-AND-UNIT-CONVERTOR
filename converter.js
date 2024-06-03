document.getElementById("convertbtn").addEventListener("click", function () {

    var initialValue = parseFloat(document.getElementById("v1").value);
    var initialUnit = document.getElementsByTagName("select")[0].value;
    var finalUnit = document.getElementsByTagName("select")[1].value;

   
    var result;
    if (initialUnit === "m" && finalUnit === "km") {
        result = initialValue / 1000;
    } else if (initialUnit === "km" && finalUnit === "m") {
        result = initialValue* 1000;
    } else if (initialUnit === "y" && finalUnit === "mi") {
        result = initialValue * 0.0005681;
    } else if (initialUnit === "mi" && finalUnit === "y") {
        result = initialValue*1760;
    } else if (initialUnit === "m" && finalUnit === "y") {
        result = initialValue *1.094;
    } else if (initialUnit === "y" && finalUnit === "m") {
        result = initialValue * 0.914;
    } else if (initialUnit === "mi" && finalUnit === "km") {
        result = initialValue * 1.60934;
    } else if (initialUnit === "km" && finalUnit === "mi") {
        result = initialValue * 0.621371;
    } else if (initialUnit === "mi" && finalUnit === "m") {
        result = initialValue * 1609.34;
    } else if (initialUnit === "m" && finalUnit === "mi") {
        result = initialValue * 0.0006213;
    } else if (initialUnit === "km" && finalUnit === "y") {
        result = initialValue * 1093.613;
    } else if (initialUnit === "y" && finalUnit === "km") {
        result = initialValue *0.0009144;

    } else {
        result = initialValue;
    }

    
    document.getElementById("v2").value = result.toFixed(8); 
    
    

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




