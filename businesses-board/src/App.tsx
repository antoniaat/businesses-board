import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Business from './components/business';
import Board from './components/board';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Board} />
      <Route path="/businesses/:id" component={Business} />
    </Switch>
  </Router>
);

export default App;
