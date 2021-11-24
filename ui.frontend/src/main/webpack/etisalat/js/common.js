(function () {
  /*--Select dropdown Start--*/
  //Class
  const FORM_OPTION_CLASS = ".cmp-form-options";
  const ERROR_FIELD_CLASS = "has-error-fields";
  const FLOATING_LABEL_CLASS = "floating-label";
  const FLOATING_LABEL_SELECTED_CLASS = "floating-label-selected";
  const ERROR_CLASS = ".has-error";
  const SELECT_DROPDOWN_WRAP_CLASS = ".cmp-form-options--drop-down";
  const SELECT_DROPDOWN_OPEN_CLASS = "cmp-form-options--open";

  //Selector
  const SELECT_DROPDOWN = $("select.cmp-form-options__field");

  //Element
  const EMPTY_OPTION = `<option></option>`;

  function initSelect2AndFixFormFloatingLabels() {
    /**
     * Default Select2 settings and initialization
     */
    // initialize select 2

    SELECT_DROPDOWN.each(function () {
      const $SELECT = $(this);
      $SELECT.val("");
      $SELECT.prepend(EMPTY_OPTION);

      $SELECT
        .select2({
          width: "100%",
          minimumResultsForSearch: Infinity,
        })
        .on("select2:opening", function () {
          $(this).closest(SELECT_DROPDOWN_WRAP_CLASS).addClass(SELECT_DROPDOWN_OPEN_CLASS);
          $(this).closest(SELECT_DROPDOWN_WRAP_CLASS).find("label").addClass(FLOATING_LABEL_CLASS);
        })
        .on("select2:selecting", function () {
          $(this).closest(SELECT_DROPDOWN_WRAP_CLASS).find("label").addClass(FLOATING_LABEL_SELECTED_CLASS);
        })
        .on("select2:close", function () {
          $(this).closest(SELECT_DROPDOWN_WRAP_CLASS).removeClass(SELECT_DROPDOWN_OPEN_CLASS);
          if (!$(this).closest(SELECT_DROPDOWN_WRAP_CLASS).find("label").hasClass(FLOATING_LABEL_SELECTED_CLASS)) {
            $(this).closest(SELECT_DROPDOWN_WRAP_CLASS).find("label").removeClass(FLOATING_LABEL_CLASS);
          }
        });
    });
  }
  initSelect2AndFixFormFloatingLabels();

  // To remove error class from select dropdown
  SELECT_DROPDOWN.change(function () {
    if ($(this).val() !== null) {
      $(this).closest(FORM_OPTION_CLASS).removeClass(ERROR_FIELD_CLASS);
      $(this).closest(FORM_OPTION_CLASS).find(ERROR_CLASS).remove();
    }
  });
  /*--Select dropdown End--*/
})();
