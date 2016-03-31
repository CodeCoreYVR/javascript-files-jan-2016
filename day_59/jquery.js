$.ajax({
  url: "http://localhost:3000/questions.json",
  method: "GET",
  success: function(data){
    console.log(data);
  },
  error: function(){
    console.log("Error happened!");
  }
});

$.ajax({
  url: "http://localhost:3000/questions.json",
  method: "GET",
}).done(function(data){
  console.log(data);
}).fail(function(err){
  console.log(err);
});
