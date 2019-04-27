import React, { Component } from 'react';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Filter from '../components/filter';

class Home extends Component{
  render(){
    return (
      <Page>
        <Header />
        <Filter />
      </Page>
    )
  }
}

export default Home;