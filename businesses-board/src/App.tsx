import './styles/base/styles.scss';

import { Provider } from 'react-redux';
import store from './scripts/redux/store';
import AppRouter from './app-router';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
