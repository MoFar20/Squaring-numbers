document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("numberForm") as HTMLFormElement;
    const tableBody = document.querySelector("#resultTable tbody") as HTMLTableSectionElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Clear previous table rows
        tableBody.innerHTML = "";

        // Get start and end values from the form
        const startInput = document.getElementById("start") as HTMLInputElement;
        const endInput = document.getElementById("end") as HTMLInputElement;
        const startValue = parseInt(startInput.value);
        const endValue = parseInt(endInput.value);

        if (isNaN(startValue) || isNaN(endValue) || startValue > endValue) {
            alert("Please enter valid numbers with the start value less than or equal to the end value.");
            return;
        }

        // Generate table rows
        for (let i = startValue; i <= endValue; i++) {
            const row = document.createElement("tr");

            const numberCell = document.createElement("td");
            numberCell.textContent = i.toString();
            row.appendChild(numberCell);

            const squareCell = document.createElement("td");
            squareCell.textContent = (i * i).toString();
            row.appendChild(squareCell);

            tableBody.appendChild(row);
        }
    });
});
