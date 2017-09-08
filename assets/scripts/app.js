$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

$(document).ready(function() {
  Waves.attach('.btn', ['waves-effect', 'waves-light']);
  Waves.init();

  if($(".tooltip").length) {
    tippy('.tooltip');
  };

  if($("select").length) {
    $('select').niceSelect();
  };

  if($(".validate__form").length) {
    $('.validate__form').each(function() {
      $(this).validate({
        focusCleanup: true,
        focusInvalid: false,
        errorElement: "span",
        errorPlacement: function(error, element) {{
          $( element ).parent().find('label').addClass("error");
          $( element ).addClass("error");
        }},
      });
    });
  };

  if($(".popup-form").length) {
    $('.popup-form').magnificPopup({
      type: 'inline',
      closeBtnInside: true,
      preloader: false,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
    });
  };

  $(".navbar__toggle").click(function() {
    $(this).toggleClass('active');
    $('.header .navbar__content--left ul').toggleClass('active');
  });

});
