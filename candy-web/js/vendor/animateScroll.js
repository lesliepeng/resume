$(function() {

  var $win              = $(window),
      $win_height       = $(window).height(),
      noMoreFades       = false,
      windowPercentage  = ($(window).height() * 1.1),
      isTouch           = (Modernizr.touch),
      lastInstance      = $('.desktop-footer .scrollReveal:last');

  if (isTouch) {
    $('.scrollReveal').addClass('animated');
  }

  $win.on('scroll', scrollReveal);

  function scrollReveal() {
    var scrolled = $win.scrollTop();

    if (lastInstance.hasClass('animated')) {
      noMoreFades = true;
    }

    $(".scrollReveal:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + windowPercentage > offsetTop || $win_height > offsetTop) {
        if ($this.hasClass('flip-staggered-second')) {
          window.setTimeout(function(){
            $this.addClass('animated flipInX');
          }, 400);
        } else if ($this.hasClass('flip-staggered-third')) {
          window.setTimeout(function(){
            $this.addClass('animated flipInX');
          }, 800);
        } else if ($this.hasClass('pulse-staggered-third')) {
          window.setTimeout(function(){
            $this.addClass('animated pulse');
          }, 1000);
        } else if ($this.hasClass('fade-in')) {
          $this.addClass('animated fadeInUp');
        } else if ($this.hasClass('fadeInUp-staggered-second')) {
          window.setTimeout(function(){
            $this.addClass('animated fadeInUp');
          }, 400);
        } else if ($this.hasClass('fadeInUp-staggered-third')) {
          window.setTimeout(function(){
            $this.addClass('animated fadeInUp');
          }, 800);
        } else if ($this.hasClass('comparison-animation')) {
          $this.addClass('animated bounceIn');
        } else if ($this.hasClass('slide-in-first')) {
          $this.addClass('animated bounceInLeft');
        } else if ($this.hasClass('slide-in-second')) {
          window.setTimeout(function(){
            $this.addClass('animated bounceInRight');
          }, 400);
        } else {
          $(this).addClass('animated flipInX');
        }
      }
    });
  }

  scrollReveal();
});