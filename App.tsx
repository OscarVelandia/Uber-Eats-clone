import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './src/screens/Home';
import { store } from './src/store/store';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
