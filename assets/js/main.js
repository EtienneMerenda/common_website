/* Gestion du click pour le menu latéral */

$(function() {
    $("#toggle_button").click(function() {
        if ($('#wrapper').attr('class') == 'sidebar_active'){
            $('#wrapper').attr('class', 'sidebar_inactive');
            $('#wrapper').css({'width': '100%', 'margin-left': '0%'});
            $('#menu').css('left', '-40%');
            $('#header').css({'left': '2.2%'});
            
        }
        else{
            $('#wrapper').attr('class', 'sidebar_active');
            $('#wrapper').css({'width': '80%', 'margin-left': '20%'});
            $('#menu').css('left', '0%');
            $('#header').css({'left': '22.2%'});

        }})
});