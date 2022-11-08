import React from 'react'

export default function Alert(props) {

    return (
        <div style={{ height: "45px" }}>
            {props.alert && <div className={`alert alert-${props.alert.alert} alert-dismissible fade show`} role="alert">
                <strong style={{ textTransform: "capitalize" }}>{props.alert.alert}</strong>: {props.alert.msg}
            </div >}
        </div>

    )
}