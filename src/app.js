import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import Styles from '~/assets/styles';
import Drum from '~/containers/Drum';
import store from '~/redux/store';

function App() {
  useEffect(() => {
    document.title = 'Drum Machine';
  }, []);

  return <Provider store={store}> <Styles /> <Drum /> </Provider>;
}

export default App;
