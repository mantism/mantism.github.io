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

(function(d3) {
      var javabar = new ProgressBar.Line('#javabar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      javabar.animate(1.0);

      var jsbar = new ProgressBar.Line('#jsbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      jsbar.animate(1.0);

      var htmlbar = new ProgressBar.Line('#htmlbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      htmlbar.animate(1.0);

      var cssbar = new ProgressBar.Line('#cssbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cssbar.animate(1.0);

      var cppbar = new ProgressBar.Line('#cppbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cppbar.animate(0.8);

      var cbar = new ProgressBar.Line('#cbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      cbar.animate(0.6);

      var ocamlbar = new ProgressBar.Line('#ocamlbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      ocamlbar.animate(0.4);

      var asmbar = new ProgressBar.Line('#asmbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      asmbar.animate(0.4);

      var procbar = new ProgressBar.Line('#procbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      procbar.animate(0.5);

      var latexbar = new ProgressBar.Line('#latexbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      latexbar.animate(0.4);

      var photoshopbar = new ProgressBar.Line('#photoshopbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      photoshopbar.animate(1.0);

      var illustratorbar = new ProgressBar.Line('#illustratorbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '500%'}
      });
      illustratorbar.animate(1.0);

      var indesignbar = new ProgressBar.Line('#indesignbar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '500%'}
      });
      indesignbar.animate(0.7);

      var wordbar = new ProgressBar.Line('#wordbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      wordbar.animate(1.0);

      var excelbar = new ProgressBar.Line('#excelbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      excelbar.animate(0.7);

      var ppbar = new ProgressBar.Line('#ppbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      ppbar.animate(1.0);

      var eclipsebar = new ProgressBar.Line('#eclipsebar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      eclipsebar.animate(1.0);

      var qtbar = new ProgressBar.Line('#qtbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      qtbar.animate(1.0);

      var atombar = new ProgressBar.Line('#atombar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      atombar.animate(1.0);

      var androidbar = new ProgressBar.Line('#androidbar', {
       strokeWidth: 4,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '100%', height: '500%'}
      });
      androidbar.animate(0.8);




})(window.d3);
