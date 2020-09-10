import React from 'react';
import { COLORPICKER, ColorButton } from './styles';

const DefaultColors = [
  {name: 'black', hex: '#000'}, 
  {name: 'white', hex: '#fff'}, 
  {name: 'red', hex: '#FF0000'}, 
  {name: 'orange', hex: '#FF7F00'}, 
  {name: 'yellow', hex: '#FFFF00'}, 
  {name: 'green', hex: '#00FF00'}, 
  {name: 'blue', hex: '#0000FF'}, 
  {name: 'purple', hex: '#8B00FF'}, 
]

const ColorPicker = ({}) => {

  return (
    <COLORPICKER> 
        {DefaultColors.map(({name, hex}) => {
          return (
            <ColorButton hex={hex}/>
          )
        })}
    </COLORPICKER>
  )
}

export default ColorPicker;
