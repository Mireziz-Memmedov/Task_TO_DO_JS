"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let text = $('input').val().trim();
    //     if (text === '') return;
    //     if (isNaN(text)) {
    //         $('.col-md-12').append(`<button>${text}</button>`);
    //     } else {
    //         let a = parseInt(text);
    //         for (let i = 1; i <= a; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);
    //         }
    //     }
    //     $('input').val('');
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let a = $('input').val().trim();

    //     if (isNaN(a)) {
    //         $('.col-md-12').append(`<button>${a}</button>`);
    //     } else {
    //         let r = parseFloat(a);
    //         for (let i = 1; i <= r; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);

    //         }
    //     }
    //     $('input').val('');

    // });




    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         if (isNaN(m)) {
    //             $('.col-md-12').append(`<button>${m}</button>`);
    //         } else {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<button>${i}</button>`);
    //             }
    //         }
    //     }
    //     a($('input').val());
    //     $('input').val('');
    // });



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

    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         m = parseFloat(m);
    //         for (let i = 1; i <= m; i++) {
    //             $('.col-md-12').append(`<button>${m}</button>`);

    //         }
    //     }
    //     a($('input').val());
    // });













});




