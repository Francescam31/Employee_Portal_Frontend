import {Calendar, momentLocalizer} from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const EmployeeCalendar = ({employee}) =>{

    const localizer = momentLocalizer(moment);

    const events = [
        {
          start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        }
      ];
      
    
    // const calendar = () =>{
    //     return <Calendar style={{ height: '500px' }} localizer={localizer}/>
    // }

    
    return (
    <>
        <h2>Calendar</h2>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "50vh" }}
        />
    </>
    )
}

export default EmployeeCalendar;