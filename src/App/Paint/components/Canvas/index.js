import React, { useState, useRef, useEffect, useContext } from 'react';
import { StateContext, DispatchContext } from '../../index';
import { CANVAS } from './styles'

import { ACTIONS } from '../../hooks/useSelectTool';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    if(canvasRef.current) {
      const renderContext = canvasRef.current.getContext('2d');

      if(renderContext){
        setContext(renderContext);
      }
    }
    dispatch({action: ACTIONS.PEN});
    dispatch({action: ACTIONS.SET_CANVAS, canvasRef, context});


  }, [context])


  return (
    <CANVAS>
      <canvas 
        width={window.innerWidth}
        height={window.innerHeight}
        {...state.tool(canvasRef, context, state.options).bind}
        ref={canvasRef}
      />
    </CANVAS>
  )
}

export default Canvas;
