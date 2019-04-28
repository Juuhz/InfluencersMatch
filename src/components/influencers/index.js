// Import Redux
import { connect } from 'react-redux';

// Import Utils
import ReactStars from 'react-stars';
import { Wrapper, Container } from '../../utils/class';
import InfluencersList from '../../api/influencers';

// Import Style
import {
    BoxInfluencers, Influence,
    Infos, Thumbnial, Name, Category
} from './styled';

const Influencers = ( {categoryActive} ) => (
    <Wrapper id="influencers">
        <Container>
            <BoxInfluencers>
                {
                    InfluencersList.map( ( influence, key ) => {
                        if( categoryActive == influence.category || !categoryActive ){
                            return (
                                <Influence key={key}>
                                    <Category>{influence.category}</Category>
                                    <Thumbnial src={influence.image} alt={`Influenciador ${influence.name}`} />
                                    <Infos>
                                        <Name>{influence.name}</Name>
                                        <ReactStars
                                            count={5}
                                            value={influence.stars}
                                            size={13}
                                            color2={'#ffd700'}
                                            edit={false}
                                        />
                                    </Infos>
                                </Influence>
                            )
                        }
                    })
                }
            </BoxInfluencers>
        </Container>
    </Wrapper>
);

function mapStateToProps (state) {
    const { categoryActive } = state
    return { categoryActive }
}
  
export default connect(mapStateToProps)(Influencers)