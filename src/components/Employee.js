import EmployeeCalendar from "./EmployeeCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

const Employee = ({loggedInEmployee}) =>{

// console.log(loggedInEmployee);


if(!loggedInEmployee){
    return <p>loading data</p>
}


return(
    <div className="Employee">
        <img></img>
        <img className="logo" src="/rainforest retail.png"></img>
        <h4>Employee id: {loggedInEmployee.id}</h4>
        <h3 className="Employee-name">Name: {loggedInEmployee.name}</h3>
        <h3 className="Employee-email">Email: {loggedInEmployee.email}</h3>
        <h3 className="Employee-department-name">Department: {loggedInEmployee.department.name}</h3>
        <p>Contact Number: {loggedInEmployee.contactNumber}</p>
        <p>Wage: £{loggedInEmployee.hourlyWage}ph</p>
        <h2>Shifts</h2>
        <ul>
                {loggedInEmployee.shifts.map((shift, index) => (
                    <li key={index}>{shift.date}</li>
                ))}
        </ul>
        <EmployeeCalendar loggedInEmployee={loggedInEmployee} />
    </div>
)

}

export default Employee;