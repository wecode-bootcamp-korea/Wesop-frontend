import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './Pages/Main/Main';
import CategoryList from './Pages/CategoryList/CategoryList';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import SignUpForm from './Components/Nav/Login/SignUpForm/SignUpForm';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category_list" component={CategoryList} />
          <Route exact path="/product_list" component={ProductList} />
          <Route exact path="/product_detail" component={ProductDetail} />
          <Route exact path="/SignUpForm" component={SignUpForm} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;