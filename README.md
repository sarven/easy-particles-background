# Easy Particles Background

Simple library to create particles background in canvas

## Demo
[Demo](http://projects.sarvendev.com/particles/index.html)

## Usage

```html
<canvas id="background"></canvas>
<script src="../dist/EasyParticlesBackground.min.js"></script>
<script>
  EasyParticlesBackground.create('background', {
    particleColor: 'rgba(236, 208, 120, 1)',
    particleRadius: 3,
    particleDistance: 100,
    particlesCount: 200,
    lineColor: 'rgba(236, 208, 120, 1)',
    lineWidth: 1
  });
</script>
```
