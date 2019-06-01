// add burger
$("#add-burger").on("click", function (event) {
    event.preventDefault();

    var burgerAdded = $("#burger-form").val().trim();
   // console.log(burgerAdded);

    var newBurger = {
        burger_name: burgerAdded,
        devoured: "0"
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("I added a new burger");
        location.reload();
    });
});

$("#devour-it-button").on("click", function (event) {
    event.preventDefault();
    console.log("You clicked the devour button");

    var id = $(this).data("id");
    var devouredStatus = {
        devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredStatus
    }).then (function() {
        console.log("You ate it!");
        location.reload();
    });
})
