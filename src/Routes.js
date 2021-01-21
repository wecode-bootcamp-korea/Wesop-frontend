import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import CategoryList from './Pages/CategoryList/CategoryList';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/category_list" component={CategoryList} />
            <Route exact path="/product_list" component={ProductList} />
            <Route exact path="/product_detail/:id" component={ProductDetail} />
          </Switch>
        <Footer />
      </Router>
    )
  }
}

export default Routes;