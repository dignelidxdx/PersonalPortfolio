/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import '../assets/styles/components/Blog.scss';
import Blog1 from '../components/Blog1';

const Blog = () => (

    <BrowserRouter>
        <Switch>  
          <Route exact path="/main" component={Blog1} />
          <Route exact path="/english" component={Blog2} />
          <Route exact path="/java" component={Blog3} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Blog;