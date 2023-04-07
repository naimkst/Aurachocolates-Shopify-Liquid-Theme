(function ($) {
  ("use strict");

  document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    const tabClick = document.getElementById("defaultOpen");
    if (tabClick) {
      tabClick.click();
    }
  });
  function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].classList.add("react-tabs__tab--selected");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].classList.forEach((item) => {
        if (item == "react-tabs__tab--selected") {
          tablinks[i].classList.remove("react-tabs__tab--selected");
        }
      });
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.classList.add("react-tabs__tab--selected");
  }

  //Product Tab

  function openPages(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].classList.forEach((item) => {
        if (item == "bg-secondary") {
          tablinks[i].classList.remove("bg-secondary");
        }
      });
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.classList.add("bg-secondary");
  }

  /*----------------------------
        = SHOP PRICE SLIDER
    ------------------------------ */

  const priceSlider = $("#slider-range").data("id");
  const currency = $("#slider-range").data("currency");
  const min = $("#slider-range").data("min");
  const max = $("#slider-range").data("max");
  console.log("min, max");
  console.log(max);

  $("#priceSlider").on("input change", function (e) {
    const max = $("#maxValue").data(e);
    console.log("priceSlider", e.target.value);
  });
})(window.jQuery);
