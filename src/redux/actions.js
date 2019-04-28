// Tipos de Actions
export const actionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
}

// Action que seta a categoria no filtro
export const setCategory = ( cat ) => {
    return { type: actionTypes.SET_CATEGORY, category: cat }
}