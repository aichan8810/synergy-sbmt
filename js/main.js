
new Splide( '.splide', {
  type   : 'loop',
  padding: 30,
  type:"loop",
  perPage: 2,
  focus: "center",
  updateOnMove: "true",
  drug: 'free',
  fixedWidth: 540,
  breakpoints: {
		767: {
			perPage: 1,
      fixedHeight: 370,
		},
		500: {
			perPage: 1,
      fixedHeight: 320,
      fixedWidth: '95%',
		}
  },

  classes: {
		// 矢印関連のクラスを追加
		prev  : 'arrow--left',
		next  : 'arrow--right',

		// ページネーション関連のクラスを追加
		pagination: 'dots', // container
		page      : 'dot', // each button
  },
}).mount();


const body = document.querySelector('body');
body.onload = function(){
  body.classList.toggle('appear');
};

const ham_btn = document.querySelector('.hamburger');
const ham_content = document.querySelector('.hamburger-content');
const inner_btn = document.querySelector('.hamburger-inner');


ham_btn.addEventListener('click', function(){
  ham_content.classList.toggle('slide');
});

inner_btn.addEventListener('click', function(){
  ham_content.classList.toggle('slide');
});

$(function () {
  $(".js-accordion-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});

const top_btn = document.querySelector('.to-top');
top_btn.addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.querySelector('.logo').addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
