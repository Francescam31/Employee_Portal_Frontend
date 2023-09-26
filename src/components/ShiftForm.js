import { useState } from "react";

const ShiftForm = ({postShifts}) => {

    const [stateShifts, setStateShifts] = useState({
        date: "", 
        type: "",
        employee: ""
      });


      const handleShiftChange = (event) => {
        const shift = event.target;
        const clonedShift = {...stateShifts};
        clonedShift[shift] = event.target.value;
        setStateShifts(clonedShift);
      }
      
      const handleShiftSubmit = (event) => {
        event.preventDefault();
        postShifts(stateShifts);
        setStateShifts({
            date: "", 
            type: "",
            employee: ""});
        }
// "" , loggedInEmployee?

      return(
        <div>
            <h2>Add Shifts</h2>
            <form onSubmit={handleShiftSubmit}>
                <label >
                    date:
                </label>
                <input
                id="shift-date"
                name="date"
                type="date"
                value={stateShifts.date}
                onChange={handleShiftChange}
                />
                <label >
                    type:
                </label>
                <select 
                id="shift-type"
                name="type"
                defaultValue="Select-type"
                onChange={handleShiftChange}>
                <option value ="morning">Morning</option>
                <option value ="afternoon">Afternoon</option>
                <option value ="evening">Evening</option>
                </select>
                <button type="submit">Add </button>
            </form>
        </div>
      )

}

export default ShiftForm;