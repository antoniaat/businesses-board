import './styles/base/styles.scss';

import { Provider } from 'react-redux';
import Navigation from './scripts/components/navigation';
import store from './scripts/redux/store';
import AppRouter from './app-router';

const App = () => (
  <Provider store={store}>
    <Navigation />
    <AppRouter />
  </Provider>
);

export default App;
