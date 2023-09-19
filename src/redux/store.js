import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import cartSlice from './cartSlice'
import favouriteSlice from './favouriteSlice'
import productSlice from './productSlice'

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice,
        favourites: favouriteSlice,
    },
})