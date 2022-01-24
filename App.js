import * as React from 'react';
import Navigate from './src/navigate/navigate';
import store from './src/redux/redux';
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store}>
    <Navigate />
  </Provider>
}
