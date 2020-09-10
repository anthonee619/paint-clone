export default (canvasRef) => {
  return { 
        left: canvasRef.current.offsetLeft,
        top: canvasRef.current.offsetTop 
  }
}

export const setCords = (e, offset) => {
  return {x: e.clientX - offset.left, y: e.clientY-offset.top};
}
export getDiff = (p1, p2) => {
  const x = -1 * ( p1.x - p2.x );
  const y = -1 * ( p1.y - p2.y );
  return { x, y }
}

export getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow((p1.y-p2.y), 2) + Math.pow((p1.x-p2.x),2))
}

export getSlope = (p1 , p2) => {
  const y = p2.y - p1.y;
  const x = p2.x - p1.x;
  if ( x === 0 || y === 0 ) return 0;
  return (y / x);
}

export givenSlopeCalcPerpendicularSlope = (p1 , p2) => Math.pow(getSlope(p1, p2)*-1, -1);
