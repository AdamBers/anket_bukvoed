/** Radio validation */
let form = document.getElementById('main-form');
$('.send-button').on('click', function (e) {
    e.preventDefault();
    let el = document.querySelectorAll('[data-reqired]');
    let erroreArrayElemnts = [];

    for (let i = 0; i < el.length; i++) {
        if (el[i].tagName === 'INPUT') {
            /*let typeAttr = el[i].getAttribute('data-reqired');
            if(typeAttr === 'radio'){
                let name = el[i].getAttribute('data-name');
                let allItemRadio = $('[data-name=' + name + ']');
                $('[data-name=' + name + ']').each(function(){
                    //console.log($(this).val())
                    let checkAttrRadio = 0
                    if($(this).prop('checked')){
                        checkAttrRadio = 1
                    }
                    if(checkAttrRadio == 1){
                        $(this).parents('.scale-container').find('.error').fadeOut();
                        $(this).removeAttr('data-reqired', '');
                    } else {
                        $(el[i]).parents('.scale-container').find('.error').fadeIn();
                    }
                })
            } else {*/
            let name = el[i].getAttribute('data-name');
            if (document.querySelectorAll('[data-name=' + name + ']:checked').length === 0) {
                erroreArrayElemnts.push(el[i]);
                $(el[i]).on('click', function () {
                    $(this).parents('.range-container').find('.error').fadeOut();
                    $(this).removeAttr('data-reqired', '');
                })
                $(el[i]).parents('.range-container').find('.error').fadeIn();
            }
            /*}*/
        }
        let typeAttr = el[i].getAttribute('data-reqired');
        if (typeAttr === 'radio') {
            let name = el[i].getAttribute('data-name');
            let allItemRadio = $('[data-name=' + name + ']');
            let checkAttrRadio = 0
            $('[data-name=' + name + ']').each(function () {
                //console.log($(this).val())
                if ($(this).prop('checked')) {
                    checkAttrRadio = 1
                }
            })
            if (checkAttrRadio == 1) {
                $('[data-name=' + name + ']').each(function () {
                    $(this).removeAttr('data-reqired', '');
                })
            } else {
                $(el[i]).parents('.scale-container').find('.error').fadeIn();
            }
            $('[data-name=' + name + ']').on('click', function () {
                $('[data-name=' + name + ']').parents('div').find('.error-' + name).fadeOut();
                $('[data-name=' + name + ']').each(function () {
                    $(this).removeAttr('data-reqired', '');
                })
            })
        }
        if (el[i].tagName === 'TEXTAREA') {
            let name = el[i].getAttribute('data-name');
            let areaBlock = $.trim($('[data-name=' + name + ']').val())
            if (areaBlock.length < 5) {
                erroreArrayElemnts.push(el[i]);
                $('[data-name=' + name + ']').parents('div').find('.error-' + name).fadeIn();
                $('[data-name=' + name + ']').parents('div').find('.error-' + name).css('display', 'block');
            }
            $('[data-name=' + name + ']').on('click', function () {
                $('[data-name=' + name + ']').parents('div').find('.error-' + name).fadeOut();
            })
        }
    }
    if (erroreArrayElemnts.length > 0) {
        let scrollEl = erroreArrayElemnts[0];
        $('html, body').animate({
            scrollTop: $(scrollEl).parents('div').offset().top - 200
        }, 1000);
    }


    // let required = document.getElementById(main-form).querySelectorAll("[required]")

    // required.forEach(function(input) {
    //     console.log(input)
    // })










    if (erroreArrayElemnts.length == 0 || notClient == 1) {
        form.submit();
    }
});



