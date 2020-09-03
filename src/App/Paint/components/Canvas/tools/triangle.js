import setCords from './utils/setCords';
import setOffset from './utils/setOffset';
import getSlope from './utils/getSlope';
import getInverseSlope from './utils/getInverseSlope';
import getDistance from './utils/getDistance';
import { Equilateral } from './utils/helperTriangle';

import drawGrid from './utils/drawGrid';

const { givenHeightCalcSide, givenSlopeAndDistanceCalcDelta } = Equilateral;

const Triangle = (canvasRef, context, options) => {
  const { color, line_size } = options;
  let mouseDown = false;
  let offset = {left: 0, top: 0};
  let start = {};
  let end = {};

  if(context) {
    context.globalCompositeOperation="source-over";
  }


  const onMouseDown = (e) => {
    mouseDown = true;
    offset = setOffset(canvasRef);
    start = setCords(e, offset);
    end = setCords(e, offset);

  }

  const onMouseMove = (e) => {
    if(mouseDown) {
      end = setCords(e, offset);
    }
  }


  const onMouseUp = (e) => {
    mouseDown = false;
    const distance = getDistance(start, end);
    const slope = getInverseSlope(start, end);
    const sideLength = givenHeightCalcSide(distance);
    const { dx, dy } = givenSlopeAndDistanceCalcDelta(slope, sideLength/2);
    const left = { x: start.x - dx, y: start.y - dy };
    const right = { x: start.x + dx, y: start.y + dy };

    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = line_size;
    context.moveTo(end.x, end.y);
    context.lineTo(left.x, left.y);
    context.lineTo(right.x, right.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
  }


  return {
    bind:{onMouseDown, onMouseMove, onMouseUp}, 
  }
}

export default Triangle;
