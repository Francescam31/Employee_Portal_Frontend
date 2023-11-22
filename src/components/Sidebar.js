import "../Sidebar.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import { Link } from "react-router-dom";


const Sidebar = ({setOpenSidebar,theme}) => {


return (
    <div className={`sidebar-${theme}`}>
        <Link to="/portal" className={`sidebar-p-${theme}`}><BsIcons.BsFillPersonVcardFill /> Dashboard</Link>
        {/* <a href="/messages" className={`sidebar-p-${theme}`}><BiIcons.BiMessageRoundedDots /> Messages</a> */}
        <Link to="/messages"  className={`sidebar-p-${theme}`}><BiIcons.BiMessageRoundedDots /> Messages</Link>
        <Link to="/calendar" className={`sidebar-p-${theme}`}><BsIcons.BsCalendar3 /> Calendar</Link>
        <p className={`sidebar-p-${theme}`}><BsIcons.BsFillPeopleFill /> My Team</p>
        <p className={`sidebar-p-${theme}`}><FaIcons.FaMoneyCheckAlt /> Payroll</p>
        <a href="/" className={`sidebar-l-${theme}`}> <GrIcons.GrLogout /> Logout</a>
    </div>
)



}

export default Sidebar;