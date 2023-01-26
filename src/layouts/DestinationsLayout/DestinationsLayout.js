import { Outlet } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import './DestinationsLayout.css';

export default function DestinationsLayout() {
    return (
        <div className="destinations-layout">
            <Navbar />
            <Dropdown />
            <div className="layout-content">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}