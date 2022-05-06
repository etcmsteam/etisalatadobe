export const POPOVER = () => {
    function truncate (elem, limit) {
        // Make sure an element and number of items to truncate is provided
        if (!elem || !limit) return;

        // Get the inner content of the element
        const content = elem.textContent.replace(/\r?\n|\r|\s+/g, " ").trim();
        let firstcontent, lastcontent;
        // Convert the content into an array of words
        content = content.split(" ");
        if (content.length > limit) {
            for (let i = 0; i < limit; i++) {
                if (typeof firstcontent == "undefined") {
                    firstcontent = content[i];
                } else {
                    firstcontent = firstcontent + " " + content[i];
                }
            }
            for (let b = limit; b < content.length; b++) {
                if (typeof lastcontent == "undefined") {
                    lastcontent = content[b];
                } else {
                    lastcontent = lastcontent + " " + content[b];
                }
            }
        }
        return [firstcontent, lastcontent];
    };

    const text = document.querySelectorAll('.popover-content p');
    let truncatedText;
    const dotsSingle = document.querySelectorAll('.popover-dots');

    for(let k = 0; k<text.length; k++){
        truncatedText = truncate(text[k], 50);
        if(typeof(truncatedText[k]) != 'undefined') {
            text[k].innerText = (truncatedText[0]);
            dotsSingle[k].dataset.content = truncatedText[1];
            $(dotsSingle[k]).removeClass('hidden');
        }
    }

    $('.popover-dots').on('click', function () {
        $('.popover-content .popover.fade.top').not('.in').remove();
        if(navigator.userAgent.indexOf('Chrome') == -1) {
            $(this).popover('show');
        }
    });


    const dots = $('.popover-dots');
    $('.popover-content .popover.fade.top').remove();
    dots.popover({
        trigger:"focus",
        placement: 'top',
        container: '.popover-content'
    });
    if(navigator.userAgent.indexOf('Chrome') == -1){
        $('body').on('click', function (e) {
            //did not click a popover toggle or popover
            if (($(e.target).data('toggle') !== 'popover') === true) {
                $('[data-toggle="popover"]').popover('hide');
            }
        });
    }
};
