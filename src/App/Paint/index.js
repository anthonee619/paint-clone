import React, { useReducer, createContext } from 'react';
import { Layout } from './styles';

import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import selectReducer, { INITIALSTATE } from './hooks/useSelectTool';

export const StateContext = createContext({});
export const DispatchContext = createContext({});


const Paint = () => {
  const [state, stateDispatch] = useReducer(selectReducer, INITIALSTATE);

  return (
    <DispatchContext.Provider value={stateDispatch}>
      <StateContext.Provider value={state}>
        <Layout>
          <Toolbar />
          <Canvas />
        </Layout>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )

}

export const { Consumer: StateConsumer } = StateContext;
export const { Consumer: DispatchConsumer } = DispatchContext;

export default Paint;

