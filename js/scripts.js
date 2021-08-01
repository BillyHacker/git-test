


$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");

        }
    });
});

// Function for Login and reserve button modal:
$(function () {

    $("#reserveButton").click(function () {
        $("#reserveModal").modal();
    });

    $("#loginButton").click(function () {
        $("#loginModal").modal();
    });

});
