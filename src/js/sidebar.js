//sidebar
$(document).ready(function () {
  $(".btn-bai1").click(function (event) {
    $(".bai1-show").toggleClass("show");
    $(".first").toggleClass("rotate");
   
    event.preventDefault()
  });
});
$(document).ready(function () {
  $(".btn-bai2").click(function (event) {
    $(".bai2-show").toggleClass("show");
    $(".second").toggleClass("rotate");
    
    event.preventDefault()
  });
});
$(document).ready(function (event) {
  $(".btn-bai3").click(function () {
    $(".bai3-show").toggleClass("show");
    $(".three").toggleClass("rotate");
    
    event.preventDefault()
  });
});
$(document).ready(function () {
  $("nav ul li").click(function (event) {
    $(this).addClass("active").siblings().removeClass("active");
    
    event.preventDefault()
  });
});
$(document).ready(function () {
  $(".btn").click(function (event) {
    $(this).toggleClass("click");
    $(".sidebar").toggleClass("show");
    
    event.preventDefault()
  });
});
