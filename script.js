$(document).ready(function() {
    $('#hideButton').click(function() {
        $('#image').hide();
        $('#pageTitle').text('¡No tenemos ninguna imagen!');
    });

    $('#showButton').click(function() {
        $('#image').show();
        $('#pageTitle').text('¡Mirá la siguiente imagen!');
    });
});
