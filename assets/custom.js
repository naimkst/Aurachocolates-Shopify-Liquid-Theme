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

function getImg(id, img, option) {
  var image = document.querySelector("#image1");
  image.src = img;
  console.log(id, img, option);
}
(function ($) {
  ("use strict");

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
    $("#maxValue").text(String(e.target.value));
  });

  /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
  if ($(".shop-single-slider").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      focusOnSelect: true,

      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  const zoom = mediumZoom("img[data-zoomable]", {
    // Options
  });

  const zoomableImage = document.getElementById("zoomable-image");
  if (zoomableImage) {
    zoomableImage.addEventListener("click", function () {
      zoom.open();
    });
  }

  $(document).ready(function () {
    // Get the quantity input field
    var quantityInput = $("#quantity");

    // Get the increment and decrement buttons
    var incrementButton = $(".quantity-up");
    var decrementButton = $(".quantity-down");

    // Add click event listener to increment button
    incrementButton.click(function () {
      var currentQuantity = parseInt(quantityInput.val());
      var newQuantity = currentQuantity + 1;
      quantityInput.val(newQuantity);
    });

    // Add click event listener to decrement button
    decrementButton.click(function () {
      var currentQuantity = parseInt(quantityInput.val());
      var newQuantity = currentQuantity - 1;
      if (newQuantity < 1) {
        newQuantity = 1;
      }
      quantityInput.val(newQuantity);
    });
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 6,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
      },
    },
  });

  //Add To Cart
  // $(".addCart").on("click", function (e) {
  //   var form = $("#addToCart");
  //   e.preventDefault();
  //   var current_url = window.location.href;
  //   console.log(current_url);
  //   window.location.href = current_url;
  //   // $.ajax({
  //   //   type: "POST",
  //   //   url: "/cart/add",
  //   //   dataType: "json",
  //   //   data: form.serialize(),
  //   //   success: function (data) {
  //   //     var current_url = window.location.href;
  //   //     console.log(current_url);
  //   //     window.location.href = current_url;
  //   //   },
  //   // });
  // });

  //Update To Cart Data
  // $(".updateCart").on("click", function (e) {
  //   var form = $("#cartUpdate");
  //   e.preventDefault();
  //   console.log(form);
  //   $.ajax({
  //     type: "POST",
  //     url: "/cart",
  //     dataType: "json",
  //     data: form.serialize(),
  //     success: function (data) {
  //       console.log(data);

  //       // var current_url = window.location.href;
  //       // console.log(data, current_url);
  //       // document.location.href = current_url;
  //       // $("div#offcanvasCart").toggleClass("show");
  //       // $('div#offcanvasCart').css({
  //       //   'visibility': 'visible'
  //       // });
  //     },
  //   });
  // });

  //Remove Product
  $(".removeProduct").on("click", function (e) {
    console.log("clicked");
    var form = $("#cartUpdate");
    var User_id = $(this).attr("data-line");
    console.log(User_id, "user id");
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/cart/change",
      dataType: "json",
      data: {
        line: User_id,
        quantity: 0,
      },
      success: function (data) {
        var current_url = window.location.href;
        document.location.href = current_url;
      },
    });
  });

  //Show hide cart
  $(".cartTab").on("click", function (e) {
    $(".cartHide").toggleClass("cartShow");
  });

  document.addEventListener("click", function (e) {
    var container = document.getElementById("catContainer");
    var clickTab = document.getElementById("cartTabs");
    if (!container.contains(e.target) && !clickTab.contains(e.target)) {
      var element = document.querySelector(".cartShow");
      if (element) {
        if (element.classList.contains("cartShow")) {
          element.classList.remove("cartShow");
        }
      }
    }
  });

  //Popup show hihde
  $("#isPopup").on("click", function (e) {
    console.log("clicked");
    $(".popup").toggleClass("popupShow");
  });
})(window.jQuery);
