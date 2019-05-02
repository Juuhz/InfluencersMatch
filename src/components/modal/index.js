// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { closeModal, showContactModal } from '../../redux/actions';

// Import Utils
import ReactStars from 'react-stars';

// Import Style
import {
    ModalWrapper, ModalContent, CloseModal,
    Thumbinial, Infos, Name, Stars, InfoStar,
    InstaStats, ItemStats, Label, Value, BoxButton, ButtonContact,
    MessageModal
} from './styled';

class Modal extends Component {

    // Evento para fechar o Modal
    changeStatusModal = () => {
        const { closeModal } = this.props;
        closeModal();
    }

    // Evento para exibir o contato do influenciador
    showContact = () => {
        const { showContactModal } = this.props;
        showContactModal();
    }

    render() {
        const influence = this.props.modalInfluencer;
        const { showMsg } = this.props;

        return (
            <ModalWrapper id="modal">
                <ModalContent>
                    <CloseModal onClick={this.changeStatusModal}>X</CloseModal>
                    {
                        !showMsg ? (
                            <div>
                                <Thumbinial src={influence.image} alt={`Influenciador: ${influence.name}`} />
                                <Infos>
                                    <Name>{influence.name}</Name>
                                    <Stars>
                                        <ReactStars
                                            count={5}
                                            value={influence.stars}
                                            size={20}
                                            color2={'#ffd700'}
                                            edit={false}
                                        />
                                        <InfoStar>{influence.stars} de 5</InfoStar>
                                    </Stars>
                                    <InstaStats>
                                        <ItemStats>
                                            <Label>Segmento:</Label>
                                            <Value>{influence.category}</Value>
                                        </ItemStats>
                                        <ItemStats>
                                            <Label>Seguidores:</Label>
                                            <Value>{influence.followers}</Value>
                                        </ItemStats>
                                        <ItemStats>
                                            <Label>Seguidores Reais:</Label>
                                            <Value>{influence.real_followers}%</Value>
                                        </ItemStats>
                                        <ItemStats>
                                            <Label>Média de Likes:</Label>
                                            <Value>{influence.like_avg}</Value>
                                        </ItemStats>
                                        <ItemStats>
                                            <Label>Média de Comentários:</Label>
                                            <Value>{influence.comments_avg}</Value>
                                        </ItemStats>
                                    </InstaStats>
                                </Infos>
                                <BoxButton>
                                    <ButtonContact onClick={this.showContact}>Visualizar contatos</ButtonContact>
                                </BoxButton>
                            </div>
                        ) : (
                            <MessageModal>Estamos finalizando o desenvolvimento do nosso produto, aguarde.</MessageModal>
                        )
                    }
                </ModalContent>
            </ModalWrapper>
        );
    }
}

function mapStateToProps ( state ) {
    const { modalInfluencer, showMsg } = state;
    return { modalInfluencer, showMsg }
}

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, showContactModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);