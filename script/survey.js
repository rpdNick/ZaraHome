/*Answers branching*/
$('.nps-btn').on('change', function () {
    let val = $(this).val() * 1;
    $('.submit-wrapper').fadeIn();
    if (val < 7){
        $('.point_0-6').fadeIn();
        $('.point_9-10').hide();
        $('.point_7-8').hide();
        $('.point_9-10 .radio__option').prop('checked', false);
        $('.point_7-8 .radio__option').prop('checked', false);
        let commentsGood = document.querySelectorAll('.point_9-10 .comment-field');
        let commentsNormal = document.querySelectorAll('.point_7-8 .comment-field');
        for(let i = 0; i < $(commentsGood).length; i++){
            commentsGood[i].value = '';
            $(commentsGood[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsGood[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for (let i = 0; i < $(commentsNormal).length; i++){
            commentsNormal[i].value = '';
            $(commentsNormal[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsNormal[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        console.log($('.main-radio-option').is(":checked"));
        if ($('.main-radio-option').is(":checked") === false) {
            $('.main-radio-option').parents().find($('.question-main-container .comment-main-container')).hide();
        }
    } else if (val > 6 && val < 9){
        $('.point_0-6').hide();
        $('.point_9-10').hide();
        $('.point_7-8').fadeIn();
        $('.point_9-10 .radio__option').prop('checked', false);
        $('.point_0-6 .radio__option').prop('checked', false);
        let commentsGood = document.querySelectorAll('.point_9-10 .comment-field');
        let commentsBad = document.querySelectorAll('.point_0-6 .comment-field');
        for(let i = 0; i < $(commentsGood).length; i++){
            commentsGood[i].value = '';
            $(commentsGood[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsGood[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for(let i = 0; i < $(commentsBad).length; i++){
            commentsBad[i].value = '';
            $(commentsBad[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsBad[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    } else if (val > 8){
        $('.point_0-6').hide();
        $('.point_9-10').fadeIn();
        $('.point_7-8').hide();
        $('.point_7-8 .radio__option').prop('checked', false);
        $('.point_0-6 .radio__option').prop('checked', false);
        let commentsNormal = document.querySelectorAll('.point_7-8 .comment-field');
        let commentsBad = document.querySelectorAll('.point_0-6 .comment-field');
        for(let i = 0; i < $(commentsNormal).length; i++){
            commentsNormal[i].value = '';
            $(commentsNormal[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsNormal[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
        for (let i = 0; i < $(commentsBad).length; i++){
            commentsBad[i].value = '';
            $(commentsBad[i]).parent().find('.label-txt').css({"top": "0px"});
            $(commentsBad[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    }
});

/* Show branch if radio was already checked*/
$(document).ready(function (){
    let val = $('.nps-btn:checked').val() * 1;
    let comments = document.querySelectorAll('.comment-field');
    for(let i = 0; i < comments.length; i++){
        let commentsVal = comments[i].value;
        if (commentsVal.length > 0){
            $(comments[i]).parent().find('.label-txt').css({"top": "-25px"});
            $(comments[i]).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
        } else {
            $(comments[i]).parent().find('.label-txt').css({"top": "0px"});
            $(comments[i]).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
        }
    }
    if ($('.nps-btn:checked').length > 0){
        $('.submit-wrapper').show();
        if(val < 7){
            $('.point_0-6').fadeIn();
            $('.point_9-10').hide();
            $('.point_7-8').hide();
        } else if (val > 6 && val < 9){
            $('.point_0-6').hide();
            $('.point_9-10').hide();
            $('.point_7-8').fadeIn();
        } else if (val > 8){
            $('.point_0-6').hide();
            $('.point_9-10').fadeIn();
            $('.point_7-8').hide();
        } else if (isNaN(val)){
            return false;
        }
    }
    if ($('.main-radio-option:checked').is(":checked") && $('.main-radio-option:checked').val() == 'Другое') {
        $('.main-radio-option:checked').parents().find($('.comment-main-container')).show();
    } else {
        $('.main-radio-option:checked').parents().find($('.comment-main-container')).hide();
    }
});

/*Show comments*/
$('.main-radio-option').on('change', function (){
    let val = $(this).val();
    if (val === 'Другое'){
        $(this).parents().find('.comment-main-container').slideDown();
    } else {
        $('.comment-label-wrapper .comment-field').val('');
        $(this).parents().find('.comment-main-container').slideUp();
    }
    /*Show and hide sub-questions*/
    console.log($(this).is(":checked"))
    if ($(this).is(":checked") === true){
        $('.sub-answer-wrapper').hide();
        $('.sub-radio-option').prop('checked', false);
        $(this).parents('.answer-array').find('.sub-answer-wrapper').fadeIn();
        // $(this).val();
    }
});

/*Textarea label settings*/
$('.comment-field').on("focus", function (){
    $(this).parent().find('.label-txt').css({"top": "-25px"});
    $(this).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
});
$('.comment-field').focusout(function (){
    $(this).parent().find('.label-txt').css({"top": "0px"});
    $(this).parent().find('.comment-icon').css({"left": "auto", "right": "0px", "top":"-5px"});
    if($(this).val().length > 0){
        $(this).parent().find('.label-txt').css({"top": "-25px"});
        $(this).parent().find('.comment-icon').css({"left": "103px", "right": "auto", "top":"-30px"});
    }
});



