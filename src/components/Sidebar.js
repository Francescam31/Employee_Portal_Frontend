import "../Sidebar.css";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";


const Sidebar = ({setOpenSidebar,theme}) => {


return (
    <div className={`sidebar-${theme}`}>
        <p className={`sidebar-p-${theme}`}><BsIcons.BsFillPersonVcardFill /> Dashboard</p>
        <p className={`sidebar-p-${theme}`}><BsIcons.BsCalendar3 /> Calendar</p>
        <p className={`sidebar-p-${theme}`}><BsIcons.BsFillPeopleFill /> My Team</p>
        <p className={`sidebar-p-${theme}`}><FaIcons.FaMoneyCheckAlt /> Payroll</p>
        <a href="/" className={`sidebar-l-${theme}`}> <GrIcons.GrLogout /> Logout</a>
    </div>
)



}

export default Sidebar;