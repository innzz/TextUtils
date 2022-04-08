import React from 'react'

export default function Alert(props) {

    const dismissAlert = ()=>{
        props.setAlertMessage(null);
    };

  return (
    props.alertMessage && <div>
        <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alertMessage.type}</strong> {props.alertMessage.msg}
            <button type="button" onClick={dismissAlert} className='btn btn-close' data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
