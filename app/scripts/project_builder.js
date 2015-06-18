$('.service_type_selection').on({
    mouseover: function(){
        var tl1 = new TimelineLite();
        tl1.to($('h3', this), 0.6, {top: '0px', fontSize: '1em', letterSpacing: '1px',  ease: Back.easeOut,}, "sync-slide");
        tl1.to($('.service_type_overlay', this), 0.4, {height: '20%', backgroundColor: '#96244E',  ease: Back.easeOut,}, "sync-slide");
    },
    mouseleave: function(){
        var tl2 = new TimelineLite();
        tl2.to($( 'h3', this), 0.6, {top: '80px', fontSize: '1.6em', letterSpacing: '1.5px', ease: Back.easeOut}, "sync-slide");
        tl2.to($('.service_type_overlay', this), 0.4, {height: '100%', backgroundColor: 'rgba(0,0,0,.5)', ease: Back.easeOut}, "sync-slide");
    },
    click: function(){
        var container = $(".project_builder_container").offset();
        var appContainer = $("#app-selection").offset();
        var softwareContainer = $("#software-selection").offset();
        var otherContainer = $("#other-selection").offset();

        var distance = appContainer.left - container.left;
        var distance2 = softwareContainer.left - container.left;
        var distance3 = otherContainer.left - container.left

        var tl3 = new TimelineLite();
        tl3.to($('h3', this), 0.6, {top: '0px', fontSize: '1em', letterSpacing: '1px',  ease: Back.easeOut}, "sync-slide");
        tl3.to($('.service_type_overlay', this), 0.4, {height: '100%',  ease: Back.easeOut,}, "sync-slide");
        tl3.to($('.service_type_selection').not($(this)), 0.5, {opacity: 0});
        tl3.to($('#app-selection'), 0.5, {delay:-.6, left: -distance, ease: Power1.easeOut}, "slide-sync");
        tl3.to($('#software-selection'), 0.5, {delay:-.6, left: -distance2, ease: Power1.easeOut}, "slide-sync");
        tl3.to($('#other-selection'), 0.5, {delay:-.6, left: -distance3, ease: Power1.easeOut}, "slide-sync");
        tl3.to($('.project_cart_title'), 0.5, {opacity: 1, top: '85px', delay: 0.5});
        tl3.to($('.second_container'), .5, {opacity: 1, zIndex: 1, top: "-295px", ease: Back.easeOut});

        $('.service_type_overlay', this).addClass("selected_service");

    }
});

$( ".service_secondary_selection" ).click(function() {
    $( this ).toggleClass("active_secondary_selection");

    if($( this ).hasClass("active_secondary_selection")){
        var selectedOption = $(this).children(".secondary_item_title").clone();
        selectedOption.appendTo("#project-cart");
        selectedOption.addClass("added-to-cart-text");
        $(this).data('selectedOption', selectedOption);
        var tl6= new TimelineLite();
        tl6.to($('.added-to-cart-text'), .5, {opacity: 1});
    }
    else{
        $(this).data('selectedOption').remove();
    }

    $("#project-cart-container").css("opacity", "1");
});

var action = 1;

$('#next-button-project-builder').click(function() {
    if ( action == 1 ) {
        $(this).addClass('project_button_submit');
        $('.project_comments_container').css("display", "block");

        var topOfPage = $('.project_builder_container').position();
        var topOfComments = $('.project_comments_container').position();
        var distance4 = topOfPage.top - topOfComments.top;
        var tl4 = new TimelineLite();
        tl4.to($('.button-text'), .5, {opacity: 0});
        tl4.to($(".project_builder_second_container"), .5, {opacity: 0, zIndex: -2});
        tl4.to($(this), .5, {top: '150px'});
        tl4.to($('.project_comments_container'), .5, {opacity: 1, zIndex: 1, top: distance4 -30, ease: Back.easeOut});
        tl4.to($('.button-text'), .5, {opacity: 1});
        function changeText(){
            $('.button-text').html('SUBMIT');
        }
        setTimeout(changeText, 300);

        action = 2;
    } else {
        var tl5 = new TimelineLite();
        tl5.to($('.project_comments_container'), 1, {delay: .5, opacity: 0, zIndex: -1, top: '-600px', ease: Back.easeOut}, "sync-fade");
        tl5.to($('#next-button-project-builder'), 1, {opacity: 0, zIndex: -1, top: '250px', ease: Back.easeOut}, "sync-fade");
        tl5.to($('.project_builder_container'), 1, {opacity: 0}, "sync-fade");
        tl5.to($('.project_cart_title'), 1, {opacity: 0}, "sync-fade");
        tl5.to($('#project-cart-container'), 1, {opacity: 0}, "sync-fade");
        tl5.to($('.successful_project_sent_container'), 1, {opacity: 1, zIndex: 1, top: '145px', ease: Back.easeOut});
        tl5.to($('#project-builder-title'), .5, {opacity: 0}, "sync-fade");
        tl5.to($('.successful_project_sent_container'), 1, {delay: 8, opacity: 0, zIndex: 1, top: '145px', ease: Back.easeOut});

        function displayNone(){
            $('.project_comments_container').css("display", "none");
        }
        setTimeout(displayNone, 1000);

        function displayNone2(){
            // window.history.pushState('obj', 'newtitle', '/index.html');
            // return false;

            function ChangeUrl(page, url) {
                if (typeof (history.pushState) != "undefined") {
                    var obj = { Page: page, Url: url };
                    history.pushState(obj, obj.Page, obj.Url);
                } else {
                    alert("Browser does not support HTML5.");
                }
            }
            $(function () {ChangeUrl('Home', 'index.html');});
        }
        setTimeout(displayNone2, 12000);

    }
});
