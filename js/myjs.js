$(window).scroll(function (e) {
  if ($(window).scrollTop() <= 0)
    $(".scrolldown, .navbar").addClass("at_top");
  else
    $(".scrolldown, .navbar").removeClass("at_top");
});


//javascript
// function flip(event) {
//   var element = event.currentTarget;
//   if (element.className === "card") {
//     if (element.style.transform == "rotateY(180deg)") {
//       element.style.transform = "rotateY(0deg)";
//     } else {
//       element.style.transform = "rotateY(180deg)";
//     }
//   }
// };

//jquery
$(".card").click(function () {
  var thisCard = $(this);
  var isFlip = this.style.transform; //inline style
  if (isFlip == "rotateY(180deg)") {
    thisCard.css("transform","rotateY(0deg)");
    // console.log(isFlip);
  } else {
    thisCard.css("transform", "rotateY(180deg)");
    // console.log(isFlip);
  }
});