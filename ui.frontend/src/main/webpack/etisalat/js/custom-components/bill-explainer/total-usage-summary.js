
  var tour_stepsTotalUsage = $("#total-usage-summary").data("bill-explainer");
        console.log("New tour_stepsTotalUsage Json data --", tour_stepsTotalUsage);
        var jq = $.noConflict(true);
        $(function () {
          jq.each(tour_stepsTotalUsage, function (i, step) {
            step["content"] += '<span class="tour-pager">' + (i + 1) + "/" + tour_stepsTotalUsage.length + "</span>";
            var percent = parseInt(((i + 1) / tour_stepsTotalUsage.length) * 100);
          });
          var tourEnd = false;
          var tour = new Tour({
            backdrop: true,
            storage: false,
            animation: true,
            smartPlacement: true,
            steps: tour_stepsTotalUsage,
            onNext: function (tour) {
              tour._options.steps[1].placement = "top";
              tour._options.steps[2].placement = "top";
            },

            onPrev: function (tour) {
              tour._options.steps[1].placement = "top";
              tour._options.steps[2].placement = "top";
            },

            template:
              "<div class='exp-popover popover tour'><h3 class='popover-title'></h3><div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'><button class='btn btn-default prev' data-role='prev'></button><button class='btn btn-default next' data-role='next'> </button></div><button class='btn btn-default btn-end' data-role='end'><span class='close-icon'></span></button></nav></div>",
            onShow: function () {
              setTimeout(function () {
                jq(".popover").append(
                  "<div class='zooming-contorls'><button type='button' id='zoom-in'><svg><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#zoomplus'></use></svg></button><button type='button' id='zoom-out'><svg><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#zoomminus'></use></svg></button></div>",
                );
                jq("#zoom-in")
                  .off("click")
                  .on("click", function () {
                    updateZoom(0.1);
                  });
                jq("#zoom-out")
                  .off("click")
                  .on("click", function () {
                    updateZoom(-0.1);
                  });
              }, 1000);
            },
            onEnd: function (tour) {
              tourEnd = true;
            },
          });
          zoomLevel = 0.5;
          var updateZoom = function (zoom) {
            zoomLevel += zoom;
            jq(".zooming").css({ zoom: zoomLevel, "-moz-transform": "scale(" + zoomLevel + ")", width: "180vw" });
          };
          //tour.start();
          tour.init();

          jq("#Step-1").click(function () {
            gotoSlide(0);
          });
          jq("#Step-2").click(function () {
            tour._options.steps[1].placement = "top";
            gotoSlide(1);
          });
          jq("#Step-3").click(function () {
            tour._options.steps[2].placement = "top";
            gotoSlide(2);
          });
          var gotoSlide = function (slideNum) {
            if (tourEnd == true) {
              tour.restart();
              tourEnd = false;
            }
            tour.goTo(slideNum);
          };
        });
