// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { closeModal, showContactModal, showMsgModal } from '../../redux/actions';

// Import Utils
import ReactStars from 'react-stars';

// Import Style
import {
    ModalWrapper, ModalContent, CloseModal,
    Thumbinial, Infos, Name, Stars, InfoStar,
    InstaStats, ItemStats, Label, Value, BoxButton, ButtonContact,
    MessageModal, FieldEmail
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

    // Evento para enviar e-mail
    sendEmail = async ( form ) => {
        form.preventDefault();

        const { showMsgModal } = this.props;

        // E-mail
        const email = this.refs.email.value;

        await fetch( `/mailchimp?email=${email}`, {
            mode: 'cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        });

        showMsgModal();
    }

    render() {
        const influence = this.props.modalInfluencer;
        const { showMsg, showMsgEmail } = this.props;

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
                            <div>
                                {
                                    !showMsgEmail ? (
                                        <div>
                                            <MessageModal>Esta funcionalidade estará disponível em breve. <br />Deixe seu e-mail para ser avisado:</MessageModal>
                                            <form onSubmit={this.sendEmail}>
                                                <FieldEmail type="e-mail" name="email" id="email" ref="email" placeholder="Insira seu e-mail" />
                                                <ButtonContact>Enviar e-mail</ButtonContact>
                                            </form>
                                        </div>
                                    ) : (
                                        <MessageModal>E-mail cadastrado com sucesso.</MessageModal>
                                    )
                                }
                            </div>
                        )
                    }
                </ModalContent>
            </ModalWrapper>
        );
    }
}

function mapStateToProps ( state ) {
    const { modalInfluencer, showMsg, showMsgEmail } = state;
    return { modalInfluencer, showMsg, showMsgEmail }
}

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, showContactModal, showMsgModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);