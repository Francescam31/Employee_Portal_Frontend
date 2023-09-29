import EmployeeCalendar from "./EmployeeCalendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import '../Employee.css';


const Employee = ({loggedInEmployee}) =>{

// console.log(loggedInEmployee);


if(!loggedInEmployee){
    return <p>loading data</p>
}


return(
    <div className="employee-box">
        <img className="user-icon" src="/user.png"></img>
        
        <div className="employee-info">

        <h2 className="employee-name">Welcome Back {loggedInEmployee.name}</h2>

        <h3 className="employee-department-name">Department: {loggedInEmployee.department.name}</h3>
        <h4 className="employee-jobtitle">{loggedInEmployee.jobTitle}</h4>
        
        <div className="employee-details">
        <p>Contact Number: {loggedInEmployee.contactNumber}</p>
        <p>Wage: £{loggedInEmployee.hourlyWage}ph</p>
        </div>
        
    </div>
    </div>
)

}

export default Employee;