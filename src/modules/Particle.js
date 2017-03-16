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
   *
   * @param int maxX
   * @param int maxY
   */
  move(maxX, maxY)
  {
    this.x += this.vel.x;
    this.y += this.vel.y;

    if(this.isOffXEdge(maxX)) {
      this.vel.x = -this.vel.x;
    }

    if(this.isOffYEdge(maxY)) {
      this.vel.y = -this.vel.y;
    }
  }

  /**
   * Check that particle is off the X edge.
   *
   * @param int maxX
   * @return bool
   */
  isOffXEdge(maxX) {
    return this.x > maxX || this.x < 0;
  }

  /**
   * Check that particle is off the Y edge.
   *
   * @param maxY
   * @return bool
   */
  isOffYEdge(maxY) {
    return this.y > maxY || this.y < 0
  }
}

export default Particle;
