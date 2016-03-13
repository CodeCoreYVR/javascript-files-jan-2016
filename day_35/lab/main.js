$(document).ready(function(){
  // Slide 17
  // $("li").eq(0).css("border-width");
  // $("li").first().css("border-width");
  // $("#list-item-1").css("border-width");
  //
  // $("li").css("border-color", "red");
  //
  // $("li").click(function(){
  //   $(this).css("border-width", "10px");
  // });

  // $("#rocket").click(function(){
  //   $(this).css("left", parseInt($(this).css("left")) + 10 + "px");
  // });

  // Slide 18
  // $(document).click(function(e){
  //   $("#rocket").css({top: e.pageY, left: e.pageX});
  // });

  // Slide 22
  // $("#rocket").addClass("big");
  // $("#rocket").removeClass("big");
  //
  // $("#list-item-1").addClass("red-border");
  // $("#list-item-1").removeClass("red-border");

  // setInterval(function(){
  //   $("#rocket").css("left", parseInt($("#rocket").css("left")) + 1 + "px");
  // }, 30);

  // Slide 28
  // setInterval(function(){
  //   $("#rocket").css({width: parseInt($("#rocket").css("width")) + 1 + "px"})
  // }, 5);
  // setInterval(function(){
  //   $("#rocket").css({bottom: parseInt($("#rocket").css('bottom')) + 1 + "px"});
  // }, 30);

  // Slide 31
  // $("#list-item-1").fadeOut(5000);
  // $("#list-item-2").fadeOut(5000);

  // $("#list-item-1").fadeOut(5000, function(){
  //   $("#list-item-2").fadeOut(5000);
  // });
  //
  // $("#list-item-1").fadeOut(5000);
  // $("#list-item-2").delay(5000).fadeOut(5000);

  // Slide 33
  // $("#list-item-1").fadeOut(1000, function(){
  //   $("#list-item-2").fadeOut(1000, function(){
  //     $("#list-item-3").fadeOut(1000);
  //   });
  // });

  // Slide 42
  // $("#button-1").on("click", function(){
  //   $("#rocket").toggleClass("big");
  // });
  //
  // $("#button-2").on("click", function(){
  //   $("#rocket").toggleClass("shifted");
  // });
  //
  // $("#rocket").on("click", function(){
  //   $("#rocket").toggleClass("fadedOut");
  // });

  // Slide 43
  // $(document).on("keydown", function(event){
  //   var charCode = event.which;
  //   if(charCode === 37) {
  //     $("#rocket").css({left: "-=100px"});
  //   } else if(charCode === 38) {
  //     $("#rocket").css({bottom: "+=100px"});
  //   } else if(charCode === 39) {
  //     $("#rocket").css({left: "+=100px"});
  //   } else if(charCode === 40) {
  //     $("#rocket").css({bottom: "-=100px"});
  //   }
  // });


  // $(document).on("click", function(event){
  //   console.log("X: " + event.clientX + "Y: " + event.clientY);
  //   $(".ball").css({left: event.clientX - 50 + "px", top: event.clientY - 50 + "px"});
  // });

  // Slide 46
  // $(".sortable").sortable();
  $("#list-1").sortable({ axis: "y", connectWith: "#list-2" });
  $("#list-2").sortable({ axis: "y", connectWith: "#list-1" });

});
