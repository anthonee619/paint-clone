import setCords from './utils/setCords';
import setOffset from './utils/setOffset';

const Pen = (canvasRef, context, options) => {
  const { color, line_size } = options;

  let mouseDown = false;
  let offset = {left: 0, top: 0};
  let start = {};
  let end = {};

  if(context) {
    context.globalCompositeOperation="source-over";
    context.lineJoin = context.lineCap = 'round';
  }

  const onMouseDown = (e) => {
    mouseDown = true;
    offset = setOffset(canvasRef);
    start = setCords(e, offset);
    end = setCords(e, offset);
  }

  const onMouseMove = (e) => {
    if(mouseDown){
      start = {...end}; 
      end = setCords(e, offset);

      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.strokeStyle = color;
      context.lineWidth = line_size;
      context.stroke();
      context.closePath();

    }
  }

  const onMouseUp = (e) => {
    mouseDown = false;
  }

  return {
    bind:{onMouseDown, onMouseMove, onMouseUp}, 
  }
  

}

export default Pen;

