// // fade in the popup
// $("#overlay").fadeIn(1500);

// // this is an extra action that can be called any time
// $(".close").click(function () {
//     $("#overlay").hide();
// });

// $(window).load(function () {

//     var popup = $("#submitBtn");

//     popup.submit(function (event) {
//         var $this = $(this);
//         if (!$this.hasClass('paused')) { // check if it isn't in a pause state
//             event.preventDefault(); // prevent the submission
//             $this.addClass('paused'); // use this class as a flag
//             $("#overlay").append('SUCCESS!'); // add the success message
//             setTimeout(function () {
//                 $("#overlay").append('  ...');
//                 $(".form-button").trigger('click'); // mechanically trigger a second click
//             }, 2000); // define a delay
//         }
//     })

//     popup.validate({
//         rules: {
//             first_name: "required",
//             last_name: "required",
//             email: {
//                 required: true,
//                 email: true
//             },
//             phone: {
//                 customphone: 'customphone',
//                 required: false
//             }
//         },
//         messages: {
//             first_name: "Please enter your first name",
//             last_name: "Please enter your last name",
//             email: {
//                 required: "Please enter your email address",
//                 email: "Please enter a valid email address"
//             }
//         },
//         success: function (event) {
//             //   alert('success message');
//             // do other things for a valid form

//         },
//         submitHandler: function (form, event) {
//             // do other things for a valid form

//         }
//     });

// });



// $(document).ready(function () {
//     $("#newsbuttonsubmit").click(function (e) {
//         e.preventDefault();
//        /* Get some values from elements on the page: */
//         var values = $(this).serialize();
//         $.ajax({
//             url: "submit.php",
//             type: "post",
//             data: values            
//         });
//         $("#form-popup-box").dialog({modal: true, height: 200, width: 300 });



//     });
// });

// $(document).ready(function () {
// $('#newsbuttonsubmit').on('submit', function(e){
//     e.preventDefault(); //this stops the form submit + refresh 
//         // $.ajax({ 
//         //     data:    {data_field: 'value'},
//         //     type:    'post',
//         //     url:     '/path/to/script.php',
//         //     success: function(r) {$('#form-popup-box').css('display', 'block')},
//         //     error:   function(r) {alert('error'); console.log(r)}
//         // });

       
//     $('#form-popup-box').show();
        
//         // $('#close').on('click', function () {
//         //     $('.center').hide();
//         //     $('#show').show();
//         // })
// });
// });



$(document).ready(function () {
    $("#newsbuttonsubmit").click(function (e){
        e.preventDefault(); //this stops the form submit + refresh 
        $('#form-popup-box').show();
        $('body').css('overflow', 'hidden')
    });
});