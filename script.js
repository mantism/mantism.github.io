var isInView = function (element) {
      var elementTop = element.offset().top;
      var elementBot = elementTop + element.outerHeight();
      var screenBot = $(window).scrollTop() + $(window).height();
      return (screenBot > elementTop) && (screenBot <  elementBot);

}

var buttons = ['#about-button', '#work-button', '#code-button', '#tricking-button'];

var toggleActive = function (element) {
      for (var i = 0; i < buttons.length; i++) {
            if (element === buttons[i]) {
                  $(buttons[i]).addClass('active');
            } else {
                  $(buttons[i]).removeClass('active');
            }
      }
}



$(window).scroll(function() {
      if (isInView($('#about'))) {
            toggleActive('#about-button');
            $('header').css('border-bottom', 'solid #f49445  1px');
            $('header').css('border-top', 'solid #f49445  1px');
      }

      if (isInView($('#work'))) {
            toggleActive('#work-button');
            $('header').css('border-bottom', 'solid #40cde4  1px');
            $('header').css('border-top', 'solid #40cde4  1px');
      }

      if (isInView($('#code'))) {
            toggleActive('#code-button');
            $('header').css('border-bottom', 'solid #5aa814  1px');
            $('header').css('border-top', 'solid #5aa814 1px');
      }

      if (isInView($('#tricking'))) {
            toggleActive('#tricking-button');
            $('header').css('border-bottom', 'solid #d42700 1px');
            $('header').css('border-top', 'solid #d42700 1px');
      }
});

$(document).ready( function() {
      $('#about-button').click(function() {
            toggleActive('#about-button');
            $('header').css('border-bottom', 'solid #f49445  1px');
            $('header').css('border-top', 'solid #f49445  1px');
      });

      $('#work-button').click(function() {
            toggleActive('#work-button');
            $('header').css('border-bottom', 'solid #40cde4  1px');
            $('header').css('border-top', 'solid #40cde4  1px');
      });

      $('#code-button').click(function() {
            toggleActive('#code-button');
            $('header').css('border-bottom', 'solid #5aa814  1px');
            $('header').css('border-top', 'solid #5aa814 1px');
      });

      $('#tricking-button').click(function() {
            toggleActive('#tricking-button');
            $('header').css('border-bottom', 'solid #d42700 1px');
            $('header').css('border-top', 'solid #d42700 1px');
      });

      $("a[href^='#']").click(function(e) {
            if (this.hash !== ' ') {
                  e.preventDefault();

                  var hash = this.hash;

                  $('html, body').animate({
                        scrollTop: $(hash).offset().top - 50
                  }, 800, function() {
                        window.location.hash = hash;
                  });
            }
      });
});

(function(d3) {
      var bar = new ProgressBar.Line('#javabar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
             style: {
                   color: '#000',
                   position: 'absolute',
                   right: '0',
                   top: '0',
                   padding: 0,
                   margin: 0,
                   transform: null,
             }
       }
      });
      bar.animate(1.0);
      bar.setText('5/5');


      bar = new ProgressBar.Line('#jsbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
             style: {
                   color: '#000',
                   position: 'absolute',
                   right: '0',
                   top: '0',
                   padding: 0,
                   margin: 0,
                   transform: null
             }
       }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#htmlbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#cssbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#cppbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(0.6);
      bar.setText('3/5');

      bar = new ProgressBar.Line('#cbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(0.3);
      bar.setText('2/5');

      bar = new ProgressBar.Line('#latexbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(0.8);
      bar.setText('4/5');

      bar = new ProgressBar.Line('#sqlbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(0.6);
      bar.setText('3/5');

      bar = new ProgressBar.Line('#photoshopbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '100%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#illustratorbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '500%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#indesignbar', {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        color: '#f49445',
        trailColor: '#b0abab',
        trailWidth: 1,
        svgStyle: {width: '80%', height: '500%'},
        text: {
           style: {
                  color: '#000',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  padding: 0,
                  margin: 0,
                  transform: null
           }
      }
      });
      bar.animate(0.6);
      bar.setText('3/5');

      bar = new ProgressBar.Line('#mayabar', {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 2000,
            color: '#f49445',
            trailColor: '#b0abab',
            trailWidth: 1,
            svgStyle: {width: '80%', height:'500%'},
            text: {
               style: {
                      color: '#000',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                      padding: 0,
                      margin: 0,
                      transform: null
               }
          }
      });
      bar.animate(0.2);
      bar.setText('1/5');


      bar = new ProgressBar.Line('#eclipsebar', {
       strokeWidth: 5,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '80%', height: '500%'},
       text: {
          style: {
                 color: '#000',
                 position: 'absolute',
                 right: '0',
                 top: '0',
                 padding: 0,
                 margin: 0,
                 transform: null
          }
     }
      });
      bar.animate(1.0);
      bar.setText('5/5');


      bar = new ProgressBar.Line('#qtbar', {
       strokeWidth: 5,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '80%', height: '500%'},
       text: {
          style: {
                 color: '#000',
                 position: 'absolute',
                 right: '0',
                 top: '0',
                 padding: 0,
                 margin: 0,
                 transform: null
          }
     }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#atombar', {
       strokeWidth: 5,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '80%', height: '500%'},
       text: {
          style: {
                 color: '#000',
                 position: 'absolute',
                 right: '0',
                 top: '0',
                 padding: 0,
                 margin: 0,
                 transform: null
          }
     }
      });
      bar.animate(1.0);
      bar.setText('5/5');

      bar = new ProgressBar.Line('#androidbar', {
       strokeWidth: 5,
       easing: 'easeInOut',
       duration: 2000,
       color: '#f49445',
       trailColor: '#b0abab',
       trailWidth: 1,
       svgStyle: {width: '80%', height: '500%'},
       text: {
          style: {
                 color: '#000',
                 position: 'absolute',
                 right: '0',
                 top: '0',
                 padding: 0,
                 margin: 0,
                 transform: null
          }
     }
      });
      bar.animate(0.8);
      bar.setText('4/5');

})(window.d3);
