import $ from 'jquery';

window.dt = require('datatables.net');

const CUSTOM_TABLE_COMPONENT = '.custom-datatable';
$(function() {

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
		const pageLimit = $(elem).attr('data-page-limit');
		const sortableColumn = $(elem).attr('data-column-sort')
		const hiddenColumn = $(elem).attr('data-hide-columns')

		const table = $('table', elem)[0];
		$(table).addClass(className);
		addDataAttributes(table);
		let columnIndex = [];

		if (sortableColumn && sortableColumn !== '[]')
			columnIndex = sortableColumn.match(/\d+/g).map(Number);
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
				"info": "_START_ to _END_ of _TOTAL_ records",
				"oPaginate": {
					sNext: '<span class="pagination-next"></span>',
					sPrevious: '<span class="pagination-previous"></span>'
				}
			},
			"bLengthChange": false,
			"pageLength": Number(pageLimit),
			"fnInfoCallback": function(oSettings, iStart, iEnd, iMax, iTotal, sPre) {
			    const currentPage = this.api().page.info().page + 1 ;
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
					orderable: false,
					targets: '_all'
				}
			],
			'createdRow': function(row, data, rowIndex) {
				// Per-cell function to do whatever needed with cells
				$.each($('td', row), function(colIndex) {
					// For example, adding data-* attributes to the cell
					const th = $('th', table)[colIndex];
					$(this).attr('data-label', $(th).text());
				});
			}
		});

	}

	function initializeTable(component) {
		$(component).each((index, elem) => {
			initializeDataTable(elem);
		});
	}
	initializeTable(CUSTOM_TABLE_COMPONENT);
});