import { createSlice } from "@reduxjs/toolkit";

const fetchFavouriteFromLocalStorage = () => {
    let favourite = localStorage.getItem('favourite');
    if (favourite) {
        return JSON.parse(localStorage.getItem('favourite'))
    } else {
        return []
    }
}

const storeFavouriteInLocalStorage = (data) => {
    localStorage.setItem('favourite', JSON.stringify(data))
}

const initialState = {
    favourites: fetchFavouriteFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
}

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavourite: (state, action) => {
            const isInFavourite = state.favourites.find(item => item.id === action.payload.id)
            if (isInFavourite) {
                const tempFavourite = state.favourites.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.favourites = tempFavourite;
                storeFavouriteInLocalStorage(state.favourites)
            } else {
                state.favourites.push(action.payload);
                storeFavouriteInLocalStorage(state.favourites)
            }
        },
        removeFromFavourite: (state, action) => {
            const tempFavourite = state.favourites.filter(item => item.id !== action.payload)
            state.favourites = tempFavourite
            storeFavouriteInLocalStorage(state.favourites)
        },
        clearFavourites: (state) => {
            state.favourites = [];
            storeFavouriteInLocalStorage(state.favourites)
        },
        getFavouritesTotal: (state) => {
            state.totalAmount = state.favourites.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)
            state.itemCount = state.favourites.length
        },
    }
})


export const { addToFavourite, getFavouritesTotal, clearFavourites, removeFromFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer
