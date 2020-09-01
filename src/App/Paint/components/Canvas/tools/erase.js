import setCords from './utils/setCords';
import setOffset from './utils/setOffset';

const Erase = (canvasRef, context, options) => {
  //  const {} = options;
  let mouseDown = false;
  let offset = {left: 0, top: 0};
  let end = {};

  if(context) {
    context.globalCompositeOperation="destination-out";
  }


  const onMouseDown = (e) => {
    mouseDown = true;
    offset = setOffset(canvasRef);
    end = setCords(e, offset);

    erase();
  }

  const onMouseMove = (e) => {
    end = setCords(e, offset);

    if(mouseDown) {
      erase();
    }
  }


  const onMouseUp = (e) => {
    mouseDown = false;
  }

  const erase = () => {
    context.beginPath();
    context.globalCompositeOperation="destination-out";
    context.arc(end.x,end.y,8,0,Math.PI*2,false);
    context.fill();
  }

  return {
    bind:{onMouseDown, onMouseMove, onMouseUp}, 
  }
}

export default Erase;
