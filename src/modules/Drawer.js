class Drawer {
  /**
   * Drawer constructor
   *
   * @param object settings
   * @param object ctx
   */
  constructor(settings, ctx) {
    this.settings = settings;
    this.ctx = ctx;
  }

  /**
   * Draw lines from this particle to other particles where distance between them is lower than specified distance
   *
   * @param Particle[] particles
   * @param Particle particle
   */
  drawLines(particles, particle) {
    this.ctx.beginPath();
    particles.forEach(secondParticle => {
      const dist = Math.hypot(particle.x - secondParticle.x, particle.y - secondParticle.y);

      if (dist < this.settings.particleDistance) {
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
  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.settings.particleColor;
    this.ctx.fill();
  }
}

export default Drawer;
