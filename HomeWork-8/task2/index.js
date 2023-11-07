/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
    const links = $("a");
    links.each(function(i,el) {
        if ($(el).attr("href").startsWith("https://")) $(el).attr("target", "\_blank");
    });
});
