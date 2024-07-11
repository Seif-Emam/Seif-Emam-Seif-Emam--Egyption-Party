$('#togalle .singer').click(function () {

    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);


});



let contianerWidth = $('.sidebar').innerWidth()
console.log(contianerWidth);
$('#closebtn').click(function () {
    $('.sidebar').animate({ width: `-${contianerWidth}` }, 500);
    $(".h-content").animate({ marginLeft: '0px' }, 500);
    $("#openNav").animate({ marginLeft: '0px' }, 500);



});



$("#openNav").click(function () {
    $(".sidebar").animate({ width: '250px' }, 500);
    $(".h-content").animate({ marginLeft: '250px' }, 500);
    $("#openNav").animate({ marginLeft: '250px' }, 500);

});


setInterval(function() {


let endDate = new Date("2024-12-31T23:59:59").getTime();
let dateTimeNow = new Date().getTime();

let remainingTime = endDate - dateTimeNow;

let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
$("#Days").html(days + " D ");
$("#Hours").html(hours + " H ");
$("#Minutes").html(minutes + " M " );
$("#Seconds").html(seconds + " S " );




});


// $(document).ready(function() {
//        $('#Textarea[maxlength]').keyup(function(){
//           var max = parseInt($(this).attr('maxlength'));
//      
//           if($(this).val().length > max){
//              $(this).val($(this).val().substr(0, max));
//           }
//           
//           $(this).parent().find('#chars').html(max - $(this).val().length);
//        });  
//     }); 



$('#Textarea[maxlength]').keyup(function(){
    var max =parseInt($(this).attr('maxlength'));

    if($(this).val().length > max){

          $(this).val($(this)).val().substr(0,max);


    }
    $(this).parent().find('#chars').html(max- $(this).val().length);
});