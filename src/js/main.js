
$(document).ready(function(){

// scroll header
  const header = $('.main-header') // header vars

  $(window).on('scroll load',function(){
      if($(window).scrollTop() > 68){
          header.addClass('header-active');
      }else{
          header.removeClass('header-active');
      }
  });


// scroll header

// show navbar when click on icon
  const menu = $('#menu') //navbar vars
    ,navbar = $('.main-nav')
    ,scrollLink = $('a');

  menu.click(function(){
    navbar.slideToggle('slow');
  });

// hide navbar when click on link
  scrollLink.click(function(){
    navbar.slideUp();
  });
// hide navbar when click on link


// scroll smoth
  scrollLink.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 2000);
  });
// scroll smoth


// test

  const code = $('.input');
  const output = $('.output');
  const run = $('.run');

  run.click(function(){
    output.text( code.parentsUntil('.output').val() );
  });

});
