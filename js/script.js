$(function(){
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    })
    // prggress bar  js start
    $('.proggressBar').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    });
    $('.proggressBarnd').rProgressbar({
        percentage: 40,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    })
    // prggress bar  js end
    // causesproggres section 
    $('.causes_prggres').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#fff',
        borderRadius: '0px',
        height: '12px',
        width: '100%'
    })
    $('.causes_slider').slick({
        slidesToShow:3,
        arrows:false
    })
    $('.testSlider').slick({
        slidesToShow:5,
        arrows:false,
        autoplay:true
    })
    $('.clientslider').slick({
        slidesToShow:2,
        arrows:false
    })
    $('#hideMenu').on('click', function(){
        $('.sidemenu').addClass('hide')
    })
    $('#showmenu').on('click', function(){
        $('.sidemenu').addClass('show')
    })
    // home page js end
    // about page js start--
    // Our Testimonial Slider Js Start
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        prevArrow:$('.testimonial_left_btn'),
        nextArrow:$('.testimonial_right_btn'),
    })
    // ||Our Testimonial Slider Js End||
    // about page js end
})