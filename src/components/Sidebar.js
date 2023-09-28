import "../Sidebar.css";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";


const Sidebar = ({setOpenSidebar}) => {


return (
    <div className="sidebar">
        <p className="sidebar-p"><BsIcons.BsFillPersonVcardFill /> Dashboard</p>
        <p className="sidebar-p"><BsIcons.BsCalendar3 /> Calendar</p>
        <p className="sidebar-p"><BsIcons.BsFillPeopleFill /> My Team</p>
        <p className="sidebar-p"><FaIcons.FaMoneyCheckAlt /> Payroll</p>
        <a href="/" className="sidebar-l"> <GrIcons.GrLogout /> Logout</a>
    </div>
)



}

export default Sidebar;