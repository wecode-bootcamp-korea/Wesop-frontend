import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main/Main';
import CategoryList from './pages/CategoryList/CategoryList';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/" component={ProductDetail} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;