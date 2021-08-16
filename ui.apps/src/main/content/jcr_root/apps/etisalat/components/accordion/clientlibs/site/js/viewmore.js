


$( ".viewall" ).click(function() {
$(".cmp-viewall").children().each(function(index) {
var numberOfItems = $('.cmp-viewall').attr('data-items-show');
    if(index > numberOfItems) {
$(this).addClass('hidden');
    }
    else{

        $(this).removeClass('hidden');
    }
});
});
