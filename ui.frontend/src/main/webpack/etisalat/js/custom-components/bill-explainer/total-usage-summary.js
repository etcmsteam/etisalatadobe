$(document).ready(function() {
    console.log('animation loadinding.');
   // var $ = $;
    var tour_stepsTotalUsage = $(".billing-report-section div").find("[data-bill-explainer]");
    console.log("find the data attribute-", tour_stepsTotalUsage);
    tour_stepsTotalUsage = tour_stepsTotalUsage && JSON.parse(tour_stepsTotalUsage);
    console.log('tour_stepsTotalUsage JSon data --', tour_stepsTotalUsage);
      // $.ajax({
      //   type: "GET",
      //   async: false,
      //   url: currentUrlPath + "/assets/mock-data/explainer/" + file,
      //   success: function (res) {
      //     // console.log(res);
      //     tour_stepsTotalUsage = res;
      //   },
      //   error: function () {
      //     // return an error
      //     return [500, { success: false, message: "Ops, something went wrong..." }, {}];
      //   },
      // });

   //   $(function () {
        $.each(tour_stepsTotalUsage, function (i, step) {
          step["content"] += '<span class="tour-pager">' + (i + 1) + "/" + tour_stepsTotalUsage.length + "</span>";
          var percent = parseInt(((i + 1) / tour_stepsTotalUsage.length) * 100);
        });
        var tourEnd = false;
        var tour = new Tour({
          backdrop: true,
          storage: false,
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
            "<div class='exp-popover popover tour'><h3 class='popover-title'></h3><div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'><button class='btn btn-default prev' data-role='prev'></button><button class='btn btn-default next' data-role='next'> </button></div><button class='btn btn-default btn-end' data-role='end'><svg><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#cross'></use></svg></button></nav></div>",
          onShow: function () {
            setTimeout(function () {
              $(".popover").append(
                "<div class='zooming-contorls'><button type='button' id='zoom-in'><svg><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#zoomplus'></use></svg></button><button type='button' id='zoom-out'><svg><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#zoomminus'></use></svg></button></div>",
              );
              $("#zoom-in")
                .off("click")
                .on("click", function () {
                  updateZoom(0.1);
                });
              $("#zoom-out")
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
          $(".zooming").css({ zoom: zoomLevel, "-moz-transform": "scale(" + zoomLevel + ")", width: "180vw" });
        };

        //tour.start();
        tour.init();

        $("#totalUsageStep1").click(function () {
            console.log("totalUsageStep1");
          gotoSlide(0);
        });
        $("#totalUsageStep2").click(function () {
             console.log("totalUsageStep2");
          tour._options.steps[1].placement = "top";
          gotoSlide(1);
        });
        $("#totalUsageStep3").click(function () {
             console.log("totalUsageStep3");
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
     // });
    });
