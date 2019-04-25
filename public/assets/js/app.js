$(document).ready(function() {
    $(".devour").on("click", function() {
        var newState;
        var id = $(this).data('id')
        if ($(this).data("state") === 0) {
            newState = {
                devoured: 0
            }
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            console.log("Updated!")
        })
    });

    $("#addBurger").on("click", function() {
        event.preventDefault();
        var burgerName = $("#txtAdd").val().trim();
        if (burgerName === '') {
            $("#frmAdd").addClass("has-error");
        } else {
            $("#frmAdd").removeClass("has-error");
            $.post("/api/burgers/" + burgerName, function(res) {
                console.log("Inserted " + burgerName + "!");
                location.reload();
            });
        };
    });
});