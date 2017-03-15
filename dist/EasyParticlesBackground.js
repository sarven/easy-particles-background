var EasyParticlesBackground =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(1);


class Background {
    /**
     * Background constructor, get canvas element, set options
     *
     * @param canvasID
     */
    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.color = 'rgba(59, 134, 134, .2)';
        this.lineWidth = '1px';
    }

    /**
     * Create particles and start loop
     */
    init() {
        this.createParticles();
        this.loop();
    }

    /**
     * Loop, clear and drawParticles
     */
    loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawParticles();
        window.requestAnimationFrame(this.loop.bind(this));
    }

    /**
     * Draw Particles and lines between them
     */
    drawParticles() {
        this.particles.forEach(particle => {
            particle.move();
            this.drawLines(particle);
            this.drawParticle(particle);
        });
    }

    /**
     * Draw particle
     *
     * @param particle
     */
    drawParticle(particle) {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    /**
     * Draw lines from this particle to other particles where distance between them is lower than 100px
     *
     * @param particle
     */
    drawLines(particle) {
        this.ctx.beginPath();
        this.particles.forEach(secondParticle => {
            const dist = Math.hypot(particle.x - secondParticle.x, particle.y - secondParticle.y);
            if (dist < 100) {
                this.drawLine(particle, secondParticle);
            }
        });
        this.ctx.stroke();
    }

    /**
     * Draw line between two particles
     *
     * @param firstParticle
     * @param secondParticle
     */
    drawLine(firstParticle, secondParticle) {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(firstParticle.x, firstParticle.y);
        this.ctx.lineTo(secondParticle.x, secondParticle.y);
    }

    /**
     * Create Particles, with random position and random velocity
     */
    createParticles() {
        for (let i = 0; i < 300; i++) {

            const particle = new __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */](Math.random() * this.canvas.width, Math.random() * this.canvas.height, {
                x: (Math.random() - 0.5) * 5, // [-2.5, 2.5)
                y: (Math.random() - 0.5) * 5 // [-2.5, 2.5)
            }, 3);

            this.particles.push(particle);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = Background;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Particle {
  /**
   * Particle constructor
   *
   * @param int x
   * @param int y
   * @param array vel
   * @param int radius
   */
  constructor(x, y, vel, radius) {
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.radius = radius;
  }

  /**
   * Move particle with set velocity
   */
  move() {
    this.x += this.vel.x;
    this.y += this.vel.y;

    if (this.isOffXEdge()) {
      this.vel.x = -this.vel.x;
    }

    if (this.isOffYEdge()) {
      this.vel.y = -this.vel.y;
    }
  }

  /**
   * Check that particle is off the X edge.
   *
   * @return bool
   */
  isOffXEdge() {
    return particle.x > this.canvas.width || particle.x < 0;
  }

  /**
   * Check that particle is off the Y edge.
   *
   * @return bool
   */
  isOffYEdge() {
    return particle.y > this.canvas.height || particle.y < 0;
  }
}

/* harmony default export */ __webpack_exports__["a"] = Particle;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Background__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;


function create(canvasID, settings) {
  return new __WEBPACK_IMPORTED_MODULE_0__modules_Background__["a" /* default */](canvasID, settings);
};

/***/ })
/******/ ]);
//# sourceMappingURL=EasyParticlesBackground.js.map