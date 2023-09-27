import React from "react";
import "./Modal.css";

function Modal({closeModal,loggedInEmployee,index}) {
    console.log(loggedInEmployee.department.employees.name);

    return <div className="modal-background">
        <div className="modal-container">
            <div className="title-close-btn">
                <button onClick={()=>{closeModal(false);
                }}>X</button>
             </div>
                <div className="m-title">
                    <h2>{loggedInEmployee.department.employees[index].name}</h2>
                    <h3>Employee details</h3>
                </div>
                <div className="m-body">
                    <p>Email: {loggedInEmployee.department.employees[index].email}</p>
                    <p>Contract Number: {loggedInEmployee.department.employees[index].contactNumber}</p>
                {/* if(loggedInEmployee.department.employees[index].manager){
                        <p>Is your manager</p> }
                    else{
                     <p>Is not your manager</p>
                     } */}
                     <p>Is manager</p>
                </div>
                <div className="m-footer">
                    <button>Call {loggedInEmployee.department.employees[index].name}</button>
                    <button id="cancel-btn" onClick={()=>{closeModal(false);
                }}>Close</button>
                </div>
        </div>
    </div>
}

export default Modal;