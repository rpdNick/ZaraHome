/*Answers branching*/
$('.nps-btn').on('change', function () {
    let val = $(this).val() * 1;
    $('.submit-wrapper').fadeIn();
    if(val < 7){
        $('.point_0-6').fadeIn();
        $('.point_9-10').hide();
        $('.point_7-8').hide();

        // $('.radio__option').removeAttr('data-req');
        // $('.optradio').attr('data-req', '');
        $('.radio__option').prop('checked', false);
    } else if (val > 6 && val < 9){
        $('.point_0-6').hide();
        $('.point_9-10').hide();
        $('.point_7-8').fadeIn();

        // $('.radio__option').attr('data-req', '');
        // $('.optradio').removeAttr('data-req', '');
        $('.optradio').prop('checked', false);
    } else if (val > 8){
        $('.point_0-6').hide();
        $('.point_9-10').fadeIn();
        $('.point_7-8').hide();
    }
});

/*Textarea placeholder settings*/
$('.comment-field').on("focus", function (){
    $(this).removeAttr("placeholder", "Прокомментируйте пожалуйста");
    $(this).parent().find('.comment-icon').fadeOut();
})
$('.comment-field').focusout(function (){
    $(this).attr("placeholder", "Прокомментируйте пожалуйста");
    $(this).parent().find('.comment-icon').fadeIn();
    if($(this).val().length > 0){
        $(this).parent().find('.comment-icon').hide();
    }
})