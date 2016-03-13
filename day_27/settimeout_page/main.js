// setTimeout(function(){
//   document.write("Hello World");
// }, 5000);


setTimeout(function(){
  document.write("Ready....");
  setTimeout(function(){
    document.write("Set....");
    setTimeout(function(){
      document.write("Go....");
    }, 1000);
  }, 1000);
}, 1000);
