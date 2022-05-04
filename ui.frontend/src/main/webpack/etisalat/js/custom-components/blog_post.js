/* eslint-disable */
export const BLOG_POST_MODULE = () => {
  // number of rows to show for example 4 then 4*12 number bootstrap col = 48
  const btnLoadMore = $(".blogpost-wrapper .action");

  // load more items button
  $(document).on("click", ".blogpost-wrapper .action", function (e) {
    e.preventDefault();
    $(".blogpost-wrapper .item").css("display", "block");
    $(this).hide();
  });

  // search functionality for tile boxes
  $(document).on("keyup", ".search-wrapper input", function () {
    const value = $(this).val() && $(this).val().toLowerCase();
    let searchCount = 0;

    // while searching hide the loadmore button
    btnLoadMore.css("display", "none");

    // iterate items and show the matching results
    $(".blogpost-wrapper .item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

      // count items and show for user how many items they have found
      if ($(this).text().toLowerCase().indexOf(value) > -1) {
        searchCount += 1;
      }
    });
    // show the item found div
    $(".search-results-wrapper").css("display", "block");
    // show the item counted for user input
    if (searchCount > 0) {
      $(".search-count").text(searchCount);
      $(".no-result-found").css("display", "none");
    } else {
      $(".search-count").text("No");
      $(".no-result-found").css("display", "inline-block");
    }
    // show the text user has putted in search
    $(".searchTarget").text('"' + value + '"');

  });

  // clear the search functionality / reset

  $(document).on("click", ".clear-search", function (e) {
    e.preventDefault();
    $(".search-wrapper form .form-group input").val("");
    let numberofitem = $(".cmp-blogpost-search").attr("data-noof-items");

    function makeRowsVisible(maxColCount) {
      let item = $(".blogpost-wrapper .item");
      if (Number(numberofitem) > 0) {
        for (let i = 0; i < Number(numberofitem) - 1; i++) {
          item[i].style.display = "block";
          btnLoadMore.removeClass("hidden");
        }
        for (let i = Number(numberofitem); i < item.length; i++) {
          item[i].style.display = "hidden";
        }
      }
    }
    makeRowsVisible(numberofitem);
    btnLoadMore.css("display", "block");
    $(".search-results-wrapper").css("display", "none");
  });

  const numberofitem = $(".cmp-blogpost-search").attr("data-noof-items");
  if (Number(numberofitem) == 0) {
    btnLoadMore.css("display", "none");
  }

  $(document).on("click", ".blog-post-wrapper.video .img-cover", function () {
    const modalCTA = $(this).closest(".blog-post-wrapper.video").find(".mediaCtaVideo");
    modalCTA.modal().show();
  });
}