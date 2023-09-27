import "../Sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = ({setOpenSidebar}) => {


return (
    <div className="sidebar">
        
        <button onClick={() => {setOpenSidebar(false)}}>X</button>
        <p>Dashboard</p>
        <p>Calendar</p>
        <p>Payroll</p>
        <a href="/">Logout</a>
    </div>
)



}

export default Sidebar;