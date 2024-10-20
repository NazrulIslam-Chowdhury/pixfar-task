import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "../redux/cartReducer";
import { apiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({ 
  cart: cartReducer, 
  [apiSlice.reducerPath]: apiSlice.reducer 
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// const { currentUser } = useSelector((state) => state.user);
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
