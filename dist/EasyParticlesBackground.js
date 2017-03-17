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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParticleCreator = __webpack_require__(3);

var _ParticleCreator2 = _interopRequireDefault(_ParticleCreator);

var _Drawer = __webpack_require__(1);

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  /**
   * Background constructor, get canvas element, set options
   *
   * @param string canvasID
   * @param object settings
   */
  function Background(canvasID, settings) {
    _classCallCheck(this, Background);

    this.setSettings(settings);

    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');

    this.particleCreator = new _ParticleCreator2.default(this.settings, this.canvas);
    this.drawer = new _Drawer2.default(this.settings, this.ctx);

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.particles = [];

    this.init();
  }

  /**
   * Set settings
   *
   * @param object settings
   */


  _createClass(Background, [{
    key: 'setSettings',
    value: function setSettings(settings) {
      this.settings = {
        particleColor: this.getOption(settings, 'particleColor', '#000000'),
        particleRadius: this.getOption(settings, 'particleRadius', 3),
        particleDistance: this.getOption(settings, 'particleDistance', 100),
        particlesCount: this.getOption(settings, 'particlesCount', 300),
        lineColor: this.getOption(settings, 'lineColor', '#000000'),
        lineWidth: this.getOption(settings, 'lineWidth', 1)
      };
    }

    /**
     * Get option
     *
     * @param object settings
     * @param string name
     * @param mixed default
     */

  }, {
    key: 'getOption',
    value: function getOption(settings, name, defaultValue) {
      return settings.hasOwnProperty(name) ? settings[name] : defaultValue;
    }

    /**
     * Create particles and start loop
     */

  }, {
    key: 'init',
    value: function init() {
      this.particles = this.particleCreator.createMany(this.settings.particlesCount);
      this.loop();
    }

    /**
     * Loop, clear and drawParticles
     */

  }, {
    key: 'loop',
    value: function loop() {
      var _this = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(function (particle) {
        particle.move(_this.canvas.width, _this.canvas.height);
        _this.drawer.drawLines(_this.particles, particle);
        _this.drawer.drawParticle(particle);
      });
      window.requestAnimationFrame(this.loop.bind(this));
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drawer = function () {
  /**
   * Drawer constructor
   *
   * @param object settings
   * @param object ctx
   */
  function Drawer(settings, ctx) {
    _classCallCheck(this, Drawer);

    this.settings = settings;
    this.ctx = ctx;
  }

  /**
   * Draw lines from this particle to other particles where distance between them is lower than specified distance
   *
   * @param Particle[] particles
   * @param Particle particle
   */


  _createClass(Drawer, [{
    key: "drawLines",
    value: function drawLines(particles, particle) {
      var _this = this;

      this.ctx.beginPath();
      particles.forEach(function (secondParticle) {
        var dist = Math.hypot(particle.x - secondParticle.x, particle.y - secondParticle.y);

        if (dist < _this.settings.particleDistance) {
          _this.drawLine(particle, secondParticle);
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

  }, {
    key: "drawLine",
    value: function drawLine(firstParticle, secondParticle) {
      this.ctx.strokeStyle = this.settings.lineColor;
      this.ctx.lineWidth = this.settings.lineWidth;
      this.ctx.moveTo(firstParticle.x, firstParticle.y);
      this.ctx.lineTo(secondParticle.x, secondParticle.y);
    }

    /**
     * Draw Particle
     *
     * @param Particle particle
     */

  }, {
    key: "drawParticle",
    value: function drawParticle(particle) {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.particleColor;
      this.ctx.fill();
    }
  }]);

  return Drawer;
}();

exports.default = Drawer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  /**
   * Particle constructor
   *
   * @param int x
   * @param int y
   * @param array vel
   * @param int radius
   */
  function Particle(x, y, vel, radius) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.vel = vel;
    this.radius = radius;
  }

  /**
   * Move particle with set velocity
   *
   * @param int maxX
   * @param int maxY
   */


  _createClass(Particle, [{
    key: "move",
    value: function move(maxX, maxY) {
      this.x += this.vel.x;
      this.y += this.vel.y;

      if (this.isOffXEdge(maxX)) {
        this.vel.x = -this.vel.x;
      }

      if (this.isOffYEdge(maxY)) {
        this.vel.y = -this.vel.y;
      }
    }

    /**
     * Check that particle is off the X edge.
     *
     * @param int maxX
     * @return bool
     */

  }, {
    key: "isOffXEdge",
    value: function isOffXEdge(maxX) {
      return this.x > maxX || this.x < 0;
    }

    /**
     * Check that particle is off the Y edge.
     *
     * @param maxY
     * @return bool
     */

  }, {
    key: "isOffYEdge",
    value: function isOffYEdge(maxY) {
      return this.y > maxY || this.y < 0;
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Particle = __webpack_require__(2);

var _Particle2 = _interopRequireDefault(_Particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParticleCreator = function () {
  /**
   * ParticleCreator constructor.
   *
   * @param object settings
   * @param object canvas
   */
  function ParticleCreator(settings, canvas) {
    _classCallCheck(this, ParticleCreator);

    this.settings = settings;
    this.canvas = canvas;
  }

  /**
   * Create many particles with specified count.
   *
   * @param int count
   * @return Particle[]
   */


  _createClass(ParticleCreator, [{
    key: 'createMany',
    value: function createMany(count) {
      var particles = [];

      for (var i = 0; i < count; i++) {
        particles.push(this.create());
      }

      return particles;
    }

    /**
     * Create single particle.
     *
     * @return Particle
     */

  }, {
    key: 'create',
    value: function create() {
      return new _Particle2.default(Math.random() * this.canvas.width, Math.random() * this.canvas.height, {
        x: (Math.random() - 0.5) * 5, // [-2.5, 2.5)
        y: (Math.random() - 0.5) * 5 // [-2.5, 2.5)
      }, this.settings.particleRadius);
    }
  }]);

  return ParticleCreator;
}();

exports.default = ParticleCreator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _Background = __webpack_require__(0);

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(canvasID, settings) {
  return new _Background2.default(canvasID, settings);
};

/***/ })
/******/ ]);
//# sourceMappingURL=EasyParticlesBackground.js.map