hamburger = document.querySelector(".hamburger");
list_of_items = document.querySelector(".list_of_items");
middle_line = document.querySelector(".middle_line");
upper_line = document.querySelector(".upper_line");
lower_line = document.querySelector(".lower_line");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("openclose");
  list_of_items.classList.toggle("menu");
  middle_line.classList.toggle("midle_hide");
  upper_line.classList.toggle("uper_rotate");
  lower_line.classList.toggle("lower_rotate");
});

show_more_btn = document.querySelector(".show_more_btn");
review_hide = document.querySelector(".review_hide");

show_more_btn.addEventListener("click", () => {
  show_more_btn.classList.toggle("moreBtn_tap");
  review_hide.classList.toggle("expand_reviewBox");
});

function myfunction() {
  var x = document.getElementById("myButton1");
  if (x.innerHTML === "Show more reviews") {
    x.innerHTML = "Show Less reviews";
  } else {
    x.innerHTML = "Show more reviews";
  }
}
