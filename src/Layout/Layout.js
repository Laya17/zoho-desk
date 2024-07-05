import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "../TopNav/Topnav";
import Bottom from "../Bottom container/Bottom";
import Form from "../Form/Form";
import { Outlet } from "react-router-dom";
import FormLayout from "../Form/Form-Layout/FormLayout";
import NavigationCardPage from "../Bottom container/NavigationCardPage/NavigationCardPage";

export default function Layout() {
    const headerMenu = [
        { title: "Requests" },
        { title: "Employees" },
        { title: "Activities" },
        { title: "Social" },
        { title: "Analytics" },
        { title: "KB" },
        { title: "Chat" }
    ];

    const headerrightMenu = [
        { title: "search", class: "material-symbols-outlined" },
        { title: "breaking_news_alt_1", class: "material-symbols-outlined" },
        { title: "stadia_controller", class: "material-symbols-outlined" },
        { title: "settings", class: "material-symbols-outlined" },
        { title: "account_circle", class: "material-symbols-outlined" }
    ];

    const [collapse, setCollapse] = useState(false);

    return (
        <Router>
            <React.Fragment>
                <TopNav headerMenu={headerMenu} headerrightMenu={headerrightMenu} collapse={collapse} setCollapse={setCollapse} />
                <Routes>
                <Route path="/" element={<Outlet />}>
                        <Route index element={<Bottom collapse={collapse} />} />
                        <Route path="form" element={<Form />} />
                        <Route path="formlayout" element={<FormLayout />} />
                        <Route path="Setup" element={<NavigationCardPage/>}/>
                </Route>
                </Routes>
                <Outlet />
            </React.Fragment>
        </Router>
    );
}
