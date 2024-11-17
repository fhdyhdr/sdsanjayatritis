const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});


$(document).ready(function(){
  buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "https://maps.app.goo.gl/6pMVSyJNPuS7SJbSA";
var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2782801688954!2d110.14973049999999!3d-7.865920399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7afb3706dda56b%3A0x2305e828589300c3!2sMie%20Ayam%20Pak%20Saryono!5e0!3m2!1sid!2sid!4v1731494959772!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

function buildMap() {
  if (sw <= bp) {
    if ($('.map-container').length < 1) { // Cek apakah elemen map-container ada
      buildEmbed(); // Bangun iframe jika perlu
    }
  }
  else if(sw>bp) { //If Large Screen
    if($('.map-container').length < 1) { //If map doesn't already exist
      buildEmbed();
    }
}
   else {
      if($('.static-img').length < 1) { //If static image doesn't exist
        buildStatic();
      }
  }
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};
  
function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img = $('<img class="static-img" />').attr('src',static);
   $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
}

$(window).resize(function() {
  sw = document.body.clientWidth;
  buildMap();
  google.maps.event.trigger(map, "resize");
});