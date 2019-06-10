const initialState={
    value:0
};


export const actionCreators={
    increment:()=>({
        type: 'INCREMENT'
    }),
    decrement:()=>({
        type: 'DECREMENT'
    })
};


export const reducer=(state,action)=> {
    state = state || initialState;
    console.log(action.type);
    switch (action.type) {
        case 'INCREMENT_SUCCEEDED':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DECREMENT_SUCCEEDED':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};
