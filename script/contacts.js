
let onlyNumbers = document.querySelectorAll('.only-numbers');
for (let i = 0; i < onlyNumbers.length; i++) {
    onlyNumbers[i].onkeypress = (e) => {
        if (e.keyCode < 48 || e.keyCode > 57) {
            return false;
        }
    };
}

const form = document.getElementById('contacts-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let el = document.querySelectorAll('[data-reqired]');
    let erroreArrayElemnts = [];
    for (var i = 0; i < el.length; i++) {
        if (el[i].value === '') {
            $(el[i]).parents('.contact-box').find('.data-error').show();
            $(el[i]).parents('.contact-box').find('.data-error').text('* Поле обязательно к заполнению');
            erroreArrayElemnts.push(el[i]);
        }

        $(el[i]).on('focus', function () {
            $(this).parents('.contact-box').find('.data-error').hide();
        });

        // if ($('#phone').val().length < 16 && $('#phone').val() !== '') {
        //     $('#phone').parents('.contact-box').find('.data-error').show();
        //     $('#phone').parents('.contact-box').find('.data-error').text('Пожалуйста, проверьте корректность заполнения поля "Телефон"');
        //     erroreArrayElemnts.push(el[i]);
        // }
    }
    if (!ValidateEmail($("#email").val())) {
        erroreArrayElemnts.push('invalid_email');
        if($("#email").val() === ''){
            $('#email').parents('.contact-box').find('.invalid_email').text('* Поле обязательно к заполнению');
            $('#email').parents('.contact-box').find('.invalid_email').show();
        }else {
            $('#email').parents('.contact-box').find('.invalid_email').text('* Неправильный электронный адрес');
            $('#email').parents('.contact-box').find('.invalid_email').show();
        }
    }
    if (erroreArrayElemnts.length == 0) {
        form.submit();
    }

});
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
}