import styled from 'styled-components';

export const TOOLBAR = styled.div`
  display: grid;
  grid-auto-rows: 5vh;
  //  grid-template-columns: repeat(${({length}) => length }, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  
`
