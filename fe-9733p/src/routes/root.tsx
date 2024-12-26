import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarComponent";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}