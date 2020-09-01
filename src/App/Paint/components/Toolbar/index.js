import React, { useContext } from 'react';

import { DispatchContext } from '../../index';
import { TOOLBAR } from './styles';

import { ACTIONS } from '../../hooks/useSelectTool';


const Toolbar = () => {
  const dispatch = useContext(DispatchContext);

  const buttons = [
    {text: 'Pen', dispatch: () => dispatch({action: ACTIONS.PEN})},
    {text: 'Line', dispatch: () => dispatch({action: ACTIONS.LINE})},
    {text: 'Erase', dispatch: () => dispatch({action: ACTIONS.ERASE})},
    {text: 'Reset', dispatch: () => dispatch({action: ACTIONS.RESET})},
    {text: 'Black', dispatch: () => dispatch({action: ACTIONS.CHANGE_COLOR, color: '#000'})},
    {text: 'Red', dispatch: () => dispatch({action: ACTIONS.CHANGE_COLOR, color: '#ff0000'})},
    {text: 'Line Size: 1', dispatch: () => dispatch({action: ACTIONS.CHANGE_LINE_SIZE, line_size: 3})},
    {text: 'Line Size: 2', dispatch: () => dispatch({action: ACTIONS.CHANGE_LINE_SIZE, line_size: 6})},
  ];

  return (
    <TOOLBAR 
      length={buttons.length}
    >
      {buttons.map(({text, dispatch}) => <button key={text} onClick={dispatch}>{text}</button> )}
    </TOOLBAR>
  )
}

export default Toolbar;
