//
// $(document).ready(function () {
//   $(".content_toggle").click(function () {
//     $(".content_block").toggleClass("hide");
//     if ($(".content_block").hasClass("hide")) {
//       $(".content_toggle").html("Подробнее");
//     } else {
//       $(".content_toggle").html("Скрыть");
//     }
//     return false;
//   });
// });

// $(".content_toggle2").click(function () {
//   $(".content_block2").toggleClass("hide");
//   if ($(".content_block2").hasClass("hide")) {
//     $(".content_toggle2").html("Подробнее");
//   } else {
//     $(".content_toggle2").html("Скрыть");
//   }
//   return false;
// });

// goods switcher buttons
(() => {
  function switcher(wrapper) {
    const elements = wrapper.querySelectorAll(".btn__switch");
    const ACTIVE_CLASS_NAME = "btn__switch_active";

    function toggleOff() {
      for (const element of elements) {
        element.classList.remove(ACTIVE_CLASS_NAME);
      }
    }

    function toggleOn() {
      toggleOff();
      this.classList.add(ACTIVE_CLASS_NAME);
    }

    for (const element of elements) {
      element.addEventListener("click", toggleOn);
    }
  }

  const switchers = document.querySelectorAll(".btn__container-switch");

  for (const el of switchers) {
    switcher(el);
  }
})();
//  END goods switcher buttons

// content for goods switcher buttons
$("[data-open-block").on("click", function () {
  const activeCls = "is-active";

  $("[data-content]").removeClass(activeCls);
  $(`[data-content="${$(this).data("open-block")}"`).addClass(activeCls);
});
// END content for goods switcher buttons

// slick options
$(".multiple-items").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        // centerPadding: '100px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".multiple-items1").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        // centerPadding: '100px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// END slick options

// js slider initialization
$(".js-range-slider").ionRangeSlider({
  skin: "modern",
});
// END js slider initialization

// calc
$("input.calc").change(function () {
  var goods_price = parseInt($("#goods_price").val());
  var ad = parseInt($("#ad").val());
  var price = parseInt($("#price").val());
  var quantity = parseInt($("#quantity").val());
  var dopprodagi = parseInt($("#dopprodagi").val());
  var komisija = 4200;
  var ne_vikup = 0.3;

  var zatraty_na_vikup = goods_price + ad + komisija;
  var zatraty_na_vozvrat = (ad + komisija) * ne_vikup;

  var zatraty_na_vikup1 = zatraty_na_vikup + zatraty_na_vozvrat;

  if ($("#dopprodagi").prop("checked")) {
    var summary_checked = Math.ceil((price - zatraty_na_vikup1) * quantity);
    var summary_total = summary_checked + summary_checked * 0.4;
    summary = summary.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
    $("#summary").text(summary_total);
  } else {
    var summary = Math.ceil((price - zatraty_na_vikup1) * quantity);
    summary = summary.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
    $("#summary").text(summary);
  }
});
// END calc
