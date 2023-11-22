import EmployeeCalendar from "../components/EmployeeCalendar";

const CalendarContainer = ({loggedInEmployee, theme}) => {

        console.log(loggedInEmployee);

return (
        <>
        <p>Calendar goes here</p>
        <div id="calendarPage-calendar" className={`calendar-box-${theme}`}> 
        <EmployeeCalendar loggedInEmployee={loggedInEmployee} />
        </div>
        </>
        )
}

export default CalendarContainer;