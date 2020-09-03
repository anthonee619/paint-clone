export default (p1, p2) => {
  const x = -1 * ( p1.x - p2.x );
  const y = -1 * ( p1.y - p2.y );
  return { x, y }
}
