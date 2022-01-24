import * as React from 'react';
import Navigate from './navigate';
import store from './src/Components/redux/redux';
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store}>
    <Navigate />
  </Provider>
}
