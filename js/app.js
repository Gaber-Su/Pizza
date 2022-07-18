// $('.nav-links a').click(function() {
//     let navHref = $(this).attr('href');
//      let hrefOffset = $(navHref).offset().top;
//      $('body,html').animate({scrollTop:hrefOffset}, 2000)
//  })

// CLick on (a)
$('.nav-links a').click(function() {
  let navHref = $(this).attr('href');
  let navOffset = $(navHref).offset().top;
  $('body,html').animate({scrollTop : navOffset}, 3000)
});

// let avgTop =  $('#services').offset().top;
// // alert(avgTop)

// $(window).scroll(function() {
//     if($(window).scrollTop() > avgTop) {
//         $('#btnTop').fadeIn(1000)
//     } else {
//         $('#btnTop').fadeOut(1000)

//     }
// })

// let liColor = ['red','green','blue','yellow']
// for(var i=0; i<liColor.length;i++) {
//     $('.color-option li').eq(i).css('backgroundColor',liColor[i]);
// }

// $('.color-option li').click(function() {
//    let currentBg = $(this).css('backgroundColor');
//     $('.change-color').css('color', currentBg);
// })

// $('.color-box i').click(function() {
//  let currentWidth =  $('.color-option').outerWidth();
//  if($('.color-box').css('left') == '0px') {
//     $('.color-box').animate({'left' : -currentWidth} , 1000)
//  } else {
//     $('.color-box').animate({'left' : '0px'} , 1000)
//  }
// })


// Change Background navbar on scroll
let avgScroll = $('#demo').offset().top - 100

$(window).scroll(function() {
   if($(window).scrollTop() > avgScroll) {
    $('.navbar').css({'backgroundColor':'black','transition':'2s'})
   } else {
    $('.navbar').css({'backgroundColor':'transparent','transtion':'2s'})
   }
})


// Loading Page

$(document).ready(function() {
    $('#loading').fadeOut(2000 , function() {
        $('body').css('overflow', 'visible')
    })
}); 

new WOW().init();

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);