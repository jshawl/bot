var prompt = require('prompt-sync')();

var bot = (function(){
  var listeners = {};
  return {
    on: function(e, c){
      listeners[e] = c;
    },
    listen: function(){
      while(true){
        var input = prompt("> ")
        if(input == "exit") break;
        if(listeners[input] && typeof listeners[input] == "function") listeners[input]()
      }
    }
  }
})()

bot.on("hello", function(msg){
  console.log("hey")
})
bot.listen()