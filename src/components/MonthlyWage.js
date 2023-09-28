import { useEffect } from "react";
import { useState } from "react";

const MonthlyWage = ({loggedInEmployee}) => {
    const [monthlyWage, setMonthlyWage]  = useState(0);

    const d = new Date();

    useEffect(() => {
        if(loggedInEmployee) {
            let numberOfShifts = 0;
            for(let i = 0; i<loggedInEmployee.shifts.length; i++) {
                if(new Date(loggedInEmployee.shifts[i].date).getMonth() == d.getMonth()){
                    numberOfShifts ++;
                }
            }
            setMonthlyWage(numberOfShifts*8*loggedInEmployee.hourlyWage)
        }
    }, [loggedInEmployee]) 


    return (
        <>
            <h2>{d.toLocaleString("default", {month:"long"})}'s earnings</h2>
            <p>£{monthlyWage}</p>
        </>
    )

}
export default MonthlyWage;