import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import AboutMe from '../containers/AboutMe';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Skills from '../containers/Habilities';
import History from '../containers/History';
import Blog from '../containers/Blog';
import BlogPage from '../containers/BlogPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/:id' component={BlogPage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/myhistory' component={History} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
