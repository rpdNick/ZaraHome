
const form = document.getElementById('main-form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    let el = document.querySelectorAll('[data-reqired]');
    let erroreArrayElements = [];
    for (let i = 0; i < el.length; i++) {
        if (el[i].tagName === 'INPUT') {
            let name = el[i].getAttribute('data-name');
            if (document.querySelectorAll('[data-name=' + name + ']:checked').length === 0) {
                erroreArrayElements.push(el[i]);
                $(el[i]).on('click', function () {
                    $(this).parents('.answers-wrapper').find('.error').hide();
                });
                $(el[i]).parents('.answers-wrapper').find('.error').fadeIn();
            }
        }
    }
    if (erroreArrayElements.length == 0) {
        form.submit();
    }
});