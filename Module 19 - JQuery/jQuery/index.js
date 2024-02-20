// $("button").click(function(){
//     $("h1").css("color","purple");
//     });


// $("input").keypress(function(event){
//     $("h1").html(event.key);
// })

//chaning methods
$("button").click(function(){
     $("h1").slideUp().slideDown().animate({opacity:"20%"});
    });