import { Wrapper, Container } from '../../utils/class';
import Filters from '../../api/filters';
import {
    Title, BoxOptions, Option
} from './styled';

const Filter = () => (
    <Wrapper id="filter">
        <Container>
            <Title>Filtre por categorias:</Title>
            <BoxOptions>
                {
                    Filters.map( ( option, key ) => {
                        return (
                            <Option key={key}>{option.name}</Option>
                        )
                    })
                }
            </BoxOptions>
        </Container>
    </Wrapper>
);

export default Filter;