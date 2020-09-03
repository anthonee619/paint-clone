export default (context, center, distance) => {
  const { x, y } = center;
  context.strokeStyle = '#eee';
  context.lineWidth = 1;
  context.moveTo(x, y);
  context.lineTo(x, y+distance);
  context.moveTo(x, y);
  context.lineTo(x, y-distance);
  context.moveTo(x, y);
  context.lineTo(x + distance, y);
  context.moveTo(x, y);
  context.lineTo(x - distance, y)

}
