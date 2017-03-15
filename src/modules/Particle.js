class Particle
{
  /**
   * Particle constructor
   *
   * @param int x
   * @param int y
   * @param array vel
   * @param int radius
   */
  constructor(x, y, vel, radius)
  {
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.radius = radius;
  }

  /**
   * Move particle with set velocity
   */
  move()
  {
    this.x += this.vel.x;
    this.y += this.vel.y;

    if(this.isOffXEdge()) {
      this.vel.x = -this.vel.x;
    }

    if(this.isOffYEdge()) {
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
    return particle.y > this.canvas.height || particle.y < 0
  }
}

export default Particle;
