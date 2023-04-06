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

document.getElementById("defaultOpen").click();

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
