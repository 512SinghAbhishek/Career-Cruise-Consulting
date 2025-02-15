import { ReactNode } from "react";
import Footer from "./Footer";


interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
