$(document).ready(function(){
    $("#click").on("click",function(){
       alert("Clicked");
    });
    $("#dclick").on("dblclick",function(){
       alert("Double Clicked");
    });
    $("#mousehover").on("mouseover",function(){
       alert("Mouse was Hovered");
    });
    $("#mouseout").on("mouseout",function(){
       alert("Mouse was Out");
    });
    $("#focus").on("focus",function(){
          $("#msg").css({"display": "block", "color": "red"});
    });
    $("#focus").on("focusout",function(){
          $("#msg").css({"display": "none"});
    });
    $("#keydown").on("keydown",function(){
          $("#keydown").css('background', 'red');
    });
    $("#keydown").on("keyup",function(){
          $("#keydown").css('background', 'green');
    });
});
