import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './ProductSlice'
import cartSlice from './cartSlice'
import favouriteSlice from './favouriteSlice'

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice,
        favourites: favouriteSlice,
    },
})