import * as React from 'react';
import DrawerNavigator from './src/navigate/DrawerNavigator';
import store from './src/redux/redux';
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store}>
    <DrawerNavigator />
  </Provider>
}
