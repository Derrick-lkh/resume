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
});

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
