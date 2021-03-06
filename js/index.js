var burst = new mojs.Burst({
  radius: { 0: 100 },
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: { 6: 0 },
    angel: { 360: 0 },
    radius: { 30: 5 },
    duration: 3000 } });


var burst2 = new mojs.Burst({
  radius: { 0: 200 },
  count: 12,
  children: {
    shape: 'zigzag',
    points: 7,
    stroke: 'magenta',
    fill: 'none',
    strokeWidth: { 6: 0 },
    angel: { '-360': 0 },
    radius: { 30: 5 },
    opacity: { 1: 0 },
    duration: 3000 } });



var cir = new mojs.Shape({
  radius: { 0: 200 },
  fill: 'none',
  stroke: 'yellow',
  opacity: { 1: 0 },
  duration: 3500 });


var timeline = new mojs.Timeline({
  repeat: 999 })

.add(burst, burst2, cir)
.play();
