import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// import authReducer from './state/index.js';
// import { configureStore } from '@reduxjs/toolkit';
//import { Provider } from 'react-redux';
// import {
//   persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,
//   PURGE, REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme.js';

// const persistConfig = {key: "root", storage, version: 1};
// const persistedReducer = persistReducer(persistConfig, authReducer);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       },
//     }),
// });



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <App />
    </ThemeProvider>
    {/* </Provider> */}
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
      </PersistGate>   
    </Provider> */}
  </React.StrictMode>,
)
