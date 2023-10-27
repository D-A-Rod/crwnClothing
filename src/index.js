// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// // import { UserProvider } from "./components/context/user.context";
// //import { CategoriesProvider } from "./components/context/categories.context";
// // import { CartProvider } from "./components/context/cart.context";
// import { Provider } from "react-redux";
// import { store, persistor } from "./store/store";
// import { PersistGate } from "redux-persist/integration/react";
// // import { Elements } from "@stripe/react-stripe-js";
// // import { stripePromise } from "./utils/stripe/stripe.utils";

// // console.log("stripePromise in index:", stripePromise);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
//           {/* <UserProvider> */}
//           {/* <CategoriesProvider> */}
//           {/* <CartProvider> */}
//           {/* <Elements stripe={stripePromise}>   */}
//             <App />
//           {/* </Elements> */}
//           {/* </CartProvider> */}
//           {/* </CategoriesProvider> */}
//           {/* </UserProvider> */}
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
