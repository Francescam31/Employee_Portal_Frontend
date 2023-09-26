import React from "react";

function Modal() {

    return <div className="modal-background">
        <div className="modal-container">
                <button>X</button>
                <div className="m-title">
                    <h1>Are you sure you want to continue</h1>
                </div>
                <div className="m-body">
                    <p>The next page is awesome! you should move forward</p>
                </div>
                <div className="m-footer">
                    <button>Cancel</button>
                    <button>Continue</button>
                </div>
        </div>
    </div>
}

export default Modal;