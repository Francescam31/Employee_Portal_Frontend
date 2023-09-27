import Modal from "./Modal";
import { useState } from "react";


const EmployeeList = ({loggedInEmployee}) => {

    const [openModal, setOpenModal] = useState(false);

    if(loggedInEmployee){
        return(
            <>
            <h3>My Department: {loggedInEmployee.department.name}</h3>
            <ul className="employee-list">{loggedInEmployee.department.employees.map((employee, index) => (
                <li key = {index}>{employee.name}</li>))}</ul>
                <button className="open-modal-btn"  
                onClick={()=>{setOpenModal(true);
                }}
                >Open</button>
            { openModal && <Modal closeModal={setOpenModal}/>}
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;
