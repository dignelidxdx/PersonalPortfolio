import React, { Component, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
import '../assets/styles/App.scss';

const API = 'urlAPI'

class Layout extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
        sideDrawerOpen: false,
      };
  }
  

  drawerToggleClickHandler = (e) => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { children } = this.props;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App'>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {children}
        <Footer />
      </div>
    );
  }

}

export default Layout;