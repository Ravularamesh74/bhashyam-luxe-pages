import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCallButton from "./StickyCallButton";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen pb-16 md:pb-0">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
            <StickyCallButton />
        </div>
    );
};

export default Layout;
