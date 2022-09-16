$("button").click(function(){
  var random = Math.floor(Math.random()*101);
  $("h3").text("🧸________"+random+"%________🧸");
   $("#ele")[0].scrollIntoView();
});
