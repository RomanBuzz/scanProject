import * as React from "react";
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Redux from "redux";
import { Provider } from "react-redux";
import authorization from "./reducers/authorization";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";

const store = Redux.createStore(authorization);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={
                <Provider store={store}>
                    <App />
                </Provider>
            } />
        </Routes>
    </BrowserRouter>
);