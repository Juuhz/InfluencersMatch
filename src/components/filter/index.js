// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Ultils
import { Wrapper, Container } from '../../utils/class';
import FiltersList from '../../api/filters';

// Import Actions Redux
import { setCategory } from '../../redux/actions';

// Import Style
import {
    Title, BoxOptions, Option
} from './styled';

class Filter extends Component {

    // Evento para setar categoria no filtro
    filterCategory = ( category ) => {
        
        // Chama Action para mudar a categoria no store
        const { setCategory } = this.props
        setCategory( category );

        // Scroll até a section dos influenciadores
        document.getElementById("influencers").scrollIntoView({behavior: 'smooth'});

    }

    render() {
        const { categoryActive } = this.props;

        return (
            <Wrapper id="filter">
                <Container>
                    <Title>Filtre por categorias:</Title>
                    <BoxOptions>
                        {
                            FiltersList.map( ( option, key ) => {
                                return (
                                    <Option className={`${( categoryActive == option.value ? 'active' : '' )}`} key={key} onClick={() => this.filterCategory(option.value)}>{option.name}</Option>
                                )
                            })
                        }
                    </BoxOptions>
                </Container>
            </Wrapper>
        )
    }
}

function mapStateToProps ( state ) {
    const { categoryActive } = state;
    return { categoryActive }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setCategory }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);