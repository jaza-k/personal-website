let particlesJSON = {
    "particles": {
      "number": {
        "value": 90, // increase number for more particles. do not modify
        "density": {
          "enable": true,
          "value_area": 900 // bigger the number, less will be created
        }
      },
      "color": {
        "value": "#FEC9FF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
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
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150, // higher the number, more dense the lines
        "color": "#FD9AFF",
        "opacity": 0.4,
        "width": 1 // width of each individual line
      },
      "move": {
        "enable": true,
        "speed": 2, // speed of particle motion
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
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
          "distance": 125, // distance between lines
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 10,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

particlesJS('particles-js', particlesJSON, function() {
    console.log('callback - particles.js config loaded')
})