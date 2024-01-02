import React from "react";
import { Route, Routes } from "react-router-dom";
// import SignUpPage from "./signup/signup";
import { SiginPage } from "./signin/signin";
import { HomePage } from "./Home/HomePage";
import { PostComponent } from "./Post/PostComponent";
import { RequestComponent } from "./Request/RequestComponent";
import { PrivacyAndPolicy } from "./PrivacyPolicy/PrivacyAndPolicy";
import { TermsAndCondition } from "./TermsAndCondition/TermsAndCondition";
// import { Logout } from "./Logout/Logout";
import { About } from "./About/About";

export const Navigation = () => {
    return(
        <>
        <Routes>
            {/* <Route path="/" element={<SignUpPage/>}/> */}
            <Route path="/" element={<SiginPage/>} />
            <Route path="/Home" element={<HomePage/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Post" element={<PostComponent/>} />
            <Route path="/Request" element={<RequestComponent/>} />
            <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy/>} />
            <Route path="/TermsAndConditions" element={<TermsAndCondition/>} />
            {/* <Route path="/SignOut" element={<Logout/>} /> */}




        </Routes>
        </>
    )
}