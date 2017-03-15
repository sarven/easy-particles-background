import Particle from './Particle';

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
    init()
    {
        this.createParticles();
        this.loop();
    }

    /**
     * Loop, clear and drawParticles
     */
    loop()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawParticles();
        window.requestAnimationFrame(this.loop.bind(this));
    }

    /**
     * Draw Particles and lines between them
     */
    drawParticles()
    {
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
    drawParticle(particle)
    {
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
    drawLines(particle)
    {
        this.ctx.beginPath();
        this.particles.forEach(secondParticle => {
            const dist = Math.hypot(particle.x - secondParticle.x, particle.y - secondParticle.y);
            if(dist < 100) {
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
    drawLine(firstParticle, secondParticle)
    {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(firstParticle.x, firstParticle.y);
        this.ctx.lineTo(secondParticle.x, secondParticle.y);
    }

    /**
     * Create Particles, with random position and random velocity
     */
    createParticles()
    {
        for(let i = 0; i < 300; i++) {

            const particle = new Particle(
              Math.random() * this.canvas.width,
              Math.random() * this.canvas.height,
              {
                  x: (Math.random() - 0.5) * 5, // [-2.5, 2.5)
                  y: (Math.random() - 0.5) * 5 // [-2.5, 2.5)
              },
              3
            );

            this.particles.push(particle);
        }
    }
}

export default Background;
