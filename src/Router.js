import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home  from './pages/home';
import Products  from './pages/products';
import Service  from './pages/service';
import Store  from './pages/store';


class RouterComponent extends Component {
    render(){
        return (
              <React.Fragment>
                <Router>
                    <Switch>
                      <Route path="/" component={Home}/>
                      <Route path="/products" component={Products}/>
                      <Route path="/services" component={Service}/>
                      <Route path="/store" component={Store}/>
                    </Switch>
                </Router>
              </React.Fragment>
          );
    }

}

export default RouterComponent;
