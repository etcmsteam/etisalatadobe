import $ from 'jquery';

window.dt = require('datatables.net');

const CUSTOM_TABLE_COMPONENT = '.custom-datatable';
$(function() {

	function enableExternalSorting(elem, table) {
		let columnIndex = []
		const sortableColumn = $(elem).attr('data-column-sort')
		if (sortableColumn && sortableColumn !== '[]') {
			columnIndex = sortableColumn.match(/\d+/g).map(Number);
			const ul = $('ul.dropdown-menu', elem)[0];
			const anchors = ul.querySelectorAll('a');
			anchors.forEach(el => el.addEventListener('click', event => {
				const sortingType = event.target.getAttribute("data-sort");
				table.order([
					[columnIndex, sortingType]
				]).draw();
			}));
		}
	}

	function addDataAttributes(table) {
		$('tr', table).each(function(index) {
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

	function initializeDataTable(elem) {

		const className = $(elem).attr('data-class');
		const sortableColumn = $(elem).attr('data-column-sort')
		const hiddenColumn = $(elem).attr('data-hide-columns')
		const showMobileView = $(elem).attr('data-mobile-view')
		let pageLimit = $(elem).attr('data-page-limit');
		const noSearchResultsText = $(elem).attr('data-no-search-results-text');

		var allColumnSortable = false;

		const table = $('table', elem)[0];
		$(table).addClass(className);
		addDataAttributes(table);
		let columnIndex = [];

		if (sortableColumn && sortableColumn !== '[]') {
			if (sortableColumn.indexOf("_all") != -1) {
				columnIndex = '_all';
				allColumnSortable = true;
			} else {
				columnIndex = sortableColumn.match(/\d+/g).map(Number);
			}
		}
		if (!pageLimit && $('tr', table).length) {
			pageLimit = $('tr', table).length;
		}
		// In authoring mode the page limit sets to  number of rows configured
		if ($(table).hasClass('custom-datatable_edit')) {
			const pageEditLimit = $(table).attr('data-page-limit-edit');
			pageLimit = pageEditLimit || pageLimit;
		}
		const tabl = $(table).DataTable({
			"language": {
			    "zeroRecords": noSearchResultsText,
				"info": "_START_ to _END_ of _TOTAL_ records",
				"oPaginate": {
					sNext: '<span class="pagination-next"></span>',
					sPrevious: '<span class="pagination-previous"></span>'
				}
			},
			'createdRow': function(row, data, rowIndex) {
				if (showMobileView && showMobileView == "true") {
					$.each($('td', row), function(colIndex) {
						const th = $('th', table)[colIndex];
						$(this).attr('data-label', $(th).text());
					});
				}
			},

			"bLengthChange": false,
			"pageLength": Number(pageLimit),
			"fnInfoCallback": function(oSettings, iStart, iEnd, iMax, iTotal, sPre) {
				const currentPage = this.api().page.info().page + 1;
				return "Page " + currentPage + " of " + this.api().page.info().pages;
			},
			drawCallback: function(settings) {
				const pagination = $('.data-table__pagination', table);
				const info = $('.data-table__info', table);
				pagination.toggle(this.api().page.info().pages > 1);
				info.toggle(this.api().page.info().pages > 1);
			},

			initComplete: function(settings, json) {
				$('.dataTables_paginate', table).appendTo($('.data-table__pagination', table));
				$('.dataTables_info', table).appendTo($('.data-table__info', table));
			},
			order: [],
			columnDefs: [{
					orderable: true,
					targets: columnIndex
				},
				{
					orderable: allColumnSortable,
					targets: '_all'
				}

			]
		});
		$('.advanced-table-search', elem).on( 'keyup', function () {
        tabl.search(this.value).draw();
        });
		return tabl;
	}

	function initializeTable(component) {
		$(component).each((index, elem) => {
			const table = initializeDataTable(elem);
			enableExternalSorting(elem, table);
		});
	}
	initializeTable(CUSTOM_TABLE_COMPONENT);
});