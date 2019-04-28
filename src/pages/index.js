import React, { Component } from 'react';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Filter from '../components/filter';
import Influencers from '../components/influencers'; 
import Footer from '../components/footer'; 

class Home extends Component{
  render(){
    return (
      <Page>
        <Header />
        <Filter />
        <Influencers />
        <Footer />
      </Page>
    )
  }
}

export default Home;