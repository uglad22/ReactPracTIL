import {configureStore} from "@reduxjs/toolkit";

import catReducer from "./modules/catSlice";

const store = configureStore({reducer: {
    cat: catReducer,
}});

export default store;