import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import './BlogLayout.css';

export default function BlogLayout() {
    return (
        <div className="blog-layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}