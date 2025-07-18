$('#showpass').click(function() {
    var inputtype = $('#password').attr('type');
    //   alert(inputtype);
    if (inputtype == 'password') {
        $('#password').attr('type', 'text');
        $('#eyeicon').removeClass('fa-eye-slash');
        $('#eyeicon').addClass('fa-eye');
    } else if (inputtype == 'text') {
        $('#password').attr('type', 'password');
        $('#eyeicon').removeClass('fa-eye');
        $('#eyeicon').addClass('fa-eye-slash');
    }
});

$('#showpass2').click(function() {
var inputtype2 = $('#password2').attr('type');
//   alert(inputtype2);
if (inputtype2 == 'password') {
    $('#password2').attr('type', 'text');
    $('#eyeicon2').removeClass('fa-eye-slash');
    $('#eyeicon2').addClass('fa-eye');
} else if (inputtype2 == 'text') {
    $('#password2').attr('type', 'password');
    $('#eyeicon2').removeClass('fa-eye');
    $('#eyeicon2').addClass('fa-eye-slash');
}
});