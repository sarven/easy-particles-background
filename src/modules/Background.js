import ParticleCreator from './ParticleCreator';
import Drawer from './Drawer';

class Background {
  /**
   * Background constructor, get canvas element, set options
   *
   * @param string canvasID
   * @param object settings
   */
  constructor(canvasID, settings) {
    this.setSettings(settings);

    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');

    this.particleCreator = new ParticleCreator(this.settings, this.canvas);
    this.drawer = new Drawer(this.settings, this.ctx);

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
  setSettings(settings) {
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
  getOption(settings, name, defaultValue) {
    return settings.hasOwnProperty(name) ? settings[name] : defaultValue;
  }

  /**
   * Create particles and start loop
   */
  init() {
    this.particles = this.particleCreator.createMany(this.settings.particlesCount);
    this.loop();
  }

  /**
   * Loop, clear and drawParticles
   */
  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(particle => {
      particle.move(this.canvas.width, this.canvas.height);
      this.drawer.drawLines(this.particles, particle);
      this.drawer.drawParticle(particle);
    });
    window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default Background;
