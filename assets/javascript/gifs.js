//Wait for page to safely load
$(document).ready(function() {

    //Initialize array of topics
    var topics = [
        "Sushi","Avocados","Coconuts",
        "Batman","Han Solo","Yoda",
        "GTI","VW","Ninjas",
        "Rick and Morty","Pickle Rick","Black Hole",
    ];

    //Function to dynamically add buttons 
    function makeButtons() {

        //Loop array
        for (i = 0; i < topics.length; i++) {

            //Make buttons and append
            var b = $("<button>");
            b.addClass("topics");
            b.attr("topic", topics[i]);
            b.text(topics[i]);
            $("#gifButtons").append(b);
        }
    }

    //Listen submit button clicks
    $("#addGif").on("click", function() {

        //Grab new topic text
        var newTopic = $("#topic-input").val().trim();

        //Add new topic to the array
        topics.push(newTopic);

        //Call makeButtons function to make buttons
        makeButtons();

        return false;
    });

    //Call makeButtons function
    makeButtons();
});

