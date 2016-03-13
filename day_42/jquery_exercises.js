$(".container").on("click", function(){
  $(this).children(".shape").addClass("highlight");
});

$("#button-1").on("click", function(){
  $(".medium, .large").removeClass("medium large").addClass("small");
});

$("#button-2").on("click", function(){
  $(".medium, .small").removeClass("small large").addClass("large");
});

// in css
// .shape {
//   transition: width 90s, height 1s;
// }
