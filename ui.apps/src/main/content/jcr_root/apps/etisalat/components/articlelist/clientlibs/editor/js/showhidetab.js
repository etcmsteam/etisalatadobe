(function(window, document, $) {
    "use strict";
    
    var searchResultsTabSelector = '.articlelist-searchresult-tab';
    var layoutDropdownSelector = 'coral-select[name="./searchType"]';
    var dialogContentSelector = ".cmp-articlelist__editor";
    var $freeTextSearch = "freetextsearch";


    $(document).on("dialog-loaded", function(e) {
        var $dialog = e.dialog;
        var $dialogContent = $dialog.find(dialogContentSelector);
        var dialogContent = $dialogContent.length > 0 ? $dialogContent[0] : undefined;

        if (dialogContent) {
            var $actionsEnabledCheckbox = $dialogContent.find(layoutDropdownSelector);
            var layout = $actionsEnabledCheckbox.adaptTo("foundation-field").getValue();
            if (layout == $freeTextSearch) {               
                showTabOnLoad(searchResultsTabSelector);
            } else {               
                hideTabOnLoad(searchResultsTabSelector);
            }
        }

    });

    $(document).on("click", ".cq-dialog-submit", function(e) {
        var layout = $(".articlelist-searchtype-displaylayout coral-select-item:selected").val();       
        if(layout != $freeTextSearch) {           
            $(searchResultsTabSelector).empty();
        }
    });

    $(document).on("change", '.articlelist-searchtype-displaylayout', function(e) {
        var layoutSelectedVal = $(this).val();
        showHideHandler(layoutSelectedVal)
    });

    function showHideHandler(e) {
        if (e == $freeTextSearch) {            
            showTab(searchResultsTabSelector);
        } else {           
            hideTab(searchResultsTabSelector);
        }
    }

    function hideTab(e) {
        var coralTab = $(e);
        var coralPanelId = coralTab.closest('coral-panel').attr('aria-labelledby');
        $('#' + coralPanelId).hide();
    }

    function showTab(e) {
        var coralTab = $(e);
        var coralPanelId = coralTab.closest('coral-panel').attr('aria-labelledby');
        $('#' + coralPanelId).show();
    }
    
    function hideTabOnLoad(e) {
	    setTimeout(function() {
	        hideTab(e);
	    }, 250);
    }

	function showTabOnLoad(e) {
	    setTimeout(function() {
	        showTab(e);
	    }, 250);	
	}
    
})(window, document, Granite.$);