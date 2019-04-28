import ReactStars from 'react-stars';
import { Wrapper, Container } from '../../utils/class';
import InfluencersList from '../../api/influencers';
import {
    BoxInfluencers, Influence,
    Infos, Thumbnial, Name, Category
} from './styled';

const Influencers = () => (
    <Wrapper id="influencers">
        <Container>
            <BoxInfluencers>
                {
                    InfluencersList.map( ( influence, key ) => {
                        return (
                            <Influence key={key}>
                                <Category>{influence.category}</Category>
                                <Thumbnial src={influence.image} alt={`Influenciador ${influence.name}`} />
                                <Infos>
                                    <Name>{influence.name}</Name>
                                    <ReactStars
                                        count={5}
                                        value={influence.stars}
                                        size={12}
                                        color2={'#ffd700'}
                                        edit={false}
                                    />
                                </Infos>
                            </Influence>
                        )
                    })
                }
            </BoxInfluencers>
        </Container>
    </Wrapper>
);

export default Influencers;