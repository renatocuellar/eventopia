import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import CardNew from '../pages/NewCard';
import CardEdit from '../pages/EditCard';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/cards/new" component={CardNew} />
          <Route exact path="/cards/:cardId/edit" component={CardEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
