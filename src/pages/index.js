// Import Redux
import { connect } from 'react-redux';

// Import Components
import Page from '../components/page';
import Header from '../components/header';
import Filter from '../components/filter';
import Influencers from '../components/influencers'; 
import Footer from '../components/footer'; 
import Modal from '../components/modal'; 

const Home = ({ modalStatus, modalInfluencer }) => (
  <Page>
    <Header />
    <Filter />
    <Influencers />
    <Footer />
    {
      modalStatus &&
        <Modal />
    }
  </Page>
);

function mapStateToProps (state) {
  const { modalStatus, modalInfluencer } = state
  return { modalStatus, modalInfluencer }
}

export default connect(mapStateToProps)(Home)