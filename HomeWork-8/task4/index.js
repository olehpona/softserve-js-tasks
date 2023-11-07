$(document).ready(function() {
    $("input[type='checkbox']").change(function() {
        if ($("input[type='checkbox']:checked").length >= 3) {
            $("input[type='checkbox']").prop("disabled", true);
        }
    });
});