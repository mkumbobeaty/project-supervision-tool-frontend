

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import {login} from '../redux/modules/auth/reducers';
import { createStore } from 'redux';

function renderAuthConnected(
  ui,
  {
    preloadedState,
    store = createStore(login, preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { renderAuthConnected }