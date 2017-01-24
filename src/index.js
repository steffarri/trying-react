import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './home';
import Stuff from './stuff';
import Contact from './contact';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';






ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="stuff" component={Stuff} />
  <Route path="contact" component={Contact} />
  </Route>
  </Router>,
  document.getElementById('root')
);


