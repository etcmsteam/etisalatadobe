const CUSTOM_TABLE_COMPONENT = '.custom-datatable';
$(function() {

	function initializeDataTable(elm,className) {
	    $(elm).addClass(className);
		const pageLimit = $(elm).attr('data-page-limit');
		$('td', elm).each(function(index) {
			const self = $(this);
			const columnIndex = $(this).parent().find('td').index(this);
			const th = $('th', elm)[columnIndex];
			self.attr("data-label", $(th).text())
		});
		$('tr', elm).each(function(index) {
			$(this).attr("role", "row")
			if (index > 0) {
				if (index % 2 == 0) {
					$(this).attr("class", "even")
				} else {
					$(this).attr("class", "odd")
				}
			}
		});

	}

	function initializeTable(component) {
		$(component).each((index, elm) => {
		const className = $(elm).attr('data-class');
		    const table = $('table', elm)[0];
			initializeDataTable(table,className);
		});
	}
	initializeTable(CUSTOM_TABLE_COMPONENT);
});