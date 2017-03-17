import Particle from './Particle';

class ParticleCreator {
  /**
   * ParticleCreator constructor.
   *
   * @param object settings
   * @param object canvas
   */
  constructor(settings, canvas) {
    this.settings = settings;
    this.canvas = canvas;
  }

  /**
   * Create many particles with specified count.
   *
   * @param int count
   * @return Particle[]
   */
  createMany(count) {
    let particles = [];

    for (let i = 0; i < count; i++) {
      particles.push(this.create());
    }

    return particles;
  }

  /**
   * Create single particle.
   *
   * @return Particle
   */
  create() {
    return new Particle(
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height, {
        x: (Math.random() - 0.5) * 5, // [-2.5, 2.5)
        y: (Math.random() - 0.5) * 5 // [-2.5, 2.5)
      },
      this.settings.particleRadius
    );
  }
}

export default ParticleCreator;
