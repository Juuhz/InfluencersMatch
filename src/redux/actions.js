// Tipos de Actions
export const actionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
    SET_INFLUENCER: 'SET_INFLUENCER',
    CLOSE_MODAL: 'CLOSE_MODAL',
    MESSAGE_MODAL: 'MESSAGE_MODAL',
}

// Action que seta a categoria no filtro
export const setCategory = ( cat ) => {
    return { type: actionTypes.SET_CATEGORY, category: cat }
}

// Action que seta o objeto do influenciador no Modal
export const setInfluencerModal = ( incluencer ) => {
    return { type: actionTypes.SET_INFLUENCER, modalInfluencer: incluencer }
}

// Action que fecha o Modal
export const closeModal = () => {
    return { type: actionTypes.CLOSE_MODAL }
}

// Action que exibe a mensagem no modal
export const showContactModal = () => {
    return { type: actionTypes.MESSAGE_MODAL }
}