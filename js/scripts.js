$(function () {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }
    });
});