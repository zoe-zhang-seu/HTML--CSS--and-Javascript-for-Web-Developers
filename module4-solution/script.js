

(function (window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var n=0;n< names.length; n++){
        var firstSymbol = names[n].chartAt(0).toLowerCase();
        if(firstSymbol ==="j"){
          window.byeSpeaker.greet(names[i]);
        }else{
          window.helloSpeaker.greet(names[i]);
        };
    }
}）;