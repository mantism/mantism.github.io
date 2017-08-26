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

      $(".topnav").click(function(e) {
            var x = document.getElementById("links");
            if (x.className === "topnav") {
                x.className += " responsive";
                console.log("sup");
            } else {
                x.className = "topnav";
            }
      })
});