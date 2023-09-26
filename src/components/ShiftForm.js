import { useState } from "react";

const ShiftForm = ({postShift, loggedInEmployee}) => {

    const [stateShift, setStateShift] = useState({
        date: "", 
        type: ""
      });

      const handleShiftChange = (event) => {
        const shiftProperty = event.target.name;
        const clonedShift = {...stateShift};
        clonedShift[shiftProperty] = event.target.value;
        setStateShift(clonedShift);
      }
      
      const handleShiftSubmit = (event) => {
        event.preventDefault();
        postShift(stateShift);
        setStateShift({
            date: "", 
            type: "",
            // employeeId: loggedInEmployee
          });
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
                value={stateShift.date}
                onChange={handleShiftChange}
                />
                <label >
                    type:
                </label>
                <select 
                id="shift-type"
                name="type"
                value={stateShift.type}
                onChange={handleShiftChange}>
                <option value ="MORNING">Morning</option>
                <option value ="AFTERNOON">Afternoon</option>
                <option value ="EVENING">Evening</option>
                </select>
                <button type="submit">Add </button>
            </form>
        </div>
      )

}

export default ShiftForm;