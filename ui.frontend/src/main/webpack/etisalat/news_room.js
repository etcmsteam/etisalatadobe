    $(document).ready(function () {
        window.pagesize = Number($('.cmp-newsroom-search').attr('data-noof-items'));
        window.newsroomlist = $('.swiper-wrapper').attr('data-sly-list.pageItem');
        window.selectedCategory = "news-all"

        var allCategories = $('.filter-news-results .f-news-room').filter("[data-cat='" + selectedCategory + "']").prevObject;
        window.fixedCategories = allCategories;
        // extract and create a new array of all categories
        function createArrayOfCategories(catArr) {
            var categoryArr = [];
            for (var i = 0; i < catArr.length; i++) {
                categoryArr.push(catArr[i].attributes['data-cat']?.value);
            }
            return categoryArr;
        }
        var categoriesArr = createArrayOfCategories(allCategories);       
        // count each category and return an object
        var countEachCategory = categoriesArr.reduce(function (allNames, name) {
            if (name in allNames) {
                allNames[name]++;
            } else {
                allNames[name] = 1;
            }
            return allNames;
        }, {});


        // take array of categories and create an object format as per select2 dropdown
        function categoryObj(createCategoryObj) {
            var catTemp = [];
            var index = 0;
            for (var prop in createCategoryObj) {
                catTemp.push({
                    id: prop,
                    value: prop,
                    text: prop.replace('-', ' ') + ' (' + createCategoryObj[prop] + ')'
                });
                index++;
            }
            return catTemp;
        }
        var categoryObjResult = categoryObj(countEachCategory);

        if ($('html').attr('lang') === 'ar') {
            $('select.form-control option')[0].text = 'جميع النتائج' + ' (' + categoriesArr.length + ')';
        } else {
            $('select.form-control option')[0].text = 'All Results' + ' (' + categoriesArr.length + ')';
        }

        $('select.form-control').select2({
            data: categoryObjResult
        });



        /*Filters */
        window.filterActive;




        /*Load more content with jQuery */



        $('.loading-tile').slice(0, pagesize).addClass('active');
        $('.loading-tile').addClass('temp');
        if ($('.tile-boxes-section-wrapper').find('.temp').length <= 3) {
            $(".news-loadmore--btn").css('display', 'none');
        }




    });

    function filterCategory(category) {
        if (filterActive != category) {
            // reset results list
            $('.filter-news-results .f-news-room').removeClass('active');
            $('.filter-news-results .f-news-room').removeClass('temp');
            // elements to be filtered
            var tempItems = $('.filter-news-results .f-news-room').filter('[data-cat="' + category + '"]').addClass('temp');
            if (tempItems.length > 3) {
                $(".news-loadmore--btn").css('display', 'block');
            } else {
                $(".news-loadmore--btn").css('display', 'none');
            }
            $('.filter-news-results .f-news-room').filter('[data-cat="' + category + '"]').slice(0, 3).addClass('active');
            // reset active filter
            filterActive = category;
        }
    }

    $('#filtering-select').on('click', function () {
        //var filteringList = $('#filtering-select--menu')

        if ($('#filtering-select--menu').hasClass('select2-container--open')) {

            $('#filtering-select--menu').removeClass('select2-container--open');

        } else {
            $('#filtering-select--menu').addClass('select2-container--open');
        }

    });


    $('#NewsloadMore').on('click', function (e) {
        var x = pagesize;
        var elements = $(this).closest('.tile-boxes-section-wrapper').find('.temp');
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1200);
        if (x + 3 <= elements.length) {
            x += 3;
            pagesize = x;

            $(elements).slice(0, x).addClass('active');
        } else {
            $(elements).slice(0, elements.length).addClass('active');
            x = $('.cmp-newsroom-search').attr('data-noof-items');
            pagesize = x;
            $(".news-loadmore--btn").css('display', 'none');
        }

    });

    $('.select2-results__option').on('click', function (e) {
        var alloptions = $('.select2-results__option')
        // var allCategories = $('.filter-news-results .f-news-room').filter('[data-cat="news-all"]').prevObject;
        //allCategories = fixedCategories.filter("[data-cat='" + e.target.getAttribute('value') + "']");
        selectedCategory = e.target.getAttribute('value');
        var newsitemlist = fixedCategories.filter("[data-cat='" + selectedCategory + "']");

        // newsitemlist.replaceWith(allCategories);
        $('.filter-news-results .f-news-room').replaceWith(newsitemlist);
        $('#filtering-select--menu').removeClass('select2-container--open');

        for (var i = 0; i < alloptions.length; i++) {
            if (alloptions[i].getAttribute('class').indexOf("select2-results__option--highlighted") != -1) {
                alloptions[i].classList.remove("select2-results__option--highlighted")
            }
            if (alloptions[i].getAttribute('value') == selectedCategory) {
                alloptions[i].classList.add("select2-results__option--highlighted")
            }
        }
        pagesize = Number($('.cmp-newsroom-search').attr('data-noof-items'));
        $('.loading-tile').slice(0, newsitemlist.length).addClass('active');
        $('.loading-tile').slice(0, pagesize).removeClass('active');
    });
