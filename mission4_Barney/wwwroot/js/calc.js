
$(document).ready(function () {
    console.log("Document ready."); // Check if document ready event is firing

    $('#calculate-btn').click(function () {
        console.log("Button clicked."); // Check if button click event is firing

        var hours = parseFloat($('#hours').val());
        console.log("Hours:", hours); // Log the parsed hours value for debugging

        var hourlyRate = parseFloat($('#hourly-rate').val().replace('$', ''));
        console.log("Hourly rate:", hourlyRate); // Log the parsed hourly rate value for debugging

        // Validate input
        if (isNaN(hours) || hours < 0 || isNaN(hourlyRate) || hourlyRate < 0) {
            alert('Please enter valid positive numbers for hours and hourly rate.');
            return;
        }

        // Calculate total
        var total = hours * hourlyRate;
        $('#total').val('$' + total.toFixed(2));
        console.log("Total:", total); // Log the calculated total for debugging
    });
});
