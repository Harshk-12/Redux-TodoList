import { configureStore } from '@reduxjs/toolkit'

import todoslice from './features/todoslice'

export default configureStore({
    reducer: {

        todo: todoslice

    }
})