import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePt from '../../pt/home_pt';
import HomeEn from '../../en/home_en';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeEn />} />
            <Route path="/home_en" element={<HomeEn />} />
            <Route path="/home_pt" element={<HomePt />} />
        </Routes>
    )
}

export default Content;