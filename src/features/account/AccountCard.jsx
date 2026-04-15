import { useState } from "react"
import { BsBank } from "react-icons/bs"

export default function AccountCard({onClick}) {
    return (
        <div role="button" onClick={onClick} >
            <div>
                <BsBank />
            </div>
            <div>
                <h3>Bank Account name</h3>
                <p>verified</p>
                <p>Account Number</p>
                <p>4545454</p>
                <p>Active</p>
            </div>
        </div>
    )
}