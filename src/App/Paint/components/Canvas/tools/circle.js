import setCords from './utils/setCords';
import setOffset from './utils/setOffset';
import getDiff from './utils/getDiff';
import getSlope from './utils/getSlope';
import distance from './utils/distance';

const Circle = (canvasRef, context, options) => {
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
    const result = getDiff(start, end);
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = line_size;
    context.arc(start.x, start.y, distance(start, end), 0, 2*Math.PI);
    context.stroke();
    context.closePath();
  }


  return {
    bind:{onMouseDown, onMouseMove, onMouseUp}, 
  }
}

export default Circle;
