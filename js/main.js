$(document).ready(function() {
  var moveTop = $(".banner").height();
  $(".wrapper").offset({ top: moveTop, left: 0 });
  console.log(moveTop);

  $("#fyp-wrapper").stickySidebar({
    container: "#main-wrapper",
    sidebarInner: ".portfolio-item "
  });

  $("#cxa-wrapper").stickySidebar({
    container: "#second-layer",
    sidebarInner: ".portfolio-item"
  });

  $("#wad-wrapper").stickySidebar({
    container: "#third-layer",
    sidebarInner: ".portfolio-item"
  });

  $(".slick-container").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    easing: "linear",
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});

function responsiveSlider(slider) {
  var settings = {
    dots: true,
    arrows: false
  };
  if ($(window).width() >= 901) {
    if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
    return;
  } else if (!slider.hasClass("slick-initialized")) {
    return slider.slick(settings);
  }
}

$(window).resize(function() {
  $("#fyp-wrapper").stickySidebar({
    container: "#main-wrapper",
    sidebarInner: ".portfolio-item "
  });

  $("#cxa-wrapper").stickySidebar({
    container: "#second-layer",
    sidebarInner: ".portfolio-item"
  });

  $("#wad-wrapper").stickySidebar({
    container: "#third-layer",
    sidebarInner: ".portfolio-item"
  });
});
