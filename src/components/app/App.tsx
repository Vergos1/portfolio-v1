import "../../styles/style.scss";
import React, { lazy, useEffect, useState } from "react";
import Layout from "../Layout";
import Preloader from "../UI/Preloader/Preloader";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage"));

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    // loader timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    //loader remove and animation
    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                document.querySelector(".preloader-container")?.remove();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);
    return (
        <>
            <div className={`preloader-container ${isLoading ? "" : "fadeOut"}`}>
                <Preloader />
            </div>
            {!isLoading && (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
