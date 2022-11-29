let rangeEl = document.querySelectorAll('.input-el');
let r3 = document.getElementById('exponentialslider3');

function rangeDefaultState(rangeEl) {
    // console.log(rangeEl)
    for (let i = 0; i < rangeEl.length; i++) {
        $((rangeEl)[i]).parents('.range-container').find('.ticks').css({
            'background': '#444444'
        });
        $((rangeEl)[i]).parents('.range-container').find('.range-value').css({
            'transform': 'translateX(-2%)',
            'left': '0'
        });
        // console.log($((rangeEl)[i]).parents('.range-container').find('.points-box'))
        $((rangeEl)[i]).parents('.range-container').find('.points-box').css('opacity', '0');
        $((rangeEl)[i]).parents('.range-container').find('.range-value').css('background', '#E0E0E0');
        $((rangeEl)[i]).val('0.1');
        $((rangeEl)[i]).attr('step', '0.1');
        $((rangeEl)[i]).attr('data-reqired-item', '1');
    }
}

document.addEventListener("load", rangeDefaultState(rangeEl));

let surveyWidth = $('.survey-container').width();
let url = 'url(' + $('.range-curve').prop('src') + ')';


// Position of span that shows range value and tick curve position
const tickContainer = document.querySelector('#range-wrapp-1');
const range = document.getElementById('exponentialslider');
const rangeV = document.getElementById('rangeValue');
let rangeChanging = 0;


const setValue = () => {
    // Span position and inner value
    let newValue = Math.round((range.value - range.min) * 10 / (range.max - range.min));
    const newPosition = newValue;
    rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    $('#points-box').text(newValue);
    $('#points-box').css('opacity', 1);
    $('#rangeValue').css('background', '#E44256');
    $('.range-error').hide();


    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
    $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', '#444444');


    if (newValue >= 0.2 && newValue < 1) {
        rangeChanging = 1;
        $(range).attr('step', '1');
        newValue = 0;
        $('#rangeValue').css('transform', 'translateX(5px)');
        $('#points-box').css('opacity', '1');
        $('#points-box').text(newValue);
        // $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    }

    if (newValue == 0) {
        $('#rangeValue').css('transform', 'translateX(5px)');
        $('#points-box').css({
            'transform': 'translateX(21px)',

        });
    }
    if (newValue == 1) {
        $('#rangeValue').css('transform', 'translateX(-30%)');
        $('#points-box').css({
            'transform': 'translateX(5px)',

        });
    }
    if (newValue == 2) {
        $('#rangeValue').css('transform', 'translateX(-55%)');
        $('#points-box').css({
            'transform': 'translateX(-5px)',

        });
    }
    if (newValue == 3) {
        $('#rangeValue').css('transform', 'translateX(-61%)');
        $('#points-box').css({
            'transform': 'translateX(-10px)',
        });
    }
    if (newValue == 4) {
        $('#rangeValue').css('transform', 'translateX(-63%)');
        $('#points-box').css({
            'transform': 'translateX(-13px)',
        });
    }
    if (newValue == 5) {
        $('#rangeValue').css('transform', 'translateX(-68%)');
        $('#points-box').css({
            'transform': 'translateX(-13px)',
        });
    }
    if (newValue == 6) {
        $('#rangeValue').css('transform', 'translateX(-71%)');
        $('#points-box').css({
            'transform': 'translateX(-15px)',
        });
    }
    if (newValue == 7) {
        $('#rangeValue').css('transform', 'translateX(-72%)');
        $('#points-box').css({
            'transform': 'translateX(-14px)',
        });
    }
    if (newValue == 8) {
        $('#rangeValue').css('transform', 'translateX(-79%)');
        $('#points-box').css({
            'transform': 'translateX(-19px)',
        });
    }
    if (newValue == 9) {
        $('#rangeValue').css('transform', 'translateX(-80%)');
        $('#points-box').css({
            'transform': 'translateX(-18px)',
        });
    }
    if (newValue == 10) {
        $('#rangeValue').css('transform', 'translateX(-116%)');
        $('#points-box').css({
            'transform': 'translateX(-39px)',
        });
        if (surveyWidth > 420) {
            $('#rangeValue').css('transform', 'translateX(-89%)');
        }
    }
};

// Initialize setValue onload and oninput

range.addEventListener('input', setValue);

$(range).on('change', function () {

    /*$($('#exponentialslider2')).parents('.range-container').find('.points-box').css('opacity', '0');
    $($('#exponentialslider2')).parents('.range-container').find('.range-value').css('background', '#E0E0E0');
    $($('#exponentialslider2')).val('0.1');
    $($('#exponentialslider2')).attr('step', '0.1');
    $($('#exponentialslider2')).attr('data-reqired-item', '1');
    $(this).parents('.survey-content').find('.answer-item').prop('checked', false);
    $('.q-2-wrapper').hide();
    $('.q-2-wrapper .answer-wrapper').hide();
    $('.q-2-wrapper .answer-wrapper .answer-item').prop('checked', false);*/

    $('.hidden-content').fadeIn();
    $(range).removeClass('required-range');
    rangeChanging = 1;
    $(this).parents('.range-wrap').find('.ticks').css('background', '#444444');
    $('.start-btn-box').fadeIn();
    let answerItems = $(this).parents('.survey-content').find('.answer-item');
    if (rangeChanging === 1) {
        $('.q-2-wrapper').fadeIn();
        let haightSum = $('.header').innerHeight() + $('.q-1-wrapper').innerHeight();
        $('.main-container').css('min-height', `calc(${haightSum + 60}px + 100vh)`);

        /*let nextPosition = $('.q-2-wrapper').offset().top;
        // console.log(nextPosition);
        $('html, body').animate({
            scrollTop: nextPosition
        }, 500);*/

        // Span position and inner value

        let newValue = Math.round(((range.value - range.min) * 10 / (range.max - range.min) * 1));
        const newPosition = newValue;
        rangeV.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
        $('#points-box').text(newValue);


        // Tick curve position
        let newP = (newValue / 10) * 100;
        newP = newP.toString();

        $('#points-box').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
        $(range).val(newValue);
        $('#points-box').css('opacity', '1');
        $(range).attr('step', '1');

        if (newValue == 0) {
            $('#rangeValue').css('transform', 'translateX(5px)');
            $('#points-box').css({
                'transform': 'translateX(21px)',

            });
        }
        if (newValue == 1) {
            $('#rangeValue').css('transform', 'translateX(-30%)');
            $('#points-box').css({
                'transform': 'translateX(5px)',

            });
        }
        if (newValue == 2) {
            $('#rangeValue').css('transform', 'translateX(-55%)');
            $('#points-box').css({
                'transform': 'translateX(-5px)',

            });
        }
        if (newValue == 3) {
            $('#rangeValue').css('transform', 'translateX(-61%)');
            $('#points-box').css({
                'transform': 'translateX(-10px)',
            });
        }
        if (newValue == 4) {
            $('#rangeValue').css('transform', 'translateX(-63%)');
            $('#points-box').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 5) {
            $('#rangeValue').css('transform', 'translateX(-68%)');
            $('#points-box').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 6) {
            $('#rangeValue').css('transform', 'translateX(-71%)');
            $('#points-box').css({
                'transform': 'translateX(-15px)',
            });
        }
        if (newValue <= 6) {
            let answerSituation = answersStateObj.situation1;
            for (let i = 0; i < answerItems.length; i++) {
                $(answerItems[i]).val(answerSituation[i].text);
                $(answerItems[i]).parents('.answer-box').find('.digit span').text(answerSituation[i].text);
            }
            $(this).parents('.survey-content').find('.answer-wrapper').fadeIn();
            $(this).parents('.survey-content').find('.answer-wrapper').find('.answer-item').attr('data-reqired', '');
            $('.q-1-wrapper').fadeIn();
            //$('.btn-wrapper').hide();
            $('.main-container').css('min-height', 'fit-content');
            //$('.q-2-wrapper').hide();
        } else {
            $(this).parents('.survey-content').find('.answer-wrapper').find('.answer-item').removeAttr('data-reqired', '');
            $(this).parents('.survey-content').find('.textarea-block').find('textarea').removeAttr('data-reqired', '');
            $(this).parents('.survey-content').find('.answer-wrapper').hide();
            $('.q-1-wrapper').fadeIn();
            $('.q-2-wrapper').fadeIn();
            let haightSum = $('.header').innerHeight() + $('.q-1-wrapper').innerHeight() + 100/*$('.start-block').innerHeight()*/;
            $('.main-container').css('min-height', `calc(${haightSum + 85}px + 100vh)`);
            //let nextPosition = $('.q-1-wrapper').offset().top;
            // console.log(nextPosition);
            /*$('html, body').animate({
                scrollTop: nextPosition
            }, 500);*/
        }
        if (newValue == 7) {
            $('#rangeValue').css('transform', 'translateX(-72%)');
            $('#points-box').css({
                'transform': 'translateX(-14px)',
            });
        }
        if (newValue == 8) {
            $('#rangeValue').css('transform', 'translateX(-79%)');
            $('#points-box').css({
                'transform': 'translateX(-19px)',
            });
        }
        if (newValue == 9) {
            $('#rangeValue').css('transform', 'translateX(-80%)');
            $('#points-box').css({
                'transform': 'translateX(-18px)',
            });
            $('.emploer-title').text('Чего не хватило для максимальной оценки?');
        }
        if (newValue == 10) {
            $('#rangeValue').css('transform', 'translateX(-116%)');
            $('#points-box').css({
                'transform': 'translateX(-39px)',
            });
        }
    }
});


$(".q-1-wrapper .answer-item").on('change',function(){
    let answerItemShow = 0;
    let answerItemComment1Show = 0;
    $(".q-1-wrapper .answer-item").each(function(){
        if($(this).prop('checked') == true){
            answerItemShow = 1;
            if($(this).val() == 'Другое'){
                answerItemComment1Show = 1;
            }
        }
        if(answerItemShow == 0){
            $('.q-2-wrapper').hide()
        } else {
            $('.q-2-wrapper').fadeIn()
        }
        if(answerItemComment1Show == 0){
            $('#comment-other1').hide()
            $('#comment-other1-text').val('')
            $(this).parents('.survey-content').find('.textarea-block').find('textarea').removeAttr('data-reqired', '');
        } else {
            $('#comment-other1').fadeIn()
            $(this).parents('.survey-content').find('.textarea-block').find('textarea').attr('data-reqired', '');
        }
    })
})

answersStateObj = {
    situation1: [{
        text: 'Медленное обслуживание'
    }, {
        text: 'Нежелание менеджера помочь'
    }, {
        text: 'Менеджер не знает продукт/процесс'
    }, {
        text: 'Грубость менеджера'
    }, {
        text: 'Другое'
    }],
    situation2: [{
        text: ''
    }, {
        text: ''
    }, {
        text: ''
    }, {
        text: ''
    }, {
        text: ''
    }]
    // situation2: [{
    //     text: 'Удобный сайт / или заполнение анкет'
    // }, {
    //     text: 'Быстрая  доставка карты'
    // }, {
    //     text: 'Легкое оформление карты - не требуется много документов'
    // }, {
    //     text: 'Быстрая активация карты'
    // }]
}


// Position of span that shows range value and tick curve position
const tickContainer2 = document.querySelector('#range-wrapp-2');
const range2 = document.getElementById('exponentialslider2');
const rangeV2 = document.getElementById('rangeValue2');
let rangeChanging2 = 0;


const setValue2 = () => {
    // Span position and inner value
    let newValue = Math.round((range2.value - range2.min) * 10 / (range2.max - range2.min));
    const newPosition = newValue;
    rangeV2.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
    if(newValue == 0){
        $('#points-box2').text(1);
        $('#exponentialslider2').val(1)
    }
    if(newValue == 3 || newValue >= 1.5){
        $('#points-box2').text(2);
        $('#exponentialslider2').val(2)
    }
    if(newValue == 5){
        $('#points-box2').text(3);
        $('#exponentialslider2').val(3)
    }
    if(newValue == 8){
        $('#points-box2').text(4);
        $('#exponentialslider2').val(4)
    }
    if(newValue == 10){
        $('#points-box2').text(5);
        $('#exponentialslider2').val(5)
    }
    //$('#points-box2').text(newValue);

    $('#rangeValue2').css('background', '#ED712E');
    $('.range-error').hide();
    clearTimeout(timeOut);

    // Tick curve position
    let newP = (newValue / 10) * 100;
    newP = newP.toString();
    $('#points-box2').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
    $('#tickContainer2').parents('.range-wrap').find('.ticks').css('background', '#444444');

    $('#points-box2').css('opacity', '1');

    if (newValue >= 0.2 && newValue < 1) {
        rangeChanging2 = 1;
        $(range2).attr('step', '1');
        newValue = 0;
        $('#rangeValue2').css('transform', 'translateX(5px)');
        $('#points-box2').css('opacity', '1');
        $('#points-box2').text(newValue);
        // $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
    }

    if (newValue == 0) {
        $('#rangeValue2').css('transform', 'translateX(5px)');
        $('#points-box2').css({
            'transform': 'translateX(21px)',

        });
    }
    if (newValue == 1) {
        $('#rangeValue2').css('transform', 'translateX(-30%)');
        $('#points-box2').css({
            'transform': 'translateX(5px)',

        });
    }
    if (newValue == 2) {
        $('#rangeValue2').css('transform', 'translateX(-55%)');
        $('#points-box2').css({
            'transform': 'translateX(-5px)',

        });
    }
    if (newValue == 3) {
        $('#rangeValue2').css('transform', 'translateX(-61%)');
        $('#points-box2').css({
            'transform': 'translateX(-10px)',
        });
    }
    if (newValue == 4) {
        $('#rangeValue2').css('transform', 'translateX(-63%)');
        $('#points-box2').css({
            'transform': 'translateX(-13px)',
        });
    }
    if (newValue == 5) {
        $('#rangeValue2').css('transform', 'translateX(-68%)');
        $('#points-box2').css({
            'transform': 'translateX(-13px)',
        });
    }
    if (newValue == 6) {
        $('#rangeValue2').css('transform', 'translateX(-71%)');
        $('#points-box2').css({
            'transform': 'translateX(-15px)',
        });
    }
    if (newValue == 7) {
        $('#rangeValue2').css('transform', 'translateX(-72%)');
        $('#points-box2').css({
            'transform': 'translateX(-14px)',
        });
    }
    if (newValue == 8) {
        $('#rangeValue2').css('transform', 'translateX(-79%)');
        $('#points-box2').css({
            'transform': 'translateX(-19px)',
        });
    }
    if (newValue == 9) {
        $('#rangeValue2').css('transform', 'translateX(-80%)');
        $('#points-box2').css({
            'transform': 'translateX(-18px)',
        });
    }
    if (newValue == 10) {
        $('#rangeValue2').css('transform', 'translateX(-116%)');
        $('#points-box2').css({
            'transform': 'translateX(-39px)',
        });
        if (surveyWidth > 420) {
            $('#rangeValue2').css('transform', 'translateX(-89%)');
        }
    }
    // if (newValue == 0.1) {
    //     $(pointMarks).removeClass('active-mark');
    //     $(pointMarks[0]).addClass('active-mark');
    //     $('#rangeValue').css('transform', 'translateX(-50%)');
    //     $('#points-box').css({
    //         'transform': 'translateX(-6px)',

    //     });
    // }
};

// Initialize setValue onload and oninput

range2.addEventListener('input', setValue2);

$(range2).on('change', function () {


    $('#exponentialslider3').parents('.range-container').find('.ticks').css({
        'background': '#444444'
    });
    $($('#exponentialslider3')).parents('.range-container').find('.range-value').css({
        'transform': 'translateX(-2%)',
        'left': '0'
    });
    $($('#exponentialslider3')).parents('.range-container').find('.points-box').css('opacity', '0');
    $($('#exponentialslider3')).parents('.range-container').find('.range-value').css('background', '#E0E0E0');
    $($('#exponentialslider3')).val('0.1');
    $($('#exponentialslider3')).attr('step', '0.1');
    $($('#exponentialslider3')).attr('data-reqired-item', '1');


    $(this).parents('.survey-content').find('.answer-item').prop('checked', false);
    $('.q-3-wrapper .answer-wrapper').hide();
    $('.q-3-wrapper .answer-wrapper .answer-item').prop('checked', false);
    $(range2).removeClass('required-range');
    rangeChanging2 = 1;
    $(this).parents('.range-wrap').find('.ticks').css('background', '#444444');
    $('.start-btn-box').fadeIn();
    // let answerItems = document.querySelectorAll('.answer-item');
    let answerItems = $(this).parents('.survey-content').find('.answer-item');
    if (rangeChanging2 === 1) {
        $('.q-box-1').fadeIn();

        // Span position and inner value

        let newValue = Math.round(((range2.value - range2.min) * 10 / (range2.max - range2.min) * 1));
        const newPosition = newValue;
        rangeV2.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
        if(newValue == 0){
            $('#points-box2').text(1);
            $('#exponentialslider2').val(1)
        }
        if(newValue == 3 || newValue >= 1.5){
            $('#points-box2').text(2);
            $('#exponentialslider2').val(2)
        }
        if(newValue == 5){
            $('#points-box2').text(3);
            $('#exponentialslider2').val(3)
        }
        if(newValue == 8){
            $('#points-box2').text(4);
            $('#exponentialslider2').val(4)
        }
        if(newValue == 10){
            $('#points-box2').text(5);
            $('#exponentialslider2').val(5)
        }
        //$('#points-box2').text(newValue);

        //console.log($('#exponentialslider2').val())

        // Tick curve position
        let newP = (newValue / 10) * 100;
        newP = newP.toString();

        $('#points-box2').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
        $(range2).val(newValue);
        $('#points-box2').css('opacity', '1');
        $(range2).attr('step', '1');

        if (newValue == 0) {
            $('#rangeValue2').css('transform', 'translateX(5px)');
            $('#points-box2').css({
                'transform': 'translateX(21px)',

            });
        }
        if (newValue == 1) {
            $('#rangeValue2').css('transform', 'translateX(-30%)');
            $('#points-box2').css({
                'transform': 'translateX(5px)',

            });
        }
        if (newValue == 2) {
            $('#rangeValue2').css('transform', 'translateX(-55%)');
            $('#points-box2').css({
                'transform': 'translateX(-5px)',

            });
        }
        if (newValue == 3) {
            $('#rangeValue2').css('transform', 'translateX(-61%)');
            $('#points-box2').css({
                'transform': 'translateX(-10px)',
            });
        }
        if (newValue == 4) {
            $('#rangeValue2').css('transform', 'translateX(-63%)');
            $('#points-box2').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 5) {
            $('#rangeValue2').css('transform', 'translateX(-68%)');
            $('#points-box2').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 6) {
            $('#rangeValue2').css('transform', 'translateX(-71%)');
            $('#points-box2').css({
                'transform': 'translateX(-15px)',
            });
        }
        if (newValue == 7) {
            $('#rangeValue2').css('transform', 'translateX(-72%)');
            $('#points-box2').css({
                'transform': 'translateX(-14px)',
            });
        }
        if (newValue == 8) {
            $('#rangeValue2').css('transform', 'translateX(-79%)');
            $('#points-box2').css({
                'transform': 'translateX(-19px)',
            });
        }
        if (newValue == 9) {
            $('#rangeValue2').css('transform', 'translateX(-80%)');
            $('#points-box2').css({
                'transform': 'translateX(-18px)',
            });
        }
        if (newValue == 10) {
            $('#rangeValue2').css('transform', 'translateX(-116%)');
            $('#points-box2').css({
                'transform': 'translateX(-39px)',
            });
            let answerSituation = answersStateObj2.situation2;
            /*for (let i = 0; i < answerItems.length; i++) {
                $(answerItems[i]).val(answerSituation[i].text);
                $(answerItems[i]).parents('.answer-box').find('.digit span').text(answerSituation[i].text);

            }*/
        }
    }
});

//только 5 баллов
$('#points-box2').on('DOMSubtreeModified', function(){
  $('#exponentialslider2').val($(this).text())
  console.log($('#exponentialslider2').val())
});

$(".q-2-wrapper .answer-item").on('change',function(){
    let answerItemShow = 0;
    let answerItemComment1Show = 0;
    $(".q-2-wrapper .answer-item").each(function(){
        if($(this).prop('checked') == true){
            answerItemShow = 1;
            if($(this).val() == 'Другое'){
                answerItemComment1Show = 1;
            }
        }
        if(answerItemShow == 0){
            $('.q-3-wrapper').hide()
        } else {
            $('.q-3-wrapper').fadeIn()
        }
        if(answerItemComment1Show == 0){
            $('#comment-other2').hide()
            $('#comment-other2-text').val('')
            $(this).parents('.survey-content').find('.textarea-block').find('textarea').removeAttr('data-reqired', '');
        } else {
            $('#comment-other2').fadeIn()
            $(this).parents('.survey-content').find('.textarea-block').find('textarea').attr('data-reqired', '');
        }
    })
})

answersStateObj2 = {
    situation1: [{
        text: 'Долгое оформление '
    }, {
        text: 'Много документов '
    }, {
        text: 'Сбои в программе '
    }, {
        text: 'Другое'
    }],
    situation2: [{
        text: ''
    }, {
        text: ''
    }, {
        text: ''
    }, {
        text: ''
    }]
    // situation2: [{
    //     text: 'Опрятный внешний вид'
    // }, {
    //     text: 'Культурная речь'
    // }, {
    //     text: 'Ответил на все поставленные вопросы'
    // }, {
    //     text: 'Курьер приехал во время'
    // }]
}


if (issetRage(window['#range-wrapp-3'])) {
    // Position of span that shows range value and tick curve position
    const tickContainer3 = document.querySelector('#range-wrapp-3');
    const range3 = document.getElementById('exponentialslider3');
    const rangeV3 = document.getElementById('rangeValue3');
    let rangeChanging3 = 0;

    const setValue3 = () => {
        // Span position and inner value
        let newValue = Math.round((range3.value - range3.min) * 10 / (range3.max - range3.min));
        const newPosition = newValue;
        rangeV3.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
        $('#points-box3').text(newValue);
        $('#rangeValue3').css('background', '#E9041E');
        $('.range-error').hide();


        // Tick curve position
        let newP = (newValue / 10) * 100;
        newP = newP.toString();
        $('#points-box3').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
        $('#tickContainer3').parents('.range-wrap').find('.ticks').css('background', '#444444');


        if (newValue >= 0.2 && newValue < 1) {
            rangeChanging3 = 1;
            $(range3).attr('step', '1');
            newValue = 0;
            $('#rangeValue3').css('transform', 'translateX(5px)');
            $('#points-box3').css('opacity', '1');
            $('#points-box3').text(newValue);
            // $('#tickContainer').parents('.range-wrap').find('.ticks').css('background', 'linear-gradient(125deg, #BA1417 0%, #CD0800 9.38%, #F45800 18.75%, #FD9113 27.6%, #FFB800 38.02%, #D7E317 48.44%, #D1E01F 60.94%, #EAF65E 71.88%, #00D086 82.29%, #00AB23 91.15%, #056719 100%)');
        }

        if (newValue == 0) {
            $('#rangeValue3').css('transform', 'translateX(5px)');
            $('#points-box3').css({
                'transform': 'translateX(21px)',

            });
        }
        if (newValue == 1) {
            $('#rangeValue3').css('transform', 'translateX(-30%)');
            $('#points-box3').css({
                'transform': 'translateX(5px)',

            });
        }
        if (newValue == 2) {
            $('#rangeValue3').css('transform', 'translateX(-55%)');
            $('#points-box3').css({
                'transform': 'translateX(-5px)',

            });
        }
        if (newValue == 3) {
            $('#rangeValue3').css('transform', 'translateX(-61%)');
            $('#points-box3').css({
                'transform': 'translateX(-10px)',
            });
        }
        if (newValue == 4) {
            $('#rangeValue3').css('transform', 'translateX(-63%)');
            $('#points-box3').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 5) {
            $('#rangeValue3').css('transform', 'translateX(-68%)');
            $('#points-box3').css({
                'transform': 'translateX(-13px)',
            });
        }
        if (newValue == 6) {
            $('#rangeValue3').css('transform', 'translateX(-71%)');
            $('#points-box3').css({
                'transform': 'translateX(-15px)',
            });
        }
        if (newValue == 7) {
            $('#rangeValue3').css('transform', 'translateX(-72%)');
            $('#points-box3').css({
                'transform': 'translateX(-14px)',
            });
        }
        if (newValue == 8) {
            $('#rangeValue3').css('transform', 'translateX(-79%)');
            $('#points-box3').css({
                'transform': 'translateX(-19px)',
            });
        }
        if (newValue == 9) {
            $('#rangeValue3').css('transform', 'translateX(-80%)');
            $('#points-box3').css({
                'transform': 'translateX(-18px)',
            });
        }
        if (newValue == 10) {
            $('#rangeValue3').css('transform', 'translateX(-116%)');
            $('#points-box3').css({
                'transform': 'translateX(-39px)',
            });
            if (surveyWidth > 420) {
                $('#rangeValue3').css('transform', 'translateX(-89%)');
            }
        }
        // if (newValue == 0.1) {
        //     $(pointMarks).removeClass('active-mark');
        //     $(pointMarks[0]).addClass('active-mark');
        //     $('#rangeValue').css('transform', 'translateX(-50%)');
        //     $('#points-box').css({
        //         'transform': 'translateX(-6px)',

        //     });
        // }
    };

    // Initialize setValue onload and oninput

    range3.addEventListener('input', setValue3);

    $(range3).on('change', function () {
        $(this).parents('.survey-content').find('.answer-item').prop('checked', false);
        $(range3).removeClass('required-range');
        rangeChanging3 = 1;
        $(this).parents('.range-wrap').find('.ticks').css('background', '#444444');
        $('.start-btn-box').fadeIn();
        // let answerItems = document.querySelectorAll('.answer-item');
        let answerItems = $(this).parents('.survey-content').find('.answer-item');
        if (rangeChanging3 === 1) {
            $('.q-box-1').fadeIn();

            // Span position and inner value

            let newValue = Math.round(((range3.value - range3.min) * 10 / (range3.max - range3.min) * 1));
            const newPosition = newValue;
            rangeV3.style.left = `calc(${(newValue / 10) * 100}% + (${newPosition}px))`;
            $('#points-box3').text(newValue);


            // Tick curve position
            let newP = (newValue / 10) * 100;
            newP = newP.toString();

            $('#points-box3').css('left', `calc(${(newValue / 10) * 100}% + (${newPosition}px) )`);
            $(range3).val(newValue);
            $('#points-box3').css('opacity', '1');
            $(range3).attr('step', '1');

            if (newValue == 0) {
                $('#rangeValue3').css('transform', 'translateX(5px)');
                $('#points-box3').css({
                    'transform': 'translateX(21px)',

                });
            }
            if (newValue == 1) {
                $('#rangeValue3').css('transform', 'translateX(-30%)');
                $('#points-box3').css({
                    'transform': 'translateX(5px)',

                });
            }
            if (newValue == 2) {
                $('#rangeValue3').css('transform', 'translateX(-55%)');
                $('#points-box3').css({
                    'transform': 'translateX(-5px)',

                });
            }
            if (newValue == 3) {
                $('#rangeValue3').css('transform', 'translateX(-61%)');
                $('#points-box3').css({
                    'transform': 'translateX(-10px)',
                });
            }
            if (newValue == 4) {
                $('#rangeValue3').css('transform', 'translateX(-63%)');
                $('#points-box3').css({
                    'transform': 'translateX(-13px)',
                });
            }
            if (newValue == 5) {
                $('#rangeValue3').css('transform', 'translateX(-68%)');
                $('#points-box3').css({
                    'transform': 'translateX(-13px)',
                });
            }
            if (newValue == 6) {
                $('#rangeValue3').css('transform', 'translateX(-71%)');
                $('#points-box3').css({
                    'transform': 'translateX(-15px)',
                });
            }
            if (newValue == 7) {
                $('#rangeValue3').css('transform', 'translateX(-72%)');
                $('#points-box3').css({
                    'transform': 'translateX(-14px)',
                });
            }
            if (newValue == 8) {
                $('#rangeValue3').css('transform', 'translateX(-79%)');
                $('#points-box3').css({
                    'transform': 'translateX(-19px)',
                });
            }
            if (newValue == 9) {
                $('#rangeValue3').css('transform', 'translateX(-80%)');
                $('#points-box3').css({
                    'transform': 'translateX(-18px)',
                });
            }
            if (newValue == 10) {
                $('#rangeValue3').css('transform', 'translateX(-116%)');
                $('#points-box3').css({
                    'transform': 'translateX(-39px)',
                });
                let answerSituation = answersStateObj2.situation2;
                /*for (let i = 0; i < answerItems.length; i++) {
                    $(answerItems[i]).val(answerSituation[i].text);
                    $(answerItems[i]).parents('.answer-box').find('.digit span').text(answerSituation[i].text);

                }*/
            }

            if (newValue <= 6) {
                let answerSituation = answersStateObj2.situation1;
                for (let i = 0; i < answerItems.length; i++) {
                    $(answerItems[i]).val(answerSituation[i].text);
                    $(answerItems[i]).parents('.answer-box').find('.digit span').text(answerSituation[i].text);
                }
                $(this).parents('.survey-content').find('.answer-wrapper').fadeIn();
                $(this).parents('.survey-content').find('.answer-wrapper').find('.answer-item').attr('data-reqired', '');
                //$('.btn-wrapper').hide();
                $('.btn-wrapper').css({
                    'position': 'relative',
                    'margin-top': '90px',
                    'left': '0',
                    'right': '0',
                    'bottom': '0'
                })
                $('.next-btn').css({
                    'position': 'relative'
                });
            } else {
                $(this).parents('.survey-content').find('.answer-wrapper').hide();
                $(this).parents('.survey-content').find('.answer-wrapper').find('.answer-item').removeAttr('data-reqired', '');
                $(this).parents('.survey-content').find('.textarea-block').find('textarea').removeAttr('data-reqired', '');
                //$('.btn-wrapper').fadeIn();
                $('.btn-wrapper').css({
                    'height': '15vh',
                    'position': 'absolute',
                    'left': '20px',
                    'right': '20px',
                    'bottom': '60px'
                });
                $('.next-btn').css({
                    'position': 'absolute',
                    'bottom': '0'
                });
            }
        }
    });
    $(".q-3-wrapper .answer-item").on('change',function(){
        let answerItemShow = 0;
        let answerItemComment1Show = 0;
        $(".q-3-wrapper .answer-item").each(function(){
            if($(this).prop('checked') == true){
                answerItemShow = 1;
                if($(this).val() == 'Другое'){
                    answerItemComment1Show = 1;
                }
            }
            if(answerItemShow == 0){
                $('.q-4-wrapper').hide()
            } else {
                $('.q-4-wrapper').fadeIn()
            }
            if(answerItemComment1Show == 0){
                $('#comment-other3').hide()
                $('#comment-other3-text').val('')
                $(this).parents('.survey-content').find('.textarea-block').find('textarea').removeAttr('data-reqired', '');
            } else {
                $('#comment-other3').fadeIn()
                $(this).parents('.survey-content').find('.textarea-block').find('textarea').attr('data-reqired', '');
            }
        })
    })


    $('#comment-other3-text').on('click',function(){
    	$('.q-4-wrapper').fadeIn()
    	$('.q-4-wrapper .answer-wrapper').fadeIn()
    	
    })
}
function issetRage(range) {
    return typeof range !== 'undefined';
}





