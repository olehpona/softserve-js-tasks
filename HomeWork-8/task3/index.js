/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
    const h3 = $("h3");
    h3.each(function(i,el) {
        const div = $(el).next("div");
        div.insertBefore(el);
    })
});
