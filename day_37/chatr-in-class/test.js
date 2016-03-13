var user = { name: "Tam",
             greet: function(){
               return "Hello " + this.name;
             }.bind({name: "Cerize"})
            }
