
/* slick */
/* $('.slider-2').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

 */

const ham_btn = document.querySelector('.hamburger');
const ham_content = document.querySelector('.hamburger-content');

ham_btn.addEventListener('click', function(){
  ham_content.classList.toggle('slide');
});

$(function () {
  $(".js-accordion-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});

/* $(function () {
  $('#js-slider-2').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    speed: 1000, // スライドさせるスピード（ミリ秒）
    slidesToShow: 1, // 表示させるスライド数
    variableWidth: true, // スライド幅の自動計算を無効化
  });
});

$('#js-slider-2').on('beforeChange', function(){
  $('.slick-current').removeClass('is--active');
});
$('#js-slider-2').on('afterChange', function(){
  $('.slick-current').addClass('is--active');
}); */

function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight

  function markup(remove) {
    wrapperMarkup(remove)
    dotMarkup(remove)
    arrowMarkup(remove)
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment)
  }
  function createDiv(className) {
    var div = document.createElement("div")
    var classNames = className.split(" ")
    classNames.forEach((name) => div.classList.add(name))
    return div
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft)
      removeElement(arrowRight)
      return
    }
    arrowLeft = createDiv("arrow arrow--left")
    arrowLeft.addEventListener("click", () => slider.prev())
    arrowRight = createDiv("arrow arrow--right")
    arrowRight.addEventListener("click", () => slider.next())

    wrapper.appendChild(arrowLeft)
    wrapper.appendChild(arrowRight)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv("navigation-wrapper")
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots)
      return
    }
    dots = createDiv("dots")
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv("dot")
      dot.addEventListener("click", () => slider.moveToIdx(idx))
      dots.appendChild(dot)
    })
    wrapper.appendChild(dots)
  }

  function updateClasses() {
    var slide = slider.track.details.rel
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }

  slider.on("created", () => {
    markup()
    updateClasses()
  })
  slider.on("optionsChanged", () => {
    console.log(2)
    markup(true)
    markup()
    updateClasses()
  })
  slider.on("slideChanged", () => {
    updateClasses()
  })
  slider.on("destroyed", () => {
    markup(true)
  })
}
var slider = new KeenSlider("#my-keen-slider", {
  loop: true,
  mode: "free-snap",
  slides: { origin: "center", perView: 1.5, spacing: 35},
  range: {
    min: -10,
    max: 10,
  },

},
[navigation],
)

const about_action = document.querySelector('#about');
const philosophyTop = $('#philosophy').offset().top;



gsap.to('#about', {
  autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
  duration: 1,
  scrollTrigger: {
    trigger:  '#about',
    start: 'top top',
    end: '+=1500', //アニメーションが終わる位置
    pin: true,
    toggleActions: 'play reverse play complete',
    toggleClass: {targets: '#about', className: "classActive"},
    onLeave: () => $("html").animate({scrollTop: philosophyTop}),
  },
});
