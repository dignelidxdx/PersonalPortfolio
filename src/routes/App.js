import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register'; 
import AboutMe from '../containers/AboutMe';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const App = () => (
    <BrowserRouter>
      <Layout> 
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  
  );
  
  export default App;