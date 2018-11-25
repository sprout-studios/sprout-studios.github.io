$(document).ready(function () {
  // turn the carousel alive
  $('.carousel').carousel({
    interval: 10000
  });

  $('#main-carousel').carousel({
    interval: 20000
  });

  $('#team-carousel').carousel({
    interval: 20000
  });

  // scroll to top button is hidden when inside fold
  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }

  $('#scroll-to-top').click(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

});