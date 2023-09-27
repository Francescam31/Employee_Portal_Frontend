import React from "react";

function Modal({closeModal}) {

    return <div className="modal-background">
        <div className="modal-container">
            <div className="title-close-btn">
                <button onClick={()=>{closeModal(false);
                }}>X</button>
             </div>
                <div className="m-title">
                    <h1>Are you sure you want to continue</h1>
                </div>
                <div className="m-body">
                    <p>The next page is awesome! you should move forward</p>
                </div>
                <div className="m-footer">
                    <button onClick={()=>{closeModal(false);
                }}>Cancel</button>
                    <button>Continue</button>
                </div>
        </div>
    </div>
}

export default Modal;