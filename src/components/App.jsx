import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import AuthForm from "./AuthForm";
import RequestForm from "./RequestForm";
import ResultPage from "./ResultPage";
import Footer from "./Footer";


function App() {
    let [categoryName, setCategoryName] = React.useState("");

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="*" element={
                        <Main />
                    } />

                    <Route path="auth" element={
                        <AuthForm url="http://localhost:8000/openapi/" />
                    } />

                    <Route path="category/:category_pk" element={
                        <RequestForm categoryName={categoryName} />
                    } />

                    <Route path="recipe/:recipe_pk" element={
                        <ResultPage />
                    } />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;