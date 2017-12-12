// @flow

// Library
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import store from './store';

// UI Shared Component
import Header from './shared/Header';
import Footer from './shared/Footer';

// UI Route Component
import Home from './components/Home';
import Contact from './components/Contact';
import Dealer from './components/Dealer';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/dealer" component={Dealer} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
