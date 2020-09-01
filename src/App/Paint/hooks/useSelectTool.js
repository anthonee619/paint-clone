import Pen from '../components/Canvas/tools/Pen';
import Line from '../components/Canvas/tools/line';
import Rectangle from '../components/Canvas/tools/rectangle';
import Circle from '../components/Canvas/tools/circle';
import Erase from '../components/Canvas/tools/erase';
import resetCanvas from '../components/Canvas/tools/resetCanvas';

export const INITIALSTATE = {
  tool: Pen, 
  options: {
    color: '#000',
    line_size: 3,
  },
}

export const ACTIONS = {
  PEN: 'PEN',
  LINE: 'LINE',
  RECTANGLE: 'RECTANGLE',
  CIRCLE: 'CIRCLE',
  ERASE: 'ERASE',
  RESET: 'RESET',
  SET_CANVAS: 'SET CANVAS',
  CHANGE_COLOR: 'CHANGE COLOR',
  CHANGE_LINE_SIZE: 'CHANGE LINE',
}

const selectReducer = (state, payload) => {
  const { action, context, canvasRef, color, line_size } = payload;

  switch (action) {
    case ACTIONS.PEN: 
      return {...state, tool: Pen };
    case ACTIONS.LINE:
      return {...state, tool: Line};
    case ACTIONS.RECTANGLE:
      return {...state, tool: Rectangle};
    case ACTIONS.CIRCLE:
      return {...state, tool: Circle};
    case ACTIONS.ERASE:
      return {...state, tool: Erase};
    case ACTIONS.RESET: 
      resetCanvas(state.context);
      return state;
    case ACTIONS.SET_CANVAS: 
      return {...state, context, canvasRef }
    case ACTIONS.CHANGE_COLOR:
      return {...state, options: {...state.options, color}};
    case ACTIONS.CHANGE_LINE_SIZE:
      return {...state, options: {...state.options, line_size}};
    default: 
      return state;
  }

}

export default selectReducer;

