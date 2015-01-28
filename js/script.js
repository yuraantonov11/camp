/**
 * Created by Yura on 26.01.2015.
 */
function resizing (id){
    id.height($(window).height());
    id.width($(window).width());
}

resizing($("#one"));
resizing($("#two"));