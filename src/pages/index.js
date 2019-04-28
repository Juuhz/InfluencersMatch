import React, { Component } from 'react';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Filter from '../components/filter';
import Influencers from '../components/influencers'; 

class Home extends Component{
  render(){
    return (
      <Page>
        <Header />
        <Filter />
        <Influencers />
      </Page>
    )
  }
}

export default Home;