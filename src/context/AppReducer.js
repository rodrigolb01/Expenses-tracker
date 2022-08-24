// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'DELETE' :
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        case 'ADD' :
            console.log('current transactions:')
            console.log(state.transactions)
            console.log('new transaction:');
            console.log(action.payload);
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default: 
        return state;  
    } 
}