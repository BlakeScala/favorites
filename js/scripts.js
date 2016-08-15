$(document).ready(function(){
  $("form").submit(function(event){
  var favorite1 = $("input#favorite1").val();
  var favorite2 = $("input#favorite2").val();
  var favorite3 = $("input#favorite3").val();

  var favoriteThings = [favorite1 , favorite2 , favorite3];

  var favoriteThings2 = [favorite2, favorite1, favorite3];

  favoriteThings2.push(favoriteThings[0]);
  favoriteThings2.push(favoriteThings[1]);
  favoriteThings2.push(favoriteThings[2]);

   $("#output").append("<li>" + favoriteThings2[0] + "</li>");
   $("#output").append("<li>" + favoriteThings2[1] + "</li>");
   $("#output").append("<li>" + favoriteThings2[2] + "</li>");
   $("#output").append("<li>" + favoriteThings2[3] + "</li>");
   $("#output").append("<li>" + favoriteThings2[4] + "</li>");
   $("#output").append("<li>" + favoriteThings2[5] + "</li>");

  event.preventDefault();
  });
});
