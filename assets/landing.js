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
