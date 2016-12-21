//Global Variables




var topics = [
"Stefon",
"Mary Katherine Gallagher",
"Debbie Downer",
"Lonely Island SNL",
"Bronx Beat",
"Spartan Cheerleaders",
"Linda Richman",
"Drunk Uncle",
"Kaitlin SNL",
"Sarah Palin SNL"
];




//Functions

//  $("#addCharacter").on("click", function(event) {
//        event.preventDefault();
//        var character = $("#newCharacterInput").val().trim();
//        topics.push(character);
//        createOrigButtons();
//        console.log(topics);
//        console.log(character);
// });

 // $(".btn").on("click", function() {

$(document).on("click", ".SNL", displayGifs);
createOrigButtons();

 function createOrigButtons(){
    $("#buttonContainer").empty();

    for(var i = 0; i < topics.length; i++){
      var characButton = $("<button>");
      characButton.addClass("SNL btn");
      characButton.attr("data-name", topics[i]);
      characButton.text(topics[i]);
      $("#buttonContainer").append(characButton);
    }
}

function displayGifs(){

      $("#gifContainer").empty();
      var skit = $(this).data("name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q="+skit+"&api_key=dc6zaTOxFJmzC";
      console.log(skit);
      console.log(queryURL);

      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .done(function(response) {
        var results = response.data;
        console.log(results);

        for(var i = 0; i < 10; i++){

        var stillImageURL = results[i].images.fixed_height_still.url;
        var animatedImageURL = results[i].images.fixed_height.url;
        console.log(stillImageURL);
        console.log(animatedImageURL);

        var gifDiv = $("<div class='item .col-md-4 box'>");
        var rating = results[i].rating;
        console.log(rating);
        var printRating = $("<h3>").text("Rating: " + rating);
        var gif = $("<img>");
        gif.attr("src", stillImageURL);
        gif.attr("data-animate", animatedImageURL);
        gif.attr("data-still", stillImageURL);
        gif.attr("data-name", "still");


        $("#gifContainer").append(gifDiv);
        gifDiv.append(printRating);
        gifDiv.append(gif);
      }
});
//Changing gif from still to aniamted//
  $("img").on("click", function(){
      console.log(this);
      var state = $(this).attr("data-name");
      console.log(state);

      var animate = $(this).attr("data-animate");
      console.log(animate);

      var backToStill = $(this).attr("data-still");

    if(state === "still"){
      $(this).attr("src", animate);
      $(this).attr("data-name", "animate");
    }

    else{
      $(this).attr("src", backToStill);
      $(this).attr("data-name", "still");
    }

    });

   $("#addCharacter").on("click", function(event) {
       event.preventDefault();
       var character = $("#newCharacterInput").val().trim();
       topics.push(character);
       createOrigButtons();
       console.log(topics);
       console.log(character);
});







};
