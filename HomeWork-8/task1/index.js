
$(document).ready(function () {
    const h1 = $(".head");
    h1.each(function (i,el){
        $(el).css("background-color", "green");
        $(el).find(".inner").each(function (i,el){
            $(el).css("font-size", "35px");
        })

    })
});
