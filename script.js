$(document).ready( function() {
      $('#about-button').click(function() {
            $('#about').fadeIn();
            $('#work').hide();
            $('#project').hide();
            $('#tricking').hide();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#work-button').click(function() {
            $('#about').hide();
            $('#work').fadeIn();
            $('#project').hide();
            $('#tricking').hide();
            $(this).addClass('current');
            $('#about-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#project-button').click(function() {
            $('#about').hide();
            $('#work').hide();
            $('#project').fadeIn();
            $('#tricking').hide();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#about-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#tricking-button').click(function() {
            $('#about').hide();
            $('#work').hide();
            $('#project').hide();
            $('#tricking').fadeIn();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#about-button').removeClass('current');
      });
});
