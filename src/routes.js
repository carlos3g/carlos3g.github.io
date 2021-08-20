import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Links, NotFound } from './pages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/links" component={Links} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
