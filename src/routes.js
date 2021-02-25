import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
