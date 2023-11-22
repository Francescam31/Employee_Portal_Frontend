import { useEffect } from "react";
import { useState } from "react";

const MonthlyWage = ({loggedInEmployee}) => {
    const [monthlyWage, setMonthlyWage]  = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());


    const previousMonth = () =>{
        setSelectedDate( new Date(selectedDate.setMonth(selectedDate.getMonth() - 1) )); 
        // const previousMonthText = selectedDate.toLocaleString("default", {month:"long"});
    } 

    const nextMonth = () =>{
        setSelectedDate( new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))); 
        // const nextMonthText = selectedDate.toLocaleString("default", {month:"long"});
    } 

    const nextDate = new Date(selectedDate);
    nextDate.setMonth(nextDate.getMonth() + 1);
    const nextMonthText = nextDate.toLocaleString("default", { month: "long" });    

    const previousDate = new Date(selectedDate);
    nextDate.setMonth(previousDate.getMonth() - 1);
    const previousMonthText = nextDate.toLocaleString("default", { month: "long" });    


    useEffect(() => {
        if(loggedInEmployee) {
            let numberOfShifts = 0;
            for(let i = 0; i<loggedInEmployee.shifts.length; i++) {
                if(new Date(loggedInEmployee.shifts[i].date).getMonth() == selectedDate.getMonth()){
                    numberOfShifts ++;
                }
            }
            setMonthlyWage(numberOfShifts*8*loggedInEmployee.hourlyWage)
        }
    }, [selectedDate]) 


    return (
        <>
            <button onClick={previousMonth}>{previousMonthText}'s Earnings </button>
            <button onClick={nextMonth}> {nextMonthText}'s Earnings </button>
            <h2>{selectedDate.toLocaleString("default", {month:"long"})}'s earnings</h2>
            <p>For {monthlyWage/(8*loggedInEmployee.hourlyWage)} shifts:</p>
            <p>Projected earnings: £{monthlyWage}</p>
        </>
    )

}
export default MonthlyWage;