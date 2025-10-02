"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        if (!$.trim($('input').val()) == '') {

            let n = (m) => {
                for (let i = 1; i <= m; i++) {
                    $('.col-md-12').append(`<div class="minibox">${m}</div>`);
                }
            }

            let s = (h) => isNaN(h)
                ? $('.col-md-12').append(`<div class="minibox">${h}</div>`)
                : '';

            n($('input').val());
            s($('input').val());
        }

        $('input').val('');

    });
});




