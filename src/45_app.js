// gets a new object
var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    var loginGrtr = G$('John', 'Doe');

    // hide the login on the screen
    $('#logindiv').hide();

    // set language and log to console
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greetings', true).log();

});
