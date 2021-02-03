
const form = document.getElementById('main-form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    let el = document.querySelectorAll('[data-reqired]');
    let subRadio = document.querySelectorAll('.required-sub-radio');
    let subCommnts = document.querySelectorAll('.required-comment');
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
   /* Sub-radio validation */
    for (let i = 0; i < subRadio.length; i++) {
        if (subRadio[i].tagName === 'INPUT') {
            let name = subRadio[i].getAttribute('data-name');
            if (document.querySelectorAll('[data-name=' + name + ']:checked').length === 0) {
                erroreArrayElements.push(subRadio[i]);
                $(subRadio[i]).on('click', function () {
                    $(this).parents('.sub-answer-wrapper').find('.error').hide();
                });
                $(subRadio[i]).parents('.sub-answer-wrapper').find('.error').fadeIn();
            }
        }
    }

    for (let i = 0; i < subCommnts.length; i++){
        let val = subCommnts[i].value;
        console.log(val.length);
        if(val.length < 1){
            erroreArrayElements.push(subCommnts[i]);
            $(subCommnts[i]).on('click', function () {
                $(this).parents('.comment-box').find('.sub-comment-error').hide();
            });
            $(subCommnts[i]).parents('.comment-box').find('.sub-comment-error').fadeIn();
        }
    }

    if (erroreArrayElements.length == 0) {
        form.submit();
    }
});