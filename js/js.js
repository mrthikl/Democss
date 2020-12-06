$(document).ready(function() {
    $("#hover-example").mouseover(function() {
        $(this).attr("src", "image-hover.png");
    });

    $("#hover-example").mouseout(function() {
        $(this).attr("src", "image.png");
    });
});