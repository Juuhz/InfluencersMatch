// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Utils
import ReactStars from 'react-stars';
import { Wrapper, Container } from '../../utils/class';
import { shuffle } from '../../utils/helpers';
import InfluencersList from '../../api/influencers';

// Import Actions Redux
import { setInfluencerModal } from '../../redux/actions';

// Import Style
import {
    BoxInfluencers, Influence,
    Infos, Thumbnial, Name, Category
} from './styled';

class Influencers extends Component {

    // Adiciona objeto do influenciador no Modal
    setInfluencer = ( influencer ) => {
        const { setInfluencerModal } = this.props;
        setInfluencerModal( influencer );
    }

    render() {
        const { categoryActive } = this.props;
        //shuffle( InfluencersList );

        return (
            <Wrapper id="influencers">
                <Container>
                    <BoxInfluencers>
                        {
                            InfluencersList.map( ( influence, key ) => {
                                if( categoryActive == influence.category || !categoryActive ){
                                    return (
                                        <Influence key={key} onClick={() => this.setInfluencer( influence )}>
                                            {
                                                !categoryActive &&
                                                    <Category>{influence.category}</Category>
                                            }
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
        )
    }
}

function mapStateToProps (state) {
    const { categoryActive } = state
    return { categoryActive }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setInfluencerModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Influencers);