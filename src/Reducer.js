
export const initialState = {
    bascket: []
};

export const getBascketTotal = (bas) => bas?.reduce((acc, item) => item.price + acc, 0);

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASCKET":
            return {
                ...state,
                bascket: [...state.bascket, action.items]
            };
        case "REMOVE_BASCKET":
            let newBascket = [...state.bascket];
            const index = state.bascket.findIndex((bascketItem) => bascketItem.id === action.payload);
            if (index >= 0) {
                newBascket.splice(index, 1);
            }
            return { ...state, bascket: newBascket };

        default: return state;
    }
};