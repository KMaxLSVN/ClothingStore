$(function () {
//---Initializing Variables---
    let elem = $('.form'),
        name = $('.form-control[name="name"]'),
        email = $('.form-control[name="email"]'),
        re_name = /^[а-яА-ЯёЁa-zA-Z]{2,}$/,
        re_email = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
//---Validation inputs---
    name.on('keyup change', function () {
        if(!re_name.test(name.val())){
            name.addClass('invalid').removeClass('valid');
        } else{
            name.addClass('valid').removeClass('invalid');
        }
    });
    email.on('keyup change', function () {
        if(!re_email.test(email.val())){
            email.addClass('invalid').removeClass('valid');
        } else{
            email.addClass('valid').removeClass('invalid');
        }
    });
//Assembly of the Form
    elem.submit(function () {
        console.log($('.is-invalid'));
        if ($('.is-invalid').length) return false;
        send($(this));
    });

});

function send(form) {
    let data = $(form).serialize(),
        current = $(form);
    $.ajax({
        type: "POST",
        url: "",
        data: data,
        success: function(msg){
            alert("Форма отправлена");
            current[0].reset();
            $('.valid, .error', current).removeClass('valid').removeClass('error');
        }
    });
}