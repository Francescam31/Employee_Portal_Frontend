import {Calendar, momentLocalizer} from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const EmployeeCalendar = ({loggedInEmployee}) =>{

    const localizer = momentLocalizer(moment);

    let events = [];

    // loop through the employees department employee shift list 
    // make an event by extracting the date and the type from the shift object
    // if the type is morning make the time = .. 
    for(let i= 0; i<loggedInEmployee.shifts.length; i++){
        
      // make an event take out the date and the type 
        let newevent = {
          title: loggedInEmployee.shifts[i].type,
          start: new Date(loggedInEmployee.shifts[i].date),
          end:  new Date(loggedInEmployee.shifts[i].date)
        }
        events.push(newevent);
        
    }
    // const events = [
    //     {
    //       start: new Date(2023, 8, 26, 14, 30, 0),
    //       end: new Date(2023, 8, 26, 15, 30, 0),
    //       title: "Some title"
    //     }
    //   ];
      
    

    
    return (
    <>  
      <div className="calendar-component">
        <h2 className="calendar-title">Calendar</h2>
        <Calendar className="calendar"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "50vh" }}
         />
         </div>
    </>
    )
}

export default EmployeeCalendar;