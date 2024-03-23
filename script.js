hamburger = document.querySelector('.hamburger');
list_of_items = document.querySelector('.list_of_items');

hamburger.addEventListener('click', () =>{
hamburger.classList.toggle('openclose');
list_of_items.classList.toggle('menu');
})

show_more_btn = document.querySelector('.show_more_btn');
review_hide = document.querySelector('.review_hide');

show_more_btn.addEventListener('click', () =>{
show_more_btn.classList.toggle('moreBtn_tap');
review_hide.classList.toggle('expand_reviewBox');
})

function myfunction() {
    var x = document.getElementById("myButton1");
      if (x.innerHTML === "Show more reviews") {
    x.innerHTML = "Show Less reviews";
  } else {
    x.innerHTML = "Show more reviews";
  }
}