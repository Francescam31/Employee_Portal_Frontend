import {Calendar, momentLocalizer} from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const EmployeeCalendar = ({loggedInEmployee}) =>{

    const localizer = momentLocalizer(moment);


    let events = [];
    let startNumber;
    let endNumber;
   
    for(let i= 0; i<loggedInEmployee.shifts.length; i++){
      

        if(loggedInEmployee.shifts[i].type == "MORNING"){
          startNumber = 9;
          endNumber = 17;
        }
        if(loggedInEmployee.shifts[i].type == "AFTERNOON"){
          startNumber = 12;
          endNumber = 20
        }
        if(loggedInEmployee.shifts[i].type == "EVENING"){
          startNumber = 16
          endNumber = 23
        }
        
        // ?
        const startTime = new Date(loggedInEmployee.shifts[i].date).setHours(startNumber);
        const endTime = new Date(loggedInEmployee.shifts[i].date).setHours(endNumber);

        let newevent = {
          title: `${loggedInEmployee.department.name}: ${loggedInEmployee.shifts[i].type.toLowerCase()}`,
          start: new Date(startTime),
          end:  new Date(endTime)
        }
        events.push(newevent);
  
        
    } 

    
    return (
    <>  
      <div className="calendar-component">
        <h2 className="calendar-title">Calendar</h2>
        <Calendar className="calendar"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          style={{ height: "50vh", width: "50vh"}}
          min ={new Date(2023,9,1,8,0,0)}
          max ={new Date(2023,9,1,23,0,0)}
         />
         </div>
    </>
    )
}

export default EmployeeCalendar;