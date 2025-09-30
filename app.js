"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let a = m => {
            if (!isNaN(m)) {
                for (let i = 1; i <= m; i++) {
                    $('.col-md-12').append(`<div class="minibox">${m}</div>`);
                }
            } else if (!$.trim($('input').val()) == '') {
                $('.col-md-12').append(`<div class="minibox">${m}</div>`);
            }
        }
        a($('input').val());
        $('input').val('');
    });
});




