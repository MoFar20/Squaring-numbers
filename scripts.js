document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("numberForm");
    var tableBody = document.querySelector("#resultTable tbody");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Clear previous table rows
        tableBody.innerHTML = "";
        // Get start and end values from the form
        var startInput = document.getElementById("start");
        var endInput = document.getElementById("end");
        var startValue = parseInt(startInput.value);
        var endValue = parseInt(endInput.value);
        if (isNaN(startValue) || isNaN(endValue) || startValue > endValue) {
            alert("Please enter valid numbers with the start value less than or equal to the end value.");
            return;
        }
        // Generate table rows
        for (var i = startValue; i <= endValue; i++) {
            var row = document.createElement("tr");
            var numberCell = document.createElement("td");
            numberCell.textContent = i.toString();
            row.appendChild(numberCell);
            var squareCell = document.createElement("td");
            squareCell.textContent = (i * i).toString();
            row.appendChild(squareCell);
            tableBody.appendChild(row);
        }
    });
});
