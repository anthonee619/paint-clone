export default (p1 , p2) => {
  const y = p2.y - p1.y;
  const x = p2.x - p1.x;
  if ( x === 0 || y === 0 ) return 0;
  return (y / x);
}
