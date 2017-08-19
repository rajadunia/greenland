(function() {
  "use strict";


/* ---------------------------------------------------------------------- */
/*         Ocean View Main Javascript FIle
/* ---------------------------------------------------------------------- */

//Javascipt Scripting Starts Here

function headerInfo () {

        var triggers = $('.header-info .triggers');
        var infos =    $('.header-info .info');

        infos.find('p').first().addClass('active');
        triggers.find('i').first().addClass('active');
        
        triggers.find('i').on('click',function(){

            // adding/removing the active class from trigger
            triggers.find('.active').removeClass('active');
            $(this).addClass('active');

            //getting current item's data-id
            var current = $(this).data("id");

            // adding/removing the active class from infos
            infos.find('.active').removeClass('active');
            infos.find("[data-id='" + current + "']").addClass('active');

        });

    }

function mainNav () {

    var menu_border = $('#main-nav ul li ul li');
    menu_border.on('mouseenter', function (){
        
        $(this).children().addClass('transparent-border');
        $(this).prev().children().addClass('transparent-border');
        
    });
    menu_border.on('mouseleave', function(){
        
        $(this).children().removeClass('transparent-border');
        $(this).prev().children().removeClass('transparent-border');
        
    });

    // Responsive navigation

    $('#main-nav > ul').clone().prependTo('#mobile-nav');

    $('a.nav-toggle').on('click',function(){
        $('#mobile-nav').slideToggle();
    });

}


function customGallery () {

    // GALLERY JAVASCIPT!!!

var gallery = $('.gallery');

var galleryImages = $('.gallery div.img-small');



galleryImages.on('click',function(){

    var largeActive = gallery.find('.large-active');
    var smallActive = gallery.find('.small-active');

    largeActive.slideUp().removeClass('large-active');
    smallActive.removeClass('small-active');

    var imageId = $(this).data('id');
    var largeImage = gallery.find(".img-large[data-id='" + imageId + "']");

    if (largeActive.length > 0) {
        largeImage.delay(500).slideDown();
    }

        else{
            largeImage.slideDown();
        }

    largeImage.addClass('large-active');
    $(this).addClass('small-active');


});

gallery.find('a.cross').on('click',function(){

    var largeActive = gallery.find('.large-active');
    var smallActive = gallery.find('.small-active');

    largeActive.slideUp().removeClass('large-active');
    smallActive.removeClass('small-active');


});

gallery.find('a.next').on('click',function(){

    var largeActive = gallery.find('.large-active');
    var smallActive = gallery.find('.small-active');

    largeActive.slideUp().removeClass('large-active');

    var imageId = smallActive.data('id');
    ++imageId;
    var largeImage = gallery.find(".img-large[data-id='" + imageId + "']");
    largeImage.delay(500).slideDown();
    largeImage.addClass('large-active');
    smallActive.removeClass('small-active');
    gallery.find(".img-small[data-id='" + imageId + "']").addClass('small-active');


});

gallery.find('a.prev').on('click',function(){

    var largeActive = gallery.find('.large-active');
    var smallActive = gallery.find('.small-active');

    largeActive.slideUp().removeClass('large-active');

    var imageId = smallActive.data('id');
    --imageId;
    var largeImage = gallery.find(".img-large[data-id='" + imageId + "']");
    largeImage.delay(500).slideDown();
    largeImage.addClass('large-active');
    smallActive.removeClass('small-active');
    gallery.find(".img-small[data-id='" + imageId + "']").addClass('small-active');


});

      
}

function galleryFilter () {

    $('.gallery-filter a.trigger').on('click',function(e){
        e.preventDefault();
        
        $('.gallery-filter ul').fadeToggle(200);
        
        if ($(this).hasClass('active')) {

            $(this).removeClass('active');

        }else{
            $(this).addClass('active');
        }
    });
    
}

function headerv3Filter () {

    $('.head-v3-filter a.trigger').on('click',function(e){
        e.preventDefault();
        
        $('.head-v3-filter ul').fadeToggle(200);
        
        if ($(this).hasClass('active')) {

            $(this).removeClass('active');

        }else{
            $(this).addClass('active');
        }
    });
    
}

function googleMaps () {

        var LocsA = [
    {
            lat: -6.289551,
            lon: 106.828123,
            title: 'Jakarta Office',
            html: '<h3>Jakarta Office</h3><p>Jln Sudirman</p><p>Jakarta Selatan, 180000</p><p>(021) 123-456</p><p>Jati Padang III</p>',
            icon: 'http://maps.google.com/mapfiles/markerA.png'
    },
    {
            lat: -7.800528,
            lon: 110.366776,
            title: 'Jogja Office',
            html: '<h3>Jogja Office</h3><p>Jln Melayu</p><p>Jogja Timur, 19000</p><p>(054) 463-5141</p><p>Malioboro</p>',
            icon: 'http://maps.google.com/mapfiles/markerB.png',
            show_infowindow: false
    },
    {
            lat: -6.593036,
            lon: 106.805806,
            title: 'Bogor Office',
            html: '<h3>Bogor Office</h3><p>Jln Pakuan</p><p>Tegal Lega, 16127</p><p>(0251) 722-5111</p><p>Botani</p>',
            icon: 'http://maps.google.com/mapfiles/markerC.png'
    }
];


        var maplace = new Maplace({
            locations: LocsA,
            controls_type: 'list',
            controls_title: 'Choose a location:'
        });

        maplace.Load();

    
}

function headv4RoomForm () {

    var trigger = $('.room-trigger');
    var form = $('.room-form');
    var closeTrigger = $('.room-form .glyphicon');

    // console.log(closeTrigger);

    trigger.on('click',function(e){
        e.preventDefault();
        form.fadeIn();
    });

    closeTrigger.on('click',function(){
        form.fadeOut();
    });


}
function responsiveSidebar(){

    $(window).resize(function(){

       if ($(window).width() <= 850) {  

             $('#sidebar').insertAfter('#content'); 
             // $('#sidebar').after('#content'); 



       }     
       else{
            $('#sidebar').insertBefore('#content'); 
       }

    });

    if ($(window).width() <= 850) {  

             $('#sidebar').insertAfter('#content'); 
             // $('#sidebar').after('#content'); 



       }     
       else{
            $('#sidebar').insertBefore('#content'); 
       }

}

//Calling Bootstrap Dropdown JS here
$('.selectpicker').selectpicker();
//Calling Bootstrap Datepicker JS here
$('.datepicker').pickadate();

//Calling all the used functions here
responsiveSidebar();
customGallery();
galleryFilter();
headerv3Filter();
headerInfo();
mainNav();
headv4RoomForm();
googleMaps();






}());
