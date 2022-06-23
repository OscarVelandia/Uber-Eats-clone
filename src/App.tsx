import { Home } from '@screens';
import { store } from '@store';
import React from 'react';
import { Provider } from 'react-redux';

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
