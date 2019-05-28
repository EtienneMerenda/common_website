/* Gestion du click pour le menu latéral */

$(function() {
    $("#toggle_button").click(function() {
        if ($('#wrapper').attr("class") == "sidebar_inactive") {
            $('#wrapper').attr("class", "sidebar_active");
            $('#menu').attr('class', 'active')
            $('#header').attr('class', 'sidebar_active')
        }
        else {
            $('#wrapper').attr("class", "sidebar_inactive")
            $('#menu').attr('class', 'inactive')
            $('#header').attr('class', 'sidebar_inactive')
        }
    })
});

