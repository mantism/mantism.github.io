var isInView = function (element) {
  var elementTop = element.offset().top;
  var elementBot = elementTop + element.outerHeight();
  var screenBot = $(window).scrollTop() + $(window).height();
  return (screenBot > elementTop) && (screenBot <  elementBot);

}

var buttons = ['#about-button', '#work-button', '#code-button', '#tricking-button'];

var colors = {
  blue: '#40cde4',
  orange: '#f49445',
  code: '#5aa814',
  tricking: '#d42700'

}

var toggleActive = function (element, color) {
  var borderStyle = 'solid ' + color + ' 1px';
  $('header').css('border-bottom', borderStyle);
  $('header').css('border-top', borderStyle);
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
  }

  if (isInView($('#work'))) {
    toggleActive('#work-button');
  }

  if (isInView($('#code'))) {
    toggleActive('#code-button');
  }

  if (isInView($('#tricking'))) {
    toggleActive('#tricking-button');
  }
});

$(document).ready( function() {
  $('#about-button').click(function() {
    toggleActive('#about-button');
  });

  $('#work-button').click(function() {
    toggleActive('#work-button');
  });

  $('#code-button').click(function() {
    toggleActive('#code-button');
  });

  $('#tricking-button').click(function() {
    toggleActive('#tricking-button');
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