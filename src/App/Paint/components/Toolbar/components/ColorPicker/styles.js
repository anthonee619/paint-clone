import styled from 'styled-components';

export const COLORPICKER = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3px; 
  width: 5vh;

  // &::before {
    // content: '';
    // width: 0;
    // padding-bottom: 100%;
  // }
`

export const ColorButton = styled.button`
  background-color: ${ ({hex}) => hex };

`
