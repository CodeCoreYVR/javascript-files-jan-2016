$(document).on('ready', function() {

  // // Slide 8
  // $("a[href]");
  // $("a[href='http://www.facebook.com']");
  // $("a[href*='.com']").attr('class', 'highlight');
  // $("a[href!='http://www.google.com']").hide();
  //
  // // Slide 11
  // $("tr:first-child"); // or: $("tbody > :first-child")
  // $("tr:last-child");
  // $("#green-container .shape:odd").remove();
  // $("tr:even").attr("class", "highlight");
  // $(".container .shape:last-child").hide();
  //
  // // Slide 14
  // $("a").addClass("highlight");
  // $("a").removeClass("highlight");
  // $("a").toggleClass("highlight");
  // $("body").addClass("my-own-class");
  // $("body").hasClass("my-own-class");
  // $(".container").on("click", function(){
  //   $(this).children(".shape").addClass("highlight");
  // });
  //
  // // Slide 15
  // $(".shape").on("mouseenter", function(){
  //   $(this).toggleClass("highlight");
  // });
  //
  // $(".shape").on("click", function(){
  //   if($(this).hasClass("large")) {
  //     $(this).removeClass("large").addClass("medium");
  //   } else if($(this).hasClass("medium")) {
  //     $(this).removeClass("medium").addClass("small");
  //   } else if($(this).hasClass("small")) {
  //     $(this).hide();
  //   }
  // });

  // Slide 19
  // $("input[type='text']").val("hello world")
  //
  // $("input[type='text']").val();
  // $("input:text").val();
  //
  // $("input[type='submit']").on("click", function(){
  //   $("#form-message").html($("input[type='text']").val());
  // });

  // Slide 22
  // $("body").append("<p>Appended</p>");
  // $("body").prepend("<p>Prepended</p>");
  // $("ul").append("<li><a href=\"http://amazon.com\">Amazon.com</a>");
  // $("table").prepend("<tr><td>0</td><td>-</td></tr>");
  // $("input[type='submit']").on("click", function(){
  //   $("#form-message").append($("input[type='text']").val());
  // });

  // Slide 25
  // $("#orange-container").find(".shape.red");
  // $(".small.red.circle").prev(".shape").remove();
  // $(".grey.shape").next(".shape").hide();
  // $("#green-container").find(".shape.circle").removeClass("red").addClass("black");
  // $("#green-container").find(".shape.circle").removeClass("red green grey blue").addClass("black small");
  // // $("#green-container").find(".shape.circle").removeClass("red green grey blue").addClass("black small");

  // Slide 28
  // $("#green-container").toggle();
  // $("#green-container").fadeOut();
  // $("#green-container").fadeIn();
  // $("#green-container").slideUp();
  // $("#green-container").slideDown();
  //
  // $("#green-container").slideUp(function(){ $(this).remove(); });

  // Slide 29
  // $("#button-1").on("click", function(){
  //   $("#green-container").toggle();
  // });
  //
  // $("#button-2").on("click", function(){
  //   $("#button-message").fadeOut();
  // });
  //
  // $("#button-3").on("click", function(){
  //   $("#button-message").html("New Message");
  //   $("#button-message").fadeIn();
  // });
  //
  // $("#button-4").on("click", function(){
  //   $("#green-container").slideUp();
  // });

  // Slide 36
  // $(document).on("keypress", function(event){
  //   var charCode = event.which;
  //   var key      = String.fromCharCode(charCode);
  //   if(key === 'b') {
  //     $(".shape.blue").toggle();
  //   } else if (key === 'r') {
  //     $(".shape.red").toggle();
  //   } else if (key === 'k') {
  //     $(".shape.black").toggle();
  //   } else if(key === 'g') {
  //     $(".shape.grey").toggle();
  //   } else if(charCode === 32) {
  //     $("#green-container").append("<div class='small blue circle shape'></div>");
  //   }
  // });

  // Slide 40
  // $("input").on("keyup", function(){
  //   $("#form-message").html($("input[type='text']").val());
  // });

  // $("input").on("keyup", function(){
  //   var string = $("input[type='text']").val();
  //   var backstring = string.split("").reverse().join("");
  //   $("#form-message").html(backstring);
  // });

  // $("input").on("keyup", function(){
  //   $("#form-message").html(14 - $(this).val().split("").length + " characters remaining");
  // });

  // Slide 43
  // $("form").on("submit", function(){
  //   $("input:text").val(" ");
  // });

  // $("form").on("submit", function(){
  //   var color = $("input:text").val();
  //   var validColors = ["red", "grey", "blue", "green", "black"];
  //   if(!validColors.includes(color)) {
  //     alert("invalid color");
  //   } else {
  //     $("." + color).remove();
  //   }
  //   $("input:text").val("");
  // });

  // $(".square.black").on("click", function(event){
  //   event.stopPropagation();
  //   console.log("Black Square Clicked");
  // });
  //
  // $("#orange-container").on("click", function(){
  //   console.log("Orange Container Clicked");
  // });
  //
  // $("a").on("click", function(e){
  //   e.preventDefault();
  //   console.log("Link Clicked!");
  //   // return false; this will do both: e.preventDefault(); and
  //  //                                   e.stopPropagation();
  // });

  $(".shape").on("click", function() {
    console.log("Shape Clicked!!");
  });

  $(".container").on("click", ".shape", function(){
      console.log("Shape clicked!");
  });

});
