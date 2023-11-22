import Messages from "../components/Messages";
import { IonIcon } from '@ionic/react';
import { mailOutline, homeOutline, settingsOutline, logOutOutline } from 'ionicons/icons';
import "../ThemeButton.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const MessageContainer = ({loggedInEmployee, toggleTheme, theme, openSidebar, toggleSidebar}) =>{

  console.log(loggedInEmployee);
  
    return (<>
    {/* header and side bar */}
    <div className="portal-container">
    <img className="portal-background" src="/Rainforest.jpeg"></img>
    <div className={`header-${theme}`}>

      <FaBars onClick={toggleSidebar} className="sidebar-button" ></FaBars>

    {/* <div className="page-header"> */}
      
      <div className="logo">
        <h1 className="logo-header" >Rainforest Retail</h1>
        <img className="logo-image" src="/croc logo.png"></img>
        <h1 className="logo-header" >Employee Portal</h1>
      </div>

      <div className="header-icons">
          <IonIcon icon={mailOutline}/>
          <IonIcon icon={homeOutline}/>
          <IonIcon icon={settingsOutline}/>    
          <a href="/" className="logout-button"><IonIcon icon={logOutOutline}/></a>
      </div>
    
    {/* </div> */}

        {/* dark and light mode theme button */}
        <button className="mode-btn"onClick={toggleTheme}>{theme} mode</button>
      </div>

    <div className="notification-page">
        <div className={`"sidebar-container-${theme}`}>
        
        {openSidebar &&  <Sidebar theme={theme} openSidebar={openSidebar}/>}
        </div>

    <Messages/>
    <div>
        {/* buttons */}
        <div className="notificationButtons">
        <a href="/portal"><button className="notificationPortalButton">Portal</button></a>
        </div>
        <div>
        <a href="/"><button className="notificationLogoutButton">Logout</button></a>
        </div>    
    </div>
    </div>
    </div>
    </>);
};

export default MessageContainer;