$(document).ready(function() {

  var getMessages = function(){
    $.get("/messages", function(messages){
      $("ul#messages").empty();
      for(var i = 0; i < messages.length; i++) {
        $("ul#messages").prepend("<li>" + messages[i].body + "<i data-id=" + messages[i].id + ">x</i></li>");
      }
    });
  }

  var interval = setInterval(getMessages, 5000);

  $("form").on("submit", function(){
    event.preventDefault();
    var text = $("textarea").val();
    $.post("/messages", {body: text}, getMessages);
    $("textarea").val("");
  });

  $("ul#messages").on("click","li i", function(){
    console.log("inside click handler");
    $.ajax({
      url: "/messages/" + $(this).data("id"),
      method: "DELETE",
      error: function() {
        alert("try again!");
      },
      success: function(){
        // this (without adding .bind(this)): references the AJAX object
        // this (with .bind(this)): references the clicked `i` inside the `li`
        $(this).parent().fadeOut(700, function(){ $(this).remove() });
      }.bind(this)
    });
  });

  // var user = { name: "Tam",
  //              greet: function(){
  //                return "Hello " + this.name;
  //              }.bind({name: "Cerize"})
  //             }


  getMessages();

});
