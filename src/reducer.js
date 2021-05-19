
export const initialState = {
    basket: [
    // {
    //     id: '123456',
    //     title: 'The lean startup: how constants innovation creates radically successful business paperback',
    //     price: 11.96,
    //     rating: 5,
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
    // },
    // {
    //     id: '123456',
    //     title: 'The lean startup: how constants innovation creates radically successful business paperback',
    //     price: 11.96,
    //     rating: 5,
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
    // },
],
    user: null
};

export const GetBasketTotal = (basket) => {
    return basket?.reduce((amount,item) => item.price + amount, 0)
 }

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state, 
            user: action.user
        }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
            //logic for adding item to basket
            case 'REMOVE_FROM_BASKET':
                //we cloned the basket
                let newBasket = [...state.basket];
                //we check to see the product is exists
                const index = state.basket.findIndex((basketItem) => (
                    basketItem.id === action.id
                ));
                if(index >= 0) {
                    //item exits in basket , remove it
                    newBasket.splice(index,1);
                }
                return {
                    ...state, basket: newBasket,
                }
                //logic for removing item from basket
                default:
                    return state;
    }

}