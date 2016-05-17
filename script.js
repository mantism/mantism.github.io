$(document).ready( function() {
      $('#about-button').click(function() {
            $('#about-content').fadeIn();
            $('#work-content').hide();
            $('#project-content').hide();
            $('#tricking-content').hide();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#work-button').click(function() {
            $('#about-content').hide();
            $('#work-content').fadeIn();
            $('#project-content').hide();
            $('#tricking-content').hide();
            $(this).addClass('current');
            $('#about-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#project-button').click(function() {
            $('#about-content').hide();
            $('#work-content').hide();
            $('#project-content').fadeIn();
            $('#tricking-content').hide();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#about-button').removeClass('current');
            $('#tricking-button').removeClass('current');
      });

      $('#tricking-button').click(function() {
            $('#about-content').hide();
            $('#work-content').hide();
            $('#project-content').hide();
            $('#tricking-content').fadeIn();
            $(this).addClass('current');
            $('#work-button').removeClass('current');
            $('#project-button').removeClass('current');
            $('#about-button').removeClass('current');
      });
});
